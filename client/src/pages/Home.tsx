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
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-background pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 text-xs font-semibold px-4 py-1.5" data-testid="badge-course-type">
              <Zap className="w-3.5 h-3.5 mr-1.5" />
              Complete Online Course
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text" data-testid="heading-course-title">
              AI No-Code Web Development
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto" data-testid="text-course-description">
              Master the art of building any type of website without coding. Learn to use AI agents 
              and modern no-code tools to create portfolios, web apps, forums, social platforms, and more.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={`/module/${courseModules[0].id}/lesson/${courseModules[0].lessons[0].id}`}>
                <Button size="lg" className="text-base px-8 h-12 gap-2" data-testid="button-start-learning">
                  Start Learning
                  <Zap className="w-4 h-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-base px-8 h-12" asChild data-testid="button-view-modules">
                <a href="#modules">Browse Modules</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover-elevate border-2">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <Badge variant="secondary" className="text-xs">Essential</Badge>
              </div>
              <div className="text-3xl font-bold mb-1" data-testid="text-stat-modules">{courseModules.length}</div>
              <div className="text-sm text-muted-foreground font-medium">Comprehensive Modules</div>
              <div className="text-xs text-muted-foreground mt-2">{totalLessons} detailed lessons</div>
            </CardContent>
          </Card>

          <Card className="hover-elevate border-2">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <Badge variant="secondary" className="text-xs">Flexible</Badge>
              </div>
              <div className="text-3xl font-bold mb-1" data-testid="text-stat-duration">~{Math.round(totalDuration / 60)}h</div>
              <div className="text-sm text-muted-foreground font-medium">Total Duration</div>
              <div className="text-xs text-muted-foreground mt-2">Learn at your pace</div>
            </CardContent>
          </Card>

          <Card className="hover-elevate border-2">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <Badge variant="secondary" className="text-xs">Practical</Badge>
              </div>
              <div className="text-3xl font-bold mb-1" data-testid="text-stat-projects">7</div>
              <div className="text-sm text-muted-foreground font-medium">Hands-on Projects</div>
              <div className="text-xs text-muted-foreground mt-2">Build real applications</div>
            </CardContent>
          </Card>

          <Card className="hover-elevate border-2">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <Badge variant="secondary" className="text-xs">Complete</Badge>
              </div>
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-sm text-muted-foreground font-medium">No Coding Required</div>
              <div className="text-xs text-muted-foreground mt-2">AI-powered workflow</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* What You'll Learn Section */}
      <div className="bg-muted/30 border-y">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Master</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Build seven different types of websites using cutting-edge AI tools and no-code platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Static Websites", desc: "Portfolios and landing pages", icon: "🎨" },
              { title: "Dynamic Websites", desc: "Blogs and product catalogs", icon: "📰" },
              { title: "Web Applications", desc: "Interactive tools and SaaS", icon: "⚡" },
              { title: "Forums", desc: "Community platforms", icon: "💬" },
              { title: "Social Platforms", desc: "Networking and content sharing", icon: "🌐" },
              { title: "Membership Sites", desc: "Paid content and subscriptions", icon: "🔐" },
              { title: "Directories", desc: "Searchable listings", icon: "📍" }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-background rounded-xl border hover-elevate">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modules Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div id="modules" className="scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-modules">Course Curriculum</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              12 comprehensive modules taking you from complete beginner to confident no-code developer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {courseModules.map((module) => (
              <ModuleCard 
                key={module.id} 
                module={module} 
                progress={getModuleProgress(module.id)}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-background border-2">
          <CardContent className="p-12 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-background/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Join the no-code revolution</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-cta">
                Ready to Build Without Code?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Start your journey today and learn to create professional websites using AI and no-code tools
              </p>
              <Link href={`/module/${courseModules[0].id}/lesson/${courseModules[0].lessons[0].id}`}>
                <Button size="lg" className="text-base px-8 h-12 gap-2" data-testid="button-get-started">
                  Begin Your Journey
                  <Zap className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
