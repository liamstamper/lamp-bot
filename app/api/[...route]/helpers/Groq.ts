import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const promptModel = async (diff: string) => {
  const prompt = `
You are performing a detailed code review as an experienced software engineer. Analyze the provided code diff and:

1. Clearly identify any potential bugs, logic errors, or bad practices.
2. Suggest improvements specifically targeting readability, maintainability, performance, or security.
3. Directly reference line numbers or code snippets to clarify your feedback.
4. Provide concise reasoning for each suggestion.
5. Format your response clearly, using bullet points or numbered lists for ease of reading.

Code changes for review:

${diff}
`;

  return groq.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "mixtral-8x7b-32768",
    temperature: 0.2,
  });
};
