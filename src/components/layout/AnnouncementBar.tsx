"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const AnnouncementBar: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const announcements = siteConfig.announcements;

  useEffect(() => {
    if (announcements.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [announcements.length]);

  if (!announcements || announcements.length === 0) return null;

  const current = announcements[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % announcements.length);
  };

  return (
    <div className="bg-olive text-cream-50 text-xs py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button
          onClick={handlePrev}
          aria-label="Previous announcement"
          className="text-cream-50/70 hover:text-white p-0.5 rounded transition-colors hidden sm:block"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        <div className="flex-1 text-center font-medium tracking-wide truncate px-2">
          {current.link ? (
            <Link
              href={current.link}
              className="hover:underline inline-flex items-center gap-1.5 transition-opacity hover:opacity-90"
            >
              <span>{current.text}</span>
            </Link>
          ) : (
            <span>{current.text}</span>
          )}
        </div>

        <button
          onClick={handleNext}
          aria-label="Next announcement"
          className="text-cream-50/70 hover:text-white p-0.5 rounded transition-colors hidden sm:block"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
