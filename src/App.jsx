import { useState, useEffect } from "react";
import $ from "jquery";

import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";
import ProductTable from "./components/ProductTable.jsx";
import ProductForm from "./components/ProductForm.jsx";

function App() {
  // Data awal produk
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Tas Wanita",
      category: "Fashion",
      price: 150000,
      stock: 20,
      discount: 10,
    },
    {
      id: 2,
      name: "Sepatu Sneakers",
      category: "Sepatu",
      price: 250000,
      stock: 15,
      discount: 5,
    },
    {
      id: 3,
      name: "Jam Tangan",
      category: "Aksesoris",
      price: 180000,
      stock: 8,
      discount: 15,
    },
    {
      id: 4,
      name: "Baju Wanita",
      category: "Fashion",
      price: 100000,
      stock: 30,
      discount: 0,
    },
  ]);

  // State pencarian dan form
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    discount: "",
  });

  // Efek jQuery
  useEffect(() => {
    $(".welcome-note").hide().fadeIn(1000);
  }, []);

  // Menghitung ringkasan produk
  const totalProducts = products.length;

  const totalStock = products.reduce(
    (total, product) => total + Number(product.stock),
    0,
  );

  const lowStock = products.filter((product) => product.stock <= 10).length;

  const totalValue = products.reduce(
    (total, product) => total + Number(product.price) * Number(product.stock),
    0,
  );

  // Format harga menjadi rupiah
  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(number);
  };

  // Membuka form tambah produk
  const handleAdd = () => {
    setEditId(null);

    setForm({
      name: "",
      category: "",
      price: "",
      stock: "",
      discount: "",
    });

    setShowForm(true);
  };

  // Menyimpan data produk
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      Number(form.price) < 0 ||
      Number(form.stock) < 0 ||
      Number(form.discount) < 0 ||
      Number(form.discount) > 100
    ) {
      alert("Periksa harga, stok, dan diskon!");
      return;
    }

    const newProduct = {
      id: editId || Date.now(),
      name: form.name.trim(),
      category: form.category.trim(),
      price: Number(form.price),
      stock: Number(form.stock),
      discount: Number(form.discount),
    };

    if (editId !== null) {
      // UPDATE
      setProducts(
        products.map((product) =>
          product.id === editId ? newProduct : product,
        ),
      );

      alert("Produk berhasil diperbarui!");
    } else {
      // CREATE
      setProducts([...products, newProduct]);

      alert("Produk berhasil ditambahkan!");
    }

    setShowForm(false);
  };

  // Membuka form edit
  const handleEdit = (product) => {
    setEditId(product.id);

    setForm({
      name: product.name,
      category: product.category,
      price: product.price,
      stock: product.stock,
      discount: product.discount,
    });

    setShowForm(true);
  };

  // Menghapus produk
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Apakah kamu yakin ingin menghapus produk ini?",
    );

    if (confirmDelete) {
      setProducts(products.filter((product) => product.id !== id));

      alert("Produk berhasil dihapus!");
    }
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <main className="main-content">
        <Navbar />

        {/* Sambutan */}
        <section id="dashboard" className="welcome-note">
          <h2>Selamat Datang di PinkShop! 💗</h2>
          <p>
            Kelola produk toko online kamu dengan mudah melalui dashboard ini.
          </p>
        </section>

        {/* Ringkasan */}
        <section id="ringkasan" className="summary-section">
          <div className="summary-card">
            <div className="summary-icon">🛍️</div>
            <p>Total Produk</p>
            <h3>{totalProducts}</h3>
            <small>Produk terdaftar</small>
          </div>

          <div className="summary-card">
            <div className="summary-icon">📦</div>
            <p>Total Stok</p>
            <h3>{totalStock}</h3>
            <small>Unit tersedia</small>
          </div>

          <div className="summary-card">
            <div className="summary-icon">⚠️</div>
            <p>Stok Menipis</p>
            <h3>{lowStock}</h3>
            <small>Produk stok ≤ 10</small>
          </div>

          <div className="summary-card">
            <div className="summary-icon">💰</div>
            <p>Nilai Persediaan</p>
            <h3 className="value-text">{formatRupiah(totalValue)}</h3>
            <small>Total harga × stok</small>
          </div>
        </section>

        {/* Tabel produk */}
        <ProductTable
          products={products}
          search={search}
          setSearch={setSearch}
          onAdd={handleAdd}
          onEdit={handleEdit}
          onDelete={handleDelete}
          formatRupiah={formatRupiah}
        />

        {/* Form tambah/edit */}
        {showForm && (
          <ProductForm
            form={form}
            setForm={setForm}
            editId={editId}
            onSubmit={handleSubmit}
            onClose={() => setShowForm(false)}
          />
        )}

        <footer>
          <p>© 2026 PinkShop. Dashboard Manajemen Produk.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
