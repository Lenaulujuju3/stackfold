// components/PackagesCarousel.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel, CarouselContent, CarouselItem,
  CarouselNext, CarouselPrevious,
} from "@/components/ui/carousel";

const packages = [
  { title: "Basic", body: "Access to leads • Basic analytics" },
  { title: "Pro", body: "Full leads access • Advanced indices" },
  { title: "Enterprise", body: "Custom solutions • Dedicated support" },
];

export default function PackagesCarousel() {
  return (
    <Carousel className="w-full max-w-6xl mx-auto" opts={{ align: "start", loop: true }}>
      <CarouselContent className="-ml-4">
        {packages.map((p) => (
          <CarouselItem key={p.title} className="pl-4 basis-auto md:basis-1/3">
            <Card className="rounded-2xl bg-teal-600 text-white border border-teal-700/40 shadow-lg">
              <CardContent className="p-5">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-teal-50/90 mt-1">{p.body}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-teal-700/90 hover:bg-teal-800 border-teal-800" />
      <CarouselNext className="bg-teal-700/90 hover:bg-teal-800 border-teal-800" />
    </Carousel>
  );
}