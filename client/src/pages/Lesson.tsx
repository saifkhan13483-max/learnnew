import { useRoute } from "wouter";
import { getModuleById, getLessonById, getNextLesson, getPreviousLesson } from "@shared/courseData";
import LessonContent from "@/components/LessonContent";
import LessonNavigation from "@/components/LessonNavigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import NotFound from "./not-found";

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

  const next = getNextLesson(moduleId, lessonId);
  const previous = getPreviousLesson(moduleId, lessonId);
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
      <div className="max-w-4xl mx-auto px-6 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6" data-testid="breadcrumb">
          <a href="/" className="hover:text-foreground transition-colors">Home</a>
          <span>/</span>
          <span className="text-foreground font-medium">Module {module.number}</span>
          <span>/</span>
          <span className="text-foreground font-medium">Lesson {lessonIndex + 1}</span>
        </nav>

        <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge variant="secondary" data-testid="badge-module">
                Module {module.number}
              </Badge>
              <Badge variant="outline" className="gap-1.5" data-testid="badge-duration">
                <Clock className="w-3 h-3" />
                {lesson.duration} min
              </Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2" data-testid="heading-lesson-title">
              {lesson.title}
            </h1>
            <p className="text-muted-foreground" data-testid="text-module-title">
              {module.title}
            </p>
          </div>
          
          <Button 
            variant={isCompleted ? "secondary" : "default"}
            onClick={toggleComplete}
            className="flex-shrink-0 gap-2"
            data-testid="button-toggle-complete"
          >
            <CheckCircle2 className="w-4 h-4" />
            {isCompleted ? "Completed" : "Mark Complete"}
          </Button>
        </div>

        <div className="bg-card border border-card-border rounded-xl p-8 mb-8">
          <LessonContent content={lesson.content} />
        </div>

        <LessonNavigation previous={previous} next={next} />

        {module.project && lessonIndex === module.lessons.length - 1 && (
          <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-xl">
            <div className="flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2" data-testid="heading-project">Module Project</h3>
                <p className="text-sm text-muted-foreground" data-testid="text-project">
                  {module.project}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
