"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Bot, CreditCard, Github, Shield, Save } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AuthStatus } from "@/components/AuthStatus";

export default function SettingsPage() {
  const router = useRouter();
  const { user, loading, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState("profile");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Notification preferences
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [prReviewNotifications, setPrReviewNotifications] = useState(true);
  const [securityAlerts, setSecurityAlerts] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(false);

  // Redirect if not logged in
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  // Set initial form values
  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("Profile updated successfully");
    setErrorMessage(null);

    // Clear success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage(null);
    }, 3000);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setErrorMessage("New passwords do not match");
      setSuccessMessage(null);
      return;
    }

    if (newPassword.length < 8) {
      setErrorMessage("Password must be at least 8 characters long");
      setSuccessMessage(null);
      return;
    }

    setSuccessMessage("Password updated successfully");
    setErrorMessage(null);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");

    // Clear success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage(null);
    }, 3000);
  };

  const handleNotificationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("Notification preferences updated");
    setErrorMessage(null);

    // Clear success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage(null);
    }, 3000);
  };

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
              className="text-sm font-medium hover:underline"
            >
              Dashboard
            </Link>
            <Link
              href="/account/settings"
              className="text-sm font-medium text-primary hover:underline"
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
              <h1 className="text-3xl font-bold tracking-tight">
                Account Settings
              </h1>
              <p className="text-muted-foreground">
                Manage your account preferences and subscription
              </p>
            </div>

            {(successMessage || errorMessage) && (
              <Alert
                variant={errorMessage ? "destructive" : "default"}
                className="mb-4"
              >
                <AlertDescription>
                  {errorMessage || successMessage}
                </AlertDescription>
              </Alert>
            )}

            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="billing">Billing</TabsTrigger>
                <TabsTrigger value="integrations">Integrations</TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>
                      Update your personal details
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleProfileSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <Button type="submit">
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Change Password</CardTitle>
                    <CardDescription>
                      Update your password to keep your account secure
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handlePasswordSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">
                          Current Password
                        </Label>
                        <Input
                          id="currentPassword"
                          type="password"
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input
                          id="newPassword"
                          type="password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">
                          Confirm New Password
                        </Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                        />
                      </div>
                      <Button type="submit">Update Password</Button>
                    </form>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Danger Zone</CardTitle>
                    <CardDescription>
                      Irreversible account actions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-md border border-destructive/50 p-4">
                      <div className="flex flex-col gap-2">
                        <h3 className="font-medium">Delete Account</h3>
                        <p className="text-sm text-muted-foreground">
                          Permanently delete your account and all associated
                          data. This action cannot be undone.
                        </p>
                        <div className="mt-2">
                          <Button
                            variant="destructive"
                            onClick={() => {
                              if (
                                confirm(
                                  "Are you sure you want to delete your account? This action cannot be undone."
                                )
                              ) {
                                signOut();
                                router.push("/");
                              }
                            }}
                          >
                            Delete Account
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Notifications Tab */}
              <TabsContent value="notifications" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>
                      Choose how and when you want to be notified
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form
                      onSubmit={handleNotificationSubmit}
                      className="space-y-6"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="emailNotifications">
                              Email Notifications
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              Receive notifications via email
                            </p>
                          </div>
                          <Switch
                            id="emailNotifications"
                            checked={emailNotifications}
                            onCheckedChange={setEmailNotifications}
                          />
                        </div>

                        <Separator />

                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="prReviewNotifications">
                              PR Review Notifications
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              Get notified when PR Bot completes a review
                            </p>
                          </div>
                          <Switch
                            id="prReviewNotifications"
                            checked={prReviewNotifications}
                            onCheckedChange={setPrReviewNotifications}
                          />
                        </div>

                        <Separator />

                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="securityAlerts">
                              Security Alerts
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              Receive immediate alerts for critical security
                              issues
                            </p>
                          </div>
                          <Switch
                            id="securityAlerts"
                            checked={securityAlerts}
                            onCheckedChange={setSecurityAlerts}
                          />
                        </div>

                        <Separator />

                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="weeklyDigest">Weekly Digest</Label>
                            <p className="text-sm text-muted-foreground">
                              Get a weekly summary of PR Bot activity
                            </p>
                          </div>
                          <Switch
                            id="weeklyDigest"
                            checked={weeklyDigest}
                            onCheckedChange={setWeeklyDigest}
                          />
                        </div>
                      </div>

                      <Button type="submit">Save Preferences</Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Billing Tab */}
              <TabsContent value="billing" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Subscription Plan</CardTitle>
                    <CardDescription>
                      Manage your subscription and billing details
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="rounded-md border p-4">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Current Plan</h3>
                          <span
                            className={`rounded-full px-2 py-1 text-xs ${
                              user.plan === "free"
                                ? "bg-muted text-foreground"
                                : user.plan === "pro"
                                ? "bg-primary/20 text-primary"
                                : "bg-amber-500/20 text-amber-700"
                            }`}
                          >
                            {user.plan === "free"
                              ? "Free"
                              : user.plan === "pro"
                              ? "Pro"
                              : "Enterprise"}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {user.plan === "free"
                            ? "Basic features with up to 3 repositories"
                            : user.plan === "pro"
                            ? "Advanced features with unlimited repositories"
                            : "Custom enterprise plan with dedicated support"}
                        </p>
                        {user.plan === "free" ? (
                          <Button className="mt-2 w-full sm:w-auto" asChild>
                            <Link href="/checkout/pro">Upgrade to Pro</Link>
                          </Button>
                        ) : user.plan === "pro" ? (
                          <Button
                            className="mt-2 w-full sm:w-auto"
                            variant="outline"
                            asChild
                          >
                            <Link href="/contact-sales">
                              Contact Sales for Enterprise
                            </Link>
                          </Button>
                        ) : null}
                      </div>
                    </div>

                    {user.plan !== "free" && (
                      <div className="rounded-md border p-4">
                        <div className="flex flex-col gap-2">
                          <h3 className="font-medium">Payment Method</h3>
                          <div className="flex items-center gap-2">
                            <CreditCard className="h-4 w-4 text-muted-foreground" />
                            <span>•••• •••• •••• 4242</span>
                            <span className="text-xs text-muted-foreground">
                              Expires 12/25
                            </span>
                          </div>
                          <div className="mt-2 flex gap-2">
                            <Button variant="outline" size="sm">
                              Update
                            </Button>
                            <Button variant="outline" size="sm">
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}

                    {user.plan !== "free" && (
                      <div className="rounded-md border p-4">
                        <div className="flex flex-col gap-2">
                          <h3 className="font-medium">Billing History</h3>
                          <div className="text-sm text-muted-foreground">
                            <p>No billing history available yet.</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {user.plan !== "free" && (
                      <div className="rounded-md border border-destructive/50 p-4">
                        <div className="flex flex-col gap-2">
                          <h3 className="font-medium">Cancel Subscription</h3>
                          <p className="text-sm text-muted-foreground">
                            You can cancel your subscription at any time. Your
                            plan will remain active until the end of your
                            current billing period.
                          </p>
                          <div className="mt-2">
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => {
                                if (
                                  confirm(
                                    "Are you sure you want to cancel your subscription?"
                                  )
                                ) {
                                  // In a real app, this would call an API to cancel the subscription
                                  setSuccessMessage(
                                    "Subscription cancelled successfully"
                                  );
                                }
                              }}
                            >
                              Cancel Subscription
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Integrations Tab */}
              <TabsContent value="integrations" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>GitHub Integration</CardTitle>
                    <CardDescription>
                      Connect PR Bot to your GitHub repositories
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="rounded-md border p-4">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Github className="h-5 w-5" />
                            <h3 className="font-medium">GitHub</h3>
                          </div>
                          <span className="rounded-full bg-red-500/20 px-2 py-1 text-xs text-red-700">
                            Not Connected
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Connect PR Bot to your GitHub account to analyze pull
                          requests
                        </p>
                        <div className="mt-2">
                          <Button className="w-full sm:w-auto" asChild>
                            <Link
                              href="https://github.com/apps/pr-bot"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              Connect GitHub
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-md border p-4">
                      <div className="flex flex-col gap-2">
                        <h3 className="font-medium">Repository Access</h3>
                        <p className="text-sm text-muted-foreground">
                          PR Bot needs access to your repositories to analyze
                          pull requests
                        </p>
                        <div className="mt-2 rounded-md bg-muted p-4">
                          <p className="text-center text-sm text-muted-foreground">
                            No repositories connected yet. Connect your GitHub
                            account to get started.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-md border p-4">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <Shield className="h-5 w-5" />
                          <h3 className="font-medium">
                            Security & Permissions
                          </h3>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          PR Bot requires the following permissions to function
                          properly:
                        </p>
                        <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                          <li>Read access to code</li>
                          <li>Read and write access to pull requests</li>
                          <li>Read access to repository metadata</li>
                          <li>Read and write access to checks</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
}
