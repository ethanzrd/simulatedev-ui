import { Github, Rocket } from "lucide-react";
import { Button } from "./ui/button";

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-8 max-w-md">
        {/* Logo */}
        <div className="space-y-2">
          <h1 className="text-4xl font-mono font-semibold text-foreground tracking-tight flex items-center justify-center gap-3">
            <Rocket className="w-10 h-10" />
            SimulateDev
          </h1>
          <p className="text-gray-600 text-lg">
            Build like it's 2030
          </p>
        </div>

        {/* Subtitle */}
        <div className="space-y-2">
          <p className="text-gray-500 text-sm">
            Link your GitHub account to easily add repositories and assign
          </p>
          <p className="text-gray-500 text-sm">
            Conductor issues.
          </p>
        </div>

        {/* Sign in button */}
        <Button
          onClick={onLogin}
          className="bg-foreground text-background hover:bg-gray-800 px-8 py-3 rounded-lg font-medium flex items-center gap-2 mx-auto transition-colors"
        >
          <Github className="w-4 h-4" />
          Sign in with GitHub
        </Button>
      </div>
    </div>
  );
}