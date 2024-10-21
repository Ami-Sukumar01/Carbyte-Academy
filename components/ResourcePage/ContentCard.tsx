import { fetchResourceTypes } from '@/lib/data'; // Server-side data fetching function
import ResourceTypeClient from './ResourceTypeClient'; // Client-side component

// Server Component
export default async function ResourceTypeList() {
  try {
    // Fetch data on the server side
    const resourceTypes = await fetchResourceTypes();

    if (!resourceTypes) {
      throw new Error('No resource types found');
    }

    // Pass the data to the client-side component
    return <ResourceTypeClient resourceTypes={resourceTypes} />;
  } catch (error) {
    console.error('Error fetching resource types:', error);
    return <div>Error fetching resource types</div>;
  }
}
