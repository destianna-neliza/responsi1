function Sidebar() {
  return (
    <aside className="sidebar">
      <h3 className="brand">
        Pink<span>Shop.</span>
      </h3>

      <p className="menu-label">MENU UTAMA</p>

      <a href="#dashboard" className="menu-item active">
        <span>▦</span> Dashboard
      </a>

      <a href="#produk" className="menu-item">
        <span>🛍️</span> Data Produk
      </a>

      <a href="#ringkasan" className="menu-item">
        <span>📊</span> Ringkasan
      </a>

      <div className="sidebar-footer">
        <div className="avatar">A</div>
        <div>
          <strong>Admin Toko</strong>
          <small>Administrator</small>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
