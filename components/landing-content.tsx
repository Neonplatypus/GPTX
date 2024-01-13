"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Joel",
    avatar: "J",
    title: "Software Engineer",
    description: "This is the best application I've ever used!",
  },
  {
    name: "Antonio",
    avatar: "A",
    title: "Designer",
    description: "I use this daily for generating new photos!",
  },
  {
    name: "Mark",
    avatar: "M",
    title: "CEO",
    description: "This app has changed my life, cannot imagine working without it!",
  },
  {
    name: "Mary",
    avatar: "M",
    title: "CFO",
    description: "The best in class, definitely worth the premium subscription!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20 bg-gray-100">
      <h2 className="text-center text-4xl text-gray-800 font-bold mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-white border border-gray-200 shadow-sm text-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div className="text-lg font-medium">{item.name}</div>
                <div className="text-sm text-gray-600">{item.title}</div>
              </CardTitle>
              <CardContent className="pt-4 px-4">
                <p className="text-sm text-gray-700">{item.description}</p>
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}