/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/


// Identifies the list of students being used in this project and stores them in a variable
const studentList = document.getElementsByClassName('student-item cf');

// Creates a function to display 10 students on the page at a time, depending on the current page number
const showPage = (list, page) => {
  const startIndex = (page * 10) - 10;
  const endIndex = page * 10;
  for (let i = 0; i < list.length; i++) {
    if ( i >= startIndex && i < endIndex ) {
      list[i].style.display = ''
    } else {
      list[i].style.display = 'none';
    }
  }
}

/*
Creates a function that determines the number of pages needed to display the
number of students in the list. Creates page number links at the bottom of the page.
Gives the first page link the 'active' class since it will be displayed initially.
Adds an event listener to the links that calls the showPage function when each link
is clicked, causing the correlating page to be displayed. Sets the className of
only the clicked link to 'active'.
*/
const appendPageLinks = (list) => {
  const numberOfPages = Math.ceil(list.length / 10);
  const pageDiv = document.querySelector('.page')
  const paginationDiv = document.createElement('div');
  const ul = document.createElement('ul');
  paginationDiv.setAttribute('class', 'pagination');
  pageDiv.appendChild(paginationDiv);
  paginationDiv.appendChild(ul);

  for (let i = 1; i <= numberOfPages; i++){
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.setAttribute('href', '#');
      a.textContent = i;
      ul.appendChild(li);
      li.appendChild(a);
      if (i === 1) {
        a.className = 'active';
      }
      a.addEventListener('click', (e) => {
        const paginationLinks = document.getElementsByTagName('a');
        for (let i = 0; i < paginationLinks.length; i++) {
          paginationLinks[i].classList.remove('active');
        }
        e.target.className = 'active';
        showPage(list, i);
      });
  }
}

/* Calls the showPage function with the list of students declared at the
beginning of this script and sets the initial page to 1. Calls the appendPageLinks
function to generate the functioning pagination links.
*/
showPage(studentList, 1);
appendPageLinks(studentList);
