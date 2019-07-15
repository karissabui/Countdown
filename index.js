
var demo = $('.demo');
var deadline = new Date("August 27, 2019 2:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var t = deadline - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor ((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
  var minutes = Math.floor((t%(1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t% (1000 * 60)) / 1000);

  console.log(days, hours, minutes, seconds)

$('.demo').append = days + "d "+ hours + "h " + minutes + "m " + seconds + "s ";

if (t < 0) {
  clearInterval(x);
  document.getElementById('.demo').innerHTML = "EXPIRED";
  }
},1000);
