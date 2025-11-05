import ModuleCard from '../ModuleCard';

export default function ModuleCardExample() {
  const sampleModule = {
    id: "module-1",
    number: 1,
    title: "Introduction to AI-Powered No-Code Web Development",
    description: "Discover how AI agents are revolutionizing web development and learn the essential tools you'll use throughout this course.",
    lessons: [
      {
        id: "1-1",
        title: "What is No-Code Development?",
        duration: 8,
        content: "Sample content"
      },
      {
        id: "1-2",
        title: "Role of AI Agents",
        duration: 10,
        content: "Sample content"
      },
      {
        id: "1-3",
        title: "Overview of Modern Tools",
        duration: 12,
        content: "Sample content"
      }
    ]
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <ModuleCard module={sampleModule} progress={0} />
      <ModuleCard module={sampleModule} progress={45} />
      <ModuleCard module={sampleModule} progress={100} />
    </div>
  );
}
