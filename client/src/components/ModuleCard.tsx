import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, CheckCircle2, ArrowRight, Lightbulb } from "lucide-react";
import { Link } from "wouter";
import type { Module } from "@shared/courseData";

interface ModuleCardProps {
  module: Module;
  progress?: number;
}

export default function ModuleCard({ module, progress = 0 }: ModuleCardProps) {
  const totalDuration = module.lessons.reduce((sum, lesson) => sum + lesson.duration, 0);
  const isCompleted = progress === 100;
  const isInProgress = progress > 0 && progress < 100;
  
  return (
    <Card className="hover-elevate h-full flex flex-col border-2 group transition-all duration-200">
      <CardHeader className="space-y-4 pb-4">
        <div className="flex items-start justify-between gap-3">
          <Badge variant="outline" className="text-xs font-semibold border-2">
            Module {module.number}
          </Badge>
          {isCompleted ? (
            <div className="flex items-center gap-1.5 text-primary" data-testid={`icon-completed-${module.id}`}>
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              <span className="text-xs font-semibold">Complete</span>
            </div>
          ) : isInProgress ? (
            <Badge variant="secondary" className="text-xs">
              In Progress
            </Badge>
          ) : null}
        </div>
        <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors" data-testid={`text-module-title-${module.id}`}>
          {module.title}
        </h3>
      </CardHeader>
      
      <CardContent className="flex-1 pb-4">
        <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-module-description-${module.id}`}>
          {module.description}
        </p>
      </CardContent>
      
      <CardFooter className="flex flex-col gap-4 pt-4 border-t">
        <div className="flex items-center justify-between w-full text-sm">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <BookOpen className="w-4 h-4" />
            <span data-testid={`text-lesson-count-${module.id}`} className="font-medium">{module.lessons.length} lessons</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span data-testid={`text-duration-${module.id}`} className="font-medium">{totalDuration} min</span>
          </div>
        </div>
        
        {progress > 0 && (
          <div className="w-full">
            <div className="flex items-center justify-between text-xs font-medium mb-2">
              <span className="text-muted-foreground">Progress</span>
              <span className="text-primary" data-testid={`text-progress-${module.id}`}>{progress}%</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
                data-testid={`progress-bar-${module.id}`}
              />
            </div>
          </div>
        )}
        
        <Link href={`/module/${module.id}/lesson/${module.lessons[0].id}`} className="w-full">
          <Button 
            className="w-full gap-2 group/btn" 
            variant={isCompleted ? "outline" : "default"} 
            data-testid={`button-start-${module.id}`}
          >
            {progress > 0 && progress < 100 ? "Continue Learning" : progress === 100 ? "Review Module" : "Start Module"}
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
        
        {module.project && (
          <div className="w-full pt-3 border-t">
            <div className="flex items-start gap-2 text-xs">
              <Lightbulb className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold text-foreground">Project:</span>
                <span className="text-muted-foreground ml-1">{module.project}</span>
              </div>
            </div>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
