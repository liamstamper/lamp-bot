import Link from "next/link";
import {
  ArrowLeft,
  GitPullRequest,
  Bot,
  Code,
  Zap,
  Shield,
  GitBranch,
  GitMerge,
  MessageSquare,
  CheckCircle,
  XCircle,
  AlertCircle,
  FileCode,
  Cpu,
  Database,
  Settings,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <Bot className="h-6 w-6" />
            <span className="text-xl font-bold">PR Bot</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/#features"
              className="text-sm font-medium hover:underline"
            >
              Features
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm font-medium text-primary hover:underline"
            >
              How It Works
            </Link>
            <Link
              href="/#pricing"
              className="text-sm font-medium hover:underline"
            >
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/#get-started">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/30 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <Link
                href="/"
                className="flex items-center text-muted-foreground hover:text-foreground transition-colors mb-4"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                How PR Bot Works
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                A detailed look at how our AI-powered GitHub PR Bot analyzes,
                reviews, and improves your code.
              </p>
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl">
              <h2 className="text-2xl font-bold mb-8 text-center md:text-3xl">
                The Complete Process
              </h2>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-border transform -translate-x-1/2"></div>

                {/* Step 1 */}
                <div className="relative mb-12 md:mb-16">
                  <div className="flex flex-col md:flex-row items-start md:items-center">
                    <div className="flex items-center justify-center z-10 w-8 h-8 rounded-full bg-primary text-primary-foreground mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <div className="md:w-1/2 md:pr-12 md:text-right md:mr-4">
                      <h3 className="text-xl font-bold mb-2">Installation</h3>
                      <p className="text-muted-foreground">
                        Add the PR Bot GitHub App to your repositories with just
                        a few clicks. No complex setup required.
                      </p>
                    </div>
                    {/* <div className="hidden md:block md:w-1/2 md:pl-12 md:ml-4">
                      <div className="bg-muted rounded-lg p-4 flex items-center justify-center">
                        <GitBranch className="h-12 w-12 text-primary" />
                      </div>
                    </div> */}
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative mb-12 md:mb-16">
                  <div className="flex flex-col md:flex-row items-start md:items-center">
                    <div className="flex items-center justify-center z-10 w-8 h-8 rounded-full bg-primary text-primary-foreground mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <div className="md:w-1/2 md:pr-12 md:text-right md:mr-4 md:order-1 md:hidden">
                      <div className="bg-muted rounded-lg p-4 flex items-center justify-center">
                        <Settings className="h-12 w-12 text-primary" />
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 md:ml-4 md:order-2">
                      <h3 className="text-xl font-bold mb-2">Configuration</h3>
                      <p className="text-muted-foreground">
                        Customize the bot's behavior through a simple
                        configuration file or the web dashboard. Set review
                        thresholds, ignore patterns, and more.
                      </p>
                    </div>
                    <div className="hidden md:block md:w-1/2 md:pr-12 md:text-right md:mr-4 md:order-1">
                      {/* <div className="bg-muted rounded-lg p-4 flex items-center justify-center">
                        <Settings className="h-12 w-12 text-primary" />
                      </div> */}
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative mb-12 md:mb-16">
                  <div className="flex flex-col md:flex-row items-start md:items-center">
                    <div className="flex items-center justify-center z-10 w-8 h-8 rounded-full bg-primary text-primary-foreground mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <div className="md:w-1/2 md:pr-12 md:text-right md:mr-4">
                      <h3 className="text-xl font-bold mb-2">
                        Pull Request Creation
                      </h3>
                      <p className="text-muted-foreground">
                        When a team member creates a pull request, PR Bot is
                        automatically triggered to begin analysis.
                      </p>
                    </div>
                    <div className="hidden md:block md:w-1/2 md:pl-12 md:ml-4">
                      {/* <div className="bg-muted rounded-lg p-4 flex items-center justify-center">
                        <GitPullRequest className="h-12 w-12 text-primary" />
                      </div> */}
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative mb-12 md:mb-16">
                  <div className="flex flex-col md:flex-row items-start md:items-center">
                    <div className="flex items-center justify-center z-10 w-8 h-8 rounded-full bg-primary text-primary-foreground mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                      <span className="text-sm font-bold">4</span>
                    </div>
                    <div className="md:w-1/2 md:pr-12 md:text-right md:mr-4 md:order-1 md:hidden">
                      <div className="bg-muted rounded-lg p-4 flex items-center justify-center">
                        <Cpu className="h-12 w-12 text-primary" />
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 md:ml-4 md:order-2">
                      <h3 className="text-xl font-bold mb-2">AI Analysis</h3>
                      <p className="text-muted-foreground">
                        Our advanced AI models analyze the code changes, looking
                        for bugs, performance issues, security vulnerabilities,
                        and style inconsistencies.
                      </p>
                    </div>
                    <div className="hidden md:block md:w-1/2 md:pr-12 md:text-right md:mr-4 md:order-1">
                      {/* <div className="bg-muted rounded-lg p-4 flex items-center justify-center">
                        <Cpu className="h-12 w-12 text-primary" />
                      </div> */}
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="relative mb-12 md:mb-16">
                  <div className="flex flex-col md:flex-row items-start md:items-center">
                    <div className="flex items-center justify-center z-10 w-8 h-8 rounded-full bg-primary text-primary-foreground mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                      <span className="text-sm font-bold">5</span>
                    </div>
                    <div className="md:w-1/2 md:pr-12 md:text-right md:mr-4">
                      <h3 className="text-xl font-bold mb-2">
                        Feedback Generation
                      </h3>
                      <p className="text-muted-foreground">
                        PR Bot generates detailed, actionable feedback with code
                        suggestions and explanations for each issue found.
                      </p>
                    </div>
                    <div className="hidden md:block md:w-1/2 md:pl-12 md:ml-4">
                      {/* <div className="bg-muted rounded-lg p-4 flex items-center justify-center">
                        <MessageSquare className="h-12 w-12 text-primary" />
                      </div> */}
                    </div>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-start md:items-center">
                    <div className="flex items-center justify-center z-10 w-8 h-8 rounded-full bg-primary text-primary-foreground mb-4 md:mb-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                      <span className="text-sm font-bold">6</span>
                    </div>
                    <div className="md:w-1/2 md:pr-12 md:text-right md:mr-4 md:order-1 md:hidden">
                      <div className="bg-muted rounded-lg p-4 flex items-center justify-center">
                        <GitMerge className="h-12 w-12 text-primary" />
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 md:ml-4 md:order-2">
                      <h3 className="text-xl font-bold mb-2">
                        Continuous Improvement
                      </h3>
                      <p className="text-muted-foreground">
                        As developers address the feedback and make changes, PR
                        Bot continues to analyze new commits and provide updated
                        reviews.
                      </p>
                    </div>
                    <div className="hidden md:block md:w-1/2 md:pr-12 md:text-right md:mr-4 md:order-1">
                      {/* <div className="bg-muted rounded-lg p-4 flex items-center justify-center">
                        <GitMerge className="h-12 w-12 text-primary" />
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="bg-muted/30 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl">
              <h2 className="text-2xl font-bold mb-8 text-center md:text-3xl">
                Technical Details
              </h2>

              <Tabs defaultValue="analysis" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="analysis">Code Analysis</TabsTrigger>
                  <TabsTrigger value="security">Security Scanning</TabsTrigger>
                  <TabsTrigger value="performance">
                    Performance Insights
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="analysis" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Advanced Code Analysis</CardTitle>
                      <CardDescription>
                        How PR Bot analyzes your code for quality and
                        correctness
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-start">
                            <div className="mr-2 mt-0.5">
                              <Code className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium">
                                Abstract Syntax Tree Analysis
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                PR Bot parses your code into an AST to
                                understand its structure and identify patterns.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-start">
                            <div className="mr-2 mt-0.5">
                              <FileCode className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium">
                                Static Code Analysis
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                Identifies bugs, anti-patterns, and code smells
                                without executing the code.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-start">
                            <div className="mr-2 mt-0.5">
                              <Database className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium">
                                Code Pattern Database
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                Compares code against a vast database of best
                                practices and common issues.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-start">
                            <div className="mr-2 mt-0.5">
                              <Bot className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium">
                                Language-Specific Rules
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                Applies language-specific best practices for
                                JavaScript, Python, Java, and more.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 rounded-lg border bg-card p-4">
                        <h4 className="font-medium mb-2">Example Analysis</h4>
                        <div className="bg-muted p-3 rounded text-sm font-mono overflow-x-auto">
                          <pre>
                            {
                              "function calculateTotal(items) {\n  let total = 0;\n  for (var i = 0; i < items.length; i++) {\n    total += items[i].price;\n  }\n  return total;\n}"
                            }
                          </pre>
                        </div>
                        <div className="mt-3 space-y-2">
                          <div className="flex items-start">
                            <AlertCircle className="h-4 w-4 text-amber-500 mr-2 mt-0.5" />
                            <div className="text-sm">
                              <span className="font-medium">Suggestion:</span>{" "}
                              Use const/let instead of var for better scoping.
                            </div>
                          </div>
                          <div className="flex items-start">
                            <AlertCircle className="h-4 w-4 text-amber-500 mr-2 mt-0.5" />
                            <div className="text-sm">
                              <span className="font-medium">Suggestion:</span>{" "}
                              Consider using reduce() for better readability.
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="security" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Security Vulnerability Scanning</CardTitle>
                      <CardDescription>
                        How PR Bot identifies and helps fix security issues
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-start">
                            <div className="mr-2 mt-0.5">
                              <Shield className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium">
                                Vulnerability Database
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                Checks code against known CVEs and OWASP Top 10
                                vulnerabilities.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-start">
                            <div className="mr-2 mt-0.5">
                              <AlertCircle className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium">
                                Dependency Scanning
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                Identifies vulnerable dependencies and suggests
                                updates.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-start">
                            <div className="mr-2 mt-0.5">
                              <Code className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium">
                                Injection Detection
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                Identifies SQL injection, XSS, and other
                                injection vulnerabilities.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-start">
                            <div className="mr-2 mt-0.5">
                              <FileCode className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium">
                                Secure Coding Patterns
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                Suggests secure alternatives to unsafe coding
                                patterns.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 rounded-lg border bg-card p-4">
                        <h4 className="font-medium mb-2">
                          Example Security Issue
                        </h4>
                        <div className="bg-muted p-3 rounded text-sm font-mono overflow-x-auto">
                          <pre>
                            {
                              'app.get("/user", (req, res) => {\n  const userId = req.query.id;\n  const query = `SELECT * FROM users WHERE id = ${userId}`;\n  db.query(query, (err, result) => {\n    res.json(result);\n  });\n});'
                            }
                          </pre>
                        </div>
                        <div className="mt-3 space-y-2">
                          <div className="flex items-start">
                            <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5" />
                            <div className="text-sm">
                              <span className="font-medium">Critical:</span> SQL
                              Injection vulnerability detected.
                            </div>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                            <div className="text-sm">
                              <span className="font-medium">Suggestion:</span>{" "}
                              Use parameterized queries instead of string
                              interpolation.
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="performance" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Performance Optimization</CardTitle>
                      <CardDescription>
                        How PR Bot helps improve your code's performance
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-start">
                            <div className="mr-2 mt-0.5">
                              <Zap className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium">
                                Algorithmic Complexity
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                Identifies inefficient algorithms and suggests
                                optimizations.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-start">
                            <div className="mr-2 mt-0.5">
                              <Cpu className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium">Resource Usage</h4>
                              <p className="text-sm text-muted-foreground">
                                Detects memory leaks and excessive CPU usage
                                patterns.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-start">
                            <div className="mr-2 mt-0.5">
                              <Database className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium">
                                Database Optimization
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                Identifies inefficient database queries and
                                suggests improvements.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-start">
                            <div className="mr-2 mt-0.5">
                              <FileCode className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium">
                                Framework-Specific Optimizations
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                Suggests best practices for React, Angular, Vue,
                                and other frameworks.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 rounded-lg border bg-card p-4">
                        <h4 className="font-medium mb-2">
                          Example Performance Issue
                        </h4>
                        <div className="bg-muted p-3 rounded text-sm font-mono overflow-x-auto">
                          <pre>
                            {
                              "function findDuplicates(array) {\n  const duplicates = [];\n  for (let i = 0; i < array.length; i++) {\n    for (let j = 0; j < array.length; j++) {\n      if (i !== j && array[i] === array[j] && !duplicates.includes(array[i])) {\n        duplicates.push(array[i]);\n      }\n    }\n  }\n  return duplicates;\n}"
                            }
                          </pre>
                        </div>
                        <div className="mt-3 space-y-2">
                          <div className="flex items-start">
                            <AlertCircle className="h-4 w-4 text-amber-500 mr-2 mt-0.5" />
                            <div className="text-sm">
                              <span className="font-medium">Performance:</span>{" "}
                              O(n²) time complexity detected.
                            </div>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                            <div className="text-sm">
                              <span className="font-medium">Suggestion:</span>{" "}
                              Use a Set or object for O(n) time complexity.
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold mb-8 text-center md:text-3xl">
                Frequently Asked Questions
              </h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    How does PR Bot handle different programming languages?
                  </AccordionTrigger>
                  <AccordionContent>
                    PR Bot supports a wide range of programming languages
                    including JavaScript, TypeScript, Python, Java, Go, Ruby,
                    PHP, C#, and more. Each language has its own specialized
                    analyzer that understands language-specific patterns and
                    best practices.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Can PR Bot integrate with our existing CI/CD pipeline?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, PR Bot can be integrated with popular CI/CD tools like
                    GitHub Actions, CircleCI, Jenkins, and GitLab CI. It can be
                    configured to run as part of your existing pipeline and can
                    block merges based on configurable quality gates.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    How does PR Bot handle false positives?
                  </AccordionTrigger>
                  <AccordionContent>
                    PR Bot uses a confidence scoring system to reduce false
                    positives. You can also configure rules to ignore specific
                    patterns or files. Additionally, our feedback system allows
                    you to mark false positives, which helps the AI learn and
                    improve over time.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Is my code secure with PR Bot?
                  </AccordionTrigger>
                  <AccordionContent>
                    PR Bot operates entirely within your GitHub environment and
                    does not store your code on our servers. For enterprise
                    customers, we offer a self-hosted option that can run
                    entirely within your infrastructure. We also undergo regular
                    security audits and are SOC 2 compliant.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    Can PR Bot be customized for our team's coding standards?
                  </AccordionTrigger>
                  <AccordionContent>
                    PR Bot can be configured to enforce your team's specific
                    coding standards and best practices. You can define custom
                    rules, set severity levels, and even integrate with your
                    existing linting configurations like ESLint, Prettier, or
                    Black.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>
                    How does PR Bot handle large repositories with thousands of
                    files?
                  </AccordionTrigger>
                  <AccordionContent>
                    PR Bot is designed to scale with repositories of any size.
                    For large repositories, it uses intelligent sampling and
                    prioritization to focus on the most critical files first. It
                    also caches analysis results to improve performance on
                    subsequent runs. Our enterprise plan includes dedicated
                    resources for very large codebases.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>
                    Can PR Bot suggest code improvements, not just identify
                    issues?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, PR Bot doesn't just identify problems—it suggests
                    specific improvements with code examples. It can recommend
                    modern language features, more efficient algorithms, and
                    better design patterns based on your codebase's context and
                    the specific changes in each pull request.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/30 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold mb-4 md:text-3xl">
                Ready to Transform Your Code Reviews?
              </h2>
              <p className="text-muted-foreground mb-8">
                Join thousands of developers who are shipping better code faster
                with PR Bot.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/#get-started">
                  <Button size="lg">Get Started for Free</Button>
                </Link>
                <Link href="/#pricing">
                  <Button size="lg" variant="outline">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/50">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex items-center gap-2">
            <Bot className="h-6 w-6" />
            <span className="text-xl font-bold">PR Bot</span>
          </div>
          <nav className="flex flex-wrap gap-4 md:gap-6">
            <Link href="#" className="text-sm hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/pr-bot"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="icon" variant="ghost">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="container py-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} PR Bot. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
