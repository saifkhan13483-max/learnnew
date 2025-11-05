import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { Components } from 'react-markdown';

interface LessonContentProps {
  content: string;
}

export default function LessonContent({ content }: LessonContentProps) {
  const components: Partial<Components> = {
    code({ className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || '');
      const isInline = !match;
      
      if (isInline) {
        return (
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
            {children}
          </code>
        );
      }
      
      return (
        <SyntaxHighlighter
          style={oneDark}
          language={match[1]}
          PreTag="div"
          className="rounded-lg my-6"
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      );
    },
    h1: ({ children }: any) => (
      <h1 className="text-2xl md:text-3xl font-bold mt-10 mb-5 first:mt-0 tracking-tight" data-testid="heading-h1">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4 tracking-tight" data-testid="heading-h2">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-lg md:text-xl font-semibold mt-6 mb-3" data-testid="heading-h3">
        {children}
      </h3>
    ),
    p: ({ children }: any) => (
      <p className="leading-relaxed mb-5 text-foreground/90">
        {children}
      </p>
    ),
    ul: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
        {children}
      </ul>
    ),
    ol: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 ml-4">
        {children}
      </ol>
    ),
    li: ({ children }: any) => (
      <li className="text-foreground leading-relaxed">
        {children}
      </li>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary pl-4 py-2 my-6 bg-muted/50 rounded-r-lg">
        {children}
      </blockquote>
    ),
    table: ({ children }: any) => (
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-border">
          {children}
        </table>
      </div>
    ),
    th: ({ children }: any) => (
      <th className="border border-border bg-muted px-4 py-2 text-left font-semibold">
        {children}
      </th>
    ),
    td: ({ children }: any) => (
      <td className="border border-border px-4 py-2">
        {children}
      </td>
    ),
    a: ({ href, children }: any) => (
      <a 
        href={href} 
        className="text-primary hover:underline font-medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    strong: ({ children }: any) => (
      <strong className="font-semibold text-foreground">
        {children}
      </strong>
    ),
    em: ({ children }: any) => (
      <em className="italic">
        {children}
      </em>
    ),
  };

  return (
    <div className="prose prose-lg max-w-none" data-testid="lesson-content">
      <ReactMarkdown components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
