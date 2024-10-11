"use client";


import { useState, useEffect } from 'react';


type ExtendedResource = {
 id: string;
 title: string;
 views: number;
 upvotes: number;
};


export function ResourceCard({ spaceAlias }: { spaceAlias: string }) {
 const [resources, setResources] = useState<ExtendedResource[]>([]);
 const [loading, setLoading] = useState(true); // Loading state
 const [error, setError] = useState<string | null>(null); // Error state


 useEffect(() => {
   const fetchData = async () => {
     try {
       const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/spaces/${encodeURIComponent(spaceAlias)}/r`);
       if (!res.ok) {
         throw new Error('Failed to fetch resources');
       }
       const data: ExtendedResource[] = await res.json();
       setResources(data);
       setLoading(false);
     } catch (error) {
       setError('Error fetching resources');
       setLoading(false);
     }
   };
   fetchData();
 }, [spaceAlias]);


 if (loading) {
   return <div>Loading resources...</div>;
 }


 if (error) {
   return <div>{error}</div>;
 }


 return (
   <div>
     <h1>
       Resource Page of The Space <strong>{spaceAlias}</strong>
     </h1>
     <div>
       {resources.length > 0 ? (
         resources.map((resource) => (
           <div key={resource.id} className="p-4 border">
             <p>{resource.title}</p>
             <p>Upvotes: {resource.upvotes}</p>
             <p>Views: {resource.views}</p>
           </div>
         ))
       ) : (
         <p>Loading...</p>
       )}
     </div>
   </div>
 );
}
