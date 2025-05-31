function kirimData() {
  const nama = document.getElementById("nama").value;
  const nim = document.getElementById("nim").value;
  const peminatan = document.querySelector('input[name="peminatan"]:checked').value;
  const alamat = document.getElementById("alamat").value;
  const angkatan = document.getElementById("angkatan").value;
  const tanggal = document.getElementById("tanggal").value;

  alert(
    "Nama : " + nama +
    "\nNIM : " + nim +
    "\nPeminatan : " + peminatan +
    "\nAlamat : " + alamat +
    "\nAngkatan : " + angkatan +
    "\nTanggal : " + tanggal
  );
}
