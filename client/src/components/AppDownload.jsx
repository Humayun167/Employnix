import React from 'react';
import { assets } from '../assets/assets';

const AppDownload = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="flex bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Download Mobile app for Better Experience</h1>
                
                <div className="flex justify-center space-x-4 mb-6">
                    <a href="">
                        <img src={assets.play_store} alt="Play Store" className="h-12" />
                    </a>
                    <a href="">
                        <img src={assets.app_store} alt="App Store" className="h-12" />
                    </a>
                </div>
                </div>
                <div className="flex justify-center">
                    <img src={assets.app_main_img} alt="App Main" className="w-full max-w-md" />
                </div>
            </div>
        </div>
    );
};

export default AppDownload;