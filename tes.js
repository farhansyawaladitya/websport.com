// ===== Data Sport Car (sumber: Data_Sport_Cars_ORESTE.xlsx) =====
// Kriteria: harga, kecepatan, horsepower, efisiensi, desain (skor 0-100, makin tinggi makin baik)
// oreste = nilai akhir metode ORESTE, ranking = peringkat berdasarkan nilai ORESTE (1 = terbaik)
const sportCars = {
  "Mercedes-AMG GT": { harga: 81, kecepatan: 94, horsepower: 86, efisiensi: 71, desain: 86, ranking: 17, oreste: 418 },
  "Audi R8": { harga: 82, kecepatan: 93, horsepower: 87, efisiensi: 72, desain: 87, ranking: 15, oreste: 421 },
  "Toyota Supra": { harga: 83, kecepatan: 92, horsepower: 88, efisiensi: 73, desain: 88, ranking: 13, oreste: 424 },
  "Jaguar F-Type": { harga: 84, kecepatan: 91, horsepower: 89, efisiensi: 74, desain: 89, ranking: 11, oreste: 427 },
  "Lexus LC500": { harga: 85, kecepatan: 90, horsepower: 90, efisiensi: 75, desain: 90, ranking: 9, oreste: 430 },
  "Maserati MC20": { harga: 86, kecepatan: 89, horsepower: 91, efisiensi: 76, desain: 91, ranking: 7, oreste: 433 },
  "Lotus Emira": { harga: 87, kecepatan: 88, horsepower: 92, efisiensi: 77, desain: 92, ranking: 5, oreste: 436 },
  "Honda NSX": { harga: 88, kecepatan: 95, horsepower: 93, efisiensi: 78, desain: 85, ranking: 3, oreste: 439 },
  "Bugatti Chiron": { harga: 89, kecepatan: 94, horsepower: 94, efisiensi: 79, desain: 86, ranking: 1, oreste: 442 },
  "Ferrari 488 GTB": { harga: 80, kecepatan: 93, horsepower: 85, efisiensi: 70, desain: 87, ranking: 19, oreste: 415 },
  "Chevrolet Corvette C8": { harga: 81, kecepatan: 92, horsepower: 86, efisiensi: 71, desain: 88, ranking: 18, oreste: 418 },
  "Aston Martin Vantage": { harga: 82, kecepatan: 91, horsepower: 87, efisiensi: 72, desain: 89, ranking: 16, oreste: 421 },
  "Alpine A110": { harga: 83, kecepatan: 90, horsepower: 88, efisiensi: 73, desain: 90, ranking: 14, oreste: 424 },
  "BMW M4 Competition": { harga: 84, kecepatan: 89, horsepower: 89, efisiensi: 74, desain: 91, ranking: 12, oreste: 427 },
  "Ford Mustang GT": { harga: 85, kecepatan: 88, horsepower: 90, efisiensi: 75, desain: 92, ranking: 10, oreste: 430 },
  "Dodge Challenger SRT Hellcat": { harga: 86, kecepatan: 95, horsepower: 91, efisiensi: 76, desain: 85, ranking: 8, oreste: 433 },
  "Lamborghini Huracán EVO": { harga: 87, kecepatan: 94, horsepower: 92, efisiensi: 77, desain: 86, ranking: 6, oreste: 436 },
  "McLaren 720S": { harga: 88, kecepatan: 93, horsepower: 93, efisiensi: 78, desain: 87, ranking: 4, oreste: 439 },
  "Porsche 911 Turbo S": { harga: 89, kecepatan: 92, horsepower: 94, efisiensi: 79, desain: 88, ranking: 2, oreste: 442 },
  "Nissan GT-R R35": { harga: 80, kecepatan: 91, horsepower: 85, efisiensi: 70, desain: 89, ranking: 20, oreste: 415 }
};

// Kata kunci kebutuhan -> kriteria penilaian
const kriteriaMap = [
  { keywords: ["kecepatan", "cepat", "top speed"], key: "kecepatan", label: "Kecepatan" },
  { keywords: ["balap", "tenaga", "power", "horsepower", "hp"], key: "horsepower", label: "Horse Power" },
  { keywords: ["irit", "efisien", "efisiensi", "bbm", "hemat"], key: "efisiensi", label: "Efisiensi BBM" },
  { keywords: ["mewah", "desain", "elegan", "gaya", "style"], key: "desain", label: "Desain" },
  { keywords: ["harga", "murah", "ekonomis", "budget"], key: "harga", label: "Harga / Value" },
  { keywords: ["harian", "touring"], key: "efisiensi", label: "Kenyamanan Harian (Efisiensi)" }
];

// Tombol Analisis
const button = document.querySelector("button");

button.addEventListener("click", function () {

  const tujuan = document.querySelector("input").value.toLowerCase().trim();

  const mobilA = document.querySelectorAll("select")[0].value;
  const mobilB = document.querySelectorAll("select")[1].value;

  if (mobilA === "Pilih Mobil" || mobilB === "Pilih Mobil") {
    alert("Silakan pilih kedua mobil terlebih dahulu!");
    return;
  }

  if (mobilA === mobilB) {
    alert("Pilih dua mobil yang berbeda untuk dibandingkan!");
    return;
  }

  if (tujuan === "") {
    alert("Silakan isi kebutuhanmu terlebih dahulu!");
    return;
  }

  // Cari kriteria yang cocok dengan kata kunci kebutuhan
  let kriteriaCocok = kriteriaMap.find(k =>
    k.keywords.some(kw => tujuan.includes(kw))
  );

  let hasil, keterangan;

  if (kriteriaCocok) {
    const nilaiA = sportCars[mobilA][kriteriaCocok.key];
    const nilaiB = sportCars[mobilB][kriteriaCocok.key];

    hasil = nilaiA >= nilaiB ? mobilA : mobilB;
    keterangan = `Berdasarkan kriteria <strong>${kriteriaCocok.label}</strong>: 
      ${mobilA} (${nilaiA}) vs ${mobilB} (${nilaiB})`;
  } else {
    // Jika kebutuhan tidak terdeteksi, gunakan nilai akhir ORESTE (makin kecil ranking makin baik)
    hasil = sportCars[mobilA].ranking < sportCars[mobilB].ranking ? mobilA : mobilB;
    keterangan = `Kebutuhan tidak spesifik, rekomendasi berdasarkan <strong>Nilai ORESTE keseluruhan</strong>: 
      ${mobilA} (Rank #${sportCars[mobilA].ranking}, skor ${sportCars[mobilA].oreste}) vs 
      ${mobilB} (Rank #${sportCars[mobilB].ranking}, skor ${sportCars[mobilB].oreste})`;
  }

  tampilkanHasil(hasil, tujuan, keterangan);
});

// Menampilkan hasil analisis
function tampilkanHasil(mobil, tujuan, keterangan) {

  let hasilDiv = document.getElementById("hasil");

  if (!hasilDiv) {
    hasilDiv = document.createElement("div");
    hasilDiv.id = "hasil";
    hasilDiv.style.marginTop = "30px";
    hasilDiv.style.padding = "20px";
    hasilDiv.style.background = "#f5f5f5";
    hasilDiv.style.borderRadius = "10px";
    hasilDiv.style.border = "1px solid #ddd";

    document.querySelector(".card").appendChild(hasilDiv);
  }

  hasilDiv.innerHTML = `
    <h2>🏆 Hasil Analisis</h2>
    <p><strong>Kebutuhan :</strong> ${tujuan}</p>
    <p style="margin:10px 0;color:#555;">${keterangan}</p>
    <p><strong>Mobil yang direkomendasikan :</strong></p>
    <h3 style="color:#d62828;">${mobil}</h3>
    <p style="margin-top:10px;font-size:14px;color:#777;">
      Rank ORESTE: #${sportCars[mobil].ranking} (skor ${sportCars[mobil].oreste})
    </p>
  `;
}
