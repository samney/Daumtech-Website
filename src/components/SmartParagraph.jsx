import React from "react";

function withNonBreakingSpaces(text) {
  const motsCourts = [
    "le", "la", "les", "un", "une", "des", "votre", "notre", "leur", "leurs",
    "à", "de", "du", "en", "par", "pour", "sans", "sur", "dans", "chez", "avec", "au", "aux",
    "et", "ou", "mais", "ni", "or", "car", "donc",
    "je", "tu", "il", "elle", "on", "nous", "vous", "ils", "elles",
    "me", "te", "se", "lui", "y", "en", "ce", "ces", "cet", "cette",
    "qui", "que", "dont", "où", "si", "ne", "pas", "plus", "très", "bien", "tout", "tous",
    "vers", "face", "une", "aux"
  ];

  // First pass: handle short words followed by spaces
  let result = text.replace(new RegExp(`\\b(${motsCourts.join("|")})\\s+`, "gi"), (match, p1) => `${p1}\u00A0`);
  
  // Second pass: prevent orphaned words at end of lines (words <= 3 characters)
  result = result.replace(/\s+(\w{1,3})\s*$/gm, `\u00A0$1`);
  
  // Third pass: handle specific problematic sequences for better text flow
  result = result.replace(/\s+(une|aux|vers|face|dans)\s+/gi, `\u00A0$1\u00A0`);
  
  return result;
}

function processChildren(children) {
  if (typeof children === "string") {
    return withNonBreakingSpaces(children);
  }

  if (Array.isArray(children)) {
    return children.map((child, index) => (
      <React.Fragment key={index}>{processChildren(child)}</React.Fragment>
    ));
  }

  if (React.isValidElement(children)) {
    const childProps = children.props || {};
    const processedChildren = processChildren(childProps.children);
    return React.cloneElement(children, { ...childProps, children: processedChildren });
  }

  return children;
}

export default function SmartParagraph({
  children,
  className = "",
  as: Tag = "p",
  ...props
}) {
  return (
    <Tag className={`${className}`} {...props}>
      {processChildren(children)}
    </Tag>
  );
}
