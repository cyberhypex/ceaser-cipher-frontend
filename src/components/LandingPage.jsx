import React from 'react';
import { PiDetectiveFill } from "react-icons/pi";


export function LandingPage(props) {
    

    return (
        <>
        <div className='flex items-center justify-center min-h-screen'>
             <div className="mx-auto p-4  ">
                <PiDetectiveFill size={200}/>
             </div>
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Encrypt a message</button>
        </div>
       
           
        
            
        </>
    )
}
