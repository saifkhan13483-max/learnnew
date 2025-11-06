import { useRoute } from "wouter";
import { getModuleById, getLessonById, getNextLesson, getPreviousLesson } from "@shared/courseData";
import LessonContent from "@/components/LessonContent";
import LessonNavigation from "@/components/LessonNavigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, Lightbulb, ChevronRight, Target, BookOpen, ExternalLink, FileText, Video, Wrench, BookMarked } from "lucide-react";
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

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'video': return Video;
      case 'tool': return Wrench;
      case 'documentation': return BookMarked;
      case 'article': return FileText;
      default: return ExternalLink;
    }
  };

  return (
    <div className="bg-background">
      <div className="max-w-5xl mx-auto px-6 py-8 md:py-12">
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
          <div className="flex flex-wrap items-center gap-2 mb-4 text-sm text-muted-foreground font-extrabold">
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

        {/* Learning Objectives */}
        {lesson.objectives && lesson.objectives.length > 0 && (
          <Card className="mb-8 border-2">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-3" data-testid="heading-objectives">
                    Learning Objectives
                  </h3>
                  <ul className="space-y-2">
                    {lesson.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-foreground/90">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Prerequisites */}
        {lesson.prerequisites && lesson.prerequisites.length > 0 && (
          <Card className="mb-8 bg-muted/30">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <BookOpen className="w-4 h-4 text-muted-foreground mt-0.5" />
                <div className="flex-1">
                  <h4 className="text-sm font-semibold mb-2">Prerequisites</h4>
                  <ul className="space-y-1">
                    {lesson.prerequisites.map((prereq, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        {prereq}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Lesson Content */}
        <div className="mb-12">
          <LessonContent content={lesson.content} />
        </div>

        {/* Key Takeaways */}
        {lesson.keyTakeaways && lesson.keyTakeaways.length > 0 && (
          <Card className="mb-8 border-2 bg-primary/5">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-3" data-testid="heading-takeaways">
                    Key Takeaways
                  </h3>
                  <ul className="space-y-2">
                    {lesson.keyTakeaways.map((takeaway, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-foreground/90">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Resources */}
        {lesson.resources && lesson.resources.length > 0 && (
          <Card className="mb-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4" data-testid="heading-resources">
                Additional Resources
              </h3>
              <div className="grid gap-3">
                {lesson.resources.map((resource, index) => {
                  const Icon = getResourceIcon(resource.type);
                  return (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-lg border hover-elevate active-elevate-2 transition-all group"
                      data-testid={`link-resource-${index}`}
                    >
                      <div className="p-2 bg-muted rounded-md">
                        <Icon className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm group-hover:text-primary transition-colors">
                          {resource.title}
                        </div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {resource.type}
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
                    </a>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

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
