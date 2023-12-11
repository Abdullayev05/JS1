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

