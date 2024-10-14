import React, { useState } from 'react';
import './MainContent.css'; // Nhập file CSS

const SideBarOpenIconPath = '/icon/sidebar.svg';

const MainContent = ({ toggleSidebar, isOpen }) => {
  // Tạo dữ liệu mẫu cho 100 khung hình
  const [imageFrames, setImageFrames] = useState(
    Array.from({ length: 5}, (_, index) => ({
      score: (Math.random() * (1 - 0.5) + 0.5).toFixed(2), // Điểm số ngẫu nhiên từ 0.5 đến 1
      index: index + 1,
      path: '/img/test_img.jpg', // Đường dẫn đến hình ảnh
      frameIdx: index + 1,
    }))
  );

  return (
    <div className={`main-content ${isOpen ? 'shifted' : ''}`}>
      {/* Chỉ hiển thị nút open-button khi sidebar đang đóng */}
      {!isOpen && (
        <button onClick={toggleSidebar} className="open-button">
          <img 
            src={SideBarOpenIconPath}
            alt="open"
            className="icon" 
          />
        </button>
      )}

      <div className={`header ${!isOpen ? 'header-compact' : ''}`}>
        <h1 className="text-2xl font-bold">Search Results</h1>
        <p>Select one or more images:</p>
      </div>

      {/* Khung chứa hình ảnh */}
      <div className="image-container">
        {imageFrames.map((frame, index) => (
          <div key={index} className="image-card">
            <img 
              src={frame.path} // Hiển thị hình ảnh từ đường dẫn
              alt={`Hình ${index}`} 
              className="image" 
            />
            <div className="image-info">
              <p>Điểm số: {frame.score}</p>
              <p>Chỉ số: {frame.index}</p>
              <p>Đường dẫn: {frame.path}</p>
              <p>Chỉ số khung: {frame.frameIdx}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
