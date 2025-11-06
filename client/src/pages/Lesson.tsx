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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-10" data-testid="breadcrumb">
          <Link 
            href="/" 
            className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer font-medium"
          >
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground font-medium">Module {module.number}</span>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          <span className="text-foreground font-medium">Lesson {lessonIndex + 1}</span>
        </nav>

        {/* Lesson Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-sm text-muted-foreground font-semibold">
            <Badge variant="secondary" className="font-semibold">
              Module {module.number}
            </Badge>
            <span className="text-muted-foreground/50">•</span>
            <div className="flex items-center gap-1.5" data-testid="badge-duration">
              <Clock className="w-3.5 h-3.5" />
              <span>{lesson.duration} min read</span>
            </div>
            <span className="text-muted-foreground/50">•</span>
            <span>Lesson {lessonIndex + 1} of {module.lessons.length}</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight tracking-tight" data-testid="heading-lesson-title">
            {lesson.title}
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8" data-testid="text-module-title">
            {module.title}
          </p>

          <Button 
            variant={isCompleted ? "secondary" : "default"}
            onClick={toggleComplete}
            size="default"
            className="gap-2 font-semibold"
            data-testid="button-toggle-complete"
          >
            <CheckCircle2 className="w-4 h-4" />
            {isCompleted ? "Completed" : "Mark as Complete"}
          </Button>
        </div>

        {/* Learning Objectives */}
        {lesson.objectives && lesson.objectives.length > 0 && (
          <Card className="mb-10 border-2 shadow-sm hover-elevate transition-all">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-5">
                <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-4" data-testid="heading-objectives">
                    Learning Objectives
                  </h3>
                  <ul className="space-y-3">
                    {lesson.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start gap-3 text-[16px] md:text-[17px] text-foreground/90">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{objective}</span>
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
          <Card className="mb-10 bg-muted/40 border shadow-sm">
            <CardContent className="p-6 md:p-7">
              <div className="flex items-start gap-4">
                <BookOpen className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="text-base font-semibold mb-3">Prerequisites</h4>
                  <ul className="space-y-2">
                    {lesson.prerequisites.map((prereq, index) => (
                      <li key={index} className="text-[15px] md:text-[16px] text-muted-foreground leading-relaxed">
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
          <Card className="mb-10 border-2 bg-primary/5 shadow-sm hover-elevate transition-all">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-5">
                <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-4" data-testid="heading-takeaways">
                    Key Takeaways
                  </h3>
                  <ul className="space-y-3">
                    {lesson.keyTakeaways.map((takeaway, index) => (
                      <li key={index} className="flex items-start gap-3 text-[16px] md:text-[17px] text-foreground/90">
                        <span className="text-primary font-bold text-xl mt-0.5 flex-shrink-0">•</span>
                        <span className="leading-relaxed">{takeaway}</span>
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
          <Card className="mb-10 shadow-sm border-2">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-bold mb-5" data-testid="heading-resources">
                Additional Resources
              </h3>
              <div className="grid gap-4">
                {lesson.resources.map((resource, index) => {
                  const Icon = getResourceIcon(resource.type);
                  return (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-5 rounded-xl border-2 hover-elevate active-elevate-2 transition-all group shadow-sm"
                      data-testid={`link-resource-${index}`}
                    >
                      <div className="p-3 bg-muted/50 rounded-lg flex-shrink-0">
                        <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-[16px] group-hover:text-primary transition-colors mb-1">
                          {resource.title}
                        </div>
                        <div className="text-sm text-muted-foreground capitalize">
                          {resource.type}
                        </div>
                      </div>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                    </a>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Module Project Card */}
        {module.project && lessonIndex === module.lessons.length - 1 && (
          <Card className="mb-10 border-2 bg-gradient-to-br from-primary/5 to-primary/10 shadow-lg hover-elevate transition-all">
            <div className="p-6 md:p-10">
              <div className="flex items-start gap-5">
                <div className="p-4 bg-primary/15 rounded-2xl flex-shrink-0 shadow-sm">
                  <Lightbulb className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3" data-testid="heading-project">
                    Module Project
                  </h3>
                  <p className="text-[17px] md:text-[18px] text-foreground/90 mb-5 leading-relaxed" data-testid="text-project">
                    {module.project}
                  </p>
                  <p className="text-[15px] md:text-[16px] text-muted-foreground leading-relaxed">
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
