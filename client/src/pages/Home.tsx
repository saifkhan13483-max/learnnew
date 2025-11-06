import ModuleCard from "@/components/ModuleCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { courseModules } from "@shared/courseData";
import { BookOpen, Clock, Target, Zap, Award, TrendingUp, Users } from "lucide-react";
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
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b">
        <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight" data-testid="heading-course-title">
                AI No-Code Web Development
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-course-description">
                Master building any type of website without coding—from portfolios to full web applications
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              {courseModules.length > 0 && courseModules[0].lessons.length > 0 ? (
                <Link href={`/module/${courseModules[0].id}/lesson/${courseModules[0].lessons[0].id}`}>
                  <Button size="lg" className="px-6 h-11" data-testid="button-start-learning">
                    Start Learning
                  </Button>
                </Link>
              ) : (
                <Button size="lg" className="px-6 h-11" disabled data-testid="button-start-learning">
                  No Courses Available
                </Button>
              )}
              <Button size="lg" variant="outline" className="px-6 h-11" asChild data-testid="button-view-modules">
                <a href="#modules">View Curriculum</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-b">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" data-testid="text-stat-modules">{courseModules.length}</div>
              <div className="text-sm text-muted-foreground">Modules</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" data-testid="text-stat-duration">{totalLessons}</div>
              <div className="text-sm text-muted-foreground">Lessons</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">~{Math.round(totalDuration / 60)}h</div>
              <div className="text-sm text-muted-foreground">Duration</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" data-testid="text-stat-projects">7</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
          </div>
        </div>
      </div>

      {/* What You'll Learn Section */}
      <div className="border-b bg-muted/30">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">What You'll Master</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Build seven types of websites using AI tools and no-code platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { title: "Static Websites", desc: "Portfolios and landing pages" },
              { title: "Dynamic Websites", desc: "Blogs and product catalogs" },
              { title: "Web Applications", desc: "Interactive tools and SaaS" },
              { title: "Forums", desc: "Community platforms" },
              { title: "Social Platforms", desc: "Networking and content sharing" },
              { title: "Membership Sites", desc: "Paid content and subscriptions" },
              { title: "Directories", desc: "Searchable listings and databases" }
            ].map((item, i) => (
              <div key={i} className="p-5 bg-background rounded-lg border">
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modules Section */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div id="modules" className="scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3" data-testid="heading-modules">Course Curriculum</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              12 modules from beginner to advanced
            </p>
          </div>

          <div className="space-y-3">
            {courseModules.map((module) => (
              <ModuleCard 
                key={module.id} 
                module={module} 
                progress={getModuleProgress(module.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
