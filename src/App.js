import React from 'react';
import HookMouseContainer from './components/hookMouseContainer/HookMouseContainer';
import IntervalHookCounter from './components/intervalHookCounter/IntervalHookCounter';
import DataFetching from './components/dataFetching/DataFetching';

function App() {
  return (
    <React.Fragment>
      <HookMouseContainer/>
      <IntervalHookCounter/>
      <DataFetching/>
    </React.Fragment>
  );
}

export default App;
