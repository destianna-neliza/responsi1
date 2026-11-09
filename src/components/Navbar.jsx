function Navbar() {
  return (
    <nav className="navbar-custom">
      <div>
        <h4>Dashboard</h4>
        <small>Halaman Manajemen Rekam Medis</small>
      </div>

      <div className="admin-info">
        <span className="notification">♧</span>
        <div className="avatar">A</div>
        <strong>Admin</strong>
      </div>
    </nav>
  );
}

export default Navbar;
