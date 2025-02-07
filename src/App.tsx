import React from 'react';
import CodeEditor from './components/CodeEditor';

const App: React.FC = () => {
  return (
    <div style={{ height: '100vh' }}>
      <CodeEditor />
    </div>
  );
};

export const SomeOtherComponent = () => {
  // component logic
};

export default App;