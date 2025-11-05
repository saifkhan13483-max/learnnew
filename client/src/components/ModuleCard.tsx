import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import type { Module } from "@shared/courseData";

interface ModuleCardProps {
  module: Module;
  progress?: number;
}

export default function ModuleCard({ module, progress = 0 }: ModuleCardProps) {
  const totalDuration = module.lessons.reduce((sum, lesson) => sum + lesson.duration, 0);
  const isCompleted = progress === 100;
  
  return (
    <Card className="hover-elevate h-full flex flex-col">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <Badge variant="secondary" className="text-xs font-semibold">
            Module {module.number}
          </Badge>
          {isCompleted && (
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" data-testid={`icon-completed-${module.id}`} />
          )}
        </div>
        <h3 className="text-lg font-semibold leading-tight" data-testid={`text-module-title-${module.id}`}>
          {module.title}
        </h3>
      </CardHeader>
      
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-module-description-${module.id}`}>
          {module.description}
        </p>
      </CardContent>
      
      <CardFooter className="flex flex-col gap-4">
        <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" />
            <span data-testid={`text-lesson-count-${module.id}`}>{module.lessons.length} lessons</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span data-testid={`text-duration-${module.id}`}>{totalDuration} min</span>
          </div>
        </div>
        
        {progress > 0 && (
          <div className="w-full">
            <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
              <span>Progress</span>
              <span data-testid={`text-progress-${module.id}`}>{progress}%</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-1.5">
              <div 
                className="bg-primary h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
                data-testid={`progress-bar-${module.id}`}
              />
            </div>
          </div>
        )}
        
        <Link href={`/module/${module.id}/lesson/${module.lessons[0].id}`} className="w-full">
          <Button className="w-full" variant={isCompleted ? "secondary" : "default"} data-testid={`button-start-${module.id}`}>
            {progress > 0 && progress < 100 ? "Continue" : progress === 100 ? "Review" : "Start Module"}
          </Button>
        </Link>
        
        {module.project && (
          <div className="w-full pt-2 border-t">
            <div className="text-xs text-muted-foreground">
              <span className="font-medium">Project:</span> {module.project}
            </div>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
