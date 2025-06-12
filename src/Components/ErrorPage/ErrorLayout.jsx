import React from 'react';

const ErrorLayout = ({children}) => {
    return (
        <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {children}
      </main>
      {/* No footer included */}
    </div>
    );
};

export default ErrorLayout;