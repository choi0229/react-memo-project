import { useState } from 'react';
import './App.css';
import MemoContainer from './components/MemoContainer';
import SideBar from './components/SideBar';

function App() {
  const [memos, setMemos] = useState([
    {
      title: 'Memo 1',
      content: 'This is memo 1',
      createdAt: 0,
      updatedAt: 0,
    },
    {
      title: 'Memo 2',
      content: 'This is memo 2',
      createdAt: 1,
      updatedAt: 1,
    },
  ]);
  return (
    <div className="App">
      <SideBar memos={memos} />
      <MemoContainer />
    </div>
  );
}

export default App;
