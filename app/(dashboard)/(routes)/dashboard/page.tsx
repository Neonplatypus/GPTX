"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { tools } from "@/constants";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto px-4 mb-10 space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800">
          Explore the power of AI
        </h2>
        <p className="text-gray-600 font-medium text-sm md:text-lg text-center">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card onClick={() => router.push(tool.href)} key={tool.href} className="p-4 border border-gray-200 hover:shadow-lg transition cursor-pointer bg-white rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-4">
                <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                  <tool.icon className={cn("w-8 h-8", tool.color)} />
                </div>
                <div className="font-semibold text-gray-800">
                  {tool.label}
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-700" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}