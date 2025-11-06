import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, CheckCircle2, ArrowRight, Lightbulb, Target, Signal } from "lucide-react";
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
  
  const getDifficultyVariant = (difficulty?: string): 'default' | 'secondary' | 'outline' => {
    switch (difficulty) {
      case 'beginner': return 'secondary';
      case 'intermediate': return 'outline';
      case 'advanced': return 'outline';
      default: return 'outline';
    }
  };

  return (
    <Link href={`/module/${module.id}/lesson/${module.lessons[0].id}`}>
      <Card className="hover:border-foreground/20 transition-colors group cursor-pointer">
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="text-xs font-medium">
                  Module {module.number}
                </Badge>
                {module.difficulty && (
                  <Badge 
                    variant={getDifficultyVariant(module.difficulty)}
                    className="text-xs capitalize"
                    data-testid={`badge-difficulty-${module.id}`}
                  >
                    <Signal className="w-3 h-3 mr-1" />
                    {module.difficulty}
                  </Badge>
                )}
                {isCompleted && (
                  <div className="flex items-center gap-1.5 text-primary text-xs" data-testid={`icon-completed-${module.id}`}>
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="font-medium">Complete</span>
                  </div>
                )}
                {isInProgress && (
                  <Badge variant="secondary" className="text-xs">In Progress {progress}%</Badge>
                )}
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-1.5 group-hover:text-primary transition-colors" data-testid={`text-module-title-${module.id}`}>
                  {module.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-module-description-${module.id}`}>
                  {module.description}
                </p>
              </div>
              
              {module.learningOutcomes && module.learningOutcomes.length > 0 && (
                <div className="pt-2 border-t">
                  <div className="flex items-start gap-2 mb-2">
                    <Target className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-xs font-semibold text-foreground">What you'll learn:</span>
                  </div>
                  <ul className="space-y-1.5 ml-5">
                    {module.learningOutcomes.slice(0, 3).map((outcome, index) => (
                      <li key={index} className="text-xs text-muted-foreground leading-relaxed">
                        {outcome}
                      </li>
                    ))}
                    {module.learningOutcomes.length > 3 && (
                      <li className="text-xs text-muted-foreground italic">
                        +{module.learningOutcomes.length - 3} more...
                      </li>
                    )}
                  </ul>
                </div>
              )}
              
              <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span data-testid={`text-lesson-count-${module.id}`}>{module.lessons.length} lessons</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span data-testid={`text-duration-${module.id}`}>{totalDuration} min</span>
                </div>
                {module.project && (
                  <div className="flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>Project included</span>
                  </div>
                )}
              </div>
            </div>
            
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
          </div>
          
          {progress > 0 && (
            <div className="w-full mt-4 pt-4 border-t">
              <div className="w-full bg-secondary rounded-full h-1.5 overflow-hidden">
                <div 
                  className="bg-primary h-1.5 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                  data-testid={`progress-bar-${module.id}`}
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
