import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import Image from "next/image";
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
        img: ({ node, src, alt, ...props }) => {
          const isLocal = src?.startsWith("/") || src?.startsWith("./");
          if (isLocal) {
            return (
              <Image
                src={src || ""}
                alt={alt || ""}
                width={800}
                height={400}
                className="rounded-lg max-w-full h-auto my-4"
                style={{ objectFit: "contain" }}
              />
            );
          }
          return (
            <img
              src={src}
              alt={alt}
              loading="lazy"
              className="rounded-lg max-w-full h-auto my-4"
            />
          );
        },
        code({ node, inline, className, children, ...props }) {
          if (!inline) {
            return (
              <pre>
                <code className={className} {...props}>
                  {children}
                </code>
              </pre>
            );
          }
          return (
            <code className="text-gray-800" {...props}>
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
