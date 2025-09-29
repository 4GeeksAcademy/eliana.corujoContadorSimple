import React, { useState, useEffect, useRef } from "react";
import SecondsCounter from './SecondsCounter';

const Home = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);
    }, [isRunning]);

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleResume = () => {
        setIsRunning(true);
    };

    const handleReset = () => {
        setIsRunning(false);
        setSeconds(0);
    };

    return (
        <div className="text-center mt-5">
            <SecondsCounter seconds={seconds} />
            
            <div className="mt-4">
                <button onClick={handleStop} className="btn btn-danger mx-2">Parar</button>
                <button onClick={handleResume} className="btn btn-success mx-2">Resumir</button>
                <button onClick={handleReset} className="btn btn-secondary mx-2">Reiniciar</button>
            </div>
        </div>
    );
};

export default Home;