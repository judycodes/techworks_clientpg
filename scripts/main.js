/*Randomly assigns background colors and a shadow to the books on the bookshelf/accordion*/

//selects all books on bookshelf
let books = document.querySelectorAll(".book");

//colors for book spines
let colors = [ '#74BDCB', '#FFA384', '#D8A7B1', '#B6E2D3', '#887BB0','#6DA6F6','#03AB99','#FFD571','#AEC3BC','#A58CB3', '#80b34d', '#ff9933', '#6699cc', '#003366'];


window.addEventListener("load", () => {
  for (i = 0; i < books.length; i++) {
    books[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    books[i].style.opacity = "0.85";
    books[i].style.boxShadow = "0px 2.5px rgba(0,0,0,0.35)";
  }
});

/*Creates a subtle book pull out animation before revealing accordion slide/book cover*/
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

/*Add stylings to reading list buttons*/
let readBtns = document.querySelectorAll(".readBtn")
window.addEventListener("load", () => {
  for (i = 0; i < readBtns.length; i++) {
    readBtns[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    readBtns[i].style.opacity = "0.85";
    readBtns[i].style.color = "#fff";
    readBtns[i].style.fontWeight = "500";
    readBtns[i].style.textShadow = "1px 1px rgba(0,0,0,0.4)";
    readBtns[i].style.boxShadow = "0px 2px rgba(0,0,0,0.3)";
    readBtns[i].style.marginBottom = "3.5px";
  }
});
