import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Markdown from "./ui/markdown";
import Image from "next/image";
import image from "next/image";

interface DocsPageProps {
  title: string;
  subtitle: string;
  image: string;
  content: string[];
  showCTA?: boolean;
}
const DocsPage = (props: DocsPageProps) => {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-6">
      <article className="space-y-6">
        {/* Title */}
        <h1 className="text-4xl font-bold leading-tight text-foreground lg:text-5xl">
          {props.title}
        </h1>

        {/* Subtitle */}
        <div className="text-sm text-muted-foreground">
          <Markdown>{props.subtitle}</Markdown>
        </div>

        {/* Cover Image  */}
        <div className="relative w-full aspect-[16/9] py-4 bg-gray-50/10 rounded-lg shadow-md flex items-center justify-center text-muted-foreground">
          <Image
            src={props.image}
            alt="Cover Image"
            fill
            className="object-contain rounded-lg border border-gray-200"
            priority
          />
        </div>

        {/* Article Content */}
        <div className="text-lg leading-relaxed text-foreground space-y-4">
          {props.content.map((item, index) => (
            <Markdown key={index}>{item}</Markdown>
          ))}
        </div>
        {props.showCTA && (
          // CTA Section
          <Card className="mt-8">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <p className="text-lg font-medium text-foreground">
                Want to automate your code reviews?
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Join us and experience seamless AI-driven PR reviews.
              </p>
              <Button size="lg" asChild>
                <Link href="/quickstart">QuickStart</Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </article>
    </div>
  );
};

export default DocsPage;
