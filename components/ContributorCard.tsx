"use client"; // Ensures this is treated as a Client Component

import React from 'react';
import { LibraryBig, Route } from 'lucide-react';

// Function to fetch data by spaceId
// async function getPostById(spaceId: string) {
//   const response = await fetch(`/api/spaces/${spaceId}`);
//   const data = await response.json();
//   return data.length > 0 ? data[0] : null;
// }

// AsideContent Component
//TO DO: ADD TYPE TO POST
export default function ContributorCard({ post }: { post: any }) {
  // const [post, setPost] = useState<any>(null);
  // const [error, setError] = useState<string | null>(null);

  // Check if post or post.contributors is undefined or not an array
  if (!post || !Array.isArray(post.contributors)) {
    return <p>No contributors available</p>; // Fallback message when there's no data
  }




  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const fetchedPost = await getPostById(spaceId);
  //       setPost(fetchedPost);
  //     } catch (err) {
  //       if (err instanceof Error) {
  //         setError(err.message);
  //       } else {
  //         setError('An unknown error occurred');
  //       }
  //     }
  //   }

  //   fetchData();
  // }, [spaceId]);

  // if (error) {
  //   return <p>Error: {error}</p>;
  // }

  // if (!post || !post.contributors) {
  //   return <p>No data available</p>;
  // }

  return (
    <aside className="w-[358px] h-[326] flex flex-col space-y-4 ">
      <div
        className="w-[358] h-auto rounded-sm border border-black bg-blue-300"
      >
        <div
          className="w-full h-[46px] rounded-t-xs bg-blue-900"
        >
          <h2 className="text-white text-left ml-[10px] leading-[46px]">Top contributors</h2>
        </div>
        <div className="p-4 space-y-3">
          {post.contributors.slice(0, 3).map((contributor: any) => (
            <div
              key={contributor.contributorId}
              className="flex items-center p-2 rounded-md"
            >
              {/* TO DO: REPLACE Avatar for Shadcn: https://ui.shadcn.com/docs/components/avatar */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black text-xs">
                {/* {contributor.avatarUrl} */}
              </div>

              {/* Name and Icons/Stats with underline */}
              <div className="flex-1">
                <div className="w-[260.5px] border-b border-black pb-1 flex justify-between items-center mx-auto">
                  {/* Contributor Name */}
                  <p className="font-medium text-black text-md font-inter">{contributor.name}</p>

                  {/* Icons and Stats */}
                  <div className="flex items-center space-x-4 text-black text-sm">
                    <div className="flex items-center space-x-1">
                      <LibraryBig size={16} /> <span>{contributor.resourcesTotal}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Route size={16} /> <span>{contributor.learningPathsTotal}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
