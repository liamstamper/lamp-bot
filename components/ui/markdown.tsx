import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Markdown({ children }: { children: ReactNode }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: ({ node, ...props }) => (
          <a
            target="_blank"
            {...props}
            className="text-blue-500 hover:underline"
          />
        ),
      }}
    >
      {typeof children === "string" ? children : String(children)}
    </ReactMarkdown>
  );
}
