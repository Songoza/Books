import React from 'react';

const Page = ({ children }) => {
  return (
    <section className="page" style={{ breakAfter: 'always' }}>
      {children}
    </section>
  );
};

export default Page;
