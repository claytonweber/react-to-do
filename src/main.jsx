import React from 'react';
import ReactDOM from 'react-dom/client';
import ToDoApp from '@/components/App';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(
  <React.StrictMode>
    <ToDoApp />
  </React.StrictMode>
);