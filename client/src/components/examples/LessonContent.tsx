import LessonContent from '../LessonContent';

export default function LessonContentExample() {
  const sampleContent = `# What is No-Code Development?

No-code development is a revolutionary approach to building websites and applications without writing traditional programming code.

## Why No-Code Matters

- **Speed**: Build in hours what used to take weeks
- **Accessibility**: Anyone with an idea can become a creator
- **Cost-Effective**: No need to hire expensive developers

## Code Example

\`\`\`javascript
const greeting = "Hello, World!";
console.log(greeting);
\`\`\`

> This is a blockquote with important information about the lesson.

Inline code looks like this: \`const x = 42;\`

| Feature | Benefit |
|---------|---------|
| Fast | Launch quickly |
| Easy | No coding needed |
`;

  return (
    <div className="max-w-3xl mx-auto p-8">
      <LessonContent content={sampleContent} />
    </div>
  );
}
