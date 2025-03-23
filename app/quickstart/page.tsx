import DocsPage from "@/components/DocsPage";
import Navbar from "@/components/Navbar";

const testdata = {
  title: "Lamp QuickStart",
  subtitle: "By [Liam Stamper](https://github.com/liamstamper)",
  image: "/quickstart.png",
  content: [
    "This guide walks you through setting up and running your AI-powered code review bot using Vite and Hono. The bot integrates with GitHub, listens for commits and pull requests, and provides automated AI-generated feedback.",
    "**1. Install Lamp PR Bot on Your GitHub Repository**",
    "Go to: [https://github.com/apps/lamp-pr-bot](https://github.com/apps/lamp-pr-bot)",
    "**2. Click 'Install'**",
    "Follow the prompts to give Lamp PR Bot access to the repositories you want it to review.",
    "**3. Confirm Permissions**",
    "You’ll be asked to confirm what repositories to grant access to. This is where you can choose either:",
    "4. **Complete the Installation**",
    "That’s it—your GitHub repository is now set up to use Lamp PR Bot.",
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
