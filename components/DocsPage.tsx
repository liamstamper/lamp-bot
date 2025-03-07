import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DocsPageProps {
  title: string;
  subtitle: string;
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
        <div className="text-sm text-muted-foreground">{props.subtitle}</div>

        {/* Cover Image  */}
        <div className="w-full h-64 bg-gray-300 rounded-lg shadow-md flex items-center justify-center text-muted-foreground">
          <span>Blog Cover Image</span>
        </div>

        {/* Article Content */}
        <div className="text-lg leading-relaxed text-foreground space-y-4">
          {props.content.map((item) => (
            <p>{item}</p>
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
                <a href="#">Get Started</a>
              </Button>
            </CardContent>
          </Card>
        )}
      </article>
    </div>
  );
};

export default DocsPage;
