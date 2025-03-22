import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
// Import the default GitHub highlight theme (optional)
import "highlight.js/styles/github.css";

export default function Markdown({ children }: { children: ReactNode }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight]}
      components={{
        a: ({ node, ...props }) => (
          <a
            target="_blank"
            {...props}
            className="text-blue-500 hover:underline"
          />
        ),
        code({ node, inline, className, children, ...props }) {
          if (!inline) {
            return (
              <pre className="text-sm p-4 my-4">
                <code className={className} {...props}>
                  {children}
                </code>
              </pre>
            );
          }
          return (
            <code
              className="bg-gray-100 text-gray-800 rounded px-1 py-0.5"
              {...props}
            >
              {children}
            </code>
          );
        },
      }}
    >
      {typeof children === "string" ? children : String(children)}
    </ReactMarkdown>
  );
}
