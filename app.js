const mobilA = document.getElementById("mobilA");
const mobilB = document.getElementById("mobilB");

sportCars.forEach(car=>{

    mobilA.innerHTML += `
        <option value="${car.id}">
            ${car.nama}
        </option>
    `;

    mobilB.innerHTML += `
        <option value="${car.id}">
            ${car.nama}
        </option>
    `;

});

document.getElementById("btnAnalisa").addEventListener("click",()=>{

    let a = mobilA.options[mobilA.selectedIndex].text;
    let b = mobilB.options[mobilB.selectedIndex].text;

    if(mobilA.value=="" || mobilB.value==""){
        alert("Pilih Sport Car A dan Sport Car B terlebih dahulu!");
        return;
    }

    if(mobilA.value==mobilB.value){
        alert("Sport Car A dan Sport Car B tidak boleh sama!");
        return;
    }

    alert(
`Analisa Dimulai

Sport Car A :
${a}

VS

Sport Car B :
${b}`
    );

});
