import React from 'react';

/**
 * Parses inline markdown like **bold** and *italic* into React elements
 */
function renderInline(text) {
  if (!text) return null;
  
  // Split by bold (**text**)
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={idx} className="font-bold text-navy">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

/**
 * Converts raw markdown strings into semantic, accessible HTML (H2, H3, P, UL, OL)
 */
export const MarkdownRenderer = ({ content, className = "" }) => {
  if (!content) return null;

  const lines = content.trim().split('\n');
  const elements = [];
  let currentList = null; // { type: 'ul' | 'ol', items: [] }

  const flushList = () => {
    if (currentList) {
      if (currentList.type === 'ul') {
        elements.push(
          <ul key={`ul-${elements.length}`} className="my-3 space-y-2 pl-1">
            {currentList.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-content-secondary leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-overseas mt-2.5 shrink-0" />
                <span>{renderInline(item)}</span>
              </li>
            ))}
          </ul>
        );
      } else {
        elements.push(
          <ol key={`ol-${elements.length}`} className="my-3 space-y-2 pl-1">
            {currentList.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-content-secondary leading-relaxed">
                <span className="font-bold text-overseas text-sm shrink-0 min-w-[20px]">{i + 1}.</span>
                <span>{renderInline(item)}</span>
              </li>
            ))}
          </ol>
        );
      }
      currentList = null;
    }
  };

  lines.forEach((rawLine, index) => {
    const line = rawLine.trim();

    if (!line) {
      flushList();
      return;
    }

    // Header 4: #### Title
    if (line.startsWith('#### ')) {
      flushList();
      const text = line.replace('#### ', '');
      elements.push(
        <h3 key={index} className="font-heading font-bold text-base sm:text-lg text-navy mt-5 mb-2.5">
          {renderInline(text)}
        </h3>
      );
      return;
    }

    // Header 3: ### Title (semantically rendered as H2 in article body)
    if (line.startsWith('### ')) {
      flushList();
      const text = line.replace('### ', '');
      elements.push(
        <h2 key={index} className="font-heading font-extrabold text-xl sm:text-2xl text-navy mt-7 mb-3.5 border-b border-slate-100 pb-2">
          {renderInline(text)}
        </h2>
      );
      return;
    }

    // Header 2: ## Title
    if (line.startsWith('## ')) {
      flushList();
      const text = line.replace('## ', '');
      elements.push(
        <h2 key={index} className="font-heading font-extrabold text-2xl sm:text-3xl text-navy mt-8 mb-4">
          {renderInline(text)}
        </h2>
      );
      return;
    }

    // Unordered List: - item or * item
    if (line.startsWith('- ') || line.startsWith('* ')) {
      const itemText = line.substring(2);
      if (!currentList || currentList.type !== 'ul') {
        flushList();
        currentList = { type: 'ul', items: [itemText] };
      } else {
        currentList.items.push(itemText);
      }
      return;
    }

    // Numbered List: 1. item
    const numberedMatch = line.match(/^(\d+)\.\s+(.*)/);
    if (numberedMatch) {
      const itemText = numberedMatch[2];
      if (!currentList || currentList.type !== 'ol') {
        flushList();
        currentList = { type: 'ol', items: [itemText] };
      } else {
        currentList.items.push(itemText);
      }
      return;
    }

    // Regular Paragraph
    flushList();
    elements.push(
      <p key={index} className="text-sm sm:text-base text-content-secondary leading-relaxed mb-3">
        {renderInline(line)}
      </p>
    );
  });

  flushList();

  return <div className={`article-content ${className}`}>{elements}</div>;
};
