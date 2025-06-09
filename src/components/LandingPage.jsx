import React from 'react';
import { PiDetectiveFill } from "react-icons/pi";
import axios from '../axios';

export function LandingPage() {
  return (
    <>
    <div className='bg-blend-darken text-4xl text-amber-50'>
      Cipher is here
    </div>

    <div>
      <button onClick={
        axios.get("/encrypt")
      }></button>
    </div>
    </>
  );
}
