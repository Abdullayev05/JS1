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



// let numb = [641, 4564, 486, 468, 5414, 412, 546]
// let numbr = numb.filter(num => String(num).includes("41"));
// console.log(numbr);


// let cumle = prompt("Cumle yaz");
// let words = cumle.split(/t/g).join("**");
// console.log(words);


// let sentence = prompt("cumle yaz")
// let sentence2 = [];
// sentence = sentence.split(" ");\
// for (let i = 0; i < sentence.length; i++) {
//     console.log(sentence[i]);
//     sentence2.push(sentence[i].toLowerCase().replaceAll("t", "**"))
// }
// console.log(sentence2);


// const checkSadeOrMurekkeb = function (num) {
//     for (let i = 2; i < num; i++)
//         if (num % i === 0) {
//             console.log("murekkebdir");
//             return false;
//         }
// }
// let number = +prompt("eded yaz");



// let number = +prompt("Reqem yaz");
// let num = 0;
// if (typeof(number) === "number") {
//     let numb = parseInt(number, 10) + 1;
//     while (num < 4) {
//         if (numb % 10 === 8) {
//             console.log(numb);
//             num++;
//         }
//         numb++;
//     }
// }



// sort 
// var arr = [15, 16, 17, 18, 19, 20];
// arr.sort((a, b) => a - b);
// console.log(arr);
// (a - b) olarsa ---> array daxilnde ki reqemleri balacadan boyuye duzur 
// (b - a) olarsa ---> array daxilnde ki reqemleri boyukden balacaya duzur 

// let nmbr = [...arr] arr (arrayin) icindeki reqemleri kopyalayir

// arr.push() ----> arrayin axirina reqem elave edir 
// arr.unshift() ----> arrayin evvelline reqem elave edir
// arr.pop() ----> arrayin axirinda ki reqemi silir
// arr.shift() ----> arrayin evvellinde ki reqemi silir

// console.log(arr.every((a) => % 2 === 0));
// array daxilinde ki reqemler cut olmadigina gore consolda
// false verir
// yeni ki array daxilinde ki hersey serte uygun olmalidi

// console.log(arr.some((a) => % 2 === 0));
// array daxilinde ki reqemler cut olmadigina gore 
// consolda false verir
// some da ise biri duz olsa true verir

// includes ----> array daxilinde meselen [17,18,19,20]
// console.log(18);
// console.log(21); olanda false verir

// trim ---> metnin baslangic ve sonunda ki bosluqlari kesir

// split ---> bosluqlari silmek ucun istifage olunur

// parseInt ---> string daxilindeki yanliz reqemleri konsola cixarir
// herf yazilsa bele reqemleri secir

// +prompt ---> istifadicinin daxil edtiyi metni reqeme cevirmek ucun istifade olunur
// herf yazanda konsolda NaN cixarir

// join ---> string daxilinde ki sozleri her birini ayri ayriliqda 
// stirng daxilinde yazanda onlari konsola bir string daxilinde cixarir

// div.classList.add("") elave edir

// div.classList.remove("") silir 


// let mode = Math.floor(Math.random() * 10) + 1;
// let reqem;
// do {
//     reqem = parseInt(prompt("1 ilə 10 arasında bir rəqəm daxil edin:"));
//     if (reqem === mode) {
//         console.log("Təbrik edirəm, doğru texmin etdiniz!");
//     } else if (reqem < mode) {
//         console.log("Çox kiçik!");
//     } else {
//         console.log("Çox böyük!");
//     }
// } while (reqem !== mode);


// let number = parseInt(prompt("1 ilə 10 arasında bir rəqəm seçin:"));
// switch (number) {
// case 1:
// console.log(" Uzun zaman öncə, çox uzaq bir yerlərdə...");
// break;
// case 2:
// console.log("Bir ormanda, kiçik bir köyün yaxınlığında...");
// break;
// case 3:
// console.log("Bir zamanlar bir kitabxanənin dəhlizində...");
// break;
// case 4:
// console.log("Dərin dəhlizlər, gizli bir dünyanın açarını gizlədir.");
// break;
// case 5:
// console.log("Bir dəniz kənarında, qumların içində...");
// break;
// case 6:
// console.log("Bir çayın kənarında, yarpaqlar arasında...");
// break;
// case 7:
// console.log("Göydə, ulduzların parıldadığı bir gecədə...");
// break;
// case 8:
// console.log("Bir dənizdə, balıqların rəngarəng oyunları ilə...");
// break;
// case 9:
// console.log("Bir şəhərdə, sabahın erken saatlarında...");
// break;
// case 10:
// console.log("Bir tarlada, günlərin uzadığı bir vaxtda...");
// break;
// default:
// console.log("Seçdiyiniz rəqəmə uyğun hekayə tapılmadı.");
// }



// let increase = document.querySelector("#increase_btn");
// let decrease = document.querySelector("#decrease_btn");
// let p = document.querySelector("p");
// let count = document.querySelector("p").innerText;
// increase.addEventListener("click", ()=>{
//   count++;
//   p.innerText = count;
// });
// decrease.addEventListener("click", ()=>{
//   if(count > 0){
//     count--;
//     p.innerText = count;
//   }
// });


// let time = document.querySelector("input");
// console.log(time);
// time.addEventListener("change",()=>{
//   let count = 0;
//   const time = setInterval(() => {
//     console.log(count);
//     count++;
//   }, 2000);
// })



// let increase = document.querySelector("#inc");
// let decrease = document.querySelector("#dec");
// let count = document.querySelector("span").innerText;
// const checkColor = () => {
//   if (count % 2 == 0) {
//     document.querySelector("span").classList.add("cut")
//     document.querySelector("span").classList.remove("tek")
//   } else {
//     document.querySelector("span").classList.add("tek")
//     document.querySelector("span").classList.remove("cut")
//   }
// };
// increase.addEventListener("click", () => {
//   count++;
//   document.querySelector("span").innerText = count;
//   checkColor();
// });
// decrease.addEventListener("click", () => {
//   if (0 < count)
//     count--;
//   document.querySelector("span").innerText = count;
//   checkColor();
// });



let gif = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let input = document.querySelector("input");
let div = document.querySelector("gif_video")
input.addEventListener("input", () => {
  console.log(input.value);
  if (input.value == "Saturday" || input.value == "Sunday") {
    div.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdbmuPUAVOWB8_J7Bfu9EDAq8aLSkZzSI7tg&usqp=CAU">';
  } else {
    div.innerHTML = '<img src="https://media1.giphy.com/media/DYH297XiCS2Ck/200w.gif?cid=6c09b952kzmc1g6eaxfi5f658214wkn6dpgobumtiejkjwph&ep=v1_gifs_search&rid=200w.gif&ct=g">';
  }
});
