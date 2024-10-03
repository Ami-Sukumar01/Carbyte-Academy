"use client"

import React, { useEffect, useState } from 'react';
import { Button } from './ui/button'; // Adjust the import path for the Button component

interface Space {
  space_id: string;
  name: string;
  alias: string;
}

const Sidebar: React.FC = () => {
  const [spaces, setSpaces] = useState<Space[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch spaces data from the API
  useEffect(() => {
    const fetchSpaces = async () => {
      try {
        const response = await fetch('/api/spaces');
        const data = await response.json();
        
        // Filter the spaces that are needed based on the aliases
        const filteredSpaces = data.filter((space: Space) =>
          ['E2E SA', 'ADAS', 'New Tech', 'Web & Cloud Solutions'].includes(space.alias)
        );

        setSpaces(filteredSpaces);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching spaces:', error);
        setLoading(false);
      }
    };

    fetchSpaces();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading while fetching data
  }

  return (
    <div className="w-[251px] p-4">
      <div className="flex flex-col space-y-3 mt-6">
        {spaces.map((space) => (
          <Button
          key={space.space_id}
          variant="outline"
          className="w-[251px] h-[58px] px-[16px] py-[18px] rounded-sm font-inter flex items-center justify-start border-gray-300 text-[20px]"
          >
            {space.alias} {/* Display the alias as the button text */}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
