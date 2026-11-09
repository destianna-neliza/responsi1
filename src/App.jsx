import { useState, useEffect } from "react";
import $ from "jquery";

import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";
import PatientTable from "./components/PatientTable.jsx";
import PatientForm from "./components/PatientForm.jsx";

function App() {
  // Data awal pasien
  const [patients, setPatients] = useState([
    {
      id: 1,
      medicalRecord: "RM001",
      patientName: "Andi Saputra",
      gender: "Laki-laki",
      age: 25,
      clinic: "Poli Umum",
      doctor: "dr. Budi",
      visitDate: "2026-11-10",
      status: "Selesai",
    },
    {
      id: 2,
      medicalRecord: "RM002",
      patientName: "Siti Amelia",
      gender: "Perempuan",
      age: 30,
      clinic: "Poli Gigi",
      doctor: "drg. Rina",
      visitDate: "2026-11-10",
      status: "Dalam Penanganan",
    },
    {
      id: 3,
      medicalRecord: "RM003",
      patientName: "Budi Santoso",
      gender: "Laki-laki",
      age: 42,
      clinic: "Poli Penyakit Dalam",
      doctor: "dr. Ahmad",
      visitDate: "2026-11-10",
      status: "Menunggu",
    },
    {
      id: 4,
      medicalRecord: "RM004",
      patientName: "Destianna Neliza",
      gender: "Perempuan",
      age: 20,
      clinic: "Poli Umum",
      doctor: "dr. Budi",
      visitDate: "2026-11-10",
      status: "Menunggu",
    },
  ]);

  // State pencarian dan form
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const initialForm = {
    medicalRecord: "",
    patientName: "",
    gender: "",
    age: "",
    clinic: "",
    doctor: "",
    visitDate: "",
    status: "",
  };

  const [form, setForm] = useState(initialForm);

  // Efek jQuery
  useEffect(() => {
    $(".welcome-note").hide().fadeIn(1000);
  }, []);

  // Menghitung ringkasan pasien
  const totalPatients = patients.length;

  const today = new Date().toLocaleDateString("en-CA");

  const todayVisits = patients.filter(
    (patient) => patient.visitDate === today,
  ).length;

  const beingHandled = patients.filter(
    (patient) => patient.status === "Dalam Penanganan",
  ).length;

  const completed = patients.filter(
    (patient) => patient.status === "Selesai",
  ).length;

  // Membuka form tambah pasien
  const handleAdd = () => {
    setEditId(null);
    setForm({ ...initialForm });
    setShowForm(true);
  };

  // Menyimpan data pasien
  const handleSubmit = (e) => {
    e.preventDefault();

    if (Number(form.age) < 0) {
      alert("Umur tidak boleh negatif!");
      return;
    }

    const duplicateRM = patients.some(
      (patient) =>
        patient.medicalRecord.toLowerCase() ===
          form.medicalRecord.trim().toLowerCase() && patient.id !== editId,
    );

    if (duplicateRM) {
      alert("Nomor rekam medis sudah digunakan!");
      return;
    }

    const newPatient = {
      id: editId !== null ? editId : Date.now(),
      medicalRecord: form.medicalRecord.trim(),
      patientName: form.patientName.trim(),
      gender: form.gender,
      age: Number(form.age),
      clinic: form.clinic,
      doctor: form.doctor.trim(),
      visitDate: form.visitDate,
      status: form.status,
    };

    if (editId !== null) {
      // UPDATE
      setPatients(
        patients.map((patient) =>
          patient.id === editId ? newPatient : patient,
        ),
      );

      alert("Data pasien berhasil diperbarui!");
    } else {
      // CREATE
      setPatients([...patients, newPatient]);

      alert("Data pasien berhasil ditambahkan!");
    }

    setShowForm(false);
    setForm({ ...initialForm });
  };

  // Membuka form edit pasien
  const handleEdit = (patient) => {
    setEditId(patient.id);

    setForm({
      medicalRecord: patient.medicalRecord,
      patientName: patient.patientName,
      gender: patient.gender,
      age: patient.age,
      clinic: patient.clinic,
      doctor: patient.doctor,
      visitDate: patient.visitDate,
      status: patient.status,
    });

    setShowForm(true);
  };

  // Menghapus pasien
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Apakah kamu yakin ingin menghapus data pasien ini?",
    );

    if (confirmDelete) {
      setPatients(patients.filter((patient) => patient.id !== id));

      alert("Data pasien berhasil dihapus!");
    }
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <main className="main-content">
        <Navbar />

        {/* Sambutan */}
        <section id="dashboard" className="welcome-note">
          <h2>Selamat Datang di MedCare! 🏥</h2>
          <p>
            Kelola data pasien dan rekam medis klinik dengan mudah melalui
            dashboard ini.
          </p>
        </section>

        {/* Ringkasan */}
        <section id="ringkasan" className="summary-section">
          <div className="summary-card">
            <div className="summary-icon">👥</div>
            <p>Total Pasien</p>
            <h3>{totalPatients}</h3>
            <small>Pasien terdaftar</small>
          </div>

          <div className="summary-card">
            <div className="summary-icon">📅</div>
            <p>Kunjungan Hari Ini</p>
            <h3>{todayVisits}</h3>
            <small>Jumlah kunjungan</small>
          </div>

          <div className="summary-card">
            <div className="summary-icon">🩺</div>
            <p>Sedang Ditangani</p>
            <h3>{beingHandled}</h3>
            <small>Pasien dalam penanganan</small>
          </div>

          <div className="summary-card">
            <div className="summary-icon">📋</div>
            <p>Penanganan Selesai</p>
            <h3>{completed}</h3>
            <small>Pasien selesai ditangani</small>
          </div>
        </section>

        {/* Tabel pasien */}
        <PatientTable
          patients={patients}
          search={search}
          setSearch={setSearch}
          onAdd={handleAdd}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        {/* Form tambah/edit pasien */}
        {showForm && (
          <PatientForm
            form={form}
            setForm={setForm}
            editId={editId}
            onSubmit={handleSubmit}
            onClose={() => setShowForm(false)}
          />
        )}

        <footer>
          <p>© 2026 MedCare. Dashboard Rekam Medis Pasien.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
