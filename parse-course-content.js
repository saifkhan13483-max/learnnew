import fs from 'fs';

// Read the markdown file
const markdown = fs.readFileSync('AI_No_Code_Web_Development_Course.md', 'utf8');

// Parse the markdown to extract modules and lessons
const modules = [];
let currentModule = null;
let currentLesson = null;
let contentBuffer = [];

const lines = markdown.split('\n');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Match module headers: ## Module X — Title
  const moduleMatch = line.match(/^##\s+Module\s+(\d+)\s+[—-]\s+(.+)$/);
  if (moduleMatch) {
    // Save previous lesson if exists
    if (currentLesson && currentModule) {
      currentLesson.content = contentBuffer.join('\n').trim();
      currentModule.lessons.push(currentLesson);
      currentLesson = null;
      contentBuffer = [];
    }
    
    // Save previous module if exists
    if (currentModule) {
      modules.push(currentModule);
    }
    
    // Start new module
    const moduleNumber = parseInt(moduleMatch[1]);
    const moduleTitle = moduleMatch[2].trim();
    currentModule = {
      id: `module-${moduleNumber}`,
      number: moduleNumber,
      title: moduleTitle,
      description: '',
      lessons: []
    };
    continue;
  }
  
  // Match lesson headers: ### Lesson X.Y: Title
  const lessonMatch = line.match(/^###\s+Lesson\s+(\d+)\.(\d+):\s+(.+)$/);
  if (lessonMatch) {
    // Save previous lesson if exists
    if (currentLesson && currentModule) {
      currentLesson.content = contentBuffer.join('\n').trim();
      currentModule.lessons.push(currentLesson);
    }
    
    // Start new lesson
    const moduleNum = parseInt(lessonMatch[1]);
    const lessonNum = parseInt(lessonMatch[2]);
    const lessonTitle = lessonMatch[3].trim();
    
    currentLesson = {
      id: `lesson-${moduleNum}-${lessonNum}`,
      title: lessonTitle,
      duration: 15, // Default duration in minutes
      content: ''
    };
    contentBuffer = [];
    continue;
  }
  
  // Match project headers: ### Project: Title
  const projectMatch = line.match(/^###\s+Project:\s+(.+)$/);
  if (projectMatch && currentModule) {
    // Save previous lesson if exists
    if (currentLesson) {
      currentLesson.content = contentBuffer.join('\n').trim();
      currentModule.lessons.push(currentLesson);
      currentLesson = null;
      contentBuffer = [];
    }
    
    currentModule.project = projectMatch[1].trim();
    continue;
  }
  
  // Collect content for current lesson
  if (currentLesson) {
    contentBuffer.push(line);
  } else if (currentModule && !currentModule.description && line.trim()) {
    // First non-empty line after module header becomes description
    if (!line.startsWith('#') && !line.startsWith('---')) {
      currentModule.description = line.trim();
    }
  }
}

// Save last lesson and module
if (currentLesson && currentModule) {
  currentLesson.content = contentBuffer.join('\n').trim();
  currentModule.lessons.push(currentLesson);
}
if (currentModule) {
  modules.push(currentModule);
}

// Generate TypeScript file content
let tsContent = `export interface Lesson {
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

export const courseModules: Module[] = ${JSON.stringify(modules, null, 2)};

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
`;

// Write the TypeScript file
fs.writeFileSync('shared/courseData.ts', tsContent, 'utf8');

console.log(`Parsed ${modules.length} modules successfully!`);
modules.forEach(m => {
  console.log(`  Module ${m.number}: ${m.title} (${m.lessons.length} lessons)`);
});
