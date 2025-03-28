"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Bot,
  Calendar,
  Clock,
  Users,
  Building,
  Globe,
  CheckCircle,
  MessageSquare,
  ArrowRight,
  Github,
} from "lucide-react";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AuthStatus } from "@/components/AuthStatus";

export default function ContactSalesPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [message, setMessage] = useState("");
  const [demoType, setDemoType] = useState("live");
  const [preferredTime, setPreferredTime] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !company || !teamSize) {
      setFormError("Please fill in all required fields");
      return;
    }

    setTimeout(() => {
      setFormSubmitted(true);
      setFormError(null);

      setCompany("");
      setJobTitle("");
      setTeamSize("");
      setMessage("");
      setDemoType("live");
      setPreferredTime("");
    }, 1000);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Bot className="h-6 w-6" />
              <span className="text-xl font-bold">Lamp Bot</span>
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
              className="text-sm font-medium hover:underline"
            >
              Pricing
            </Link>
          </nav>
          <AuthStatus />
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/30 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Schedule a Demo
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                See how PR Bot can transform your code review process with a
                personalized demo
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
              {/* Form Section */}
              <div>
                {formSubmitted ? (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">Thank You!</CardTitle>
                      <CardDescription>
                        Your demo request has been submitted successfully.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg bg-primary/10 p-6 text-center">
                        <CheckCircle className="mx-auto h-12 w-12 text-primary mb-4" />
                        <h3 className="text-xl font-medium mb-2">
                          We've received your request
                        </h3>
                        <p className="text-muted-foreground">
                          A member of our team will contact you within 1
                          business day to schedule your demo.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium">What happens next?</h4>
                        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                          <li>
                            Our team will review your request and contact you
                            via email
                          </li>
                          <li>
                            We'll schedule a time that works for your team
                          </li>
                          <li>
                            We'll prepare a customized demo based on your needs
                          </li>
                          <li>We'll follow up with resources and next steps</li>
                        </ol>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link href="/">Return to Home</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ) : (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">Request a Demo</CardTitle>
                      <CardDescription>
                        Fill out the form below and we'll be in touch to
                        schedule your demo
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {formError && (
                        <Alert variant="destructive" className="mb-4">
                          <AlertDescription>{formError}</AlertDescription>
                        </Alert>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="name">
                                Full Name{" "}
                                <span className="text-red-500">*</span>
                              </Label>
                              <Input
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">
                                Email <span className="text-red-500">*</span>
                              </Label>
                              <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                              />
                            </div>
                          </div>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="company">
                                Company <span className="text-red-500">*</span>
                              </Label>
                              <Input
                                id="company"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="jobTitle">Job Title</Label>
                              <Input
                                id="jobTitle"
                                value={jobTitle}
                                onChange={(e) => setJobTitle(e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="teamSize">
                              Team Size <span className="text-red-500">*</span>
                            </Label>
                            <Select
                              value={teamSize}
                              onValueChange={setTeamSize}
                              required
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select team size" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1-5">
                                  1-5 developers
                                </SelectItem>
                                <SelectItem value="6-20">
                                  6-20 developers
                                </SelectItem>
                                <SelectItem value="21-50">
                                  21-50 developers
                                </SelectItem>
                                <SelectItem value="51-200">
                                  51-200 developers
                                </SelectItem>
                                <SelectItem value="201+">
                                  201+ developers
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <Separator />

                          <div className="space-y-2">
                            <Label>Demo Type</Label>
                            <RadioGroup
                              value={demoType}
                              onValueChange={setDemoType}
                              className="flex flex-col space-y-1"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="live" id="live" />
                                <Label
                                  htmlFor="live"
                                  className="cursor-pointer"
                                >
                                  Live demo with a product specialist
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                  value="recorded"
                                  id="recorded"
                                />
                                <Label
                                  htmlFor="recorded"
                                  className="cursor-pointer"
                                >
                                  Recorded demo with follow-up Q&A
                                </Label>
                              </div>
                            </RadioGroup>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="preferredTime">
                              Preferred Time Zone
                            </Label>
                            <Select
                              value={preferredTime}
                              onValueChange={setPreferredTime}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select preferred time zone" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pst">
                                  Pacific Time (PST/PDT)
                                </SelectItem>
                                <SelectItem value="mst">
                                  Mountain Time (MST/MDT)
                                </SelectItem>
                                <SelectItem value="cst">
                                  Central Time (CST/CDT)
                                </SelectItem>
                                <SelectItem value="est">
                                  Eastern Time (EST/EDT)
                                </SelectItem>
                                <SelectItem value="gmt">
                                  Greenwich Mean Time (GMT)
                                </SelectItem>
                                <SelectItem value="cet">
                                  Central European Time (CET)
                                </SelectItem>
                                <SelectItem value="ist">
                                  India Standard Time (IST)
                                </SelectItem>
                                <SelectItem value="jst">
                                  Japan Standard Time (JST)
                                </SelectItem>
                                <SelectItem value="aest">
                                  Australian Eastern Time (AEST)
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="message">
                              Additional Information
                            </Label>
                            <Textarea
                              id="message"
                              placeholder="Tell us about your specific needs or questions"
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              className="min-h-[100px]"
                            />
                          </div>
                        </div>

                        <Button type="submit" className="w-full">
                          Request Demo
                        </Button>

                        <p className="text-center text-xs text-muted-foreground">
                          By submitting this form, you agree to our{" "}
                          <Link href="#" className="underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="#" className="underline">
                            Privacy Policy
                          </Link>
                          .
                        </p>
                      </form>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Info Section */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>What to Expect</CardTitle>
                    <CardDescription>
                      Our demos are tailored to your team's specific needs
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">30-45 Minute Session</h3>
                        <p className="text-sm text-muted-foreground">
                          A focused demonstration of PR Bot's features most
                          relevant to your team
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Bring Your Team</h3>
                        <p className="text-sm text-muted-foreground">
                          Invite developers, managers, and other stakeholders to
                          join the demo
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <MessageSquare className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Q&A Session</h3>
                        <p className="text-sm text-muted-foreground">
                          Get answers to your specific questions from our
                          product specialists
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <ArrowRight className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Next Steps</h3>
                        <p className="text-sm text-muted-foreground">
                          Learn about implementation, pricing, and how to get
                          started
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Demo Topics</CardTitle>
                    <CardDescription>
                      Here's what we typically cover in our demos
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="features">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="features">Features</TabsTrigger>
                        <TabsTrigger value="implementation">
                          Implementation
                        </TabsTrigger>
                        <TabsTrigger value="pricing">Pricing</TabsTrigger>
                      </TabsList>
                      <TabsContent value="features" className="space-y-4 pt-4">
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Code quality analysis capabilities</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Security vulnerability scanning</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Performance optimization suggestions</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Custom rules and configurations</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Integration with your workflow</span>
                          </li>
                        </ul>
                      </TabsContent>
                      <TabsContent
                        value="implementation"
                        className="space-y-4 pt-4"
                      >
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>GitHub integration setup</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>CI/CD pipeline integration</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Configuration options</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>User management and permissions</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Self-hosted options (Enterprise)</span>
                          </li>
                        </ul>
                      </TabsContent>
                      <TabsContent value="pricing" className="space-y-4 pt-4">
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Plan comparison and features</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Custom pricing for your team size</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Volume discounts</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Annual vs. monthly billing</span>
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                            <span>Enterprise agreement options</span>
                          </li>
                        </ul>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="py-6 md:py-8">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-xl">
              <div className="rounded-lg border bg-card p-6">
                <div className="flex flex-col space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium">
                      Not ready for a demo?
                    </h3>
                    <p className="text-muted-foreground">
                      You can try PR Bot for free with up to 3 repositories, no
                      credit card required.
                    </p>
                  </div>
                  <Button variant="outline" asChild>
                    <Link href="/signup">Get Started for Free</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-muted/30 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="flex flex-col items-center text-center space-y-4 mb-8">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  What Our Customers Say
                </h2>
                <p className="max-w-[700px] text-muted-foreground">
                  Join hundreds of teams already using PR Bot to improve their
                  code quality
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-background">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <p className="text-muted-foreground italic">
                        "PR Bot has transformed our code review process. We've
                        seen a 40% reduction in bugs making it to production
                        since implementing it."
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 h-10 w-10 flex items-center justify-center">
                          <Building className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Sarah Johnson</p>
                          <p className="text-sm text-muted-foreground">
                            CTO, TechStart Inc.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-background">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <p className="text-muted-foreground italic">
                        "The demo was incredibly helpful. The team showed us
                        exactly how PR Bot would integrate with our existing
                        workflow and the value was immediately clear."
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 h-10 w-10 flex items-center justify-center">
                          <Globe className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Michael Chen</p>
                          <p className="text-sm text-muted-foreground">
                            Lead Developer, Global Systems
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-background">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <p className="text-muted-foreground italic">
                        "Our junior developers are learning faster than ever
                        thanks to PR Bot's detailed feedback. It's like having a
                        senior developer review every line of code."
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 h-10 w-10 flex items-center justify-center">
                          <Calendar className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Alex Rodriguez</p>
                          <p className="text-sm text-muted-foreground">
                            Engineering Manager, DevDaily
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="flex flex-col items-center text-center space-y-4 mb-8">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[700px] text-muted-foreground">
                  Common questions about our demo process
                </p>
              </div>

              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      How long does the demo typically last?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our demos typically last 30-45 minutes, including time for
                      Q&A. We can adjust the length based on your team's
                      availability and specific needs.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Can I invite my team to the demo?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We encourage you to invite all relevant stakeholders,
                      including developers, engineering managers, and
                      decision-makers. We'll send a calendar invite with meeting
                      details that you can forward to your team.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Do I need to prepare anything for the demo?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      No preparation is required. However, if you have specific
                      questions or use cases you'd like us to address, feel free
                      to mention them in the "Additional Information" field when
                      requesting the demo.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Is the demo a sales pitch or a product demonstration?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our demos are primarily product demonstrations focused on
                      showing you how PR Bot works and how it can benefit your
                      team. While we'll discuss pricing and next steps, the main
                      focus is on the product's features and capabilities.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      How soon can I schedule a demo?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We typically schedule demos within 2-3 business days of
                      receiving your request. If you have an urgent need, please
                      mention it in the "Additional Information" field, and
                      we'll do our best to accommodate you.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-muted/30 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">
                Ready to See PR Bot in Action?
              </h2>
              <p className="max-w-[700px] text-muted-foreground mb-8 mx-auto">
                Schedule your personalized demo today and discover how PR Bot
                can transform your code review process.
              </p>
              <Button
                size="lg"
                asChild
                onClick={() => {
                  const formElement = document.getElementById("demo-form");
                  if (formElement) {
                    formElement.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <a href="/contact-sales">Schedule Your Demo</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/50">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex items-center gap-2">
            <Bot className="h-6 w-6" />
            <span className="text-xl font-bold">Lamp Bot</span>
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
              href="https://github.com/liamstamper/lamp-bot"
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
          © {new Date().getFullYear()} Lamp Bot. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
