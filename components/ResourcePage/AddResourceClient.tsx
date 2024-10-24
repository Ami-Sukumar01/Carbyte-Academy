"use client"; // Mark this as a client-side component

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent} from "@/components/ui/popover";
import { BookOpen, Video, Newspaper, SquareLibrary, Podcast, ChartPie, MousePointerClick, ChartLine, Files, Wrench } from 'lucide-react'; // Import icons from Lucide
import { useRouter } from "next/navigation";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent, DialogFooter } from "@/components/ui/dialog"; // Import dialog components
import CombinedModal from "@/components/ResourcePage/SubAlert";

// Define the type for the resourceTypes prop
interface ResourceType {
  id: string;
  name: string;
  description?: string | null;
}

// Mapping resource names to icons
const getIconForResource = (resourceName: string, isSelected: boolean) => {
    const iconColor = isSelected ? "text-white" : "text-black"; // Conditionally apply white or black
  
    switch (resourceName.toLowerCase()) {
      case "book":
        return <BookOpen size={32} className={`${iconColor}`} />;
      case "video":
        return <Video size={32} className={`${iconColor}`} />;
      case "article":
        return <Newspaper size={32} className={`${iconColor}`} />;
      case "interactive content":
        return <MousePointerClick size={32} className={`${iconColor}`} />;
      case "practical project":
        return <Wrench size={32} className={`${iconColor}`} />;
      case "podcast":
        return <Podcast size={32} className={`${iconColor}`} />;
      case "online course":
        return <ChartLine size={32} className={`${iconColor}`} />;
      case "presentation":
        return <ChartPie size={32} className={`${iconColor}`} />;
      case "document":
        return <Files size={32} className={`${iconColor}`} />;
      default:
        return <SquareLibrary size={32} className={`${iconColor}`} />;
    }
  };

interface AddResourceClientProps {
  resourceTypes: ResourceType[];
  spaceAlias: string;
}

export default function AddResourceClient({ resourceTypes, spaceAlias }: AddResourceClientProps) {
  const router = useRouter();

  // Form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedResourceType, setSelectedResourceType] = useState<string | null>(null);
  const [isAuthor, setIsAuthor] = useState<boolean | null>(null);
  const [showPopover, setShowPopover] = useState(false);
  const [popoverMessage, setPopoverMessage] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [showCombinedModal, setShowCombinedModal] = useState(false);

  // Helper functions
  const validateURL = (url: string) => {
    const urlPattern = new RegExp(
      "^(https?:\\/\\/)?([\\w-]+\\.)+[\\w-]{2,}(\\/\\S*)?$",
      "i"
    );
    return urlPattern.test(url);
  };

  const handleLevelSelect = (level: string) => {
    setSelectedLevel(level);
  };

  const handleResourceTypeSelect = (typeName: string) => {
    setSelectedResourceType(typeName); // Set the selected resource type
  };

  const handleAuthorSelect = (answer: boolean) => {
    setIsAuthor(answer);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || title.length > 100) {
      setPopoverMessage("Please enter a title with a maximum of 100 characters.");
    } else if (!description || description.length > 300) {
      setPopoverMessage("Please enter a description with a maximum of 300 characters.");
    } else if (!url || !validateURL(url)) {
      setPopoverMessage("Please enter a valid URL.");
    } else if (!selectedLevel) {
      setPopoverMessage("Please select a resource level.");
    } else if (isAuthor === null) {
        setPopoverMessage("Please confirm if you are the author.");
    } else {
      setShowDialog(true); // Show confirmation dialog instead of setting the popover message
    }
    setShowPopover(true);
  };


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null);
  };

  const handleConfirmPopover = () => {
    setShowPopover(false);
    setShowDialog(true); // Trigger the additional confirmation dialog
  };

  const handleFinalSubmission = () => {
    // Trigger the CombinedModal here
    setShowCombinedModal(true); // Assuming you have state for CombinedModal visibility
  
    // You can also include any additional logic, like form submission or API calls
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* Title Input */}
      <div>
        <Label htmlFor="title">Title (Max 100 characters)</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter the title of the resource"
          className="mt-1 w-[684px] h-[48px] mb-[40px] rounded-sm"
          maxLength={100}
        />
      </div>

      {/* Description Input */}
      <div>
        <Label htmlFor="description">Description (Max 300 characters)</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe the resource"
          className="mt-1 w-[684px] h-[156px]"
          maxLength={300}
        />
        <p className="text-sm text-gray-500 mb-[40px]">Max 300 characters</p>
      </div>

      {/* URL Input */}
      <div>
        <Label htmlFor="url">URL</Label>
        <Input
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Original resource URL"
          className="mt-1 w-[684px] h-[48px]"
        />
        <p className="text-sm text-gray-500 mb-[40px]">Ensure it's a valid URL</p>
      </div>

             {/* Upload a file section */}
             <div className="mb-4">
         <Label htmlFor="file-upload">Upload a file (Optional)</Label>
         <div className="flex items-center">
           <input
             type="file"
             accept=".pdf,.jpeg,.png,.mp4,.pptx"
             className="hidden"
             id="file-upload"
             onChange={handleFileChange}
           />
           <label htmlFor="file-upload" className="cursor-pointer">
             <div className="flex items-center justify-center w-[164px] h-[46px] bg-white text-black border border-black cursor-pointer">
               <Plus className="mr-2" />
               Upload
             </div>
           </label>
         </div>
         <p className="text-sm text-gray-500 mt-2 mb-[40px]">
           PDF, JPEG, PNG, MP4, PPTX
         </p>
       </div>

      {/* Resource Type Selection */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
  {resourceTypes.map((type) => (
    <button
      key={type.id}
      className={`w-[330px] h-[130px] border border-black rounded-sm flex items-center px-4 ${
        selectedResourceType === type.name ? "bg-black text-white" : "bg-white text-black"
      }`}
      onClick={() => handleResourceTypeSelect(type.name)}
      type="button"
    >
      {/* Icon on the left side, with dynamic color */}
      {getIconForResource(type.name, selectedResourceType === type.name)}

      <div className="flex flex-col justify-center text-left ml-4">
        <div className="text-lg font-semibold">{type.name}</div>
        <div className="text-gray-500 mt-1">
          {type.description || "No description available"}
        </div>
      </div>
    </button>
  ))}
</div>



       {/* Level Selection */}
       <div className="mb-4">
         <Label className="text-xl">Level</Label>
         <div className="flex space-x-2 gap-7 mt-2">
           {["Basic", "Intermediate", "Advanced"].map((level) => (
             <Button
               key={level}
               className={`w-[164px] h-[46px] border text-black rounded-xs border-black hover hover:bg-black hover:text-white ${
                 selectedLevel === level ? "bg-black text-white" : "bg-white"
               }`}
               onClick={() => handleLevelSelect(level)}
               type="button"
             >
               {level}
             </Button>
           ))}
         </div>
       </div>


       {/* Author Confirmation */}
       <div className="mb-6">
         <Label className="text-xl" >Are you the author?</Label>
         <div className="flex space-x-2 mt-2 mb-[35px]">
            <div className="mt-[20px]">
           <Button
             className={`w-[95px] h-[46px] border border-black text-black rounded-xs mr-[30px] hover hover:bg-black hover:text-white  ${
               isAuthor === true ? "bg-black text-white" : "bg-white"
             }`}
             onClick={() => handleAuthorSelect(true)}
             type="button"
           >
             Yes
           </Button>
           <Button
             className={`w-[95px] h-[46px] border border-black text-black rounded-xs ${
               isAuthor === false ? "bg-black text-white" : "bg-white"
             }`}
             onClick={() => handleAuthorSelect(false)}
             type="button"
           >
             No
           </Button>
           </div>
         </div>
       </div>


       {/* Popover for confirmation */}
       <Popover open={showPopover} onOpenChange={setShowPopover}>
         <PopoverTrigger asChild>
           <Button
             variant="outline"
             type="submit"
             className="bg-white w-[264px] h-[46px] text-black border border-black rounded-xs transition-shadow duration-300 ease-in-out hover:bg-white hover:shadow-[3px_3px_0_black] mr-[30px]"
           >
             Add resource to the path
             </Button>
        </PopoverTrigger>
        <PopoverContent className="p-4">
          <p>{popoverMessage}</p>
        </PopoverContent>
      </Popover>

      {/* Confirmation dialog after popover */}
      {showDialog && (
        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogContent>
            <h3 className="font-semibold text-lg">Are you sure the information is not sensitive?</h3>
            <p className="text-gray-600">It will be visible for all employees, who might not have access to it.</p>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setShowDialog(false)}
                className="mr-4"
              >
                Go back
              </Button>
              <Button
                onClick={() => {
                  setShowDialog(false);
                  handleFinalSubmission(); // Call the submission handler
                }}
              >
                Confirm
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {/* Render CombinedModal when showCombinedModal is true */}
      {showCombinedModal && (
        <CombinedModal />
      )}



{/* Save space*/}
<Button
         variant="outline"
         className="bg-white w-[164px] h-[46px] text-black border border-black rounded-xs mt-4 transition-shadow duration-300 ease-in-out hover:bg-white hover:shadow-[3px_3px_0_black] mr-[30px]"
       >
         Save in a space
       </Button>


       {/* Cancel Button */}
       <Button
         variant="outline"
         className="bg-white w-[164px] h-[46px] text-black border border-black rounded-xs mt-4 transition-shadow duration-300 ease-in-out hover:bg-white hover:shadow-[3px_3px_0_black]"
         onClick={() => router.back()}
       >
         Cancel
       </Button>
     </form>
 );
}