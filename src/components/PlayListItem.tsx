import React from 'react';

export default function PlayListItem({ title = 'No Song Item', genre = '', duration = '' }) {
    return (
        <div>
            {title === 'No Song Item' ? (
                <div className="text-xl font-bold m-2">Unselected</div>
            ) : (
                <div className="flex justify-between items-center my-6">
                    <div className="w-1/2">
                        <h2 className="text-black text-md font-semibold pl-2">{title}</h2>
                        <p className="text-gray font-semibold pl-2">{genre}</p>
                    </div>
                    <div className="w-1/2 text-gray font-semibold text-right pr-2">{duration}</div>
                </div>
            )}
        </div>
    );
}
