import DocsPage from "@/components/DocsPage";
import Navbar from "@/components/Navbar";

const testdata = {
  title: "The Future of AI-Powered Code Reviews",
  subtitle: "By john doe",
  content: [
    " Code reviews are an essential part of modern software development, ensuring quality, security, and maintainability. However, manual reviews can be time-consuming and prone to human error.",
    " With AI-driven tools, developers can now automate large parts of the review process, detecting bugs, suggesting improvements, and enforcing coding standards with minimal human intervention.",
    "In this article, we explore how AI-powered code review bots, like the one we’re building, can enhance team efficiency and productivity.",
  ],
  showCTA: true,
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
