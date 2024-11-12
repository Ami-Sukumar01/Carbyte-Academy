"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function IntroScreen({ onClose }: { onClose: () => void }) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem("hasSeenIntro");
    if (hasSeenIntro) {
      setShowIntro(false);
    }
  }, []);

  const handleLetsGo = () => {
    localStorage.setItem("hasSeenIntro", "true");
    setShowIntro(false);
    onClose();
  };

  if (!showIntro) return null;

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="p-8 text-center border-2 rounded-lg shadow-lg animate-fadeIn">
        <h2 className="text-2xl font-bold mb-4">Hello!</h2>
        <p className="mb-4">Before you start your learning path, let me give you some background information:</p>
        <p className="font-semibold mb-2">Description / Objectives:</p>
        <p className="mb-4">
          This learning path introduces you to the various topics of E2E, providing insight into the knowledge you need to work on projects.
        </p>
        <p className="font-semibold mb-2">Motivation:</p>
        <p className="mb-6">
          It's perfect for helping you get to know your way around the space, especially if you're new here.
        </p>
        <Button onClick={handleLetsGo} className="bg-purple-500 text-white px-6 py-2 rounded-md">
          Let's go!
        </Button>
      </div>
    </div>
  );
}
