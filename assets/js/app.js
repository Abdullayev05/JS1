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

// console.log (typeof age);
// var months = age * 18;
// console.log (months + " ay");
// var age = prompt ("Neçə il ?");
// console.log (age * 12);
// console.log (age * 365);r
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


// var randomPassword = "";
// var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// var randomIndex = Math.floor(Math.random() * 26);
// var n = 0;
// while (n < 8) {
//     var randomIndex = Math.floor(Math.random() * 26);
//     console.log(alphabet);
//     n++;
// }





// var surnames = ["Abdullayev", "Quliyev", "Hüseynov", "Mammadov", "Aliyev", "Rzayev",
// "Suleymanov", "Ahmadov", "Mustafayev", "Abbasov", "İsmayilov",  "Əsədova", "İbrahimova", "Hüseynova", "Məmmədova", "Quliyeva",
// "Rzayeva", "Soltanova", "Allahverdiyeva", "Səfərova", "Mustafayeva"];
// var names = ["Nəriman", "Elçin", "Şamil", "Rəşad", "Cavid",
// "Fərid", "İlham", "Cəmil", "Murad", "Taleh", "Günel", "Leyla", "Aysel", "Nigar", "Sevinc",
// "Narmin", "Aylin", "Röya", "Feride", "Vafa"];
// var randomIndex = Math.floor



// Math.round normal
// Math.floor asagi
// Math.ceil yuxari




var boynames = [
    "Nəriman", "Elçin", "Tural", "Rəşad", "Cavid",
    "Fərid", "İlham", "Rövşən", "Murad",
];
var boysurnames = [
    "Quliyev", "Hüseynov", "Mammadov", "Aliyev", "Rzayev",
    "Suleymanov", "Əhmadov", "Mustafayev", "Abbasov",
];
var girlnames = [
    "Röya", "Leyla", "Aysel", "Nigar", "Sevinc",
    "Narmin", "Aylin", "Rena", "Feride", "Vafa"
];
var girlsurnames = [
    "Məmmədova", "Abdullayev", "Hüseynova", "Əsədova", "Quliyeva",
    "Rzayeva", "İbrahimova", "Allahverdiyeva", "Səfərova", "Mustafayeva"
]; 
var randomboyname = Math.floor(Math.random() * boynames.length);
var randomgirlname = Math.floor(Math.random() * girlnames.length);
console.log(boynames[randomboyname] + " " + boysurnames[randomboyname]);
console.log(girlnames[randomgirlname] + " " + girlsurnames[randomgirlname]);



