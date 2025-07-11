'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { Gamepad2 } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

function AuthErrorContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  const getErrorMessage = (error: string | null) => {
    switch (error) {
      case 'Configuration':
        return 'There is a problem with the server configuration.';
      case 'AccessDenied':
        return 'You do not have permission to sign in.';
      case 'Verification':
        return 'The verification link may have expired or has already been used.';
      case 'OAuthSignin':
      case 'OAuthCallback':
      case 'OAuthCreateAccount':
      case 'EmailCreateAccount':
      case 'Callback':
        return 'There was a problem with the authentication process.';
      case 'OAuthAccountNotLinked':
        return 'To confirm your identity, sign in with the same account you used originally.';
      case 'EmailSignin':
        return 'The email could not be sent.';
      case 'CredentialsSignin':
        return 'Sign in failed. Check the details you provided are correct.';
      case 'SessionRequired':
        return 'Please sign in to access this page.';
      default:
        return 'An error occurred during authentication.';
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center p-4 bg-background/50 backdrop-blur-sm">
      <div className="absolute inset-0 bg-background/50 backdrop-blur-sm z-0" />
      <div className="z-10 w-full max-w-md rounded-xl bg-card p-6 shadow-md border border-border">
        <div className="mb-6 text-center">
          <Link href="/" className="mb-2 inline-flex items-center gap-2 text-2xl font-bold text-primary">
            <Gamepad2 className="h-7 w-7" />
            <span>Game Store</span>
          </Link>
          <h1 className="text-xl font-semibold text-destructive mt-4">Authentication Error</h1>
          <p className="mt-2 text-sm text-muted-foreground">{getErrorMessage(error)}</p>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            href="/auth/login"
            className="w-full text-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Back to Login
          </Link>
          <Link
            href="/"
            className="w-full text-center px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function AuthErrorPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading error details...</div>}>
      <AuthErrorContent />
    </Suspense>
  );
}
