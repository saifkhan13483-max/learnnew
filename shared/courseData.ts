export interface Lesson {
  id: string;
  title: string;
  duration: number;
  content: string;
}

export interface Module {
  id: string;
  number: number;
  title: string;
  description: string;
  lessons: Lesson[];
  project?: string;
}

export const courseModules: Module[] = [];

// Helper functions
export function getModuleById(moduleId: string): Module | undefined {
  return courseModules.find(module => module.id === moduleId);
}

export function getLessonById(moduleId: string, lessonId: string): Lesson | undefined {
  const module = getModuleById(moduleId);
  if (!module) return undefined;
  return module.lessons.find(lesson => lesson.id === lessonId);
}

export function getNextLesson(moduleId: string, lessonId: string): { moduleId: string; lessonId: string; title: string } | null {
  const module = getModuleById(moduleId);
  if (!module) return null;

  const currentIndex = module.lessons.findIndex(lesson => lesson.id === lessonId);
  if (currentIndex === -1) return null;

  // Check if there's a next lesson in the current module
  if (currentIndex < module.lessons.length - 1) {
    const nextLesson = module.lessons[currentIndex + 1];
    return {
      moduleId: module.id,
      lessonId: nextLesson.id,
      title: nextLesson.title
    };
  }

  // Check if there's a next module
  const currentModuleIndex = courseModules.findIndex(m => m.id === moduleId);
  if (currentModuleIndex < courseModules.length - 1) {
    const nextModule = courseModules[currentModuleIndex + 1];
    if (nextModule.lessons.length > 0) {
      const firstLesson = nextModule.lessons[0];
      return {
        moduleId: nextModule.id,
        lessonId: firstLesson.id,
        title: firstLesson.title
      };
    }
  }

  return null;
}

export function getPreviousLesson(moduleId: string, lessonId: string): { moduleId: string; lessonId: string; title: string } | null {
  const module = getModuleById(moduleId);
  if (!module) return null;

  const currentIndex = module.lessons.findIndex(lesson => lesson.id === lessonId);
  if (currentIndex === -1) return null;

  // Check if there's a previous lesson in the current module
  if (currentIndex > 0) {
    const prevLesson = module.lessons[currentIndex - 1];
    return {
      moduleId: module.id,
      lessonId: prevLesson.id,
      title: prevLesson.title
    };
  }

  // Check if there's a previous module
  const currentModuleIndex = courseModules.findIndex(m => m.id === moduleId);
  if (currentModuleIndex > 0) {
    const prevModule = courseModules[currentModuleIndex - 1];
    if (prevModule.lessons.length > 0) {
      const lastLesson = prevModule.lessons[prevModule.lessons.length - 1];
      return {
        moduleId: prevModule.id,
        lessonId: lastLesson.id,
        title: lastLesson.title
      };
    }
  }

  return null;
}
