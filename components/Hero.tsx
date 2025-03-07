import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 w-full">
      <div className="container mx-auto ">
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row">
          {/* Title */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              AI-Powered PR Review Bot for Seamless Code Collaboration
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              Automate and accelerate your code reviews with intelligent AI
              insights. Ensure quality, consistency, and efficiency with minimal
              effort.
            </p>
            <div className="mt-6 space-x-2">
              <Button>Get Started</Button>
              <Button variant={"outline"}>
                View On Github <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground italic">
                Join us for seamless, automated code reviews.
              </p>
              <p className="text-sm font-medium text-muted-foreground">
                Boost productivity & enhance your workflow.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-[700px] h-[700px] bg-gray-300 rounded-lg shadow-xl flex items-center justify-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
