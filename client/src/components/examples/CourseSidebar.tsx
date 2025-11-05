import { SidebarProvider } from "@/components/ui/sidebar";
import CourseSidebar from '../CourseSidebar';

export default function CourseSidebarExample() {
  const style = {
    "--sidebar-width": "20rem",
    "--sidebar-width-icon": "4rem",
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <CourseSidebar />
        <div className="flex-1 p-8">
          <h1 className="text-2xl font-bold">Main Content Area</h1>
          <p className="text-muted-foreground mt-2">This is where lesson content would appear</p>
        </div>
      </div>
    </SidebarProvider>
  );
}
