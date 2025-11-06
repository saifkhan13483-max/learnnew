import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import type { Module, Lesson } from "@shared/courseData";

interface LessonNavigationProps {
  previous: { module: Module; lesson: Lesson } | null;
  next: { module: Module; lesson: Lesson } | null;
}

export default function LessonNavigation({ previous, next }: LessonNavigationProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mt-8 sm:mt-10 md:mt-12">
      {previous ? (
        <Link href={`/module/${previous.module.id}/lesson/${previous.lesson.id}`} className="block">
          <Card className="h-full hover-elevate border-2 cursor-pointer group transition-all duration-200" data-testid="button-previous-lesson">
            <CardContent className="p-4 sm:p-5 md:p-6">
              <div className="flex items-start gap-2.5 sm:gap-3">
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 sm:mt-1 flex-shrink-0 group-hover:-translate-x-1 transition-transform" />
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                    Previous Lesson
                  </div>
                  <div className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2 group-hover:text-primary transition-colors">
                    {previous.lesson.title}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ) : (
        <div className="hidden md:block" />
      )}
      
      {next ? (
        <Link href={`/module/${next.module.id}/lesson/${next.lesson.id}`} className="block">
          <Card className="h-full hover-elevate border-2 cursor-pointer group bg-primary/5 transition-all duration-200" data-testid="button-next-lesson">
            <CardContent className="p-4 sm:p-5 md:p-6">
              <div className="flex items-start gap-2.5 sm:gap-3">
                <div className="flex-1 min-w-0 text-right">
                  <div className="text-[10px] sm:text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                    Next Lesson
                  </div>
                  <div className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2 group-hover:text-primary transition-colors">
                    {next.lesson.title}
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 sm:mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </div>
            </CardContent>
          </Card>
        </Link>
      ) : null}
    </div>
  );
}
