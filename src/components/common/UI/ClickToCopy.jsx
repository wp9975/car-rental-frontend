import { useState } from "react";
import { FaClipboard } from "react-icons/fa";

const ClickToCopy = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className=" relative">
      <input
        type="text"
        value={text}
        readOnly
        className="block  h-10 px-3 pr-20 text-sm placeholder-gray-400 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
      />
      <button
        onClick={copyToClipboard}
        className="absolute top-0 right-0 px-3 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
      >
        <FaClipboard className="inline-block mr-2" />
        {isCopied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default ClickToCopy;