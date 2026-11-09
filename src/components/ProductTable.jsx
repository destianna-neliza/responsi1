function ProductTable({
  products,
  search,
  setSearch,
  onAdd,
  onEdit,
  onDelete,
  formatRupiah,
}) {
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section id="produk" className="product-section">
      <div className="section-header">
        <div>
          <h4>Daftar Produk</h4>
          <p>Kelola semua produk toko online kamu.</p>
        </div>

        <button className="btn-add" onClick={onAdd}>
          + Tambah Produk
        </button>
      </div>

      <div className="search-box">
        <input
          type="text"
          className="form-control"
          placeholder="Cari nama atau kategori produk..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Produk</th>
              <th>Kategori</th>
              <th>Harga</th>
              <th>Stok</th>
              <th>Diskon</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>
                    <strong>{product.name}</strong>
                  </td>
                  <td>{product.category}</td>
                  <td>{formatRupiah(product.price)}</td>
                  <td>{product.stock}</td>
                  <td>{product.discount}%</td>
                  <td>
                    {product.stock <= 10 ? (
                      <span className="status-low">Stok Menipis</span>
                    ) : (
                      <span className="status-safe">Tersedia</span>
                    )}
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button
                        className="btn-edit"
                        onClick={() => onEdit(product)}
                      >
                        Edit
                      </button>

                      <button
                        className="btn-delete"
                        onClick={() => onDelete(product.id)}
                      >
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-4">
                  Produk tidak ditemukan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <p className="product-count">
        Menampilkan {filteredProducts.length} dari {products.length} produk
      </p>
    </section>
  );
}

export default ProductTable;
