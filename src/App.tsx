import React from 'react';
import { ItemGrid } from "./components/ItemGrid/ItemGrid"
import { Sidebar } from './components/Sidebar/Sidebar';
import './App.css';
import { Toolbar } from './components/Toolbar/Toolbar';

function App() {
  return (
    <div className='flex flex-col space-y-0'>
      <Toolbar/>
      <div className='flex w-full'>
        <Sidebar/>
        <ItemGrid/>
      </div>
    </div>
  );
}

export default App;
