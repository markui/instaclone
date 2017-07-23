var weapons = ['AK-47', 'bombs', 'machine-gun', 'laser-gun'];

var soldier = {
  name: "Mark",
  age: 23,
  weight: 70,
  weapon: weapons[3],
  sayHi: function(name) {
    console.log("Hello " + name);
  }
};

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// var age = prompt("How old are you?");
//
// if (age < 18) {
//   console.log("gtfo");
// } else if (age < 50) {
//   console.log("you're a father");
// } else if (age < 80) {
//   console.log("hello grandpa");
// } else {
//   console.log("u r dead 2 me");
// }




// jquery
// $(document).ready(function() {
//   console.log("i'm loaded");
// })


// $(document).ready(function() {
//   var $heart = $(".heart");
//   $heart.click(function() {
//     console.log("I got clicked");
//   });
// });


// $(document).ready(function() {
//   var $heart = $(".heart");
//   $heart.click(function() {
//     if ($(this).hasClass("heart-pumping")) {
//       $(this).removeClass("heart-pumping");
//     } else {
//       $(this).addClass("heart-pumping");
//     }
//   });
// });


$(document).ready(function() {
  var $heart = $(".heart");
  $heart.click(function() {
    $(this).toggleClass("fa-heart-o heart-pumping fa-heart");
  });
});
