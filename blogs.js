const homePage = document.getElementById("home");
const blogPage = document.getElementById("blogs");
const currentPage = location.toString();
console.log(currentPage);
const home1 = "https://luminous-beijinho-cad431.netlify.app/";
const home2 = "https://luminous-beijinho-cad431.netlify.app/index.html";
const blogs = "https://luminous-beijinho-cad431.netlify.app/blogs.html";
currentPage === home1 || currentPage === home2
  ? (homePage.style.color = "lightgreen")
  : (blogPage.style.color = "lightgreen");
