import React from 'react';
import Page from './Page';

const ContentListPage = () => {
  return (
    <Page>
      <div className="p-10">
        <h2 className="text-3xl font-bold text-brand-primary">CONTENT LIST</h2>
        <ul className="mt-8 space-y-4">
          <li className="flex justify-between"><span>Chapter 1</span> <span>01</span></li>
          <li className="flex justify-between"><span>Chapter 2</span> <span>05</span></li>
          <li className="flex justify-between"><span>Chapter 3</span> <span>10</span></li>
          <li className="flex justify-between"><span>Chapter 4</span> <span>15</span></li>
          <li className="flex justify-between"><span>Chapter 5</span> <span>20</span></li>
        </ul>
      </div>
    </Page>
  );
};

export default ContentListPage;
