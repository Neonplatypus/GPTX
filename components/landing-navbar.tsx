"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({ weight: '600', subsets: ['latin'] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="w-full p-4 bg-gradient-to-r from-red-500 to-blue-500 shadow-md flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-10 w-10 mr-3">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <h1 className={cn("text-3xl font-semibold text-white", font.className)}>
          GPT4
        </h1>
      </Link>
      <div className="flex items-center gap-x-3">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="default" className="rounded-lg bg-white hover:bg-gray-200 text-red-500 to-blue-500">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  )
}