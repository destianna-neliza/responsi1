function PatientTable({
  patients,
  search,
  setSearch,
  onAdd,
  onEdit,
  onDelete,
}) {
  // Pencarian data pasien
  const filteredPatients = patients.filter(
    (patient) =>
      patient.patientName.toLowerCase().includes(search.toLowerCase()) ||
      patient.medicalRecord.toLowerCase().includes(search.toLowerCase()) ||
      patient.clinic.toLowerCase().includes(search.toLowerCase()) ||
      patient.doctor.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section id="pasien" className="product-section">
      <div className="section-header">
        <div>
          <h4>Daftar Pasien</h4>
          <p>Kelola data pasien klinik dan rumah sakit.</p>
        </div>

        <button className="btn-add" onClick={onAdd}>
          + Tambah Pasien
        </button>
      </div>

      {/* Pencarian pasien */}
      <div className="search-box">
        <input
          type="text"
          className="form-control"
          placeholder="Cari nama, nomor RM, poli, atau dokter..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Tabel pasien */}
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>No</th>
              <th>No. Rekam Medis</th>
              <th>Nama Pasien</th>
              <th>Jenis Kelamin</th>
              <th>Poliklinik</th>
              <th>Dokter</th>
              <th>Tanggal Kunjungan</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {filteredPatients.length > 0 ? (
              filteredPatients.map((patient, index) => (
                <tr key={patient.id}>
                  <td>{index + 1}</td>
                  <td>
                    <strong>{patient.medicalRecord}</strong>
                  </td>
                  <td>{patient.patientName}</td>
                  <td>{patient.gender}</td>
                  <td>{patient.clinic}</td>
                  <td>{patient.doctor}</td>
                  <td>{patient.visitDate}</td>
                  <td>
                    {patient.status === "Selesai" ? (
                      <span className="status-safe">Selesai</span>
                    ) : patient.status === "Dalam Penanganan" ? (
                      <span className="status-low">Dalam Penanganan</span>
                    ) : (
                      <span className="status-low">Menunggu</span>
                    )}
                  </td>

                  <td>
                    <div className="action-buttons">
                      <button
                        className="btn-edit"
                        onClick={() => onEdit(patient)}
                      >
                        Edit
                      </button>

                      <button
                        className="btn-delete"
                        onClick={() => onDelete(patient.id)}
                      >
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center py-4">
                  Data pasien tidak ditemukan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <p className="product-count">
        Menampilkan {filteredPatients.length} dari {patients.length} pasien
      </p>
    </section>
  );
}

export default PatientTable;
