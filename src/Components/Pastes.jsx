import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { removeFromPaste } from '../Redux/pasteSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

import editIcon from '../assets/edit.png';
import viewIcon from '../assets/view.png';
import deleteIcon from '../assets/delete.png';
import copyIcon from '../assets/copy.png';
import shareIcon from '../assets/share.png';

const Pastes = () => {
  const { pastes } = useSelector(state => state.paste);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const filterdata = pastes.filter(
    (paste) =>
      paste.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paste.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPaste(pasteId));
  }

  function handleCopy(content) {
    navigator.clipboard.writeText(content);
    toast.success("Copied to clipboard!");
  }

  function handleShare(paste) {
    if (navigator.share) {
      navigator
        .share({ title: paste.title, text: paste.content })
        .then(() => toast.success("Shared successfully!"))
        .catch(() => toast.error("Share failed!"));
    } else {
      toast.error("Share not supported on this browser.");
    }
  }

  function getPreview(content) {
    const lines = content.split('\n');
    if (lines.length <= 4) return content;
    return lines.slice(0, 4).join('\n') + '\n...';
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center py-8 px-2">
      <div className="w-full max-w-7xl mx-auto">
        <input
          className="w-full border border-gray-300 rounded-md p-4 mb-8 focus:outline-none focus:border-blue-400 transition text-lg"
          type="text"
          placeholder="Search pastes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filterdata.length > 0 ? (
            filterdata.map((paste) => (
              <div
                key={paste._id}
                className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 flex flex-col gap-4 w-full"
              >
                <div className="flex flex-row justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-800 truncate">{paste.title}</h2>
                  <span className="text-xs text-gray-400">{paste.createdAt}</span>
                </div>
                <pre className="bg-gray-900 text-green-200 rounded-md p-4 overflow-x-auto text-sm my-2 min-h-[96px]">
                  <code>
                    {getPreview(paste.content)}
                  </code>
                </pre>
                <div className="flex flex-wrap gap-3 mt-2 justify-end">
                  <Link
                    to={`/?pasteId=${paste._id}`}
                    className="bg-blue-500 hover:bg-blue-600 rounded px-3 py-2 transition flex items-center"
                  >
                    <img src={editIcon} alt="Edit" className="w-6 h-6" />
                  </Link>
                  <Link
                    to={`/pastes/${paste._id}`}
                    className="bg-green-500 hover:bg-green-600 rounded px-3 py-2 transition flex items-center"
                  >
                    <img src={viewIcon} alt="View" className="w-6 h-6" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDelete(paste._id)}
                    className="bg-red-500 hover:bg-red-600 rounded px-3 py-2 transition flex items-center"
                  >
                    <img src={deleteIcon} alt="Delete" className="w-6 h-6" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCopy(paste.content)}
                    className="bg-yellow-500 hover:bg-yellow-600 rounded px-3 py-2 transition flex items-center"
                  >
                    <img src={copyIcon} alt="Copy" className="w-6 h-6" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleShare(paste)}
                    className="bg-purple-500 hover:bg-purple-600 rounded px-3 py-2 transition flex items-center"
                  >
                    <img src={shareIcon} alt="Share" className="w-6 h-6" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-gray-500 text-center py-12 bg-white rounded-lg shadow">
              No pastes found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pastes;