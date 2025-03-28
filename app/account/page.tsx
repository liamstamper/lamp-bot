"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Bot, Package, CreditCard, Users } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AuthStatus } from "@/components/AuthStatus";

export default function AccountPage() {
  const router = useRouter();
  const { user, loading } = useAuth();

  // Redirect if not logged in
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

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
              href="/account"
              className="text-sm font-medium text-primary hover:underline"
            >
              Dashboard
            </Link>
            <Link
              href="/account/settings"
              className="text-sm font-medium hover:underline"
            >
              Settings
            </Link>
          </nav>
          <AuthStatus />
        </div>
      </header>
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, {user.name}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Current Plan
                  </CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {user.plan === "free"
                      ? "Free"
                      : user.plan === "pro"
                      ? "Pro"
                      : "Enterprise"}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {user.plan === "free"
                      ? "Up to 3 repositories"
                      : user.plan === "pro"
                      ? "Unlimited repositories"
                      : "Custom plan"}
                  </p>
                  {user.plan === "free" && (
                    <Button className="mt-4 w-full" asChild>
                      <Link href="/checkout/pro">Upgrade to Pro</Link>
                    </Button>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Repositories
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">0</div>
                  <p className="text-xs text-muted-foreground">
                    Connected GitHub repositories
                  </p>
                  <Button className="mt-4 w-full" variant="outline" asChild>
                    <Link
                      href="https://github.com/apps/pr-bot"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Connect Repository
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Billing</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {user.plan === "free"
                      ? "$0.00"
                      : user.plan === "pro"
                      ? "$29.00"
                      : "Custom"}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {user.plan === "free"
                      ? "No payment method required"
                      : "Monthly subscription"}
                  </p>
                  <Button className="mt-4 w-full" variant="outline" asChild>
                    <Link href="/account/billing">Manage Billing</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-1">
              <Card>
                <CardHeader>
                  <CardTitle>Getting Started</CardTitle>
                  <CardDescription>
                    Follow these steps to set up PR Bot for your repositories
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      1
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-medium">Install the GitHub App</h4>
                      <p className="text-sm text-muted-foreground">
                        Add PR Bot to your GitHub repositories to start
                        analyzing your pull requests.
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2"
                        asChild
                      >
                        <Link
                          href="https://github.com/apps/pr-bot"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Install GitHub App
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      2
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-medium">Configure Your Settings</h4>
                      <p className="text-sm text-muted-foreground">
                        Customize PR Bot's behavior to match your team's
                        workflow and coding standards.
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2"
                        asChild
                      >
                        <Link href="/account/settings">Configure Settings</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      3
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-medium">
                        Create Your First Pull Request
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Create a pull request in one of your connected
                        repositories to see PR Bot in action.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
