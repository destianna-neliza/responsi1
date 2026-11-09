function Sidebar() {
  return (
    <aside className="sidebar">
      <h3 className="brand">
        Med<span>Care.</span>
      </h3>

      <p className="menu-label">MENU UTAMA</p>

      <a href="#dashboard" className="menu-item active">
        <span>▦</span> Dashboard
      </a>

      <a href="#pasien" className="menu-item">
        <span>👥</span> Data Pasien
      </a>

      <a href="#ringkasan" className="menu-item">
        <span>📊</span> Ringkasan
      </a>

      <div className="sidebar-footer">
        <div className="avatar">A</div>
        <div>
          <strong>Admin Klinik</strong>
          <small>Administrator</small>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
