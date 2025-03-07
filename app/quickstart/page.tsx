import DocsPage from "@/components/DocsPage";
import Navbar from "@/components/Navbar";

const testdata = {
  title: "Lamp QuickStart",
  subtitle: "",
  content: [
    "This guide walks you through setting up and running your AI-powered code review bot using Vite and Hono. The bot integrates with GitHub, listens for commits and pull requests, and provides automated AI-generated feedback.",
    " With AI-driven tools, developers can now automate large parts of the review process, detecting bugs, suggesting improvements, and enforcing coding standards with minimal human intervention.",
    "In this article, we explore how AI-powered code review bots, like the one we’re building, can enhance team efficiency and productivity.",
  ],
  showCTA: false,
};
export default function HowItWorks() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <DocsPage {...testdata} />
      </div>
    </>
  );
}
