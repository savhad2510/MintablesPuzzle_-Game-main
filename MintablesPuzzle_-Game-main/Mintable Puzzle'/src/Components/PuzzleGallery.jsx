import React from 'react';
import { galleryImages } from './imageData';
import { JigsawPuzzle } from 'react-jigsaw-puzzle';

const PuzzleGallery = () => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {galleryImages.map((image) => (
                <div key={image.id} className="border rounded p-4">
                    <JigsawPuzzle
                        image={image.imageUrl}
                        width={300}
                        height={300}
                        pieces={20}
                        draggable
                    />
                    <div className="text-center mt-2">{image.name}</div>
                </div>
            ))}
        </div>
    );
};

export default PuzzleGallery;
