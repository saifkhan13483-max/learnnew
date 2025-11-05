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
import { ChevronDown, CheckCircle2, Circle, GraduationCap, Home } from "lucide-react";
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

  return (
    <Sidebar data-testid="sidebar-course">
      <SidebarHeader className="p-6">
        <Link href="/">
          <div className="flex items-center gap-2 hover-elevate p-2 rounded-lg cursor-pointer" data-testid="link-home">
            <GraduationCap className="w-6 h-6 text-primary" />
            <div>
              <h2 className="font-semibold text-sm">AI No-Code Course</h2>
              <p className="text-xs text-muted-foreground">Web Development</p>
            </div>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2 mb-2">
            <Home className="w-4 h-4" />
            Navigation
          </SidebarGroupLabel>
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
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Course Modules</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {courseModules.map((module) => (
                <Collapsible
                  key={module.id}
                  open={openModules.has(module.id)}
                  onOpenChange={() => toggleModule(module.id)}
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton 
                        className="w-full font-medium"
                        data-testid={`button-toggle-module-${module.id}`}
                      >
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform ${
                            openModules.has(module.id) ? "rotate-0" : "-rotate-90"
                          }`}
                        />
                        <span className="flex-1 text-left">
                          {module.number}. {module.title}
                        </span>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenu className="ml-4 mt-1 space-y-0.5">
                        {module.lessons.map((lesson) => {
                          const isActive = isLessonActive(module.id, lesson.id);
                          const isCompleted = completedLessons.has(lesson.id);
                          
                          return (
                            <SidebarMenuItem key={lesson.id}>
                              <SidebarMenuButton 
                                asChild 
                                isActive={isActive}
                                className="text-sm"
                                data-testid={`link-lesson-${lesson.id}`}
                              >
                                <Link href={`/module/${module.id}/lesson/${lesson.id}`}>
                                  {isCompleted ? (
                                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                                  ) : (
                                    <Circle className="w-3.5 h-3.5" />
                                  )}
                                  <span className="flex-1">{lesson.title}</span>
                                  <span className="text-xs text-muted-foreground">{lesson.duration}m</span>
                                </Link>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          );
                        })}
                      </SidebarMenu>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="text-xs text-muted-foreground">
          <p className="font-medium mb-1">Course Progress</p>
          <div className="flex items-center justify-between">
            <span>{completedLessons.size} lessons completed</span>
            <span className="font-semibold text-foreground">
              {Math.round((completedLessons.size / getAllLessonsCount()) * 100)}%
            </span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

function getAllLessonsCount() {
  return courseModules.reduce((sum, module) => sum + module.lessons.length, 0);
}
