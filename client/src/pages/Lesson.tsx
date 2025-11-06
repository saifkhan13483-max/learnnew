import { useRoute } from "wouter";
import { getModuleById, getLessonById, getNextLesson, getPreviousLesson } from "@shared/courseData";
import LessonContent from "@/components/LessonContent";
import LessonNavigation from "@/components/LessonNavigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, Lightbulb, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import NotFound from "./not-found";
import { Link } from "wouter";

export default function Lesson() {
  const [, params] = useRoute("/module/:moduleId/lesson/:lessonId");
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  
  if (!params) return <NotFound />;

  const { moduleId, lessonId } = params;
  const module = getModuleById(moduleId);
  const lesson = getLessonById(moduleId, lessonId);

  useEffect(() => {
    const stored = localStorage.getItem("completedLessons");
    if (stored) {
      setCompletedLessons(new Set(JSON.parse(stored)));
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [lessonId]);

  if (!module || !lesson) {
    return <NotFound />;
  }

  const nextData = getNextLesson(moduleId, lessonId);
  const previousData = getPreviousLesson(moduleId, lessonId);
  
  const next = nextData ? {
    module: getModuleById(nextData.moduleId)!,
    lesson: getLessonById(nextData.moduleId, nextData.lessonId)!
  } : null;
  
  const previous = previousData ? {
    module: getModuleById(previousData.moduleId)!,
    lesson: getLessonById(previousData.moduleId, previousData.lessonId)!
  } : null;
  
  const isCompleted = completedLessons.has(lessonId);

  const toggleComplete = () => {
    const updated = new Set(completedLessons);
    if (isCompleted) {
      updated.delete(lessonId);
    } else {
      updated.add(lessonId);
    }
    setCompletedLessons(updated);
    localStorage.setItem("completedLessons", JSON.stringify(Array.from(updated)));
  };

  const lessonIndex = module.lessons.findIndex(l => l.id === lessonId);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-8" data-testid="breadcrumb">
          <Link 
            href="/" 
            className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">Module {module.number}</span>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          <span className="text-foreground">Lesson {lessonIndex + 1}</span>
        </nav>

        {/* Lesson Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4 text-sm text-muted-foreground">
            <span>Module {module.number}</span>
            <span>·</span>
            <span data-testid="badge-duration">
              {lesson.duration} min
            </span>
            <span>·</span>
            <span>Lesson {lessonIndex + 1} of {module.lessons.length}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight tracking-tight" data-testid="heading-lesson-title">
            {lesson.title}
          </h1>
          
          <p className="text-muted-foreground mb-6" data-testid="text-module-title">
            {module.title}
          </p>

          <Button 
            variant={isCompleted ? "secondary" : "default"}
            onClick={toggleComplete}
            size="sm"
            className="gap-2"
            data-testid="button-toggle-complete"
          >
            <CheckCircle2 className="w-4 h-4" />
            {isCompleted ? "Completed" : "Mark Complete"}
          </Button>
        </div>

        {/* Lesson Content */}
        <div className="mb-12">
          <LessonContent content={lesson.content} />
        </div>

        {/* Module Project Card */}
        {module.project && lessonIndex === module.lessons.length - 1 && (
          <Card className="mb-8 border-2 bg-primary/5">
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2" data-testid="heading-project">
                    Module Project
                  </h3>
                  <p className="text-muted-foreground mb-4" data-testid="text-project">
                    {module.project}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Apply what you've learned in this module by building this hands-on project. 
                    This practical exercise will help reinforce the concepts and give you real-world experience.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Navigation */}
        <LessonNavigation previous={previous} next={next} />
      </div>
    </div>
  );
}
