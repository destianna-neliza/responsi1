function ProductForm({ form, setForm, editId, onSubmit, onClose }) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div className="modal-overlay">
      <div className="form-modal">
        <div className="modal-header-custom">
          <h4>{editId ? "Edit Produk" : "Tambah Produk Baru"}</h4>

          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">Nama Produk</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Masukkan nama produk"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Kategori</label>
            <input
              type="text"
              name="category"
              className="form-control"
              placeholder="Contoh: Fashion"
              value={form.category}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Harga Produk (Rp)</label>
            <input
              type="number"
              name="price"
              className="form-control"
              min="0"
              value={form.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Jumlah Stok</label>
            <input
              type="number"
              name="stock"
              className="form-control"
              min="0"
              value={form.stock}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Diskon (%)</label>
            <input
              type="number"
              name="discount"
              className="form-control"
              min="0"
              max="100"
              value={form.discount}
              onChange={handleChange}
              required
            />
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Batal
            </button>

            <button type="submit" className="btn-save">
              {editId ? "Simpan Perubahan" : "Simpan Produk"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
