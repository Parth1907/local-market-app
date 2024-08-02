'use client';

import React from "react";
import HomeFooter from "./ui/HomeFooter";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                .fade-in {
                    opacity: 0; 
                    animation: fadeIn 2s ease-out forwards; 
                }

                .fade-in-delay-1 {
                    opacity: 0; 
                    animation: fadeIn 2s ease-out 1s forwards;
                }

                .fade-in-delay-2 {
                    opacity: 0; 
                    animation: fadeIn 2s ease-out 2s forwards; 
                }

                .fade-in-delay-2.5 {
                    opacity: 0; 
                    animation: fadeIn 2s ease-out 2.5s forwards; 
                }

                .fade-in-delay-10 {
                    opacity: 0; 
                    animation: fadeIn 2s ease-out 10s forwards; 
                }

                .container {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    padding-top: 200px; 
                }

                .text-content {
                    flex: 1;
                }

                .image-content {
                    flex: 1;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    padding: 0 350px; 
                }

                .image-content img {
                    max-width: 670px;
                    height: auto;
                    border-radius: 8px;
                    animation: spin 10s linear infinite;
                }

                .paragraph {
                    margin-top: 30px; 
                }

                /* Responsive Styles */
                @media (max-width: 1024px) {
                    .container {
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        padding-top: 120px; 
                    }

                    .image-content {
                        padding: 0;
                        margin-top: 20px; 
                    }

                    .text-content {
                        text-align: center;
                    }

                    .paragraph {
                        margin-top: 20px; 
                        margin-left: 0;
                        margin-right: 0;
                    }
                }

                @media (max-width: 640px) {
                    .container {
                        padding: 0;
                        padding-top: 100px; 
                    }

                    .image-content {
                        padding: 0;
                        margin-top: 30px; 
                    }

                    .text-content {
                        max-width: 100%;
                        padding: 0 16px; 
                    }

                    .paragraph {
                        margin-top: 20px; 
                        padding: 0 16px; 
                    }
                }

                @media (max-width: 375px) { 
                    .container {
                        padding-top: 80px;
                    }

                    .image-content {
                        padding: 0;
                        margin-top: 30px;
                    }

                    .text-content {
                        padding: 0 12px;
                    }

                    .paragraph {
                        margin-top: 16px;
                        padding: 0 12px;
                    }
                }
            `}</style>
            <div className="bg-[url('background.jpg')] bg-cover bg-center bg-no-repeat flex flex-col items-left min-h-screen px-4 sm:px-6 lg:px-8">
                <div className="container py-16 sm:py-24 lg:py-44 px-4 sm:px-6 lg:px-40 w-full max-w-screen-xl box-border">
                    <div className="text-content text-left max-w-lg">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-blue-800 fade-in">
                            SUPPORT
                        </h1>
                        <h2 className="text-6xl sm:text-7xl lg:text-9xl font-bold leading-tight text-blue-800 mt-4 fade-in-delay-1">
                            LOCAL
                        </h2>
                        <h3 className="text-6xl sm:text-7xl lg:text-9xl font-bold leading-tight text-blue-800 mt-4 fade-in-delay-2">
                            VENDORS
                        </h3>
                        <p className="text-xl sm:text-2xl lg:text-2xl font-bold text-blue-800 mx-8 sm:mx-12 lg:mx-0 fade-in-delay-2.5 paragraph">
                            Your one-stop shop for local goods and services. Discover products
                            from vendors in your community, and support small businesses by
                            shopping locally.
                        </p>

                        <HomeFooter className="fade-in-delay-10"/>
                    </div>
                    <div className="image-content">
                        <Image src="/glob.png" alt="Glob" />
                    </div>
                </div>
            </div>
        </>
    );
}
