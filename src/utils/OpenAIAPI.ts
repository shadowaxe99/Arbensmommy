import axios from 'axios';

const API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';

export async function generateChatResponse(prompt: string): Promise<string> {
  try {
    const response = await axios.post(API_URL, {
      prompt,
      max_tokens: 50,
      temperature: 0.7,
      top_p: 1,
      n: 1,
      stop: '\n',
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    });

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error generating chat response:', error);
    throw error;
  }
}