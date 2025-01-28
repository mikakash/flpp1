'use client';

import React from 'react';

const ImageModal = ({ isOpen, onClose, imageUrl, altText, label }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <button
        className="absolute top-4 right-4 text-white text-3xl hover:text-[#FFD700] transition-colors"
        onClick={onClose}
        aria-label="Close Modal"
      >
        x
      </button>
      <div className="max-w-4xl w-full">
        <img
          src={imageUrl}
          alt={altText}
          className="w-full max-h-[80vh] object-contain"
        />
        <div className="text-white mt-4">
          <p className="font-space-grotesk text-lg">{altText}</p>
          <p className="text-[#FFD700] mt-2">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;