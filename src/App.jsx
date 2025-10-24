import React from 'react';
import CoverPage from './components/CoverPage';
import ContentListPage from './components/ContentListPage';
import WelcomePage from './components/WelcomePage';
import PlannerPage from './components/PlannerPage';
import ActionListPage from './components/ActionListPage';

function App() {
  return (
    <main>
      <CoverPage />
      <ContentListPage />
      <WelcomePage />
      {Array.from({ length: 27 }, (_, i) => {
        const pageType = i % 4;
        if (pageType === 0) {
          return <PlannerPage key={i} type="WEEKLY" />;
        } else if (pageType === 1) {
          return <PlannerPage key={i} type="MONTHLY" />;
        } else {
          return <ActionListPage key={i} />;
        }
      })}
    </main>
  );
}

export default App;
