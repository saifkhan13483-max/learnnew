import ModuleCard from "@/components/ModuleCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { courseModules } from "@shared/courseData";
import { BookOpen, Clock, Target, Zap } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";

export default function Home() {
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  
  useEffect(() => {
    const stored = localStorage.getItem("completedLessons");
    if (stored) {
      setCompletedLessons(new Set(JSON.parse(stored)));
    }
  }, []);

  const totalLessons = courseModules.reduce((sum, m) => sum + m.lessons.length, 0);
  const totalDuration = courseModules.reduce((sum, m) => 
    sum + m.lessons.reduce((lessonSum, l) => lessonSum + l.duration, 0), 0
  );

  const getModuleProgress = (moduleId: string) => {
    const module = courseModules.find(m => m.id === moduleId);
    if (!module) return 0;
    
    const completedInModule = module.lessons.filter(l => 
      completedLessons.has(l.id)
    ).length;
    
    return Math.round((completedInModule / module.lessons.length) * 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4" data-testid="badge-course-type">
              Complete Online Course
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="heading-course-title">
              AI No-Code Web Development
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="text-course-description">
              Master the art of building any type of website without coding. Learn to use AI agents 
              and modern no-code tools to create portfolios, web apps, forums, social platforms, and more.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={`/module/${courseModules[0].id}/lesson/${courseModules[0].lessons[0].id}`}>
                <Button size="lg" data-testid="button-start-learning">
                  Start Learning
                  <Zap className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" asChild data-testid="button-view-modules">
                <a href="#modules">View Modules</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="flex items-start gap-4 p-6 rounded-lg bg-card border border-card-border">
            <div className="p-3 bg-primary/10 rounded-lg">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold mb-1" data-testid="text-stat-modules">{courseModules.length} Modules</div>
              <div className="text-sm text-muted-foreground">{totalLessons} comprehensive lessons</div>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-lg bg-card border border-card-border">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold mb-1" data-testid="text-stat-duration">~{Math.round(totalDuration / 60)} Hours</div>
              <div className="text-sm text-muted-foreground">At your own pace</div>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-lg bg-card border border-card-border">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold mb-1" data-testid="text-stat-projects">7 Projects</div>
              <div className="text-sm text-muted-foreground">Build real-world applications</div>
            </div>
          </div>
        </div>

        <div id="modules" className="mb-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-3" data-testid="heading-modules">Course Modules</h2>
            <p className="text-muted-foreground text-lg">
              Progress through 12 comprehensive modules covering everything from fundamentals to advanced projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseModules.map((module) => (
              <ModuleCard 
                key={module.id} 
                module={module} 
                progress={getModuleProgress(module.id)}
              />
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-background rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" data-testid="heading-cta">
            Ready to Build Without Code?
          </h2>
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            Join thousands of learners who are creating amazing websites using AI and no-code tools
          </p>
          <Link href={`/module/${courseModules[0].id}/lesson/${courseModules[0].lessons[0].id}`}>
            <Button size="lg" data-testid="button-get-started">
              Get Started Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
