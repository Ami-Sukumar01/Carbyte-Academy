import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Page() {
  return (
    <div className="w-full h-full bg-[#8075B1] flex  flex-col justify-center items-center flex-wrap">
      <Link href={`/spaces`}>
        <Button
          variant="outline"
          className="w-[251px] h-[58px] mt-[10px] text-lg px-[16px] py-[18px] rounded-md font-inter flex items-center border border-gray-300 bg-white justify-start"
        >
          Spaces
        </Button>
      </Link>
      <Link href={`login`}>
        <Button
          variant="outline"
          className="w-[251px] h-[58px] mt-[10px] text-lg px-[16px] py-[18px] rounded-md font-inter flex items-center border border-gray-300 bg-white justify-start"
        >
          Login
        </Button>
      </Link>

    </div>
  );
}