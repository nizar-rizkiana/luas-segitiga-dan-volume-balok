var alas = document.getElementById('text-alas');
var nilaiAlas = document.getElementById('input-alas');
	
var tinggi = document.getElementById('text-tinggi');
var nilaiTinggi = document.getElementById('input-tinggi');

var result = document.getElementsByClassName('result');
	
function inputAlas(){
	if(nilaiAlas.value == ""){
		alas.innerHTML = "Alas";
	}else{
		result[0].classList.add("show");
		result[1].classList.remove("show");
		alas.innerHTML = nilaiAlas.value + " cm";
	}
}
function inputTinggi(){
	// result[1].classList.toggle("show");
	if(nilaiTinggi.value == ""){
		tinggi.innerHTML = "Tinggi";
	}else{
		result[0].classList.add("show");
		result[1].classList.remove("show");
		tinggi.innerHTML = nilaiTinggi.value + " cm";
	}
}

function hasil(){
	if(nilaiAlas.value == ""){
		alert("Silahkan Masukkan Nilai Alas");
		nilaiAlas.focus();
	}else if(nilaiTinggi.value == ""){
		alert("Silahkan Masukkan Nilai Tinggi");
		nilaiTinggi.focus()
;	}else{
		result[0].classList.toggle("show");
		result[1].classList.toggle("show");
		result[1].innerHTML ="<b>Luas Segitiga = </b>" + parseInt(nilaiAlas.value) * parseInt(nilaiTinggi.value) / 2 + " cm";
		nilaiAlas.value = "";
		nilaiTinggi.value = "";
		alas.innerHTML = "Alas";
		tinggi.innerHTML = "Tinggi";
	}
	
}