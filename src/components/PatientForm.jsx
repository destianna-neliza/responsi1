function PatientForm({ form, setForm, editId, onSubmit, onClose }) {
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
          <h4>{editId ? "Edit Data Pasien" : "Tambah Pasien Baru"}</h4>

          <button type="button" className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">Nomor Rekam Medis</label>
            <input
              type="text"
              name="medicalRecord"
              className="form-control"
              placeholder="Contoh: RM005"
              value={form.medicalRecord}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Nama Pasien</label>
            <input
              type="text"
              name="patientName"
              className="form-control"
              placeholder="Masukkan nama pasien"
              value={form.patientName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Umur</label>
            <input
              type="number"
              name="age"
              className="form-control"
              placeholder="Masukkan umur"
              min="0"
              value={form.age}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Jenis Kelamin</label>
            <select
              name="gender"
              className="form-control"
              value={form.gender}
              onChange={handleChange}
              required
            >
              <option value="">Pilih jenis kelamin</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Poliklinik Tujuan</label>
            <select
              name="clinic"
              className="form-control"
              value={form.clinic}
              onChange={handleChange}
              required
            >
              <option value="">Pilih poliklinik</option>
              <option value="Poli Umum">Poli Umum</option>
              <option value="Poli Gigi">Poli Gigi</option>
              <option value="Poli Anak">Poli Anak</option>
              <option value="Poli Mata">Poli Mata</option>
              <option value="Poli Penyakit Dalam">Poli Penyakit Dalam</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Dokter Penanggung Jawab</label>
            <input
              type="text"
              name="doctor"
              className="form-control"
              placeholder="Contoh: dr. Budi"
              value={form.doctor}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Tanggal Kunjungan</label>
            <input
              type="date"
              name="visitDate"
              className="form-control"
              value={form.visitDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Status Penanganan</label>
            <select
              name="status"
              className="form-control"
              value={form.status}
              onChange={handleChange}
              required
            >
              <option value="">Pilih status</option>
              <option value="Menunggu">Menunggu</option>
              <option value="Dalam Penanganan">Dalam Penanganan</option>
              <option value="Selesai">Selesai</option>
            </select>
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Batal
            </button>

            <button type="submit" className="btn-save">
              {editId ? "Simpan Perubahan" : "Simpan Pasien"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PatientForm;
