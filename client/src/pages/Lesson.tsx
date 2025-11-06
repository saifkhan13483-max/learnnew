import { useRoute } from "wouter";
import { getModuleById, getLessonById, getNextLesson, getPreviousLesson } from "@shared/courseData";
import LessonContent from "@/components/LessonContent";
import LessonNavigation from "@/components/LessonNavigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, Lightbulb, ChevronRight, Target, BookOpen, ExternalLink, FileText, Video, Wrench, BookMarked, Award, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import NotFound from "./not-found";
import { Link } from "wouter";
import { Progress } from "@/components/ui/progress";

export default function Lesson() {
  const [, params] = useRoute("/module/:moduleId/lesson/:lessonId");
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [readingProgress, setReadingProgress] = useState(0);
  
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
    setReadingProgress(0);
  }, [lessonId]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const trackLength = documentHeight - windowHeight;
      const progress = (scrollTop / trackLength) * 100;
      setReadingProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
  const lessonProgress = ((lessonIndex + 1) / module.lessons.length) * 100;

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
    <div className="bg-gradient-to-b from-background via-background to-muted/20 min-h-screen">
      <div className="fixed top-0 left-0 right-0 h-1 bg-muted/30 z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary via-primary to-primary/80 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16">
        <nav className="flex items-center gap-2 text-xs sm:text-sm mb-6 sm:mb-8 md:mb-10 flex-wrap" data-testid="breadcrumb">
          <Link 
            href="/" 
            className="text-muted-foreground hover:text-primary transition-colors cursor-pointer font-medium flex items-center gap-1.5"
          >
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground/50 flex-shrink-0" />
          <span className="text-muted-foreground font-medium truncate">Module {module.number}</span>
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground/50 flex-shrink-0" />
          <span className="text-foreground font-semibold truncate">Lesson {lessonIndex + 1}</span>
        </nav>

        <div className="mb-8 sm:mb-10 md:mb-14">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
            <Badge variant="secondary" className="font-semibold text-xs sm:text-sm px-3 py-1 bg-primary/10 text-primary border-primary/20">
              Module {module.number}
            </Badge>
            <span className="text-muted-foreground/50 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5" data-testid="badge-duration">
              <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0 text-muted-foreground" />
              <span className="text-xs sm:text-sm text-muted-foreground font-medium">{lesson.duration} min read</span>
            </div>
            <span className="text-muted-foreground/50 hidden sm:inline">•</span>
            <span className="text-xs sm:text-sm text-muted-foreground font-medium">Lesson {lessonIndex + 1} of {module.lessons.length}</span>
          </div>

          <div className="mb-4 sm:mb-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs sm:text-sm text-muted-foreground font-medium">Module Progress</span>
              <span className="text-xs sm:text-sm text-primary font-semibold">{Math.round(lessonProgress)}%</span>
            </div>
            <Progress value={lessonProgress} className="h-2 bg-muted" />
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text" data-testid="heading-lesson-title">
            {lesson.title}
          </h1>
          
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 font-medium" data-testid="text-module-title">
            {module.title}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button 
              variant={isCompleted ? "secondary" : "default"}
              onClick={toggleComplete}
              size="default"
              className="gap-2 font-semibold shadow-md hover:shadow-lg transition-all duration-200"
              data-testid="button-toggle-complete"
            >
              <CheckCircle2 className="w-4 h-4" />
              {isCompleted ? "Completed" : "Mark as Complete"}
            </Button>
            {isCompleted && (
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/20 rounded-lg">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Lesson Complete!</span>
              </div>
            )}
          </div>
        </div>

        {lesson.objectives && lesson.objectives.length > 0 && (
          <Card className="mb-6 sm:mb-8 md:mb-10 border-2 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50 backdrop-blur">
            <CardContent className="p-5 sm:p-6 md:p-8">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="p-2.5 sm:p-3 bg-gradient-to-br from-primary to-primary/80 rounded-xl sm:rounded-2xl flex-shrink-0 shadow-md">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2" data-testid="heading-objectives">
                    <span>Learning Objectives</span>
                    <TrendingUp className="w-4 h-4 text-primary" />
                  </h3>
                  <ul className="space-y-2.5 sm:space-y-3">
                    {lesson.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start gap-2.5 sm:gap-3 text-sm sm:text-base md:text-[17px] text-foreground/90 group">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
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
          <Card className="mb-6 sm:mb-8 md:mb-10 bg-gradient-to-br from-muted/40 to-muted/20 border-2 shadow-md hover:shadow-lg transition-all duration-300">
            <CardContent className="p-5 sm:p-6 md:p-7">
              <div className="flex items-start gap-3 sm:gap-4">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm sm:text-base font-bold mb-2.5 sm:mb-3 text-foreground">Prerequisites</h4>
                  <ul className="space-y-2">
                    {lesson.prerequisites.map((prereq, index) => (
                      <li key={index} className="text-sm sm:text-[15px] md:text-[16px] text-muted-foreground leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{prereq}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="mb-10 sm:mb-12 relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent rounded-full hidden lg:block" />
          <LessonContent content={lesson.content} />
        </div>

        {lesson.keyTakeaways && lesson.keyTakeaways.length > 0 && (
          <Card className="mb-6 sm:mb-8 md:mb-10 border-2 bg-gradient-to-br from-amber-50/50 to-primary/5 dark:from-amber-950/20 dark:to-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 border-primary/30">
            <CardContent className="p-5 sm:p-6 md:p-8">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="p-2.5 sm:p-3 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl sm:rounded-2xl flex-shrink-0 shadow-md">
                  <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground" data-testid="heading-takeaways">
                    Key Takeaways
                  </h3>
                  <ul className="space-y-2.5 sm:space-y-3">
                    {lesson.keyTakeaways.map((takeaway, index) => (
                      <li key={index} className="flex items-start gap-2.5 sm:gap-3 text-sm sm:text-base md:text-[17px] text-foreground/90 group">
                        <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary/10 text-primary font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                          {index + 1}
                        </span>
                        <span className="leading-relaxed pt-0.5">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {lesson.resources && lesson.resources.length > 0 && (
          <Card className="mb-6 sm:mb-8 md:mb-10 shadow-lg border-2 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/80">
            <CardContent className="p-5 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2" data-testid="heading-resources">
                <ExternalLink className="w-5 h-5 text-primary" />
                <span>Additional Resources</span>
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
                      className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 group shadow-sm hover:shadow-md"
                      data-testid={`link-resource-${index}`}
                    >
                      <div className="p-2.5 sm:p-3 bg-gradient-to-br from-muted to-muted/50 rounded-lg flex-shrink-0 group-hover:from-primary/10 group-hover:to-primary/5 transition-all">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm sm:text-[16px] group-hover:text-primary transition-colors mb-0.5 sm:mb-1 truncate">
                          {resource.title}
                        </div>
                        <div className="text-xs sm:text-sm text-muted-foreground capitalize flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {resource.type}
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </a>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {module.project && lessonIndex === module.lessons.length - 1 && (
          <Card className="mb-6 sm:mb-8 md:mb-10 border-2 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 shadow-xl hover:shadow-2xl transition-all duration-300 border-primary/30 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl -z-0" />
            <CardContent className="p-5 sm:p-6 md:p-10 relative">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="p-3 sm:p-4 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex-shrink-0 shadow-lg">
                  <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold" data-testid="heading-project">
                      Module Project
                    </h3>
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-base sm:text-[17px] md:text-[18px] text-foreground/90 mb-4 sm:mb-5 leading-relaxed font-medium" data-testid="text-project">
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

        <div className="border-t-2 border-dashed border-border pt-6 sm:pt-8 md:pt-10">
          <LessonNavigation previous={previous} next={next} />
        </div>
      </div>
    </div>
  );
}
