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
    <div className="relative group my-8" data-testid="code-block">
      <div className="absolute right-3 top-3 z-10">
        <Button
          size="sm"
          variant="secondary"
          onClick={copyToClipboard}
          className="opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-md"
          data-testid="button-copy-code"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 mr-1.5" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 mr-1.5" />
              Copy
            </>
          )}
        </Button>
      </div>
      <div className="overflow-hidden rounded-xl border border-border/50 shadow-lg">
        {language && (
          <div className="bg-muted/50 px-4 py-2 border-b border-border/50">
            <span className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider">
              {language}
            </span>
          </div>
        )}
        <SyntaxHighlighter
          style={oneDark}
          language={language || 'text'}
          PreTag="div"
          className="!rounded-none !my-0"
          customStyle={{
            margin: 0,
            padding: '1.75rem',
            fontSize: '0.95rem',
            lineHeight: '1.8',
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
    </div>
  );
}

function Callout({ type, children }: { type: 'note' | 'tip' | 'warning' | 'info'; children: any }) {
  const styles = {
    note: {
      icon: AlertCircle,
      className: 'bg-blue-50/80 dark:bg-blue-950/40 border-blue-300 dark:border-blue-800',
      iconClassName: 'text-blue-600 dark:text-blue-400',
      title: 'Note'
    },
    tip: {
      icon: Lightbulb,
      className: 'bg-amber-50/80 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800',
      iconClassName: 'text-amber-600 dark:text-amber-400',
      title: 'Tip'
    },
    warning: {
      icon: AlertTriangle,
      className: 'bg-red-50/80 dark:bg-red-950/40 border-red-300 dark:border-red-800',
      iconClassName: 'text-red-600 dark:text-red-400',
      title: 'Warning'
    },
    info: {
      icon: Info,
      className: 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800',
      iconClassName: 'text-emerald-600 dark:text-emerald-400',
      title: 'Info'
    }
  };

  const config = styles[type];
  const Icon = config.icon;

  return (
    <div className={`my-10 p-6 rounded-xl border-2 ${config.className} shadow-md`} data-testid={`callout-${type}`}>
      <div className="flex gap-5">
        <div className={`p-2 rounded-lg bg-white/50 dark:bg-black/20 flex-shrink-0`}>
          <Icon className={`w-6 h-6 ${config.iconClassName}`} />
        </div>
        <div className="flex-1">
          <div className="font-bold mb-3 text-foreground text-[17px]">{config.title}</div>
          <div className="text-[16px] md:text-[17px] text-foreground/90 leading-[1.8]">
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
          <code className="bg-muted/60 px-2 py-0.5 rounded-md text-[14px] font-mono text-foreground border border-border/40 font-semibold" {...props}>
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
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-16 mb-8 first:mt-0 tracking-tight text-foreground border-b-2 border-border pb-5" data-testid="heading-h1">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-14 mb-6 tracking-tight text-foreground scroll-mt-20" data-testid="heading-h2">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mt-10 mb-5 text-foreground scroll-mt-20" data-testid="heading-h3">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg md:text-xl lg:text-2xl font-semibold mt-8 mb-4 text-foreground" data-testid="heading-h4">
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
        <p className="leading-[1.8] mb-7 text-foreground/90 text-[17px] md:text-[18px]">
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
      <ol className="space-y-5 mb-12 ml-0 [counter-reset:list-counter] list-none">
        {children}
      </ol>
    ),
    li: ({ children, node }: any) => {
      const isOrderedList = node?.parent?.tagName === 'ol';
      
      if (isOrderedList) {
        return (
          <li className="text-foreground/95 leading-[1.8] flex items-start gap-5 py-3 [counter-increment:list-counter] before:content-[counter(list-counter)] before:flex-shrink-0 before:w-11 before:h-11 before:rounded-xl before:bg-primary/10 before:text-primary before:font-bold before:flex before:items-center before:justify-center before:text-base before:border-2 before:border-primary/20 shadow-sm">
            <span className="flex-1 pt-2 text-[17px] md:text-[18px] leading-[1.8]">{children}</span>
          </li>
        );
      }
      
      return (
        <li className="text-foreground/90 leading-[1.8] flex items-start gap-4 py-2.5">
          <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-primary mt-2.5 shadow-sm"></span>
          <span className="flex-1 text-[17px] md:text-[18px]">{children}</span>
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
        <blockquote className="border-l-4 border-primary pl-7 py-5 my-10 bg-muted/50 rounded-r-xl italic text-[17px] md:text-[18px] leading-[1.8] shadow-sm">
          {children}
        </blockquote>
      );
    },
    table: ({ children }: any) => (
      <div className="overflow-x-auto my-12 rounded-xl border-2 border-border shadow-lg bg-card" data-testid="table-container">
        <table className="min-w-full border-collapse">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }: any) => (
      <thead className="bg-muted/70 backdrop-blur-sm">
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
      <td className="px-6 py-4 text-[15px] md:text-[16px] text-foreground/90">
        {children}
      </td>
    ),
    a: ({ href, children }: any) => (
      <a 
        href={href} 
        className="text-primary hover:text-primary/80 underline decoration-primary/30 hover:decoration-primary/60 underline-offset-4 font-medium transition-all duration-200"
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
