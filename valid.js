document.getElementById("borangForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  const nama = document.getElementById("nama").value;

  if (nama.trim() === "") {
    alert("Please fill in all required fields.");
    return;
  }

  // You can extract more values as needed
  const kategori = [...document.querySelectorAll('input[name="kategori"]:checked')].map(el => el.value);
  const jenis = [...document.querySelectorAll('input[name="jenis"]:checked')].map(el => el.value);
  const lain = document.querySelector('input[name="lain"]').value;

  const jawatan = document.querySelectorAll('input')[4].value;
  const noStaf = document.querySelectorAll('input')[5].value;
  const telefon = document.querySelectorAll('input')[6].value;
  const tarikhSerah = document.querySelectorAll('input')[7].value;

  const namaAktiviti = document.querySelectorAll('input')[8].value;
  const anjuran = document.querySelectorAll('input')[9].value;
  const tarikhAktiviti = document.querySelectorAll('input')[10].value;
  const tempat = document.querySelectorAll('input')[11].value;

  // Display result in the result div
  document.getElementById("result").innerHTML = `
    <h3>Maklumat Borang Telah Dihantar</h3>
    <p><strong>Nama Pemohon:</strong> ${nama}</p>
    <p><strong>Jawatan:</strong> ${jawatan}</p>
    <p><strong>No. Staf/Pelajar:</strong> ${noStaf}</p>
    <p><strong>No. Telefon:</strong> ${telefon}</p>
    <p><strong>Tarikh Serah:</strong> ${tarikhSerah}</p>
    <p><strong>Nama Aktiviti:</strong> ${namaAktiviti}</p>
    <p><strong>Anjuran:</strong> ${anjuran}</p>
    <p><strong>Tarikh Aktiviti:</strong> ${tarikhAktiviti}</p>
    <p><strong>Tempat:</strong> ${tempat}</p>
    <p><strong>Kategori Aktiviti:</strong> ${kategori.join(', ')}</p>
    <p><strong>Jenis Pindaan:</strong> ${jenis.join(', ')}</p>
    ${lain ? `<p><strong>Lain-lain:</strong> ${lain}</p>` : ''}
  `;

  alert("Form submitted successfully!");
});
