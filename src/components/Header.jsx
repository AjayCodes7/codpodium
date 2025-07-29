import React, { useState } from "react";

const RunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
    </svg>
);

const ResetIcon = ()=>(
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 110 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
    </svg>
);

const DownloadIcon = ()=>(
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

function Header(props){
    const options = [
        {id: 'run-btn', label : 'Run', icon : <RunIcon/>, action: props.run},
        {id: 'reset-btn', label : 'Reset', icon : <ResetIcon/>, action: props.reset},
        {id: 'download-zip-btn', label : 'Download', icon : <DownloadIcon/>, action: props.download},
    ]

    return (
        <>
        <header className="bg-gray-800 p-4 flex justify-between items-center shadow-lg border-b border-gray-700 h-[35px]">
        <h1 className="text-sm font-bold text-gray-100">CodPodium</h1>
        <div className="flex items-center space-x-3">
            {options.map((option)=>(
                <button 
                    key={option.id}
                    id={option.id} 
                    className="bg-gray-800 hover:bg-stone-100 hover:text-gray-900 text-sm text-blue-50 font-semibold py-1 px-1 rounded-lg transition-colors duration-300 flex items-center space-x-2"
                    onClick={option.action}
                >
                {option.icon}
                <span>{option.label}</span>
                </button>
            ))}
        </div>
    </header>
    </>
    )
}

export default Header;