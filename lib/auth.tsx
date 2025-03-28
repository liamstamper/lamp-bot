"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

// Define user types
export type User = {
  id: string;
  email: string;
  name: string;
  plan: "free" | "pro" | "enterprise";
  createdAt: string;
};

// Mock user data - in a real app, this would come from a database
const mockUsers = [
  {
    id: "1",
    email: "demo@example.com",
    password: "password123", // In a real app, this would be hashed
    name: "Demo User",
    plan: "free",
    createdAt: new Date().toISOString(),
  },
];

// Auth context type
type AuthContextType = {
  user: User | null;
  loading: boolean;
  error: string | null;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  updateUserPlan: (plan: "free" | "pro" | "enterprise") => void;
};

// Create auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth provider props
type AuthProviderProps = {
  children: ReactNode;
};

// Auth provider component
export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("pr-bot-user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse stored user", e);
      }
    }
    setLoading(false);
  }, []);

  // Sign up function
  const signUp = async (email: string, password: string, name: string) => {
    setLoading(true);
    setError(null);

    try {
      // Check if user already exists
      const existingUser = mockUsers.find((u) => u.email === email);
      if (existingUser) {
        throw new Error("User with this email already exists");
      }

      // Create new user
      const newUser = {
        id: (mockUsers.length + 1).toString(),
        email,
        password, // In a real app, this would be hashed
        name,
        plan: "free" as const,
        createdAt: new Date().toISOString(),
      };

      mockUsers.push(newUser);

      // Set user in state (excluding password)
      const { password: _, ...userWithoutPassword } = newUser;
      setUser(userWithoutPassword);

      // Store in localStorage (in a real app, this would be a secure HTTP-only cookie)
      localStorage.setItem("pr-bot-user", JSON.stringify(userWithoutPassword));
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An error occurred during sign up"
      );
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Sign in function
  const signIn = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      // Find user
      const foundUser = mockUsers.find(
        (u) => u.email === email && u.password === password
      );
      if (!foundUser) {
        throw new Error("Invalid email or password");
      }

      // Set user in state (excluding password)

      const { ...userWithoutPassword } = foundUser as User; // Ensure foundUser is of type User
      setUser(userWithoutPassword as User); // Cast to User type

      // Store in localStorage (in a real app, this would be a secure HTTP-only cookie)
      localStorage.setItem("pr-bot-user", JSON.stringify(userWithoutPassword));
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An error occurred during sign in"
      );
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Sign out function
  const signOut = () => {
    setUser(null);
    localStorage.removeItem("pr-bot-user");
  };

  // Update user plan
  const updateUserPlan = (plan: "free" | "pro" | "enterprise") => {
    if (user) {
      const updatedUser = { ...user, plan };
      setUser(updatedUser);
      localStorage.setItem("pr-bot-user", JSON.stringify(updatedUser));

      // In a real app, this would update the user in the database
      const userIndex = mockUsers.findIndex((u) => u.id === user.id);
      if (userIndex !== -1) {
        mockUsers[userIndex] = { ...mockUsers[userIndex], plan };
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, error, signUp, signIn, signOut, updateUserPlan }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
