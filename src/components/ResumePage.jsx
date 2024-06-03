import React, { useEffect, useRef, useState } from 'react';

const ResumePage = ({ content, onOverflow }) => {
  const contentRef = useRef();

  useEffect(() => {
    const checkOverflow = () => {
      const content = contentRef.current;
      if (content.scrollHeight > content.clientHeight || content.scrollWidth > content.clientWidth) {
        onOverflow();
      }
    };

    const observer = new MutationObserver(checkOverflow);

    observer.observe(contentRef.current, { childList: true, subtree: true, characterData: true });

    checkOverflow();

    return () => {
      observer.disconnect();
    };
  }, [onOverflow]);

  return (
    <div className="resume-page" ref={contentRef}>
      {content}
    </div>
  );
};

export default ResumePage;
