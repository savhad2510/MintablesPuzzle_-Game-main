import React, { useState } from 'react';
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css';
import { galleryImages } from './imageData';

const ImageGallery = () => {
    const [text, setText] = useState('Unpuzzle the pieces!!');
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const set = () => {
        setText('Congratulations!!');
    };

    const showPuzzle = (index) => {
        setSelectedImageIndex(index);
    };

    return (
        <div className="p-6  bg-black ">
            <h1 className='text-center text-3xl font-mono font-bold text-white'>Mintabless</h1>
            <h2 className="tag text-center mt-4 text-2xl font-semibold text-white">{text}</h2>
            {selectedImageIndex !== null ? (
                <div className="max-w-[900px] mx-auto border-4 rounded-md " >
                    <JigsawPuzzle
                        imageSrc={galleryImages[selectedImageIndex].imageUrl}
                        rows={3}
                        columns={3}
                        onSolved={set}
                        className="jigsaw-puzzle "

                    />
                    <div className='flex justify-between mt-5 mb-5'>
                        <button onClick={() => setSelectedImageIndex(null)} className="mt-4 block mx-auto py-2 px-4 bg-gray-800 text-white rounded-lg">
                            Back to Gallery
                        </button>
                        <button className="mt-4 block mx-auto py-2 px-4 bg-green-600 text-white rounded-lg">
                            Mint
                        </button>
                    </div>

                </div>
            ) : (
                <div className="grid grid-cols-3 gap-4 ">
                    {galleryImages.map((image, index) => (
                        <div key={image.id} className="border mx-auto bg-red-50 p-4 rounded-xl h-[23rem] w-[20rem]">
                            <img
                                src={image.imageUrl}
                                alt={image.name}
                                className="max-w-full h-auto mx-auto cursor-pointer"
                                onClick={() => showPuzzle(index)}
                            />
                            <div className="text-center mt-5 font-semibold">{image.name}</div>
                        </div>
                    ))}
                </div>
            )
            }
        </div >
    );
};

export default ImageGallery;
