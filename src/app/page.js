"use client"

import ResumePage from '@/components/ResumePage';
import React, { useState, useRef } from 'react';

function App() {
  const [pages, setPages] = useState([{ id: 1, content: 'Initial content of the resume.' }]);
  const nextPageId = useRef(2);

  const handleOverflow = (pageIndex) => {
    const currentPage = pages[pageIndex];
    const overflowContent = ' Adding more content to the resume...'; // Simulate the overflowing content

    // Create new page content
    const newPage = { id: nextPageId.current, content: overflowContent };
    nextPageId.current += 1;

    // Update the pages state
    setPages(prevPages => {
      const updatedPages = [...prevPages];
      updatedPages[pageIndex].content = updatedPages[pageIndex].content.replace(overflowContent, ''); // Remove overflow content from current page
      return [...updatedPages, newPage];
    });
  };

  const addMoreContent = () => {
    setPages(prevPages => {
      const lastPageIndex = prevPages.length - 1;
      const updatedPages = [...prevPages];
      updatedPages[lastPageIndex].content += ' Adding more content to the resume Adding more content to the resume Adding more content to the resume Adding more content to the resume...'; // Append content to the last page
      return updatedPages;
    });
  };

  return (
    <div className="App">
      {pages.map((page, index) => (
        <ResumePage
          key={page.id}
          content={<p>{page.content}</p>}
          onOverflow={() => handleOverflow(index)}
        />
      ))}
      <div className="flex justify-center my-4">
      <button onClick={addMoreContent} className='bg-blue-950 text-white p-5 rounded'>Add More Content</button>
      </div>
    </div>
  );
}

export default App;
