import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const promptModel = async (diff: string) => {
  const prompt = `
Analyze the provided code diff and conduct a detailed code review. Your review should include specific code references. When referencing code lines: 

Only show the relevant snippet (no more than ~5 lines around the problematic area).
Mask or remove any sensitive information (e.g., API keys, secrets, user credentials) and replace them with <REDACTED>. 
Enclose code in triple backticks with proper syntax highlighting for clarity. 
Your review should contain the following sections: 

Summary
A concise overview of the key issues.

Code Quality & Best Practices
Identify potential bugs, logic errors, or bad practices, referencing specific lines/snippets safely.

Readability & Maintainability
Suggest improvements and reference code snippets where clarity is needed.

Performance & Efficiency
Address any inefficiencies with code samples illustrating the problems.

Security & Reliability
Highlight security concerns with relevant sanitized code examples.

Actionable Suggestions
Provide short, specific steps for fixing each issue. Include inline code snippets wherever it helps clarify the solution.

Use Markdown for headings and formatting in your response. Do not include any disclaimers or references to external constraints—provide only the structured review content as specified. If no diff is provided, respond with “No code changes to review.” and nothing else.

${diff}
`;

  return groq.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "mixtral-8x7b-32768",
    temperature: 0.2,
  });
};
