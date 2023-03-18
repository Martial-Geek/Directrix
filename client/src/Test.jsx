import React from 'react'
import { useEffect } from 'react';

export default function Test() {
    useEffect(() => {
        const timeout = setTimeout(() => {
          // 👇️ redirects to an external URL
          window.location.replace('https://www.youtube.com/');
        }, 3000);
    
        return () => clearTimeout(timeout);
      }, []);
  return (
    "Will redirect in 3 seconds..."
  )
}
