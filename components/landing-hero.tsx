"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="font-bold py-24 text-center space-y-4 bg-gray-100">
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl space-y-4 font-bold text-gray-800">
        <h1>The Best AI Tool for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500">
          <TypewriterComponent
            options={{
              strings: [
                "Chatbot.",
                "Photo Generation.",
                "Blog Writing.",
                "Mail Writing."
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-lg font-medium text-gray-600">
        Create content using AI 10x faster.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="premium" className="text-md p-3 md:p-5 rounded-full font-medium bg-indigo-500 hover:bg-indigo-600 text-white">
            Start Generating For Free
          </Button>
        </Link>
      </div>
      <div className="text-gray-500 text-xs md:text-sm font-light">
        No credit card required.
      </div>
    </div>
  );
}