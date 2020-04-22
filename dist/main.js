$(document).ready(function () {
  // Transition effect for navbar
  $(window).scroll(function () {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if ($(this).scrollTop() > 262) {
      $(".navbar").addClass("solid"),
        $(".navbar-brand").addClass("solid"),
        $(".navbar-dark .navbar-nav .nav-link").addClass("solid");
    } else {
      $(".navbar").removeClass("solid"),
        $(".navbar-brand").removeClass("solid"),
        $(".navbar-dark .navbar-nav .nav-link").removeClass("solid");
    }
  });
});

//function that calculates the number of months I have been learning full stack dev since 01/01/2019 to now.
// function getMonths() {
//   const dateNow = new Date();
//   const dateStart = new Date("01/01/2019"); //mm/dd/yyyy
//   diffMonths = Math.abs(dateStart.getMonth() - dateNow.getMonth());
//   //   console.log(dateStart.getMonth());
//   let date1 = new Date("01/01/2019");
//   let date2 = new Date();
//   console.log(date2);
//   console.log(date1);
//   let years = yearsDiff(date1, date2);
//   let months = years * 12 + (date2.getMonth() - date1.getMonth());
//   console.log(months);

//   return months;
// }
// document.getElementById("date").innerHTML = getMonths();

// // anchor tag animation
// function yearsDiff(d1, d2) {
//   let date1 = new Date(d1);
//   let date2 = new Date(d2);
//   let yearsDiff = date2.getFullYear() - date1.getFullYear();
//   return yearsDiff;
// }
