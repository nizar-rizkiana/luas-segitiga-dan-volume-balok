var panjang = document.getElementById('text-panjang-balok');
var nilaiPanjang = document.getElementById('input-panjang');
	
var lebar = document.getElementById('text-lebar-balok');
var nilaiLebar = document.getElementById('input-lebar');

var tinggiBalok = document.getElementById('text-tinggi-balok');
var nilaiTinggiBalok = document.getElementById('input-tinggi-balok');

var resultBalok = document.getElementsByClassName('result-balok');
	
function inputPanjang(){
	if(nilaiPanjang.value == ""){
		panjang.innerHTML = "Panjang";
	}else{
		resultBalok[0].classList.add("show");
		resultBalok[1].classList.remove("show");
		panjang.innerHTML = nilaiPanjang.value + " cm";
	}
}
function inputLebar(){
	if(nilaiLebar.value == ""){
		lebar.innerHTML = "Lebar";
	}else{
		resultBalok[0].classList.add("show");
		resultBalok[1].classList.remove("show");
		lebar.innerHTML = nilaiLebar.value + " cm";
	}
}
function inputTinggiBalok(){
	if(nilaiTinggiBalok.value == ""){
		tinggiBalok.innerHTML = "Tinggi";
	}else{
		resultBalok[0].classList.add("show");
		resultBalok[1].classList.remove("show");
		tinggiBalok.innerHTML = nilaiTinggiBalok.value + " cm";
	}
}

function hasilBalok(){
	if(nilaiPanjang.value == ""){
		alert("Silahkan Masukkan Nilai Panjang");
		nilaiPanjang.focus();
	}else if(nilaiLebar.value == ""){
		alert("Silahkan Masukkan Nilai Lebar");
		nilaiLebar.focus();
	}else if(nilaiTinggiBalok.value == ""){
		alert("Silahkan Masukkan Nilai Tinggi");
		nilaiTinggiBalok.focus();
	}else{
		resultBalok[0].classList.toggle("show");
		resultBalok[1].classList.toggle("show");
		resultBalok[1].innerHTML ="<b>Volume Balok = </b>" + parseInt(nilaiPanjang.value) * parseInt(nilaiLebar.value) * parseInt(nilaiTinggiBalok.value) + " cm<sup>3</sup>";
		nilaiPanjang.value = "";
		nilaiLebar.value = "";
		nilaiTinggiBalok.value = "";
		panjang.innerHTML = "Panjang";
		lebar.innerHTML = "Lebar";
		tinggiBalok.innerHTML = "Tinggi";
	}
	
}