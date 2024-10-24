"use client";

import { useState } from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Route, Search } from "lucide-react";
import { FiChevronDown } from 'react-icons/fi'; // Example icon from react-icons
import { SquareCheckBig } from "lucide-react"; // Icon for confirmation
import { useRouter } from 'next/router'; // Import useRouter for navigation

export default function CombinedModal() {
    // Initialize isSensitiveConfirmed as true to skip the first dialog and open the second dialog by default
    const [isSensitiveConfirmed, setIsSensitiveConfirmed] = useState(true);
    const [showCreatePathDialog, setShowCreatePathDialog] = useState(false); // State for the third dialog
    const [selectedPath, setSelectedPath] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false); // State for confirmation popup
    const [showError, setShowError] = useState(false); // State for error if section/subsection is not selected
    const [openSection, setOpenSection] = useState<string | null>(null); // Allows both string and null
    const [openSubsection, setOpenSubsection] = useState<string | null>(null); // Allows both string and null
  
    const paths = [
        { id: 1, name: 'Fundamentals Frontend' },
        { id: 2, name: 'Backend Fundamentals' },
    ];

    const handleBack = () => {
        setIsSensitiveConfirmed(false); // Reset to the first dialog
        setShowCreatePathDialog(false); // Close the third dialog if it's open
        setShowConfirmation(false); // Close confirmation popup if it's open
        setShowError(false); // Reset error state
    };

    const handleCreatePath = () => {
        setShowCreatePathDialog(true); // Open the third dialog (Create Path)
    };

    const handleAddInSectionDialog = (openSection: string | null, openSubsection: string | null) => {
        if (!openSection || !openSubsection) {
            setShowError(true); // Show error if section or subsection is not selected
        } else {
            setShowConfirmation(true); // Show confirmation popup when "Add" is clicked in the third dialog
            setShowError(false); // Reset error state if the section and subsection are selected
        }
    };

    // SectionDialog Component for the third dialog
    const SectionDialog = () => {
        // Explicitly set the types to string | null
        const [openSection, setOpenSection] = useState<string | null>(null); // To control which section's subsections are open
        const [openSubsection, setOpenSubsection] = useState<string | null>(null); // To control which subsection is open

        const handleSectionClick = (section: string | null) => {
            if (openSection === section) {
                setOpenSection(null); // Close the section if it's already open
            } else {
                setOpenSection(section); // Open the selected section
            }
            setOpenSubsection(null); // Reset the subsection when a new section is selected
            setShowError(false); // Reset the error when a section is clicked
        };

        const handleSubsectionClick = (subsection: string | null) => {
            if (openSubsection === subsection) {
                setOpenSubsection(null); // Close the subsection if it's already open
            } else {
                setOpenSubsection(subsection); // Open the selected subsection
            }
            setShowError(false); // Reset the error when a subsection is clicked
        };

        const sections = [
            { title: 'Section 1', subsections: ['Subsection 1', 'Subsection 2'] },
            { title: 'Section 2', subsections: ['Subsection 1', 'Subsection 2'] },
            { title: 'Section 3', subsections: ['Subsection 1', 'Subsection 2'] },
            { title: 'Section 4', subsections: ['Subsection 1', 'Subsection 2'] },
            { title: 'Section 5', subsections: ['Subsection 1', 'Subsection 2'] },
            { title: 'Section 6', subsections: ['Subsection 1', 'Subsection 2'] },
            { title: 'Section 7', subsections: ['Subsection 1', 'Subsection 2'] },
        ];

        return (
            <Dialog open={showCreatePathDialog} onOpenChange={handleBack}>
                <DialogContent>
                    <DialogHeader className="flex items-center justify-center relative bg-purple-500" style={{ width: '461px', height: '52px' }}>
                        <div className="absolute left-1">
                            <Button variant="outline" className="border-none bg-purple-500 w-[60px]" onClick={handleBack}>
                                Cancel
                            </Button>
                        </div>
                        <DialogTitle className="text-center">Choose a section</DialogTitle>
                    </DialogHeader>

                    {sections.map((section, index) => (
                        <div key={index} className="mb-0">
                            {/* Section Trigger */}
                            <Button
                                variant="outline"
                                className={`w-full text-left text-lg ${openSection === section.title ? 'bg-yellow-500' : ''} ${showError && !openSection ? 'border-red-500' : ''}`} // Apply red border if there's an error and no section is selected
                                onClick={() => handleSectionClick(section.title)}
                            >
                                <div className="flex justify-between items-center w-full">
                                    <span>{section.title}</span>
                                    <FiChevronDown className={`transition-transform duration-300 ${openSection === section.title ? 'rotate-180' : ''}`} />
                                </div>
                            </Button>

                            {/* Show Subsections if the section is open */}
                            {openSection === section.title && (
                                <div className={`mt-2 pl-4 w-[370px] flex flex-col gap-1 ${showError && !openSubsection ? 'border-red-500' : ''}`}> {/* Red border if no subsection selected */}
                                    {section.subsections.map((subsection, subIndex) => (
                                        <Button
                                            key={subIndex}
                                            variant="outline"
                                            className={`py-1 border border-green-300 text-lg mb-2 pl-4 w-full text-left ${openSubsection === subsection ? 'bg-yellow-200' : ''}`}
                                            onClick={() => handleSubsectionClick(subsection)}
                                        >
                                            {subsection}
                                        </Button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Add Button */}
                    <div className="w-full flex justify-center mt-4">
                        <Button 
                            variant="secondary" 
                            className="w-[96px] h-[52px] bg-white border border-purple-300 hover:bg-white" 
                            onClick={() => handleAddInSectionDialog(openSection, openSubsection)} // Pass section and subsection to the handler
                        >
                            Add
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        );
    };

    return (
        <div>
            {/* Second Dialog: Add to Path */}
            {isSensitiveConfirmed && !showCreatePathDialog && (
                <Dialog open={isSensitiveConfirmed} onOpenChange={handleBack}>
                    <DialogContent className="w-[496px] h-[424px] p-6 bg-white rounded-none shadow-lg">
                        <div className="relative flex justify-center h-[52px] w-[450px] items-center mb-4 bg-purple-100 p-3 rounded-t-lg">
                            <Button 
                                variant="link" 
                                onClick={handleBack} 
                                className="absolute left-3 text-black border-none"
                            >
                                Cancel
                            </Button>
                            <h2 className="font-semibold text-black">Add to a path</h2>
                        </div>

                        <div className="flex justify-center mb-4">
                            <Button onClick={handleCreatePath} className="h-[52px] w-[181px] rounded-xs bg-white text-purple-500 border border-purple-500 hover:bg-purple-300 hover:text-black hover:border-black">
                                Create a path
                            </Button>
                        </div>

                        {/* Search Input */}
                        <div className="flex w-[413px] h-[50px] items-center mb-4 border border-black rounded-md">
                            <Input id="search" placeholder="Find a path" className="border-none" />
                            <Button variant="ghost" className="text-black hover:bg-transparent">
                                <Search /> 
                            </Button>
                        </div>

                        {/* Radio Buttons for Path Selection */}
                        <RadioGroup value={selectedPath} onValueChange={(value) => setSelectedPath(value)} className="space-y-2">
                            {paths.map((path) => (
                                <div key={path.id} className="flex items-center space-x-2">
                                    <Route />
                                    <Label htmlFor={path.id.toString()}>{path.name}</Label>
                                    <RadioGroupItem id={path.id.toString()} value={path.name} />
                                </div>
                            ))}
                        </RadioGroup>

                        {/* Add Button */}
                        <div className="flex justify-center mb-4">
                            <Button className="h-[52px] w-[99px] rounded-xs bg-white text-purple-500 border border-purple-500 hover:bg-purple-300 hover:text-black hover:border-black">
                                Add
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>
            )}

            {/* Third Dialog: Create Path Modal */}
            {showCreatePathDialog && <SectionDialog />}

            {/* Confirmation Popup */}
            {showConfirmation && (
                <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
                    <DialogContent className="w-[614px] h-[160px] flex flex-col justify-center">
                        <div className="flex items-center mb-4">
                            <SquareCheckBig className="mr-2 text-black" size={24} />
                            <p className="text-lg font-semibold">The resource is added to the learning path</p>
                        </div>
                        {/* Move the buttons slightly up and center */}
                        <DialogFooter className="flex justify-center space-x-4 mt-2">
                            <Button variant="outline" className=" w-[186px] h-[46px] border border-black bg-white rounded-1 text-black" onClick={handleBack}>Cancel</Button>
                            <Button variant="default" className=" w-[126px] h-[46px]  border border-black bg-white rounded-1 text-black">Back to space</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
}
