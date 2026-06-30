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

function compareCars() {

    const idA = parseInt(document.getElementById("carA").value);
    const idB = parseInt(document.getElementById("carB").value);

    if (!idA || !idB) {
        alert("Silakan pilih Sport Car A dan Sport Car B");
        return;
    }

    if (idA === idB) {
        alert("Pilih mobil yang berbeda.");
        return;
    }

    const A = cars.find(car => car.id == idA);
    const B = cars.find(car => car.id == idB);

    let pemenang = A.score > B.score ? A : B;

    document.getElementById("result").innerHTML = `

// Menentukan pemenang
let winner = A.score > B.score ? A : B;

document.getElementById("result").innerHTML = `

<div class="result-card">

    <h2 class="text-center mb-4">
        🏆 HASIL ANALISIS PERBANDINGAN
    </h2>

    <div class="row">

        <!-- SPORT CAR A -->
        <div class="col-md-5">

            <div class="card shadow p-3">

                <img src="${A.gambar}" class="car-image">

                <h3 class="text-center mt-3">${A.nama}</h3>

                <table class="table">

                    <tr>
                        <td>💰 Harga</td>
                        <td>${rupiah(A.harga)}</td>
                    </tr>

                    <tr>
                        <td>⚡ Kecepatan</td>
                        <td>${A.kecepatan} km/jam</td>
                    </tr>

                    <tr>
                        <td>🔥 Horse Power</td>
                        <td>${A.horsepower} HP</td>
                    </tr>

                    <tr>
                        <td>⛽ Efisiensi</td>
                        <td>${A.efisiensi}/10</td>
                    </tr>

                    <tr>
                        <td>🎨 Desain</td>
                        <td>${A.desain}/10</td>
                    </tr>

                    <tr>
                        <td>⭐ Score</td>
                        <td>${A.score}</td>
                    </tr>

                    <tr>
                        <td>🏆 Ranking</td>
                        <td>${A.ranking}</td>
                    </tr>

                </table>

            </div>

        </div>

        <!-- VS -->

        <div class="col-md-2 d-flex align-items-center justify-content-center">

            <h1 style="font-size:60px;color:red;">
                VS
            </h1>

        </div>

        <!-- SPORT CAR B -->

        <div class="col-md-5">

            <div class="card shadow p-3">

                <img src="${B.gambar}" class="car-image">

                <h3 class="text-center mt-3">${B.nama}</h3>

                <table class="table">

                    <tr>
                        <td>💰 Harga</td>
                        <td>${rupiah(B.harga)}</td>
                    </tr>

                    <tr>
                        <td>⚡ Kecepatan</td>
                        <td>${B.kecepatan} km/jam</td>
                    </tr>

                    <tr>
                        <td>🔥 Horse Power</td>
                        <td>${B.horsepower} HP</td>
                    </tr>

                    <tr>
                        <td>⛽ Efisiensi</td>
                        <td>${B.efisiensi}/10</td>
                    </tr>

                    <tr>
                        <td>🎨 Desain</td>
                        <td>${B.desain}/10</td>
                    </tr>

                    <tr>
                        <td>⭐ Score</td>
                        <td>${B.score}</td>
                    </tr>

                    <tr>
                        <td>🏆 Ranking</td>
                        <td>${B.ranking}</td>
                    </tr>

                </table>

            </div>

        </div>

    </div>

    <hr class="my-4">

    <div class="text-center">

        <h2 class="text-success">

            🏅 Pemenang Analisis

        </h2>

        <img src="${winner.gambar}"
             class="car-image"
             style="width:300px;height:180px;">

        <h3 class="mt-3">

            ${winner.nama}

        </h3>

        <h4 class="text-primary">

            Score ORESTE : ${winner.score}

        </h4>

        <h5>

            Ranking : ${winner.ranking}

        </h5>

    </div>

    <hr>

    <h3 class="mb-3">

        📊 Tabel Perbandingan

    </h3>

    <table class="table table-bordered table-striped">

        <thead class="table-primary">

            <tr>

                <th>Kriteria</th>

                <th>${A.nama}</th>

                <th>${B.nama}</th>

            </tr>

        </thead>

        <tbody>

            <tr>

                <td>Harga</td>

                <td>${rupiah(A.harga)}</td>

                <td>${rupiah(B.harga)}</td>

            </tr>

            <tr>

                <td>Kecepatan</td>

                <td>${A.kecepatan}</td>

                <td>${B.kecepatan}</td>

            </tr>

            <tr>

                <td>Horse Power</td>

                <td>${A.horsepower}</td>

                <td>${B.horsepower}</td>

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

        </tbody>

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
