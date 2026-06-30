// Data mobil sport
const sportCars = {
    "Ferrari SF90": {
        speed: 340,
        acceleration: 2.5,
        luxury: 10,
        fuel: 4,
        daily: 6,
        track: 10
    },
    "Lamborghini Aventador": {
        speed: 350,
        acceleration: 2.8,
        luxury: 10,
        fuel: 3,
        daily: 5,
        track: 10
    },
    "McLaren 720S": {
        speed: 341,
        acceleration: 2.7,
        luxury: 9,
        fuel: 5,
        daily: 7,
        track: 9
    },
    "Nissan GT-R R35": {
        speed: 315,
        acceleration: 2.9,
        luxury: 8,
        fuel: 6,
        daily: 9,
        track: 8
    },
    "Porsche 911 GT3 RS": {
        speed: 296,
        acceleration: 3.2,
        luxury: 9,
        fuel: 7,
        daily: 9,
        track: 10
    }
};

// Tombol Analisis
const button = document.querySelector("button");

button.addEventListener("click", function () {

    const tujuan = document.querySelector("input").value.toLowerCase();

    const mobilA = document.querySelectorAll("select")[0].value;
    const mobilB = document.querySelectorAll("select")[1].value;

    if (mobilA === "Pilih Mobil" || mobilB === "Pilih Mobil") {
        alert("Silakan pilih kedua mobil terlebih dahulu!");
        return;
    }

    let hasil = "";

    if (tujuan.includes("kecepatan")) {

        hasil = sportCars[mobilA].speed > sportCars[mobilB].speed
            ? mobilA
            : mobilB;

    } else if (tujuan.includes("balap")) {

        hasil = sportCars[mobilA].track > sportCars[mobilB].track
            ? mobilA
            : mobilB;

    } else if (tujuan.includes("harian")) {

        hasil = sportCars[mobilA].daily > sportCars[mobilB].daily
            ? mobilA
            : mobilB;

    } else if (tujuan.includes("irit")) {

        hasil = sportCars[mobilA].fuel > sportCars[mobilB].fuel
            ? mobilA
            : mobilB;

    } else if (tujuan.includes("mewah")) {

        hasil = sportCars[mobilA].luxury > sportCars[mobilB].luxury
            ? mobilA
            : mobilB;

    } else {

        hasil = mobilA;
    }

    tampilkanHasil(hasil, tujuan);
});

// Menampilkan hasil analisis
function tampilkanHasil(mobil, tujuan) {

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
        <p><strong>Mobil yang direkomendasikan :</strong></p>
        <h3 style="color:#d62828;">${mobil}</h3>
    `;
}