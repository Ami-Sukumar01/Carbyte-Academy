"use client"; // Ensures this is treated as a Client Component

import { useState, useEffect } from 'react';

async function getPostById(spaceId: string) {
  const response = await fetch(`http://localhost:3000/api/spaces/${spaceId}`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const data = await response.json();
  return data.length > 0 ? data[0] : null;
}

export default function PostID({ params }: any) {
  const [post, setPost] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedPost = await getPostById(params.spaceId);
        setPost(fetchedPost);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message); // Safe to access message
        } else {
          setError('An unknown error occurred'); // Handle unknown types
        }
      }
    }
    fetchData();
  }, [params.spaceId]);
  

  if (error) {
    return <main><p>Error: {error}</p></main>;
  }

  if (!post) {
    return <main><p>No data available</p></main>;
  }

  return (
    <div className="flex flex-col lg:flex-row w-full ml-[40px] mt-[60px] space-x-6">
      <MainContent post={post} />
      <AsideContent />
    </div>
  );
}

function MainContent({ post }: { post: any }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <main className="flex-1">
      <div className="w-full max-w-[520px] h-auto">
        <h1 className="text-[50px] leading-[36px] font-sans mb-4">
          {post.alias}
        </h1>

        <p className="text-[16px] leading-[24px] font-sans">
          {`${post.description.slice(0, post.description.lastIndexOf(' ', 250))}...`}
          <span
            className="text-[#9846FF] cursor-pointer ml-1"
            onClick={toggleModal}
          >
            read more
          </span>
        </p>

        {isModalOpen && (
          <Modal onClose={toggleModal} content={post.description} />
        )}
      </div>
    </main>
  );
}

function AsideContent() {
  return (
    <aside className="w-[358px] flex flex-col space-y-4" style={{ marginRight: '40px' }}>
      {/* First Box, Top contributer : Adonis*/} 
      <div
        className="w-full h-[226px] rounded-[2px] border border-black"
        style={{ backgroundColor: '#E3EAFF', marginLeft: '-40px' }}
      >
        <div
          className="w-full h-[46px] rounded-t-[2px]"
          style={{ backgroundColor: '#576595' }}
        >
<h2 className="text-white text-left leading-[46px] ml-4">Top contributors</h2>

        </div>
        <div className="p-4">
          <p>Box 1 Content</p>
        </div>
      </div>

      {/* Second Box */}
      <div
        className="w-full h-[277px] rounded-[2px] border border-black"
        style={{ backgroundColor: '#FFFDF2', marginLeft: '-40px', marginTop: '30px', }}
      >
        <div className="p-4">
          <p>Box 2, User update</p>
        </div>
      </div>
    </aside>
  );
}

function Modal({ onClose, content }: { onClose: () => void, content: string }) {
  // Accessibility enhancements
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 pointer-events-none">
      <div
        className="p-4 rounded-[5px] shadow-xl border border-gray-300 pointer-events-auto relative"
        style={{
          backgroundColor: '#F5F9FF',
          width: '361px',
          height: '464px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
          aria-label="Close modal"
        >
          ✕
        </button>
        <div className="overflow-auto h-full">
          <p className="text-[16px] leading-[24px] font-sans">{content}</p>
        </div>
      </div>
    </div>
  );
}
