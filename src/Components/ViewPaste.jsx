import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ViewPaste = () => {
  const { id } = useParams();
  const allPastes = useSelector(state => state.paste.pastes);
  const [paste, setPaste] = useState(null);

  useEffect(() => {
    const found = allPastes.find((p) => String(p._id) === String(id));
    setPaste(found || null);
  }, [id, allPastes]);

  if (!paste) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="bg-white p-8 rounded-xl shadow text-gray-600 text-lg w-full max-w-xl text-center">
          Paste not found.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center py-8 px-2">
      <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-xl shadow-lg p-6 md:p-12 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 break-all">{paste.title}</h2>
          <span className="text-xs text-gray-400">{paste.createdAt}</span>
        </div>
        <div>
          <label className="block mb-2 text-lg font-semibold text-gray-700">
            Content
          </label>
          <pre className="w-full min-h-[300px] p-4 border-2 border-gray-300 rounded-md font-mono bg-gray-900 text-green-200 overflow-x-auto text-base md:text-lg">
            <code>{paste.content}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ViewPaste;