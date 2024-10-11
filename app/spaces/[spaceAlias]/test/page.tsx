"use client"; // Ensures this is treated as a Client Component

import React, { useState, useEffect } from 'react';
import ContributorCard from "@/components/ContributorCard"; // Adjust the path if needed
import ProjectCard from "@/components/ProjectCard";
import RecomendationCard from "@/components/RecomCard";
import { LibraryBig, Route } from 'lucide-react';


async function getPostById(spaceId: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/spaces/${spaceId}`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const data = await response.json();
  return data.length > 0 ? data[0] : null;
}

export default function PostID({ params }: any) {
  const spaceAlias = decodeURIComponent(params.spaceAlias)
  const [post, setPost] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedPost = await getPostById(spaceAlias);
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
  }, [spaceAlias]);

  if (error) {
    return <main><p>Error: {error}</p></main>;
  }

  if (!post) {
    return <main><p>No data available</p></main>;
  }

  return (
    <div className="flex flex-col lg:flex-row w-full ml-[40px] mt-[60px] space-x-6">
      {/* MainContent and ContributorCard side by side */}
      <MainContent post={post} />
      <ContributorCard spaceId={params.spaceId} /> {/* Added beside MainContent */}
    </div>
  );
}

function MainContent({ post }: { post: any }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <main className="flex-1">
      <div className="w-full max-w-[520px] h-auto">
        <h1 className="text-[50px] leading-[36px] font-sans mb-4">
          {post.alias}
        </h1>

        <p className="text-[16px] leading-[24px] font-sans">
          {isExpanded
            ? post.description // Show full description if expanded
            : `${post.description.slice(0, post.description.lastIndexOf(' ', 250))}...`}
          <span
            className="text-[#9846FF] cursor-pointer ml-1"
            onClick={toggleExpand}
          >
            {isExpanded ? 'read less' : 'read more'}
          </span>
        </p>

        {/* Layout: All cards stacked, and "add" buttons beside "Resources" and "Learning Paths" */}
        <div className="flex flex-col mt-10 space-y-6">
          {/* Introduction Card */}
          <div
            className="relative w-[519.75px] h-[93.75px] rounded-[3.75px] p-4 border border-black"
            style={{ backgroundColor: "#FFFFF" }}
          >
            <h2 className="text-[18px] font-bold font-inter text-black">Introduction</h2>
            <p className="text-[14px] font-inter text-gray-700">A fundamental learning path to explore the space content</p>
          </div>

          {/* Resources and Add Resource */}
          <div className="flex space-x-6">
            <div
              className="flex items-center justify-between w-[354px] h-[107.75px] rounded-[3.75px] p-4 border bg-yellow-300 border-black"
            >
              {/* Icon */}
              <div className="bg-purple-200 p-2 rounded-md mr-4">
                <Route size={32} className="text-black" />
              </div>
              <div>
                <h2 className="text-[18px] font-bold font-inter text-black">Resources</h2>
                <p className="text-[14px] font-inter text-gray-700">Materials on the topic added by the community</p>
              </div>
              <span className="bg-red-300 text-white text-md rounded-[16px] w-[36px] h-[22px] flex items-center justify-center">{post.resources_count}</span>
            </div>

            <button className="w-[120px] h-[107.75px] bg-[#FFE35E] text-black rounded-[3.75px] flex justify-center items-center border border-black transition-shadow duration-300 ease-in-out hover:shadow-[6px_6px_0_black] text-[13.5px]">
              + Add Resource
            </button>
          </div>

          {/* Learning Paths and Add Learning Path */}
          <div className="flex space-x-6">
            <div
              className="flex items-center justify-between w-[354px] h-[107.75px] rounded-[3.75px] p-4 border bg-purple-100 border-black"
            >
              {/* Icon */}
              <div className="bg-yellow-200 p-2 rounded-md mr-4">
                <LibraryBig size={32} className="text-black" />
              </div>

              <div>
                <h2 className="text-[18px] font-bold font-inter text-black">Learning Paths</h2>
                <p className="text-[14px] font-inter text-gray-500">Interactive roadmaps for a comprehensive learning journey</p>
              </div>
              <span className="bg-purple-900 text-white text-md rounded-[16px] w-[43px] h-[22px] flex items-center justify-center"> {post.learning_paths_count}</span>
            </div>

            <button className="w-[120px] h-[107.75px] bg-[#D7B8FF] text-black rounded-[3.75px] flex justify-center items-center border border-black text-[13.5px]">
              + Add Learning Path
            </button>
          </div>
          <h1 className="text-[32px] mt-10 mb-6"> Projects</h1>
          {/* Projects (displayed after learning paths) */}
          <div className="flex mt-10 gap-16"> {/* Enable flex-wrap and gap */}
            {post.projects.slice(0, 3).map((project: any) => (
              <div className="flex-grow min-w-[250px] max-w-[300px]"> {/* Flex-grow and min/max width */}
                <ProjectCard
                  key={project.project_id}
                  date={`2021-2022`}
                  name={project.name}
                  description={project.description}
                  client={project.client}
                />
              </div>
            ))}
          </div>
          {/* Added Recomendation Cards after Projects */}
          <h1 className="text-[32px] mt-10 mb-6">Recommendations</h1>
          <div className="flex mt-10 gap-16"> {/* Flex-wrap and gap */}
            {post.recomended.slice(0, 3).map((recommendation: any) => (
              <div className="flex-grow min-w-[250px] max-w-[300px]"> {/* Flex-grow and min/max width */}
                <RecomendationCard
                  key={recommendation.resource_id}
                  title={recommendation.title}
                  description={recommendation.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}








