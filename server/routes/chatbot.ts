import { Router } from 'express';
import Anthropic from '@anthropic-ai/sdk';
import { chatbotKnowledge } from '../chatbot-knowledge.js';

const router = Router();

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

router.post('/api/chatbot', async (req, res) => {
  try {
    const { message, conversationHistory = [] } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Build conversation with system context
    const messages: Array<{ role: 'user' | 'assistant', content: string }> = [
      ...conversationHistory,
      { role: 'user', content: message }
    ];

    const response = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      system: `You are an intelligent AI assistant for Power Plant Energy, an Australian company pioneering sustainable aviation fuel (SAF) and battery-grade graphite production from Beema Bamboo.

Your role is to:
1. Answer questions about Power Plant Energy's technologies, partnerships, and opportunities
2. Provide accurate information based on the knowledge base below
3. Be enthusiastic and professional, reflecting the company's innovative spirit
4. Guide users to the contact form for detailed inquiries or partnership discussions
5. Never make up information - if you don't know something, say so and suggest contacting the team

IMPORTANT GUIDELINES:
- Keep responses concise (2-3 paragraphs maximum)
- Use specific data and facts from the knowledge base
- Emphasize Australia's strategic interests and sovereign capability
- Highlight environmental and economic benefits
- For complex technical or business inquiries, recommend using the contact form
- Be conversational but professional

${chatbotKnowledge}`,
      messages: messages
    });

    const assistantMessage = response.content[0].type === 'text' ? response.content[0].text : '';

    res.status(200).json({ 
      response: assistantMessage,
      conversationId: response.id
    });

  } catch (error) {
    console.error('Error processing chatbot request:', error);
    res.status(500).json({ 
      error: 'I apologize, but I encountered an error. Please try again or use the contact form for assistance.' 
    });
  }
});

export default router;
