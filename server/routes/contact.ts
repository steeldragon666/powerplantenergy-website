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

    // In a production environment, you would send this via an email service
    // For now, we'll log it and send to the contact email
    console.log('=== NEW CONTACT FORM SUBMISSION ===');
    console.log(`From: ${name} <${email}>`);
    console.log(`Organization: ${organization || 'Not provided'}`);
    console.log(`Category: ${category}`);
    console.log(`Message: ${message}`);
    console.log('\n=== AI GENERATED RESPONSE ===');
    console.log(emailBody);
    console.log('===================================\n');

    // TODO: Integrate with email service (SendGrid, AWS SES, etc.)
    // For now, we'll simulate success
    
    // Store the submission in a simple log file
    const fs = require('fs');
    const path = require('path');
    const logDir = path.join(__dirname, '../../logs');
    const logFile = path.join(logDir, 'contact-submissions.log');

    // Create logs directory if it doesn't exist
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }

    const logEntry = {
      timestamp: new Date().toISOString(),
      name,
      email,
      organization,
      category,
      message,
      aiResponse: emailBody,
      forwardedTo: CONTACT_EMAIL
    };

    fs.appendFileSync(logFile, JSON.stringify(logEntry) + '\n');

    res.status(200).json({ 
      success: true, 
      message: 'Your inquiry has been received. We will respond within 48 hours.' 
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ error: 'Failed to process your inquiry. Please try again.' });
  }
});

export default router;
