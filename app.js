// ===============================
// FORMAT RUPIAH
// ===============================

function rupiah(angka){
    return new Intl.NumberFormat("id-ID",{
        style:"currency",
        currency:"IDR",
        maximumFractionDigits:0
    }).format(angka);
}

// ===============================
// ISI DROPDOWN
// ===============================

const carA = document.getElementById("carA");
const carB = document.getElementById("carB");

cars.forEach(car=>{

    carA.innerHTML +=
    `<option value="${car.id}">
        ${car.nama}
    </option>`;

    carB.innerHTML +=
    `<option value="${car.id}">
        ${car.nama}
    </option>`;

});

// ===============================
// TOP 5 RANKING
// ===============================

const topCars = document.getElementById("topCars");

cars
.sort((a,b)=>a.ranking-b.ranking)
.slice(0,5)
.forEach(car=>{

topCars.innerHTML += `

<div class="col-lg-4 col-md-6">

<div class="top-card">

<img src="${car.gambar}" alt="${car.nama}">

<div class="top-card-body">

<h5>${car.nama}</h5>

<p>

<b>Ranking :</b> ${car.ranking}

</p>

<p>

<b>Score :</b> ${car.score}

</p>

<span class="badge-rank">

TOP ${car.ranking}

</span>

</div>

</div>

</div>

`;

});

// ===============================
// ANALISIS
// ===============================

function compareCars(){

const idA = Number(carA.value);
const idB = Number(carB.value);

if(idA===idB){

alert("Pilih dua mobil yang berbeda.");

return;

}

const A = cars.find(c=>c.id===idA);
const B = cars.find(c=>c.id===idB);

// Menentukan pemenang

let winner;

if(A.score>B.score){

winner=A;

}else if(B.score>A.score){

winner=B;

}else{

winner=null;

}

// Progress Bar

const persenA = (A.score/44)*100;
const persenB = (B.score/44)*100;

// ===============================

document.getElementById("result").innerHTML=`

const winner = A.score >= B.score ? A : B;

document.getElementById("result").innerHTML = `

<div class="result-card">

    <h2 class="text-center text-primary mb-4">
        🏆 HASIL ANALISIS SPORT CAR
    </h2>

    <div class="row">

        <div class="col-md-5">

            <div class="card shadow border-0 p-3">

                <img src="${A.gambar}" class="car-image">

                <h3 class="text-center mt-3">${A.nama}</h3>

                <table class="table">

                    <tr><td>💰 Harga</td><td>${rupiah(A.harga)}</td></tr>

                    <tr><td>⚡ Kecepatan</td><td>${A.kecepatan} km/jam</td></tr>

                    <tr><td>🔥 Horse Power</td><td>${A.horsepower} HP</td></tr>

                    <tr><td>⛽ Efisiensi</td><td>${A.efisiensi}/10</td></tr>

                    <tr><td>🎨 Desain</td><td>${A.desain}/10</td></tr>

                    <tr><td>⭐ Score</td><td>${A.score}</td></tr>

                    <tr><td>🏅 Ranking</td><td>${A.ranking}</td></tr>

                </table>

            </div>

        </div>

        <div class="col-md-2 d-flex justify-content-center align-items-center">

            <div class="vs-text">
                VS
            </div>

        </div>

        <div class="col-md-5">

            <div class="card shadow border-0 p-3">

                <img src="${B.gambar}" class="car-image">

                <h3 class="text-center mt-3">${B.nama}</h3>

                <table class="table">

                    <tr><td>💰 Harga</td><td>${rupiah(B.harga)}</td></tr>

                    <tr><td>⚡ Kecepatan</td><td>${B.kecepatan} km/jam</td></tr>

                    <tr><td>🔥 Horse Power</td><td>${B.horsepower} HP</td></tr>

                    <tr><td>⛽ Efisiensi</td><td>${B.efisiensi}/10</td></tr>

                    <tr><td>🎨 Desain</td><td>${B.desain}/10</td></tr>

                    <tr><td>⭐ Score</td><td>${B.score}</td></tr>

                    <tr><td>🏅 Ranking</td><td>${B.ranking}</td></tr>

                </table>

            </div>

        </div>

    </div>

    <div class="winner-card mt-5">

        <h2>🥇 Pemenang Analisis</h2>

        <img src="${winner.gambar}" class="winner-img">

        <h3>${winner.nama}</h3>

        <h1>${winner.score}</h1>

        <span class="winner-badge">

            Ranking #${winner.ranking}

        </span>

        <p class="mt-3">

            Berdasarkan metode ORESTE, <b>${winner.nama}</b>
            memperoleh nilai tertinggi sehingga direkomendasikan
            sebagai pilihan terbaik.

        </p>

    </div>

</div>

`;

// ===============================
// DEFAULT
// ===============================

window.onload=function(){

carA.selectedIndex=0;
carB.selectedIndex=1;

};
