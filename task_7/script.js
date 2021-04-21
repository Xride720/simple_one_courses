// console.log(new Date(2012, 01, 20, 3, 12));

// function getWeekDay(date) {
//     let dayArr = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
//     return dayArr[date.getDay() - 1];
// }
// console.log(getWeekDay(new Date(2012, 0, 3)));

// function getLocalyDay(date) {
//     if (date.getDay() == 0) return 7;
//     return date.getDay();
// }
// console.log(getLocalyDay(new Date(2012, 0, 3)));

// function getDateAgo(date, days) {
//     return new Date(+date - days * 24 * 3600 * 1000).getDate();
// }
// console.log(getDateAgo(new Date(2015, 0, 2), 1));
// console.log(getDateAgo(new Date(2015, 0, 2), 2));
// console.log(getDateAgo(new Date(2015, 0, 2), 366));

// function getLastDayOfMonth(year, month) {
//     return new Date(year, month + 1, 0)
//         .getDate();
// }
// console.log(getLastDayOfMonth(1997, 0));

// function getSecondsToday() {
//     let date = new Date();
//     return Math.round((Date.now() - 
//         +(new Date(date.getFullYear(), date.getMonth(), date.getDate()))) / 1000);
// }
// console.log(getSecondsToday());

// function getSecondsToTomorrow() {
//     let date = new Date();
//     return Math.round((+(new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1))
//         - Date.now()) / 1000);
// }
// console.log(getSecondsToTomorrow());

// function formatDate(date) {
//     let diff = Date.now() - date.getTime();

//     switch (true) {
//         case diff < 1000:
//             console.log('прямо сейчас');
//             break;
//         case diff > 1000 && diff < 60000:
//             let n = Math.round(diff / 1000);
//             console.log(`${n} сек. назад`);
//             break;
//         case diff > 60000 && diff < 3600000:
//             let m = Math.round(diff / 60000);
//             console.log(`${m} мин. назад`);
//             break;
//         default:
//             let fullDate = formatStringDateEl(date.getDate()) + '.'
//                 + formatStringDateEl(date.getMonth()) + '.'
//                 + formatStringDateEl(date.getFullYear()) + ' '
//                 + formatStringDateEl(date.getHours()) + ':'
//                 + formatStringDateEl(date.getMinutes())
//             console.log(fullDate);
//             break;
//     }
// }
// function formatStringDateEl(el) {
//     if (el > 31) return el % 100;
//     else if (el < 10) return '0' + el;
//     return el;
// }

// formatDate(new Date(new Date - 60 * 60 * 1000));



//!!! JSON

// let room = {
//     number: 23
// };

// let meetup = {
//     title: "Совещание",
//     occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
//     place: room
// };

// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;
// console.log(meetup);

// console.log(JSON.stringify(meetup, function replacer(key, value) {
//     return (key != '' && value == meetup) ? undefined : value;
// }));