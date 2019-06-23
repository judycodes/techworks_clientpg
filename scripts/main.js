// Randomly assigns background colors to the books on the bookshelf/accordion
let books = document.querySelectorAll(".book");
let colors = [ '#74BDCB', '#FFA384', '#D8A7B1', '#B6E2D3', '#887BB0','#6DA6F6','#03AB99','#FFD571','#AEC3BC','#A58CB3', '#80b34d', '#ff9933', '#6699cc', '#003366'];


window.addEventListener("load", () => {
  for (i = 0; i < books.length; i++) {
    books[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    books[i].style.opacity = "0.8";
    books[i].style.boxShadow = "0px 2.5px rgba(0,0,0,0.3)";
  }
});

//Creates a book pull out animation
for (let i = 0; i < books.length; i++) {
  books[i].addEventListener('mouseover', () => {
    books[i].classList.add('scale');
  });
  books[i].addEventListener('mouseout', () => {
    books[i].classList.remove('scale');
  });
  books[i].addEventListener('click', () => {
    books[i].classList.remove('scale');
  });
}
