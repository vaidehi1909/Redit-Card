import React from "react";

const decodeHtmlEntities = (html) => {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = html;
  return textarea.value;
};

const HTMLContent = ({ htmlContent, className }) => {
  const decodedHtml = decodeHtmlEntities(htmlContent);

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: decodedHtml }}
    />
  );
};

export default HTMLContent;
