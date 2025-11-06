import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, CheckCircle2, Circle, GraduationCap, Home, Award, Table } from "lucide-react";
import { Link, useLocation } from "wouter";
import { courseModules } from "@shared/courseData";
import { useState, useEffect } from "react";

export default function CourseSidebar() {
  const [location] = useLocation();
  const [openModules, setOpenModules] = useState<Set<string>>(new Set());
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());

  useEffect(() => {
    const stored = localStorage.getItem("completedLessons");
    if (stored) {
      setCompletedLessons(new Set(JSON.parse(stored)));
    }
  }, [location]);

  useEffect(() => {
    const currentModule = courseModules.find(m => 
      location.includes(`/module/${m.id}`)
    );
    if (currentModule) {
      setOpenModules(prev => new Set(prev).add(currentModule.id));
    }
  }, [location]);

  const toggleModule = (moduleId: string) => {
    setOpenModules(prev => {
      const next = new Set(prev);
      if (next.has(moduleId)) {
        next.delete(moduleId);
      } else {
        next.add(moduleId);
      }
      return next;
    });
  };

  const isLessonActive = (moduleId: string, lessonId: string) => {
    return location === `/module/${moduleId}/lesson/${lessonId}`;
  };

  const getModuleProgress = (moduleId: string) => {
    const module = courseModules.find(m => m.id === moduleId);
    if (!module) return 0;
    
    const completedCount = module.lessons.filter(l => completedLessons.has(l.id)).length;
    return Math.round((completedCount / module.lessons.length) * 100);
  };

  const totalLessons = courseModules.reduce((sum, m) => sum + m.lessons.length, 0);
  const overallProgress = Math.round((completedLessons.size / totalLessons) * 100);

  return (
    <Sidebar data-testid="sidebar-course">
      <SidebarHeader className="p-6 border-b">
        <Link href="/">
          <div className="flex items-center gap-3 hover-elevate p-3 rounded-xl cursor-pointer" data-testid="link-home">
            <div className="p-2 bg-primary/10 rounded-lg">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-bold text-sm truncate">AI No-Code Course</h2>
              <p className="text-xs text-muted-foreground">Web Development</p>
            </div>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={location === "/"}>
                  <Link href="/" data-testid="link-course-home">
                    <Home className="w-4 h-4" />
                    <span>Course Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={location === "/tool-comparison"}>
                  <Link href="/tool-comparison" data-testid="link-tool-comparison">
                    <Table className="w-4 h-4" />
                    <span>Tool Comparison</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold uppercase tracking-wider">
            Course Modules
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {courseModules.map((module) => {
                const moduleProgress = getModuleProgress(module.id);
                const isModuleComplete = moduleProgress === 100;
                
                return (
                  <Collapsible
                    key={module.id}
                    open={openModules.has(module.id)}
                    onOpenChange={() => toggleModule(module.id)}
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton 
                          className="w-full font-medium group"
                          data-testid={`button-toggle-module-${module.id}`}
                        >
                          <ChevronDown 
                            className={`w-4 h-4 transition-transform ${
                              openModules.has(module.id) ? "rotate-0" : "-rotate-90"
                            }`}
                          />
                          <span className="flex-1 text-left text-sm">
                            {module.number}. {module.title.length > 30 ? module.title.substring(0, 30) + '...' : module.title}
                          </span>
                          {isModuleComplete && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          )}
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenu className="ml-2 mt-1 space-y-0.5 border-l-2 border-border pl-2">
                          {module.lessons.map((lesson) => {
                            const isActive = isLessonActive(module.id, lesson.id);
                            const isCompleted = completedLessons.has(lesson.id);
                            
                            return (
                              <SidebarMenuItem key={lesson.id}>
                                <SidebarMenuButton 
                                  asChild 
                                  isActive={isActive}
                                  className="text-xs py-1.5"
                                  data-testid={`link-lesson-${lesson.id}`}
                                >
                                  <Link href={`/module/${module.id}/lesson/${lesson.id}`}>
                                    {isCompleted ? (
                                      <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0" />
                                    ) : (
                                      <Circle className="w-3 h-3 flex-shrink-0" />
                                    )}
                                    <span className="flex-1 truncate">{lesson.title}</span>
                                    <span className="text-xs text-muted-foreground flex-shrink-0">{lesson.duration}m</span>
                                  </Link>
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                            );
                          })}
                        </SidebarMenu>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold">Overall Progress</span>
          </div>
          <div>
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="text-muted-foreground">{completedLessons.size} of {totalLessons} lessons</span>
              <span className="font-bold text-primary">{overallProgress}%</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-500"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
