"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react'; // Import an upload icon for the button
import ResourceTypesPage from "@/components/ResourcePage/ContentCard";
import { Suspense } from 'react';

const ResourceForm: React.FC = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        url: '',
        file: null as File | null,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFormData({
                ...formData,
                file: e.target.files[0],
            });
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form data:', formData);
        // Handle form submission (e.g., API call)
    };

    return (
        <form onSubmit={handleSubmit} className="w-[867px] h-[2247px] mt-[50px] border border-black mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xs mb-4 text-grey-900">Spaces / E2E / Add resource</h2>

            <div className=" mx-auto px-4 md:px-8">
                <div className="mb-4 mt-[35px]">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="mt-1 block w-[684px] h-[48px] p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Enter your email address"
                    />
                    {/* Text below the textarea */}
                    <p className="mt-2 text-sm text-grey-900">
                        Enter the title of the resource
                    </p>
                </div>

                <div className="mb-4 mt-[35px]">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        name="description"
                        id="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="mt-1 block w-[684px] h-[156px] p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Describe the resource"
                        maxLength={300}
                    ></textarea>

                    {/* Text below the textarea */}
                    <p className="mt-2 text-sm text-grey-900">
                        Max 300 characters
                    </p>
                </div>

                <div className=" mt-[35px] mb-[35px]">
                    <label htmlFor="url" className="block text-sm font-medium text-gray-700">URL</label>
                    <input
                        type="text"
                        name="url"
                        id="url"
                        value={formData.url}
                        onChange={handleInputChange}
                        className="mt-1 block w-[684px] h-[48px] p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Original resource URL"
                        maxLength={300}
                    />
                    {/* Text below the textarea */}
                    <p className="mt-2 text-sm text-grey-900">
                        Max 300 characters
                    </p>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Upload a file</label>
                    <div className="flex items-center">
                        <input
                            type="file"
                            onChange={handleFileChange}
                            accept=".pdf,.jpeg,.png,.mp4,.pptx"
                            className="hidden"
                            id="file-upload"
                        />
                        <div>
                        </div>
                        <label htmlFor="file-upload">
                            <Button className="items-center w-[164px] h-[46px] bg-white text-black border border-black">
                                <Plus className="mr-2" />
                                Upload
                            </Button>
                        </label>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">PDF, JPEG, PNG, MP4, PPTX</p>
                </div>
            </div>

             <ResourceTypesPage/>
                {/* The section below ResourceTypesPage */}
                <div className="mt-8 md:px-8">
                    <h3 className="text-xl font-semibold mb-4">Level</h3>
                    <div className="flex space-x-4 mt-2">
                        <Button variant="outline" className=" border rounded-xs border-black w-[111px] h-[46px]">Basic</Button>
                        <Button variant="outline" className=" border rounded-xs border-black w-[174px] h-[46px]">Intermediate</Button>
                        <Button variant="outline" className=" border rounded-xs border-black w-[151px] h-[46px]">Advanced</Button>
                    </div>

                    <h3 className="mt-10 text-xl font-semibold">Are you the author?</h3>
                    <div className="flex space-x-4 mt-5">
                        <Button variant="outline" className=" w-[95px] h-[46px]">Yes</Button>
                        <Button variant="outline" className=" w-[95px] h-[46px]">No</Button>
                    </div>

                    <div className="flex space-x-4 mt-[120px]">
                        <Button variant="outline" type="submit" className="bg-white w-[264px] h-[46px] text-black border border-black rounded-xs transition-shadow duration-300 ease-in-out hover:bg-white hover:shadow-[3px_3px_0_black] ">Add resource to the path</Button>
                        <Button variant="outline" type="button" className="bg-white w-[198px] h-[46px] text-black border border-black rounded-xs transition-shadow duration-300 ease-in-out hover:bg-white hover:shadow-[3px_3px_0_black] ">save in a space</Button>
                        <Button variant="outline" type="button" className="bg-white w-[124px] h-[46px] text-black border border-black rounded-xs transition-shadow duration-300 ease-in-out hover:bg-white hover:shadow-[3px_3px_0_black] ">cancel</Button>
                    </div>
                </div>
        </form>
    );
};

export default ResourceForm;
