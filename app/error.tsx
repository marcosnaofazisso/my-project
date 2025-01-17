"use client"

import { useState, useEffect } from 'react';

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

export default function ErrorPage({ children }: ErrorBoundaryProps) {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const handleError = () => setHasError(true);
        window.addEventListener('error', handleError);

        return () => {
            window.removeEventListener('error', handleError);
        };
    }, []);

    if (hasError) {
        return (
            <div>
                <h1>Something went wrong!</h1>
            </div>
        );
    }

    return children;
}