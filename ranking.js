const ranking = [...cars].sort((a,b)=>a.ranking-b.ranking);

// PODIUM

document.getElementById("podium1").innerHTML = `
<div class="podium juara1">

<img src="${ranking[0].gambar}">

<h3>🥇</h3>

<h4>${ranking[0].nama}</h4>

<p>Score ${ranking[0].score}</p>

<p>Ranking 1</p>

</div>
`;

document.getElementById("podium2").innerHTML = `
<div class="podium juara2">

<img src="${ranking[1].gambar}">

<h3>🥈</h3>

<h4>${ranking[1].nama}</h4>

<p>Score ${ranking[1].score}</p>

<p>Ranking 2</p>

</div>
`;

document.getElementById("podium3").innerHTML = `
<div class="podium juara3">

<img src="${ranking[2].gambar}">

<h3>🥉</h3>

<h4>${ranking[2].nama}</h4>

<p>Score ${ranking[2].score}</p>

<p>Ranking 3</p>

</div>
`;

const list = document.getElementById("rankingList");

ranking.forEach(car=>{

list.innerHTML +=`

<div class="col-lg-3 col-md-4 col-sm-6 mb-4">

<div class="ranking-card">

<img src="${car.gambar}">

<div class="ranking-body">

<h5>

#${car.ranking}

</h5>

<h4>

${car.nama}

</h4>

<p>

⭐ Score : ${car.score}

</p>

<p>

⚡ ${car.kecepatan} km/jam

</p>

<p>

🔥 ${car.horsepower} HP

</p>

</div>

</div>

</div>

`;

});
