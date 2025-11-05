import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import type { Module, Lesson } from "@shared/courseData";

interface LessonNavigationProps {
  previous: { module: Module; lesson: Lesson } | null;
  next: { module: Module; lesson: Lesson } | null;
}

export default function LessonNavigation({ previous, next }: LessonNavigationProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t">
      <div className="flex-1">
        {previous && (
          <Link href={`/module/${previous.module.id}/lesson/${previous.lesson.id}`}>
            <Button variant="outline" className="w-full justify-start group" data-testid="button-previous-lesson">
              <ChevronLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              <div className="text-left flex-1">
                <div className="text-xs text-muted-foreground">Previous</div>
                <div className="font-medium line-clamp-1">{previous.lesson.title}</div>
              </div>
            </Button>
          </Link>
        )}
      </div>
      
      <div className="flex-1">
        {next && (
          <Link href={`/module/${next.module.id}/lesson/${next.lesson.id}`}>
            <Button variant="default" className="w-full justify-end group" data-testid="button-next-lesson">
              <div className="text-right flex-1">
                <div className="text-xs text-primary-foreground/80">Next</div>
                <div className="font-medium line-clamp-1">{next.lesson.title}</div>
              </div>
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
