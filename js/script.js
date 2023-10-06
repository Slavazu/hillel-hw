'use strict';

// Частина 1
let birthYear= prompt('Вкажіть свій рік народження?')
    if (birthYear === null) {
        alert('Шкода, що ви не захотіли ввести рік народження.');
    }

let city= prompt('Вкажіть місто у якому Ви живете?')
    if (city === null) {
        alert('Шкода, що ви не захотіли ввести місто у якому живете.');
    }

let sport= prompt('Вкажіть Ваш улюблений вид спорту?')
    if(sport === null) {
        alert('Шкода, що ви не захотіли ввести свій улюблений вид спорту.');
    }

let currentYear= new Date().getFullYear();

let age= currentYear - birthYear;

let country= null;
if (city === 'Київ' || city === 'Вашингтон' || city === 'Лондон') {
    if (city === 'Київ') {
        country = 'України';
    } else if (city === 'Вашингтон') {
        country = 'США';
    } else if (city === 'Лондон') {
        country = 'Великої Британії';
    }
    alert('Вам  '+ age +' років та Ви живете у столиці '+ country +'.');
} else {
    alert('Вам '+ age +' років та Ви живете у місті '+ city +'.');
    }





