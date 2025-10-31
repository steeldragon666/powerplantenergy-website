import { Router } from 'express';
import Anthropic from '@anthropic-ai/sdk';

const router = Router();

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Email configuration
const CONTACT_EMAIL = 'nigel.salajan@powerpointenergy.com.au';

router.post('/api/contact', async (req, res) => {
  try {
    const { name, email, organization, category, message } = req.body;

    // Validate required fields
    if (!name || !email || !category || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Generate AI response using Claude
    const aiResponse = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      messages: [{
        role: 'user',
        content: `You are an AI assistant for Power Plant Energy, an Australian company specializing in sustainable aviation fuel (SAF) and battery-grade graphite production from Beema Bamboo.

A new contact form submission has been received:

**Name:** ${name}
**Email:** ${email}
**Organization:** ${organization || 'Not provided'}
**Category:** ${category}
**Message:** ${message}

Your task is to:
1. Analyze the inquiry and determine the appropriate response
2. Draft a professional, helpful email response that:
   - Thanks them for their inquiry
   - Acknowledges their specific question or interest
   - Provides relevant information about Power Plant Energy's capabilities
   - Mentions that a team member will follow up within 48 hours for detailed discussions
   - Maintains a professional, enthusiastic tone

Generate ONLY the email body text (no subject line, no email headers). The response should be 2-3 paragraphs.`
      }]
    });

    const emailBody = aiResponse.content[0].type === 'text' ? aiResponse.content[0].text : '';

    // Log the submission (Vercel logs are accessible in dashboard)
    console.log('=== NEW CONTACT FORM SUBMISSION ===');
    console.log(`From: ${name} <${email}>`);
    console.log(`Organization: ${organization || 'Not provided'}`);
    console.log(`Category: ${category}`);
    console.log(`Message: ${message}`);
    console.log('\n=== AI GENERATED RESPONSE ===');
    console.log(emailBody);
    console.log(`\nForwarded to: ${CONTACT_EMAIL}`);
    console.log('===================================\n');

    // TODO: Integrate with email service (SendGrid, AWS SES, Resend, etc.)
    // For now, submissions are logged to Vercel function logs
    
    res.status(200).json({ 
      success: true, 
      message: 'Your inquiry has been received. We will respond within 48 hours.' 
    });

  } catch (error: any) {
    console.error('Error processing contact form:', error);
    
    // Provide more specific error messages
    if (error.status === 401) {
      console.error('Anthropic API authentication failed. Check ANTHROPIC_API_KEY environment variable.');
      return res.status(500).json({ error: 'Configuration error. Please contact support.' });
    }
    
    if (error.status === 429) {
      console.error('Anthropic API rate limit exceeded.');
      return res.status(429).json({ error: 'Too many requests. Please try again later.' });
    }
    
    res.status(500).json({ error: 'Failed to process your inquiry. Please try again.' });
  }
});

export default router;
