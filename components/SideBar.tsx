import { fetchSpaceAliases } from '@/lib/data';
import Link from 'next/link'
import { Button } from './ui/button';


interface SidebarProps {
  className?: string;
}


export default async function Sidebar({ className }: SidebarProps) {
  const spaces = await fetchSpaceAliases()
  return (
    <div className={`p-4 ${className}`}>
      <div className="flex flex-col space-y-3 mt-6">
        {spaces.map((space) => (
          <Link key={space.alias} href={`/spaces/${space.alias}`}>
            <Button
              variant="outline"
              className="w-[251px] h-[58px] text-lg px-[16px] py-[18px] rounded-md font-inter flex items-center border border-gray-300 bg-white justify-start"
            >
              {space.alias}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  )
}



// const Sidebar: React.FC<SidebarProps> = ({ className }) => {
//   const [spaces, setSpaces] = useState<Space[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchSpaces = async () => {
//       try {
//         // const response = await fetch('/api/spaces');
//         // const data = await response.json();

//         // const filteredSpaces = data.filter((space: Space) =>
//         //   ['E2E SA', 'ADAS', 'New Tech', 'Web & Cloud Solutions'].includes(space.alias)
//         // );

//         const data = await fetchSpaceAliases()
//         console.log('data:', data)

//         setSpaces(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching spaces:', error);
//         setLoading(false);
//       }
//     };

//     fetchSpaces();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className={`p-4 ${className}`}>
//       <div className="flex flex-col space-y-3 mt-6">
//         {spaces.map((space) => (
//           <Button
//             key={space.alias}
//             variant="outline"
//             className="w-[251px] h-[58px] text-lg px-[16px] py-[18px] rounded-md font-inter flex items-center border border-gray-300 bg-white justify-start"
//           >
//             {space.alias}
//           </Button>
//         ))}
//       </div>
//     </div>

//   );
// };

// export default Sidebar;

