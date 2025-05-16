import {CohereClientV2} from 'cohere-ai';

const cohere = new CohereClientV2({
  token: process.env.NEXT_PUBLIC_CO_API_KEY,
    // token: "q6vFKHFpHv7yYIwzsB96xeStvfJLzjwVe6opsyUt",
});

export async function triggerCohereChat(query: string) {
    const response = await cohere.chat({
        model: 'command-a-03-2025',
        messages: [
          {
            role: 'user',
            content: query,
          },
        ],
      });
      return response.message?.content?.[0]?.text;
}