"use client"

import { useState, useEffect } from "react";

const useKeyPress = (targetKey: string, action: () => void) => {
    const [keyPressed, setKeyPressed] = useState<boolean>(false);

    const downHandler = ({ key }: KeyboardEvent) => {
      
        if (key === targetKey) {
            setKeyPressed(true)
            action()
        }
    }
    
    const upHandler = ({ key }: KeyboardEvent) => {
        if (key === targetKey) {
            setKeyPressed(false)
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', downHandler);
       window.addEventListener('keyup', upHandler);

        return () => {
            window.removeEventListener('keydown', downHandler);
         window.removeEventListener('keyup', upHandler);
        }
    }, [])

    return keyPressed;
};

export default useKeyPress