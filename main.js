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