import { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { Components } from 'react-markdown';
import { Check, Copy, AlertCircle, Info, Lightbulb, AlertTriangle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LessonContentProps {
  content: string;
  lessonTitle?: string;
}

function CodeBlock({ language, children }: { language: string; children: string }) {
  const [copied, setCopied] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkTheme();
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-6 sm:my-8" data-testid="code-block">
      <div className="absolute right-2 sm:right-3 top-2 sm:top-3 z-10">
        <Button
          size="sm"
          variant="secondary"
          onClick={copyToClipboard}
          className="opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg text-xs sm:text-sm backdrop-blur-sm"
          data-testid="button-copy-code"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 sm:mr-1.5" />
              <span className="hidden sm:inline">Copied!</span>
              <span className="sm:hidden">✓</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 sm:mr-1.5" />
              <span className="hidden sm:inline">Copy</span>
            </>
          )}
        </Button>
      </div>
      <div className="overflow-hidden rounded-xl sm:rounded-2xl border-2 border-border/50 shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-gradient-to-br from-card to-card/80">
        {language && (
          <div className="bg-gradient-to-r from-muted/70 to-muted/50 px-3 sm:px-4 py-2 sm:py-2.5 border-b-2 border-border/50 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <span className="text-[10px] sm:text-xs font-mono font-bold text-primary uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-3 h-3" />
                {language}
              </span>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
            </div>
          </div>
        )}
        <div className="overflow-x-auto">
          <SyntaxHighlighter
            style={isDark ? oneDark : oneLight}
            language={language || 'text'}
            PreTag="div"
            className="!rounded-none !my-0 text-sm sm:text-base"
            customStyle={{
              margin: 0,
              padding: '1.25rem',
              lineHeight: '1.8',
              letterSpacing: '0.015em',
              backgroundColor: isDark ? '#1e1e1e' : '#fafafa',
              color: isDark ? '#d4d4d4' : '#383a42',
            }}
            codeTagProps={{
              style: {
                color: isDark ? '#d4d4d4' : '#383a42',
                fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
              }
            }}
          >
            {children}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}

function Callout({ type, children }: { type: 'note' | 'tip' | 'warning' | 'info'; children: any }) {
  const styles = {
    note: {
      icon: AlertCircle,
      className: 'bg-gradient-to-br from-blue-50/90 to-blue-100/50 dark:from-blue-950/40 dark:to-blue-900/20 border-blue-300 dark:border-blue-800',
      iconClassName: 'text-blue-600 dark:text-blue-400',
      iconBg: 'bg-blue-100 dark:bg-blue-900/50',
      title: 'Note',
      accentColor: 'border-l-blue-500'
    },
    tip: {
      icon: Lightbulb,
      className: 'bg-gradient-to-br from-amber-50/90 to-amber-100/50 dark:from-amber-950/40 dark:to-amber-900/20 border-amber-300 dark:border-amber-800',
      iconClassName: 'text-amber-600 dark:text-amber-400',
      iconBg: 'bg-amber-100 dark:bg-amber-900/50',
      title: 'Tip',
      accentColor: 'border-l-amber-500'
    },
    warning: {
      icon: AlertTriangle,
      className: 'bg-gradient-to-br from-red-50/90 to-red-100/50 dark:from-red-950/40 dark:to-red-900/20 border-red-300 dark:border-red-800',
      iconClassName: 'text-red-600 dark:text-red-400',
      iconBg: 'bg-red-100 dark:bg-red-900/50',
      title: 'Warning',
      accentColor: 'border-l-red-500'
    },
    info: {
      icon: Info,
      className: 'bg-gradient-to-br from-emerald-50/90 to-emerald-100/50 dark:from-emerald-950/40 dark:to-emerald-900/20 border-emerald-300 dark:border-emerald-800',
      iconClassName: 'text-emerald-600 dark:text-emerald-400',
      iconBg: 'bg-emerald-100 dark:bg-emerald-900/50',
      title: 'Info',
      accentColor: 'border-l-emerald-500'
    }
  };

  const config = styles[type];
  const Icon = config.icon;

  return (
    <div className={`my-6 sm:my-8 md:my-10 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border-2 border-l-4 ${config.className} ${config.accentColor} shadow-lg hover:shadow-xl transition-all duration-300`} data-testid={`callout-${type}`}>
      <div className="flex gap-3 sm:gap-4 md:gap-5">
        <div className={`p-2 sm:p-2.5 rounded-xl ${config.iconBg} flex-shrink-0 shadow-sm`}>
          <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${config.iconClassName}`} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-bold mb-2 sm:mb-3 text-foreground text-sm sm:text-base md:text-[17px] flex items-center gap-2">
            {config.title}
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          </div>
          <div className="text-sm sm:text-[15px] md:text-[16px] lg:text-[17px] text-foreground/90 leading-[1.7] sm:leading-[1.8]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LessonContent({ content, lessonTitle }: LessonContentProps) {
  const firstH1EncounteredRef = useRef(false);
  
  useEffect(() => {
    firstH1EncounteredRef.current = false;
  }, [content]);
  
  const components: Partial<Components> = {
    code({ className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || '');
      const isInline = !match;
      
      if (isInline) {
        return (
          <code className="bg-primary/10 text-primary px-2 py-0.5 rounded-md text-[13px] sm:text-[14px] font-mono border border-primary/20 font-semibold" {...props}>
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
    h1: ({ children }: any) => {
      const h1Text = String(children).trim();
      
      if (!firstH1EncounteredRef.current && lessonTitle && h1Text === lessonTitle) {
        firstH1EncounteredRef.current = true;
        return null;
      }
      
      firstH1EncounteredRef.current = true;
      
      return (
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-10 sm:mt-12 md:mt-16 mb-5 sm:mb-6 md:mb-8 first:mt-0 tracking-tight text-foreground border-b-2 border-border pb-3 sm:pb-4 md:pb-5" data-testid="heading-h1">
          {children}
        </h1>
      );
    },
    h2: ({ children }: any) => (
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-10 sm:mt-12 md:mt-14 mb-4 sm:mb-5 md:mb-6 tracking-tight text-foreground scroll-mt-20 flex items-center gap-3" data-testid="heading-h2">
        <span className="w-1.5 h-8 bg-gradient-to-b from-primary to-primary/50 rounded-full" />
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-8 sm:mt-9 md:mt-10 mb-3 sm:mb-4 md:mb-5 text-foreground scroll-mt-20" data-testid="heading-h3">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mt-6 sm:mt-7 md:mt-8 mb-3 sm:mb-3.5 md:mb-4 text-foreground" data-testid="heading-h4">
        {children}
      </h4>
    ),
    p: ({ children, node }: any) => {
      const extractTextFromNode = (nodeOrText: any): string => {
        if (typeof nodeOrText === 'string') return nodeOrText;
        if (Array.isArray(nodeOrText)) {
          return nodeOrText.map(extractTextFromNode).join('');
        }
        if (nodeOrText?.props?.children) {
          return extractTextFromNode(nodeOrText.props.children);
        }
        return '';
      };

      const fullText = extractTextFromNode(children).trim();
      
      let calloutType: 'tip' | 'warning' | 'note' | 'info' | null = null;
      
      if (fullText.startsWith('💡 Tip:') || fullText.startsWith('Tip:')) {
        calloutType = 'tip';
      } else if (fullText.startsWith('⚠️ Warning:') || fullText.startsWith('Warning:')) {
        calloutType = 'warning';
      } else if (fullText.startsWith('📝 Note:') || fullText.startsWith('Note:')) {
        calloutType = 'note';
      } else if (fullText.startsWith('ℹ️ Info:') || fullText.startsWith('Info:')) {
        calloutType = 'info';
      }
      
      if (calloutType) {
        const removeIndicator = (child: any, isFirst: boolean = true): any => {
          if (typeof child === 'string') {
            if (isFirst) {
              return child
                .replace(/^💡\s*Tip:\s*/, '')
                .replace(/^⚠️\s*Warning:\s*/, '')
                .replace(/^📝\s*Note:\s*/, '')
                .replace(/^ℹ️\s*Info:\s*/, '')
                .replace(/^Tip:\s*/, '')
                .replace(/^Warning:\s*/, '')
                .replace(/^Note:\s*/, '')
                .replace(/^Info:\s*/, '');
            }
            return child;
          }
          if (Array.isArray(child)) {
            return child.map((c, i) => removeIndicator(c, i === 0));
          }
          if (child?.props?.children) {
            const newChildren = removeIndicator(child.props.children, isFirst);
            return { ...child, props: { ...child.props, children: newChildren } };
          }
          return child;
        };

        const cleanedChildren = removeIndicator(children);
        return <Callout type={calloutType}>{cleanedChildren}</Callout>;
      }
      
      return (
        <p className="leading-[1.7] sm:leading-[1.8] mb-5 sm:mb-6 md:mb-7 text-foreground/90 text-[15px] sm:text-base md:text-[17px] lg:text-[18px]">
          {children}
        </p>
      );
    },
    ul: ({ children }: any) => (
      <ul className="space-y-2 sm:space-y-2.5 md:space-y-3 mb-8 sm:mb-9 md:mb-10 ml-0 list-none">
        {children}
      </ul>
    ),
    ol: ({ children }: any) => (
      <ol className="space-y-3 sm:space-y-4 md:space-y-5 mb-10 sm:mb-11 md:mb-12 ml-0 [counter-reset:list-counter] list-none">
        {children}
      </ol>
    ),
    li: ({ children, node }: any) => {
      const isOrderedList = node?.parent?.tagName === 'ol';
      
      if (isOrderedList) {
        return (
          <li className="text-foreground/95 leading-[1.7] sm:leading-[1.8] flex items-start gap-3 sm:gap-4 md:gap-5 py-2 sm:py-2.5 md:py-3 [counter-increment:list-counter] before:content-[counter(list-counter)] before:flex-shrink-0 before:w-9 before:h-9 sm:before:w-10 sm:before:h-10 md:before:w-11 md:before:h-11 before:rounded-xl before:bg-gradient-to-br before:from-primary before:to-primary/80 before:text-white before:font-bold before:flex before:items-center before:justify-center before:text-sm sm:before:text-base before:shadow-lg hover:before:scale-110 before:transition-transform">
            <span className="flex-1 pt-1.5 sm:pt-2 text-[15px] sm:text-base md:text-[17px] lg:text-[18px] leading-[1.7] sm:leading-[1.8]">{children}</span>
          </li>
        );
      }
      
      return (
        <li className="text-foreground/90 leading-[1.7] sm:leading-[1.8] flex items-start gap-3 sm:gap-3.5 md:gap-4 py-1.5 sm:py-2 md:py-2.5 group">
          <span className="flex-shrink-0 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gradient-to-br from-primary to-primary/80 mt-2 sm:mt-2.5 shadow-sm group-hover:scale-125 transition-transform"></span>
          <span className="flex-1 text-[15px] sm:text-base md:text-[17px] lg:text-[18px]">{children}</span>
        </li>
      );
    },
    blockquote: ({ children }: any) => {
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
        <blockquote className="border-l-4 border-primary pl-5 sm:pl-6 md:pl-7 py-4 sm:py-4.5 md:py-5 my-6 sm:my-8 md:my-10 bg-gradient-to-r from-muted/50 to-transparent rounded-r-lg sm:rounded-r-xl italic text-sm sm:text-base md:text-[17px] lg:text-[18px] leading-[1.7] sm:leading-[1.8] shadow-md">
          {children}
        </blockquote>
      );
    },
    table: ({ children }: any) => (
      <div className="w-full overflow-x-auto my-8 sm:my-10 md:my-12 rounded-xl sm:rounded-2xl border-2 border-border shadow-2xl bg-card" data-testid="table-container">
        <table className="min-w-full border-collapse">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }: any) => (
      <thead className="bg-gradient-to-r from-muted/70 to-muted/50 backdrop-blur-sm">
        {children}
      </thead>
    ),
    tbody: ({ children }: any) => (
      <tbody className="divide-y divide-border/50 bg-background/50">
        {children}
      </tbody>
    ),
    tr: ({ children, ...props }: any) => (
      <tr className="hover:bg-muted/30 transition-all duration-200" {...props}>
        {children}
      </tr>
    ),
    th: ({ children }: any) => (
      <th className="px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 text-left text-xs sm:text-sm font-bold text-foreground uppercase tracking-wide border-b-2 border-border whitespace-nowrap">
        {children}
      </th>
    ),
    td: ({ children }: any) => (
      <td className="px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 text-sm sm:text-[15px] md:text-[16px] text-foreground/90">
        {children}
      </td>
    ),
    a: ({ href, children }: any) => (
      <a 
        href={href} 
        className="text-primary hover:text-primary/80 underline decoration-primary/30 hover:decoration-primary/60 underline-offset-4 font-semibold transition-all duration-200 break-words hover:bg-primary/5 px-1 -mx-1 rounded"
        target="_blank"
        rel="noopener noreferrer"
        data-testid="link-external"
      >
        {children}
      </a>
    ),
    strong: ({ children }: any) => (
      <strong className="font-bold text-foreground">
        {children}
      </strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-foreground/90">
        {children}
      </em>
    ),
    hr: () => (
      <hr className="my-6 sm:my-7 md:my-8 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    ),
  };

  return (
    <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none" data-testid="lesson-content">
      <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
