import React from 'react';
import './SideBar.css'; // Nhập file CSS
// Đường dẫn đến icon
const SideBarCloseIconPath = '/icon/sidebar.svg'
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
       {/* Chỗ hiện SideBar và cái IconCloseSideBar */}
      <div className="sidebar-header">
        <h2>Sidebar</h2>
        <button onClick={toggleSidebar} className="close-button">
          <img src={SideBarCloseIconPath} alt="close" className={`icon ${isOpen ? '' : 'closed'}`} />
        </button>
      </div>

      {/* Khung đầu tiên: Input Query và Index */}
      <div className="input-group">
        <label htmlFor="query">Input Query:</label>
        <input type="text" id="query" placeholder="Nhập văn bản..." />
        
        <label htmlFor="index">Index:</label>
        <input type="number" id="index" placeholder="Chỉ số" />
      </div>

      {/* Khung thứ hai: Dropdown và Quantity */}
      <div className="input-group">
        <label htmlFor="object-select">Select an Object:</label>
        <select id="object-select">
          <option value="">Chọn đối tượng</option>
          <option value="object1">Object 1</option>
          <option value="object2">Object 2</option>
          <option value="object3">Object 3</option>
        </select>
        
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" placeholder="Số lượng" />
      </div>

      {/* Khung thứ ba: No. of Nearby Frames và Expand Button */}
      <div className="input-group">
        <label htmlFor="nearby-frames">No. of Nearby Frames:</label>
        <input type="number" id="nearby-frames" placeholder="Số khung gần" />
      </div>

      {/* Khung thứ tư: No. of Images, Search Type và Search Button */}
      <div className="input-group">
        <label htmlFor="image-num">No. of Image:</label>
        <input type="number" placeholder="No. of Image" />
        <div className="input-group-inline">
          <select className="select-search-type">
            <option value="SearchType1">Search Type 1</option>
            <option value="SearchType2">Search Type 2</option>
            <option value="SearchType3">Search Type 3</option>
          </select>
          <button className="search-button">Search</button>
       </div>
      </div>

      {/* Nút Search Again with Feedback */}
      <button className="feedback-button">Search Again with Feedback</button>

      {/* Nút Download All Results as CSV */}
      <button className="download-button">Download All Results as CSV</button>
    </div>
  );
};

export default Sidebar;
