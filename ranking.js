const rankingList = document.getElementById("rankingList");

// Urutkan berdasarkan ranking
const ranking = [...cars].sort((a, b) => a.ranking - b.ranking);

ranking.forEach(car => {

let medal = "";

if (car.ranking == 1) {

medal = "🥇";

} else if (car.ranking == 2) {

medal = "🥈";

} else if (car.ranking == 3) {

medal = "🥉";

} else {

medal = "#" + car.ranking;

}

rankingList.innerHTML += `

<div class="col-lg-4 col-md-6 mb-4">

<div class="ranking-card">

<img src="${car.gambar}" class="ranking-img">

<div class="ranking-body">

<h3>${medal}</h3>

<h4>${car.nama}</h4>

<hr>

<p><b>Harga</b><br>
${new Intl.NumberFormat('id-ID',{
style:'currency',
currency:'IDR',
maximumFractionDigits:0
}).format(car.harga)}
</p>

<p>

⚡ ${car.kecepatan} km/jam

</p>

<p>

🔥 ${car.horsepower} HP

</p>

<p>

⛽ Efisiensi : ${car.efisiensi}

</p>

<p>

🎨 Desain : ${car.desain}

</p>

<h3 class="text-primary">

Score : ${car.score}

</h3>

<span class="badge bg-success">

Ranking ${car.ranking}

</span>

</div>

</div>

</div>

`;

});