import './App.css';
import React, { useState, useEffect} from 'react';
import Sidebar from './SideBar';
import MainContent from './MainContent';

function App() {
  // State để điều khiển sidebar mở hoặc đóng
  const [isOpen, setIsOpen] = useState(true);
  
  // Hàm để toggle (đóng/mở) sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Đặt tên tab
    document.title = 'Object Detector';
    
    // Cleanup function (nếu cần thiết)
    return () => {
      document.title = 'Object Detector'; // Đặt lại tên tab khi component unmount
    };
  }, []); // Chạy chỉ một lần khi component được mount

  
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={websitelogo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <div className="flex h-screen">
      {/* Sidebar component với trạng thái đóng/mở */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* MainContent component, di chuyển khi sidebar mở */}
      <MainContent toggleSidebar={toggleSidebar} isOpen={isOpen} />
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
}



export default App;