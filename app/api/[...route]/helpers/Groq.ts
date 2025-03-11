import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
export const promptModel = async (diff: string) => {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `Review the following code changes and provide feedback:\n\n${diff}`,
      },
    ],
    model: "llama-3.3-70b-versatile",
  });
};
