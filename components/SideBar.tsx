"use client";

import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';

interface Space {
  space_id: string;
  name: string;
  alias: string;
}

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [spaces, setSpaces] = useState<Space[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpaces = async () => {
      try {
        const response = await fetch('/api/spaces');
        const data = await response.json();

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
    return <div>Loading...</div>;
  }

  return (
    <div className={`p-4 ${className}`}>
      <div className="flex flex-col space-y-3 mt-6">
        {spaces.map((space) => (
          <Button
            key={space.space_id}
            variant="outline"
            className="w-[251px] h-[58px] text-lg px-[16px] py-[18px] rounded-md font-inter flex items-center border border-gray-300 bg-white justify-start"
          >
            {space.alias}
          </Button>
        ))}
      </div>
    </div>

  );
};

export default Sidebar;

