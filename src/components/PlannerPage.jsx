import React from 'react';
import Page from './Page';

const PlannerPage = ({ type }) => {
  return (
    <Page>
      <div className="p-10">
        <h2 className="text-3xl font-bold text-brand-primary chapter-title">{type} PLANNER</h2>
      </div>
    </Page>
  );
};

export default PlannerPage;
