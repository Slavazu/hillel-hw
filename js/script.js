'use strict';

const birthYear = prompt('Введіть Ваш рік народження:');
if (birthYear === null || birthYear === '') {
    alert('Шкода, що Ви не захотіли ввести свій рік народження.');
} else {
    const city = prompt('Введіть назву міста, у якому Ви живете:');
    if (city === null || city === '') {
        alert('Шкода, що Ви не захотіли ввести своє місто.');
    } else {
        const favoriteSport = prompt('Введіть Ваш улюблений вид спорту:');
        if (favoriteSport === null || favoriteSport === '') {
            alert('Шкода, що Ви не захотіли ввести свій улюблений вид спорту.');
        } else {
            let champion = '';
            if (favoriteSport === 'Бокс') {
                champion = 'Олександр Усик';
            } else if (favoriteSport === 'Теніс') {
                champion = 'Роджер Федерер';
            } else if (favoriteSport === 'Гольф') {
                champion = 'Тайгер Вудс';
            }
            alert('Круто! Хочете стати як ' + champion + ' ?');

            let country = '';
            if (city === 'Київ') {
                country = 'України';
            } else if (city === 'Вашингтон') {
                country = 'США';
            } else if (city === 'Лондон') {
                country = 'Великої Британії';
            }

            let currentYear = new Date().getFullYear();

            let age = currentYear - birthYear;

            let message = 'Вам ' + age + ' років ';
            if (country !== '') {
                message += 'та Ви живете у столиці ' + country + '.';
            } else {
                message += 'та Ви живете у місті ' + city + '.';
            }
            alert(message);
        }
    }
}






