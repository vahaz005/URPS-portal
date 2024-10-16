import React from 'react';

const Page = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-6xl font-bold mb-4">NEXT.js</h1>
      <ol className="list-decimal list-inside mb-6">
        <li>Get started by editing <code className="bg-gray-800 p-1 rounded">src/app/page.tsx</code>.</li>
        <li>Save and see your changes instantly.</li>
      </ol>
      <div className="flex space-x-4">
        <button className="bg-white text-black font-bold py-2 px-4 rounded">Deploy now</button>
        <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Read our docs</button>
      </div>
      <div className="flex space-x-4 mt-8">
        <a href="#" className="text-gray-400 hover:text-white">Learn</a>
        <a href="#" className="text-gray-400 hover:text-white">Examples</a>
        <a href="#" className="text-gray-400 hover:text-white">Go to nextjs.org →</a>
      </div>
    </div>
  );
};

export default Page;