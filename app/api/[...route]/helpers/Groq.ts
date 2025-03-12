import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const promptModel = async (diff: string) => {
  const prompt = `
Analyze the provided code diff and conduct a detailed code review. Your review should include the following sections:

Summary
Provide a concise overview of the key issues found in the PR.
Highlight the most critical changes needed before merging.
Code Quality & Best Practices

Identify potential bugs, logic errors, or bad practices.
Ensure adherence to clean coding principles (naming conventions, structure, consistency).
Flag any anti-patterns or redundant code that could be refactored.
Readability & Maintainability

Check if the code is clear, well-structured, and easy to understand.
Suggest improvements for modularity, reusability, and organization.
Recommend more descriptive variable names, function decomposition, or clarifying comments if needed.

Performance & Efficiency
Identify inefficient operations, redundant computations, or unnecessary complexity.
Propose optimizations to improve execution time and memory usage.
Security & Reliability

Highlight any potential security risks (e.g., unsafe input handling, insecure data storage).
Verify that error handling is robust and suggest best practices to improve reliability.
Actionable Suggestions

Reference specific lines of code or snippets to clarify each piece of feedback.
Provide concise justifications for each suggestion.
Offer direct, actionable steps to resolve the issues.

Use Markdown for headings and formatting in your response. Do not include any disclaimers or references to external constraints—provide only the structured review content as specified. If no diff is provided, respond with “No code changes to review.” and nothing else.

${diff}
`;

  return groq.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "mixtral-8x7b-32768",
    temperature: 0.2,
  });
};
