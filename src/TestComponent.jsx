import React from 'react';

const TestComponent = () => {
    return (
        <div className="p-4 bg-blue-100">
            <h1 className="text-3xl font-bold text-blue-500">
                Testing Tailwind CSS
            </h1>
            <p className="mt-2 text-gray-700">
                This text should be gray if Tailwind is working.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Test Button
            </button>
        </div>
    );
};

export default TestComponent;