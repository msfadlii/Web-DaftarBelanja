const inputBelanja = document.getElementById("input-belanja");
const inputHarga = document.getElementById("input-harga");
const list = document.getElementById("list-belanja");
let namaBarang, hargaBarang, spanHapus;

function tambahBelanja(){
    if(inputBelanja.value === '' || inputHarga.value === ''){
        alert("Data tidak boleh kosong.");
    }else{
        namaBarang = document.createElement("li");
        namaBarang.innerHTML = inputBelanja.value;
        namaBarang.classList.add("nama-belanja");
        list.appendChild(namaBarang);

        hargaBarang = document.createElement("span");
        hargaBarang.innerHTML = "Rp. " + inputHarga.value;
        hargaBarang.classList.add("harga");
        namaBarang.appendChild(hargaBarang);

        spanHapus = document.createElement("span");
        spanHapus.id = "hapus-item";
        spanHapus.innerHTML = "\u00d7";
        namaBarang.appendChild(spanHapus);
    }
    inputBelanja.value = "";
    inputHarga.value = "";
    saveData();
}

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        e.targethargaBarang.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN" && e.target.id === "hapus-item"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function showTask(){
    list.innerHTML = localStorage.getItem("data");
}

showTask();