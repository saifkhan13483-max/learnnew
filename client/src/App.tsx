import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import CourseSidebar from "@/components/CourseSidebar";
import Home from "@/pages/Home";
import Lesson from "@/pages/Lesson";
import ToolComparison from "@/pages/ToolComparison";
import NotFound from "@/pages/not-found";
import { Menu, GraduationCap } from "lucide-react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/tool-comparison" component={ToolComparison} />
      <Route path="/module/:moduleId/lesson/:lessonId" component={Lesson} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const style = {
    "--sidebar-width": "21rem",
    "--sidebar-width-icon": "4rem",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SidebarProvider style={style as React.CSSProperties}>
          <div className="flex h-screen w-full">
            <CourseSidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
              <header className="flex items-center gap-4 px-6 py-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10">
                <SidebarTrigger data-testid="button-sidebar-toggle" className="hover-elevate">
                  <Menu className="w-5 h-5" />
                </SidebarTrigger>
                <div className="flex items-center gap-2 flex-1">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-sm hidden sm:inline">
                    AI No-Code Web Development Course
                  </span>
                </div>
              </header>
              <main className="flex-1 overflow-y-auto">
                <Router />
              </main>
            </div>
          </div>
        </SidebarProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
