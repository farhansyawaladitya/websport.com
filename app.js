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

<div class="row">

<div class="col-lg-6">

<div class="result-card">

<img
src="${A.gambar}"
class="car-image">

<h3 class="car-name">

${A.nama}

</h3>

<p><b>Harga</b><br>${rupiah(A.harga)}</p>

<p><b>Top Speed</b><br>${A.kecepatan} km/jam</p>

<p><b>Horse Power</b><br>${A.horsepower} HP</p>

<p><b>Efisiensi</b><br>${A.efisiensi}/10</p>

<p><b>Desain</b><br>${A.desain}/10</p>

<div class="progress mb-3">

<div
class="progress-bar bg-primary"
style="width:${persenA}%">

${A.score}

</div>

</div>

<span class="rank">

Ranking ${A.ranking}

</span>

</div>

</div>

<div class="col-lg-6">

<div class="result-card">

<img
src="${B.gambar}"
class="car-image">

<h3 class="car-name">

${B.nama}

</h3>

<p><b>Harga</b><br>${rupiah(B.harga)}</p>

<p><b>Top Speed</b><br>${B.kecepatan} km/jam</p>

<p><b>Horse Power</b><br>${B.horsepower} HP</p>

<p><b>Efisiensi</b><br>${B.efisiensi}/10</p>

<p><b>Desain</b><br>${B.desain}/10</p>

<div class="progress mb-3">

<div
class="progress-bar bg-success"
style="width:${persenB}%">

${B.score}

</div>

</div>

<span class="rank">

Ranking ${B.ranking}

</span>

</div>

</div>

</div>

<br>

<div class="result-card text-center">

<h2>

🏆 HASIL ANALISIS

</h2>

${
winner
?

`

<h1 style="color:#0066ff">

${winner.nama}

</h1>

<p>

Mobil ini memperoleh

<b>${winner.score}</b>

poin ORESTE dan berada pada

<b>Ranking ${winner.ranking}</b>

</p>

`

:

`

<h2 style="color:green">

Kedua Mobil Memiliki Nilai Yang Sama

</h2>

`

}

</div>

<br>

<div class="result-card">

<h3>

Perbandingan Nilai

</h3>

<table class="table table-striped">

<tr>

<th>Kriteria</th>

<th>${A.nama}</th>

<th>${B.nama}</th>

</tr>

<tr>

<td>Harga</td>

<td>${rupiah(A.harga)}</td>

<td>${rupiah(B.harga)}</td>

</tr>

<tr>

<td>Top Speed</td>

<td>${A.kecepatan} km/jam</td>

<td>${B.kecepatan} km/jam</td>

</tr>

<tr>

<td>Horse Power</td>

<td>${A.horsepower} HP</td>

<td>${B.horsepower} HP</td>

</tr>

<tr>

<td>Efisiensi</td>

<td>${A.efisiensi}</td>

<td>${B.efisiensi}</td>

</tr>

<tr>

<td>Desain</td>

<td>${A.desain}</td>

<td>${B.desain}</td>

</tr>

<tr>

<td>Score ORESTE</td>

<td><b>${A.score}</b></td>

<td><b>${B.score}</b></td>

</tr>

<tr>

<td>Ranking</td>

<td>${A.ranking}</td>

<td>${B.ranking}</td>

</tr>

</table>

</div>

`;

}

// ===============================
// DEFAULT
// ===============================

window.onload=function(){

carA.selectedIndex=0;
carB.selectedIndex=1;

};
