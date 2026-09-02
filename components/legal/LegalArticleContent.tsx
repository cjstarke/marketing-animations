import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

export interface LegalArticleContentProps {
  content: string;
}

export default function LegalArticleContent({ content }: LegalArticleContentProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw] as any}
      className="markdown prose max-w-none"
    >
      {content}
    </ReactMarkdown>
  )
}
