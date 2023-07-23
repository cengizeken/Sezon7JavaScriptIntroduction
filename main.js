console.log("Hello Kubilay")
const myObject = {
    adi:"cengiz",
    soyadi:"eken",
    yas:30
}
document.write("Yaş::" + myObject.yas + "</br>");
document.write("Ad::" + myObject["adi"] + "</br>");
document.write("Soyad::" + myObject.soyadi + "</br>");

console.log("Yaş::" + myObject.yas);
console.log("Ad::" + myObject["adi"]);
console.log("Soyad::" + myObject.soyadi );

let myString = "Merhaba benim ad memo ya senin ad? senin ad? ne";
document.write("myString length::" + myString.length+"</br>");
document.write("myString slice::" + myString.slice(5,20)+"</br>");
document.write("myString substring::" + myString.substring(5,20)+"</br>");

document.write("myString slice::" + myString.slice(5)+"</br>");
document.write("myString substring::" + myString.substring(5)+"</br>");

let yazi="5";
let padYazi = yazi.padStart(6,"x");
document.write("yazi padStart::" + padYazi+"</br>");

let yazi1="5";
let padYazi1 = yazi.padEnd(6,"x");
document.write("yazi padEnd::" + padYazi1+"</br>");

let fiyat = 20;
let urun = "ekmek";
document.write(`merhaba fiyatimi ${fiyat} ve ${urun}  </br>`);

let yeniFiyat = 424262627282292922002020292827272n;
document.write(`yeni fiyat ${yeniFiyat} </br>`)

let anlikFiyat = 2.3456789;
let anlikFiyat1 = 2.3456789 +"";
let anlikFiyat2 = 2.3456789.toString();

let ucakFiyati = "45.12";
let ucakFiyati1 = Number(ucakFiyati);
let ucakFiyati2 = parseInt(ucakFiyati);
let ucakFiyati3 = parseFloat(ucakFiyati);

document.write(`Uçak Fiyatı: ${ucakFiyati} </br>`)
document.write(`Uçak Fiyatı2: ${ucakFiyati2} </br>`)

//ARRAYS

const meyveler = ["elma","erik","kayısı","dut","karpuz"]
meyveler[5] = "kavun"
document.write(`meyveler: ${meyveler} </br>`);
meyveler[0] = "kelek";
document.write(`meyveler: ${meyveler} </br>`);

document.write(`meyveler[0]: ${meyveler[0]} </br>`);

document.write(`meyveler length: ${meyveler.length} </br>`);