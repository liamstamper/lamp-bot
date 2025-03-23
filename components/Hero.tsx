import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen relative w-full py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row">
          <div className="flex-1 text-center md:text-left">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
              Lamp-pr-bot
            </p>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Seamless Collaboration with AI-Powered Code Review
            </h1>

            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              Automate and accelerate your code reviews with intelligent AI
              insights. Ensure quality, consistency, and efficiency with minimal
              effort.
            </p>

            <div className="mt-6 space-x-2">
              <Button>Get Started</Button>
              <a
                href="https://github.com/liamstamper/lamp-bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  View On Github <ArrowRight className="ml-2 size-4" />
                </Button>
              </a>
            </div>

            <div className="mt-4">
              <p className="text-sm italic text-muted-foreground">
                Join us for seamless, automated code reviews.
              </p>
              <p className="text-sm font-medium text-muted-foreground">
                Boost productivity & enhance your workflow.
              </p>
            </div>
          </div>
          <div className="relative flex-1 flex justify-center">
            <div className="pointer-events-none absolute -right-10 top-10 h-48 w-48 rounded-full bg-blue-100 blur-2xl opacity-50 md:h-64 md:w-64" />

            <div className="relative flex items-center justify-center w-full max-w-[600px] aspect-square rounded-lg shadow-xl bg-white/50">
              <Image
                src="/hero.png"
                alt="Hero image"
                fill
                className="object-contain rounded-lg border border-gray-200"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
