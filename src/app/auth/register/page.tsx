import RegisterForm from "@/app/(components)/auth/RegisterForm";
import { Gamepad2 } from "lucide-react";
import Link from "next/link";
import StaticBackground from "@/app/(components)/StaticBackground";

export default function RegisterPage() {
    return (
      <>
      <StaticBackground imageUrl="/cairo.jpg" />
            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-4">
        <div className="w-full max-w-md"/>
          <div className="z-10 w-full max-w-md">
            <div className="mb-8 flex flex-col items-center">
              <Link href="/" className="mb-2 flex items-center gap-1 text-2xl font-bold text-primary">
                <Gamepad2 className="h-8 w-8" />
                <span>Game Store</span>
              </Link>
              <p className="text-center text-muted-foreground">
                Create a new account to start your gaming adventure
              </p>
            </div>
            
            <RegisterForm />
            
          </div>
        </div>
      </>
    );
  }