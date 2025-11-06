import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import type { Module, Lesson } from "@shared/courseData";

interface LessonNavigationProps {
  previous: { module: Module; lesson: Lesson } | null;
  next: { module: Module; lesson: Lesson } | null;
}

export default function LessonNavigation({ previous, next }: LessonNavigationProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mt-8 sm:mt-10 md:mt-12">
      {previous ? (
        <Link href={`/module/${previous.module.id}/lesson/${previous.lesson.id}`} className="block">
          <Card className="h-full hover:shadow-xl border-2 cursor-pointer group transition-all duration-300 hover:border-primary/50 bg-gradient-to-br from-card to-card/80 overflow-hidden relative" data-testid="button-previous-lesson">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardContent className="p-5 sm:p-6 md:p-7 relative">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-muted to-muted/50 group-hover:from-primary/10 group-hover:to-primary/5 transition-all shadow-md flex-shrink-0">
                  <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-x-1 transition-all" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5 sm:mb-2 flex items-center gap-2">
                    <ChevronLeft className="w-3 h-3" />
                    Previous Lesson
                  </div>
                  <div className="font-bold text-sm sm:text-base md:text-lg line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                    {previous.lesson.title}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1.5 sm:mt-2">
                    Module {previous.module.number}
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
          <Card className="h-full hover:shadow-xl border-2 cursor-pointer group bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 transition-all duration-300 hover:border-primary overflow-hidden relative" data-testid="button-next-lesson">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardContent className="p-5 sm:p-6 md:p-7 relative">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-1 min-w-0 text-right">
                  <div className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-wider mb-1.5 sm:mb-2 flex items-center justify-end gap-2">
                    Next Lesson
                    <ChevronRight className="w-3 h-3" />
                  </div>
                  <div className="font-bold text-sm sm:text-base md:text-lg line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                    {next.lesson.title}
                  </div>
                  <div className="text-xs sm:text-sm text-primary/70 mt-1.5 sm:mt-2 font-medium">
                    Module {next.module.number}
                  </div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg flex-shrink-0">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ) : null}
    </div>
  );
}
