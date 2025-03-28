"use client";
import Link from "next/link";
import {
  Bot,
  Check,
  X,
  CreditCard,
  Shield,
  Zap,
  Users,
  Database,
  GitPullRequest,
  Code,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { AuthStatus } from "@/components/AuthStatus";
import { useState } from "react";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "monthly"
  );

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Bot className="h-6 w-6" />
              <span className="text-xl font-bold">PR Bot</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/#features"
              className="text-sm font-medium hover:underline"
            >
              Features
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm font-medium hover:underline"
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-primary hover:underline"
            >
              Pricing
            </Link>
          </nav>
          <AuthStatus />
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Simple, Transparent Pricing
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Choose the plan that's right for your team. All plans include
                  a 14-day free trial.
                </p>
              </div>

              <Tabs
                value={billingCycle}
                onValueChange={(val) =>
                  setBillingCycle(val as "monthly" | "annual")
                }
                className="w-full max-w-md"
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="annual">Annual (Save 20%)</TabsTrigger>
                </TabsList>
                <TabsContent value="monthly" className="mt-0">
                  {/* Pricing is displayed in the cards below */}
                </TabsContent>
                <TabsContent value="annual" className="mt-0">
                  {/* Pricing is displayed in the cards below */}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
              {/* Free Plan */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Free</CardTitle>
                  <CardDescription>
                    For individuals and small projects
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-4">
                    <span className="text-4xl font-bold">$0</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <ul className="mb-8 space-y-3 text-sm">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Up to 3 repositories</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Basic code quality checks</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Community support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>GitHub integration</span>
                    </li>
                    <li className="flex items-center">
                      <X className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        Advanced code analysis
                      </span>
                    </li>
                    <li className="flex items-center">
                      <X className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        Security scanning
                      </span>
                    </li>
                    <li className="flex items-center">
                      <X className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        Custom rules
                      </span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/signup">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Pro Plan */}
              <Card className="flex flex-col border-primary bg-primary/5 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Pro</CardTitle>
                    <Badge>Popular</Badge>
                  </div>
                  <CardDescription>
                    For growing teams and businesses
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-4">
                    <span className="text-4xl font-bold">
                      {billingCycle === "monthly" ? "$29" : "$20"}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <ul className="mb-8 space-y-3 text-sm">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Unlimited repositories</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Advanced code quality analysis</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Security vulnerability scanning</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Performance optimization suggestions</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Email support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Basic custom rules</span>
                    </li>
                    <li className="flex items-center">
                      <X className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        Dedicated account manager
                      </span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/checkout/pro">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Enterprise Plan */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>
                    For large organizations with custom needs
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-4">
                    <span className="text-4xl font-bold">Custom</span>
                  </div>
                  <ul className="mb-8 space-y-3 text-sm">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Everything in Pro</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Custom integrations</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Advanced custom rules</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>SLA and priority support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Self-hosted option available</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span>Custom training and onboarding</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/contact-sales">Contact Sales</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl">
              <div className="flex flex-col items-center text-center space-y-4 mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Compare Features
                </h2>
                <p className="max-w-[700px] text-muted-foreground">
                  Detailed breakdown of what's included in each plan
                </p>
              </div>

              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[250px]">Feature</TableHead>
                      <TableHead className="text-center">Free</TableHead>
                      <TableHead className="text-center">Pro</TableHead>
                      <TableHead className="text-center">Enterprise</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <GitPullRequest className="h-4 w-4" />
                          <span>Repository Limit</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">3</TableCell>
                      <TableCell className="text-center">Unlimited</TableCell>
                      <TableCell className="text-center">Unlimited</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <Code className="h-4 w-4" />
                          <span>Code Quality Analysis</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">Basic</TableCell>
                      <TableCell className="text-center">Advanced</TableCell>
                      <TableCell className="text-center">Advanced</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4" />
                          <span>Security Scanning</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <X className="mx-auto h-4 w-4 text-muted-foreground" />
                      </TableCell>
                      <TableCell className="text-center">
                        <Check className="mx-auto h-4 w-4 text-primary" />
                      </TableCell>
                      <TableCell className="text-center">
                        <Check className="mx-auto h-4 w-4 text-primary" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <Zap className="h-4 w-4" />
                          <span>Performance Insights</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <X className="mx-auto h-4 w-4 text-muted-foreground" />
                      </TableCell>
                      <TableCell className="text-center">
                        <Check className="mx-auto h-4 w-4 text-primary" />
                      </TableCell>
                      <TableCell className="text-center">
                        <Check className="mx-auto h-4 w-4 text-primary" />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <Database className="h-4 w-4" />
                          <span>Custom Rules</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <X className="mx-auto h-4 w-4 text-muted-foreground" />
                      </TableCell>
                      <TableCell className="text-center">Basic</TableCell>
                      <TableCell className="text-center">Advanced</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>Team Size</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">Up to 3</TableCell>
                      <TableCell className="text-center">Unlimited</TableCell>
                      <TableCell className="text-center">Unlimited</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4" />
                          <span>Billing</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">Free</TableCell>
                      <TableCell className="text-center">
                        Monthly/Annual
                      </TableCell>
                      <TableCell className="text-center">Custom</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <Bot className="h-4 w-4" />
                          <span>Support</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">Community</TableCell>
                      <TableCell className="text-center">Email</TableCell>
                      <TableCell className="text-center">
                        Priority + SLA
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="flex flex-col items-center text-center space-y-4 mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[700px] text-muted-foreground">
                  Got questions? We've got answers.
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Can I switch plans at any time?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, you can upgrade or downgrade your plan at any time.
                    When upgrading, the new features will be available
                    immediately. When downgrading, the changes will take effect
                    at the end of your current billing cycle.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    How does the 14-day free trial work?
                  </AccordionTrigger>
                  <AccordionContent>
                    All paid plans come with a 14-day free trial. You won't be
                    charged until the trial period ends, and you can cancel at
                    any time during the trial. No credit card is required to
                    start a trial.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    What happens if I exceed my repository limit on the Free
                    plan?
                  </AccordionTrigger>
                  <AccordionContent>
                    The Free plan is limited to 3 repositories. If you need to
                    analyze more repositories, you'll need to upgrade to the Pro
                    plan, which includes unlimited repositories.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Do you offer discounts for non-profits or educational
                    institutions?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer special pricing for non-profits, educational
                    institutions, and open-source projects. Please contact our
                    sales team for more information.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    Can I use PR Bot with private repositories?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, PR Bot works with both public and private repositories
                    on all plans. Your code security and privacy are our top
                    priorities.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>
                    What payment methods do you accept?
                  </AccordionTrigger>
                  <AccordionContent>
                    We accept all major credit cards (Visa, Mastercard, American
                    Express) and PayPal. For Enterprise plans, we also offer
                    invoicing and purchase orders.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>
                    Is there a self-hosted option available?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer a self-hosted option for Enterprise customers
                    who need to run PR Bot within their own infrastructure.
                    Contact our sales team for details.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Ready to Transform Your Code Reviews?
              </h2>
              <p className="max-w-[700px] text-muted-foreground mb-8 mx-auto">
                Join thousands of developers who are shipping better code faster
                with PR Bot.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/signup">Get Started for Free</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact-sales">Contact Sales</Link>
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                No credit card required for free plan or trial
              </p>
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
