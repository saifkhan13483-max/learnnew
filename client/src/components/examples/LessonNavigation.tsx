import LessonNavigation from '../LessonNavigation';

export default function LessonNavigationExample() {
  const previous = {
    module: {
      id: "module-1",
      number: 1,
      title: "Introduction",
      description: "Getting started",
      lessons: []
    },
    lesson: {
      id: "1-1",
      title: "What is No-Code Development?",
      duration: 8,
      content: ""
    }
  };

  const next = {
    module: {
      id: "module-1",
      number: 1,
      title: "Introduction",
      description: "Getting started",
      lessons: []
    },
    lesson: {
      id: "1-3",
      title: "Overview of Modern Tools",
      duration: 12,
      content: ""
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">With Both Previous and Next</h2>
        <LessonNavigation previous={previous} next={next} />
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Only Next (First Lesson)</h2>
        <LessonNavigation previous={null} next={next} />
      </div>
      
      <div>
        <h2 className="text-xl font-semibold mb-4">Only Previous (Last Lesson)</h2>
        <LessonNavigation previous={previous} next={null} />
      </div>
    </div>
  );
}
