// import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router";

export default function App(){
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     const hasLoadedBefore = localStorage.getItem('hasLoadedBefore');
    //     if (hasLoadedBefore) {
    //         setIsLoading(false);
    //         return;
    //     }

    //     const minimumLoadingTime = 2000; 
    //     const startTime = Date.now();

    //     const handleLoad = () => {
    //         const elapsedTime = Date.now() - startTime;
    //         const remainingTime = minimumLoadingTime - elapsedTime;

    //         if (remainingTime > 0) {
    //             setTimeout(() => {
    //                 setIsLoading(false);
    //                 localStorage.setItem('hasLoadedBefore', 'true');
    //             }, remainingTime);
    //         } else {
    //             setIsLoading(false);
    //             localStorage.setItem('hasLoadedBefore', 'true');
    //         }
    //     };

    //     window.addEventListener('load', handleLoad);

    //     return () => {
    //         window.removeEventListener('load', handleLoad);
    //     };
    // }, []);

    // if (isLoading) {
    //     return( 
    //         <div className="loading-screen">
    //             <img src="images/alignAI-icon.png" alt="loading..." />
    //         </div>);
    // }

    return(
        <div className="app">
            <Navbar/>
            <Outlet/>
        </div>
    )
}