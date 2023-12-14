// var name = prompt("Adin nedi?")
// var surname = prompt("Soyadin nedi?")
// var age = prompt("Nece yasin var?")
// var difference = (25 - age);
// console.log("Salam" +  " " + name + " " + surname + "Nece ilden sonra 25 yasin olacaq" + difference);
// alert ("Salam" name + " " + surname)
// console.log ("5 il sonra sizin 27 yasiniz")
// var age = prompt("Nece yasin var?")
// age

//      switch

// number
// boolean
// array
// string
// objetc
// undefined
// null



// console.log (typeof age);
// var months = age * 18;
// console.log (months + " ay");
// var age = prompt ("Neçə il ?");
// console.log (age * 12);
// console.log (age * 365);
// console.log (age * 365 * 24);
// console.log (age * 365 * 24 * 60);
// console.log (age * 365 * 60 * 60);
// console.log (age * 365 * 60 * 60 * 1000);


// var names = prompt ("What is your name ?")
// if (names.length < 5) {
//     console.log("kicik yas")
// }
// else if (names.length < 10) {
//     console.log("orta yas")
// }
// else if ( names.length < 20) {
//     console.log ("boyuk yas")
// }


// var trash = [
//     17,
//     "sagol"
//     {
//         name: "name",
//     }
//     true,
//     12
// ]
// console.log(trash)


// console.log(Math.random)
// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }
//   console.log(getRandomInt(3));
//   console.log(getRandomInt(1));
//   console.log(Math.random());


// var name = prompt("")
// var key = 19;
// switch(key) {
//   case 18:
//     console.log ("18");
//     break;
//   case 19:
//     console.log("19");
//     break;
//   default:
//     console.log("hecne");
//     break
// }


// var sentence = prompt("Cumle yaz")
// var mode = prompt("Reqem yaz")
// if (sentence.length < 2) {
//       console.log("2")
//   }
// alert ("")


// var statuss = false;
// var sentence = prompt("Cumle yaz");
// do {
//   var number = prompt("Reqem yaz");
//   number = Number(number);
//   if (sentence.length >= number) {
//     console.log(sentence[number - 1]);
//     statuss = false;
//   } else {
//     var choose = confirm("Yeniden yazmaq isteyirsen?");
//     if (choose) {
//       statuss = true;
//     } else {
//       statuss = false
//     }
//   }
// } while (statuss);



// var statuss = true;
// var sentence = prompt("Cumle yaz");
// while (statuss) {
//   var number = prompt("Reqem yaz");
//   number = Number(number);
//   if (sentence.length >= number) {
//     console.log(sentence[number - 1]);
//   } else {
//     var choose = confirm("Yeniden secmek isteyirsen?");
//     if (choose) {
//       statuss = true;
//     } else {
//       statuss = false;
//     }
//   }
// }



// var alphabet = [
//   "Brad Pitt", "Angelina Jolie", "Leonardo DiCaprio", "Meryl Streep", "Tom Hanks",
//   "Jennifer Lawrence", "Johnny Depp", "Cate Blanchett", "Denzel Washington", "Charlize Theron",
//   "Robert Downey Jr.", "Julia Roberts", "George Clooney", "Emma Stone", "Matt Damon",
//   "Harrison Ford", "Natalie Portman", "Will Smith", "Nicole Kidman", "Chris Hemsworth",
//   "Scarlett Johansson", "Tom Cruise", "Kate Winslet", "Ryan Gosling", "Anne Hathaway",
//   "Daniel Day-Lewis", "Sandra Bullock", "Christian Bale", "Halle Berry", "Keanu Reeves",
//   "Jennifer Aniston", "Mark Wahlberg", "Mila Kunis", "Jake Gyllenhaal", "Reese Witherspoon",
//   "Matthew McConaughey", "Joaquin Phoenix", "Penélope Cruz", "Javier Bardem", "Keira Knightley",
//   "Chris Evans", "Gwyneth Paltrow", "Idris Elba", "Viola Davis", "Zoe Saldana",
//   "Chris Pratt", "Eva Mendes", "Samuel L. Jackson", "Jessica Chastain", "Oprah Winfrey"
// ];
// var number = prompt("Reqem yaz");
// number = Number(number);
// console.log(alphabet[number - 1]);


// Math.round normal
// Math.floor asagi
// Math.ceil yuxari


// var names = [
//     {
//         name: "Nəriman",
//         gender: "male"
//     },
//     {
//         name: "Elçin",
//         gender: "male"
//     },
//     {
//         name: "Tural",
//         gender: "male"
//     },
//     {
//         name: "Rəşad",
//         gender: "male"
//     },
//     {
//         name: "Cavid",
//         gender: "male"
//     },
//     {
//         name: "Fərid",
//         gender: "male"
//     },
//     {
//         name: "İlham",
//         gender: "male"
//     },
//     {
//         name: "Rövşən",
//         gender: "male"
//     },
//     {
//         name: "Murad",
//         gender: "male"
//     },
//     {
//         name: "Röya",
//         gender: "female"
//     },
//     {
//         name: "Leyla",
//         gender: "female"
//     },
//     {
//         name: "Nuranə",
//         gender: "female"
//     },
//     {
//         name: "Nigar",
//         gender: "female"
//     },
//     {
//         name: "Nərmin",
//         gender: "female"
//     },
//     {
//         name: "Aylin",
//         gender: "female"
//     },
//     {
//         name: "Fəridə",
//         gender: "female"
//     },
//     {
//         name: "Vəfa",
//         gender: "female"
//     },
//     {
//         name: "Lalə",
//         gender: "female"
//     },
//     {
//         name: "Məlahət",
//         gender: "female"
//     },
// ];
// var surnames = [
//     "Məmmədov",
//     "Abdullayev",
//     "Quliyev",
//     "Hüseynov",
//     "Əliyev",
//     "Rzayev",
//     "Əhmədov",
//     "Mustafayev",
//     "Həsənov",
//     "Ağayev",
//     "Nuriyev",
//     "Rəhimov",
//     "Kərimov",
//     "Həmidov",
//     "Amalov",
//     "Mahmudov",
//     "Hacıyev",
//     "Rəsulov",
//     "Məlikov",
// ];
// var randomNameIndex = Math.floor(Math.random() * 19);
// var randomName = names[randomNameIndex].name;
// var randomSurnameIndex = Math.floor(Math.random() * 19);
// var randomSurname = surnames[randomSurnameIndex];
// if (names[randomNameIndex].gender === "male") {
//     console.log(randomSurname + " " + randomName);
// } else {
//     console.log(randomSurname + "a" + " " + randomName);
// }


// var name = prompt("Adin nedi ?");
// var nmbr = "";
// for (let i = 0; i < name.length; i++) {
//     if (i === 0) {
//         nmbr += name[i].toUpperCase();
//     } else{
//         nmbr += name[i].toLowerCase();
//     }
// }
// console.log(nmbr);


// var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
// var number = '';
// for (var i = 0; i < 8; i++) {
//   var randomIndex = Math.floor(Math.random() * alphabet.length);
//   number += alphabet[randomIndex];
// }
// console.log(number);


// 2
// var password = 'abcdefghtnmrswqzxvhyuiop';
// var number = '';
// for (var i = 0; i < 6; i++) {
//   var randomIndex = Math.floor(Math.random() * password.length);
//   number += password[randomIndex];
// }
// console.log(number);


// 4
// var word = prompt("Nəsə yaz");
// var nmbr = "";
// for (var i = 0; i < word.length; i++) {
//     if (i === 0) {
//         nmbr += word.toUpperCase();
//     }
// }
// console.log(nmbr);


// 5
// var word = prompt("Nəsə yaz");
// var nmbr = "";
// for (var i = 0; i < word.length; i++) {
//     if (i === 0) {
//         nmbr += word.toLowerCase();
//     }
// }
// console.log(nmbr);


// 6
// var name = prompt("Nəsə yaz");
// var nmbr = "";
// for (var i = 0; i < name.length; i++) {
//     if (i === 0) {
//         nmbr += name[i].toUpperCase();
//     } else{
//         nmbr += name[i].toLowerCase();
//     }
// }
// console.log(nmbr);


// 7
// var name = prompt("Nəsə yaz");
// var nmbr = "";
// for (var i = 0; i < name.length; i++) {
//     if (i === 0) {
//          nmbr += name[i].toLowerCase();
//     } else{
//         nmbr += name[i].toUpperCase();
//     }
// }
// console.log(nmbr);


// var age = prompt("Dogum ilini yaz")
// console.log(2023 - age);


// let sentence =  prompt("Cumle yaz")
// sentence = sentence.trim();
// let count = 0;
// let words = sentence.split(" ")
// console.log(words);





// let mebleg = prompt("Pul miqdari yaz")
// let text = "";
// if (parseInt(mebleg / 500)) {
//     text += `${parseInt(mebleg / 500)} 500 manat, `;
//     mebleg = mebleg - 500 * parseInt (mebleg / 500)
// }
// if (parseInt(mebleg / 200)) {
//     text += `${parseInt(mebleg / 200)} 200 manat, `;
//     mebleg = mebleg - 200 * parseInt (mebleg / 200)
// }
// if (parseInt(mebleg / 100)) {
//     text += `${parseInt(mebleg / 100)} 100 manat, `;
//     mebleg = mebleg - 100 * parseInt (mebleg / 100)
// }
// if (parseInt(mebleg / 50)) {
//     text += `${parseInt(mebleg / 50)} 50 manat, `;
//     mebleg = mebleg - 50 * parseInt (mebleg / 50)
// }
// if (parseInt(mebleg / 20)) {
//     text += `${parseInt(mebleg / 20)} 20 manat, `;
//     mebleg = mebleg - 20 * parseInt (mebleg / 20)
// }
// if (parseInt(mebleg / 10)) {
//     text += `${parseInt(mebleg / 10)} 10 manat, `;
//     mebleg = mebleg - 10 * parseInt (mebleg / 10)
// }
// if (parseInt(mebleg / 5)) {
//     text += `${parseInt(mebleg / 5)} 5 manat, `;
//     mebleg = mebleg - 5 * parseInt (mebleg / 5)
// }
// if (parseInt(mebleg / 1)) {
//     text += `${parseInt(mebleg / 1)} 1 manat, `;
//     mebleg = mebleg - 1 * parseInt (mebleg / 1)
// }
// console.log(text);


// let numbers = ["1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100"]

// let cutReqem = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98];
// let cut = 0;
// for (let i = 0; i < numbers.length; i++) {
//   cut += numbers[i];       
// }
// console.log(cut);
// let tekReqem = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99];
// let  = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum);


// let nmbr = 0;
// let number = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     number += i; 
//   } else {
//     nmbr += i; 
//   }
// }
// console.log("Tek reqemler: " + nmbr);
// console.log("Cut reqemler: " + number);


let tekReqem = 0;
let cutReqem = 0;
let nmbr = "";
let number = "";
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    cutReqem += i;
    number += i + ",";
  } else {
    tekReqem += i;
    nmbr += i + ",";
  }
}
nmbr = nmbr.slice(0, -1);
number = number.slice(0, -1);
console.log("Tek reqemlerin toplanma sayi " + tekReqem + " (" + nmbr + ")");
console.log("Cut reqemin toplanma sayi " + cutReqem + " (" + number + ")");
