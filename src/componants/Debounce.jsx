import React, { useState, useEffect } from 'react';
import { useDebouncehook } from './useDebouncehook';

const Debounce = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    const debounceResult = useDebouncehook(searchTerm, 500);

    const fetchResults = (value) => {
        setResults(prev => [...prev, value]);
    };

    useEffect(() => {

        fetchResults(debounceResult);

    }, [debounceResult]);

    return (
        <div>
            <h2>Search with Debounce</h2>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {results.map((result, index) => (
                    <li key={index}>{result}</li>
                ))}
            </ul>
        </div>
    );
};

export default Debounce;
