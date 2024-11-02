import { useState } from "react";
import { ArrowBigUp, Bookmark, Clock } from "lucide-react";

interface ButtonWithPopupProps {
  className?: string;
}

const ButtonWithPopup: React.FC<ButtonWithPopupProps> = ({ className = "" }) => {
  const [popupMessage, setPopupMessage] = useState<string | null>(null);

  // Function to show popup with a given message
  const showPopup = (message: string) => {
    setPopupMessage(message);
    setTimeout(() => setPopupMessage(null), 2000); // Hide popup after 2 seconds
  };

  return (
    <div className={`relative flex space-x-2 mt-2 ${className}`}>
      {/* Upvote Button */}
      <button
        className="border border-black rounded-md p-2"
        onClick={() => showPopup("Upvote the resource")}
      >
        <ArrowBigUp size={24} />
      </button>

      {/* Bookmark Button */}
      <button
        className="border border-black rounded-md p-2"
        onClick={() => showPopup("Save for later")}
      >
        <Bookmark size={24} />
      </button>

      {/* Outdated Button */}
      <button
        className="border border-black rounded-md p-2 bg-red-600 text-white"
        onClick={() => showPopup("[number of people] marked it as outdated")}
      >
        <Clock size={24} />
      </button>

      {/* Popup Message */}
      {popupMessage && (
        <div className="absolute top-[-2rem] left-1/2 transform -translate-x-1/2 bg-white text-black border border-gray-300 rounded-md p-2 shadow-lg text-sm">
          {popupMessage}
        </div>
      )}
    </div>
  );
};

export default ButtonWithPopup;
