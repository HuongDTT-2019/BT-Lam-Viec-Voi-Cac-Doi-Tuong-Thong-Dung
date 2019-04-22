//Date
//ngay,gio sinh
let d = new Date();
d.setFullYear(1994);
d.setMonth(9);
d.setDate(16);
d.setHours(21);
d.setMinutes(30);
d.setSeconds(30);
let l_year = d.getFullYear();
let l_month = d.getMonth();
let l_date = d.getDate();
let l_hours = d.getHours();
let l_minutes = d.getMinutes();
let l_seconds = d.getSeconds();
document.write("Sinh nam:" + l_year + "/" + l_month + "/" + l_date + "-" + l_hours + ":" + l_minutes + ":" + l_seconds + "</br>");
let now = new Date();
let now_year = now.getFullYear();
let now_month = now.getMonth();
let now_date = now.getDay();
let now_hours = now.getHours();
let now_minutes = now.getMinutes();
let now_seconds = now.getSeconds();

let years = now_year - l_year;
let months = (years * 12) - l_month + now_month;
let days = months * 365 - l_date + now_date;
let hours = days * 24 - l_hours - now_hours;
let minutes = hours * 60 - l_minutes + now_minutes;
let seconds = minutes * 60 - l_seconds + now_seconds;
document.write("Tôi đã sống:" + years + " nam" + "</br>");
document.write("Tôi đã sống:" + months + " thang" + "</br>");
document.write("Tôi đã sống:" + days + " ngay" + "</br>");
document.write("Tôi đã sống:" + minutes + " phut " + "</br>");
document.write("Tôi đã sống:" + seconds + " giay " + "</br></br>");
//Math
function taoSoNgauNhien(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}
document.write("Sinh so ngau nhien 0-10"+"</br>");
document.write(taoSoNgauNhien(0,10)+"</br>");
document.write("Sinh so ngau nhien 0-400"+"</br>");
document.write(taoSoNgauNhien(0,400)+"</br>");
document.write("Sinh so ngau nhien 50-100"+"</br>");
document.write(taoSoNgauNhien(50,100)+"</br>");
document.write("Tìm giá trị nhỏ nhất trong các số 5, 7, 2, 9"+"</br>");
document.write(Math.min(5,7,2,9)+"</br>");
document.write("Tìm luỹ thừa cua 53"+"</br>");
document.write(Math.pow(53,2)+"</br>");
document.write("Tính diện tích của hình tròn có bán kính là 5cm"+"</br>");
document.write(Math.PI*5*5+"</br></br>");

//String
document.write("Chuỗi:'Tôi yêu ngôn ngữ lập trình Javascript'" + "</br>");

function characterCount(str) {
    let character = str.match(/[a]/g);
    return character === null ? 0 : character.length;
}

let result1 = characterCount("Tôi yêu ngôn ngữ lập trình Javascript");
document.write('Co: ' + result1 + ' ky tu a' + '</br>');

function arrString(str) {
    return str.split(" ");
}

let result2 = arrString("Tôi yêu ngôn ngữ lập trình Javascript" + "</br>");
document.write('Mang: ' + result2);

function arr1String(str) {
    return str.split(" ").length;
}

let result3 = arr1String("Tôi yêu ngôn ngữ lập trình Javascript");
document.write("Chuoi co: " + result3 + " tu"+"</br>");

function thayThe(str) {
    return str.replace("Javascript","Typescript");
}
let result4=thayThe("Tôi yêu ngôn ngữ lập trình Javascript");
document.write(result4);
