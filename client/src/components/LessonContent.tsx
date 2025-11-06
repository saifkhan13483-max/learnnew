import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { Components } from 'react-markdown';
import { Check, Copy, AlertCircle, Info, Lightbulb, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LessonContentProps {
  content: string;
}

function CodeBlock({ language, children }: { language: string; children: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-6" data-testid="code-block">
      <div className="absolute right-2 top-2 z-10">
        <Button
          size="sm"
          variant="secondary"
          onClick={copyToClipboard}
          className="opacity-0 group-hover:opacity-100 transition-opacity"
          data-testid="button-copy-code"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 mr-1" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-3 h-3 mr-1" />
              Copy
            </>
          )}
        </Button>
      </div>
      <SyntaxHighlighter
        style={oneDark}
        language={language || 'text'}
        PreTag="div"
        className="!rounded-xl !my-0 shadow-lg"
        customStyle={{
          margin: 0,
          padding: '2rem',
          fontSize: '1rem',
          lineHeight: '2',
          letterSpacing: '0.015em',
          backgroundColor: '#1e1e1e',
          color: '#d4d4d4',
        }}
        codeTagProps={{
          style: {
            color: '#d4d4d4',
            fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
          }
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

function Callout({ type, children }: { type: 'note' | 'tip' | 'warning' | 'info'; children: any }) {
  const styles = {
    note: {
      icon: AlertCircle,
      className: 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900',
      iconClassName: 'text-blue-600 dark:text-blue-400',
      title: 'Note'
    },
    tip: {
      icon: Lightbulb,
      className: 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900',
      iconClassName: 'text-amber-600 dark:text-amber-400',
      title: 'Tip'
    },
    warning: {
      icon: AlertTriangle,
      className: 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900',
      iconClassName: 'text-red-600 dark:text-red-400',
      title: 'Warning'
    },
    info: {
      icon: Info,
      className: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900',
      iconClassName: 'text-emerald-600 dark:text-emerald-400',
      title: 'Info'
    }
  };

  const config = styles[type];
  const Icon = config.icon;

  return (
    <div className={`my-8 p-5 rounded-xl border-2 ${config.className} shadow-sm`} data-testid={`callout-${type}`}>
      <div className="flex gap-4">
        <Icon className={`w-6 h-6 mt-0.5 flex-shrink-0 ${config.iconClassName}`} />
        <div className="flex-1">
          <div className="font-bold mb-2 text-foreground text-base">{config.title}</div>
          <div className="text-[15px] text-foreground/90 leading-loose">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LessonContent({ content }: LessonContentProps) {
  const components: Partial<Components> = {
    code({ className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || '');
      const isInline = !match;
      
      if (isInline) {
        return (
          <code className="bg-muted px-2 py-1 rounded-md text-[15px] font-mono text-foreground border border-border/50 font-medium" {...props}>
            {children}
          </code>
        );
      }
      
      return (
        <CodeBlock language={match[1]}>
          {String(children).replace(/\n$/, '')}
        </CodeBlock>
      );
    },
    h1: ({ children }: any) => (
      <h1 className="text-3xl md:text-4xl font-bold mt-12 mb-6 first:mt-0 tracking-tight text-foreground border-b border-border/50 pb-3" data-testid="heading-h1">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-5 tracking-tight text-foreground" data-testid="heading-h2">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-foreground" data-testid="heading-h3">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg md:text-xl font-semibold mt-6 mb-3 text-foreground" data-testid="heading-h4">
        {children}
      </h4>
    ),
    p: ({ children }: any) => {
      const text = String(children);
      
      // Check for callout patterns
      if (text.startsWith('💡 Tip:') || text.includes('**Tip:**')) {
        return <Callout type="tip">{text.replace(/^💡\s*Tip:\s*/, '').replace(/\*\*Tip:\*\*\s*/, '')}</Callout>;
      }
      if (text.startsWith('⚠️ Warning:') || text.includes('**Warning:**')) {
        return <Callout type="warning">{text.replace(/^⚠️\s*Warning:\s*/, '').replace(/\*\*Warning:\*\*\s*/, '')}</Callout>;
      }
      if (text.startsWith('📝 Note:') || text.includes('**Note:**')) {
        return <Callout type="note">{text.replace(/^📝\s*Note:\s*/, '').replace(/\*\*Note:\*\*\s*/, '')}</Callout>;
      }
      if (text.startsWith('ℹ️ Info:') || text.includes('**Info:**')) {
        return <Callout type="info">{text.replace(/^ℹ️\s*Info:\s*/, '').replace(/\*\*Info:\*\*\s*/, '')}</Callout>;
      }
      
      return (
        <p className="leading-loose mb-6 text-foreground/90 text-[16px]">
          {children}
        </p>
      );
    },
    ul: ({ children }: any) => (
      <ul className="space-y-3 mb-10 ml-0 list-none">
        {children}
      </ul>
    ),
    ol: ({ children }: any) => (
      <ol className="space-y-5 mb-10 ml-0 [counter-reset:list-counter] list-none">
        {children}
      </ol>
    ),
    li: ({ children, node }: any) => {
      const isOrderedList = node?.parent?.tagName === 'ol';
      
      if (isOrderedList) {
        return (
          <li className="text-foreground/95 leading-loose flex items-start gap-5 py-3 [counter-increment:list-counter] before:content-[counter(list-counter)] before:flex-shrink-0 before:w-10 before:h-10 before:rounded-full before:bg-primary/10 before:text-primary before:font-bold before:flex before:items-center before:justify-center before:text-base before:border-2 before:border-primary/20">
            <span className="flex-1 pt-1.5 text-[16px] leading-loose">{children}</span>
          </li>
        );
      }
      
      return (
        <li className="text-foreground/90 leading-loose flex items-start gap-4 py-2">
          <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2.5"></span>
          <span className="flex-1 text-[16px]">{children}</span>
        </li>
      );
    },
    blockquote: ({ children }: any) => {
      // Enhanced blockquote detection for callouts
      const childrenString = String(children);
      
      if (childrenString.includes('Tip:') || childrenString.includes('💡')) {
        return <Callout type="tip">{children}</Callout>;
      }
      if (childrenString.includes('Warning:') || childrenString.includes('⚠️')) {
        return <Callout type="warning">{children}</Callout>;
      }
      if (childrenString.includes('Note:') || childrenString.includes('📝')) {
        return <Callout type="note">{children}</Callout>;
      }
      if (childrenString.includes('Info:') || childrenString.includes('ℹ️')) {
        return <Callout type="info">{children}</Callout>;
      }
      
      return (
        <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 bg-muted/50 rounded-r-xl italic text-[16px] leading-loose">
          {children}
        </blockquote>
      );
    },
    table: ({ children }: any) => (
      <div className="overflow-x-auto my-10 rounded-xl border-2 border-border shadow-lg bg-card" data-testid="table-container">
        <table className="min-w-full border-collapse">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }: any) => (
      <thead className="bg-muted/50 backdrop-blur-sm">
        {children}
      </thead>
    ),
    tbody: ({ children }: any) => (
      <tbody className="divide-y divide-border/50 bg-background/50">
        {children}
      </tbody>
    ),
    tr: ({ children, ...props }: any) => (
      <tr className="hover-elevate transition-all duration-200" {...props}>
        {children}
      </tr>
    ),
    th: ({ children }: any) => (
      <th className="px-6 py-4 text-left text-sm font-bold text-foreground uppercase tracking-wide border-b-2 border-border whitespace-nowrap">
        {children}
      </th>
    ),
    td: ({ children }: any) => (
      <td className="px-6 py-4 text-sm text-foreground/90 whitespace-nowrap">
        {children}
      </td>
    ),
    a: ({ href, children }: any) => (
      <a 
        href={href} 
        className="text-primary hover:underline font-medium underline-offset-2"
        target="_blank"
        rel="noopener noreferrer"
        data-testid="link-external"
      >
        {children}
      </a>
    ),
    strong: ({ children }: any) => (
      <strong className="font-bold text-foreground font-semibold">
        {children}
      </strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-foreground/90">
        {children}
      </em>
    ),
    hr: () => (
      <hr className="my-8 border-border" />
    ),
  };

  return (
    <div className="prose prose-lg max-w-none" data-testid="lesson-content">
      <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
