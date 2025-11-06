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
    <div className="bg-background min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16">
        <nav className="flex items-center gap-2 text-xs sm:text-sm mb-6 sm:mb-8 md:mb-10 flex-wrap" data-testid="breadcrumb">
          <Link 
            href="/" 
            className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer font-medium"
          >
            Home
          </Link>
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground flex-shrink-0" />
          <span className="text-muted-foreground font-medium truncate">Module {module.number}</span>
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground flex-shrink-0" />
          <span className="text-foreground font-medium truncate">Lesson {lessonIndex + 1}</span>
        </nav>

        <div className="mb-10 sm:mb-12 md:mb-16">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-5 text-xs sm:text-sm text-muted-foreground font-semibold">
            <Badge variant="secondary" className="font-semibold text-xs sm:text-sm">
              Module {module.number}
            </Badge>
            <span className="text-muted-foreground/50 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5" data-testid="badge-duration">
              <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
              <span>{lesson.duration} min</span>
            </div>
            <span className="text-muted-foreground/50 hidden sm:inline">•</span>
            <span className="text-xs sm:text-sm">Lesson {lessonIndex + 1} of {module.lessons.length}</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight tracking-tight" data-testid="heading-lesson-title">
            {lesson.title}
          </h1>
          
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8" data-testid="text-module-title">
            {module.title}
          </p>

          <Button 
            variant={isCompleted ? "secondary" : "default"}
            onClick={toggleComplete}
            size="default"
            className="gap-2 font-semibold w-full sm:w-auto"
            data-testid="button-toggle-complete"
          >
            <CheckCircle2 className="w-4 h-4" />
            {isCompleted ? "Completed" : "Mark as Complete"}
          </Button>
        </div>

        {lesson.objectives && lesson.objectives.length > 0 && (
          <Card className="mb-8 sm:mb-10 border-2 shadow-sm hover-elevate transition-all">
            <CardContent className="p-5 sm:p-6 md:p-8">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="p-2.5 sm:p-3 bg-primary/10 rounded-lg sm:rounded-xl flex-shrink-0">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4" data-testid="heading-objectives">
                    Learning Objectives
                  </h3>
                  <ul className="space-y-2.5 sm:space-y-3">
                    {lesson.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start gap-2.5 sm:gap-3 text-sm sm:text-base md:text-[17px] text-foreground/90">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {lesson.prerequisites && lesson.prerequisites.length > 0 && (
          <Card className="mb-8 sm:mb-10 bg-muted/40 border shadow-sm">
            <CardContent className="p-5 sm:p-6 md:p-7">
              <div className="flex items-start gap-3 sm:gap-4">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm sm:text-base font-semibold mb-2.5 sm:mb-3">Prerequisites</h4>
                  <ul className="space-y-2">
                    {lesson.prerequisites.map((prereq, index) => (
                      <li key={index} className="text-sm sm:text-[15px] md:text-[16px] text-muted-foreground leading-relaxed">
                        {prereq}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="mb-10 sm:mb-12">
          <LessonContent content={lesson.content} />
        </div>

        {lesson.keyTakeaways && lesson.keyTakeaways.length > 0 && (
          <Card className="mb-8 sm:mb-10 border-2 bg-primary/5 shadow-sm hover-elevate transition-all">
            <CardContent className="p-5 sm:p-6 md:p-8">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="p-2.5 sm:p-3 bg-primary/10 rounded-lg sm:rounded-xl flex-shrink-0">
                  <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4" data-testid="heading-takeaways">
                    Key Takeaways
                  </h3>
                  <ul className="space-y-2.5 sm:space-y-3">
                    {lesson.keyTakeaways.map((takeaway, index) => (
                      <li key={index} className="flex items-start gap-2.5 sm:gap-3 text-sm sm:text-base md:text-[17px] text-foreground/90">
                        <span className="text-primary font-bold text-lg sm:text-xl mt-0.5 flex-shrink-0">•</span>
                        <span className="leading-relaxed">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {lesson.resources && lesson.resources.length > 0 && (
          <Card className="mb-8 sm:mb-10 shadow-sm border-2">
            <CardContent className="p-5 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-5" data-testid="heading-resources">
                Additional Resources
              </h3>
              <div className="grid gap-3 sm:gap-4">
                {lesson.resources.map((resource, index) => {
                  const Icon = getResourceIcon(resource.type);
                  return (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-lg sm:rounded-xl border-2 hover-elevate active-elevate-2 transition-all group shadow-sm"
                      data-testid={`link-resource-${index}`}
                    >
                      <div className="p-2 sm:p-3 bg-muted/50 rounded-lg flex-shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm sm:text-[16px] group-hover:text-primary transition-colors mb-0.5 sm:mb-1 truncate">
                          {resource.title}
                        </div>
                        <div className="text-xs sm:text-sm text-muted-foreground capitalize">
                          {resource.type}
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                    </a>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {module.project && lessonIndex === module.lessons.length - 1 && (
          <Card className="mb-8 sm:mb-10 border-2 bg-gradient-to-br from-primary/5 to-primary/10 shadow-lg hover-elevate transition-all">
            <CardContent className="p-5 sm:p-6 md:p-10">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="p-3 sm:p-4 bg-primary/15 rounded-xl sm:rounded-2xl flex-shrink-0 shadow-sm">
                  <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3" data-testid="heading-project">
                    Module Project
                  </h3>
                  <p className="text-base sm:text-[17px] md:text-[18px] text-foreground/90 mb-4 sm:mb-5 leading-relaxed" data-testid="text-project">
                    {module.project}
                  </p>
                  <p className="text-sm sm:text-[15px] md:text-[16px] text-muted-foreground leading-relaxed">
                    Apply what you've learned in this module by building this hands-on project. 
                    This practical exercise will help reinforce the concepts and give you real-world experience.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <LessonNavigation previous={previous} next={next} />
      </div>
    </div>
  );
}
