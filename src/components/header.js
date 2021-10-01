const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  const div = document.createElement('div');
  const h1 = document.createElement('h1');

  const span1 = document.createElement('span');
  const span2 = document.createElement('span');

  span1.textContent = `{ ${date} }`;
  span2.textContent = `{ ${temp} }`;
  h1.textContent = `{ ${title} }`;

  div.classList.add('header');
  span1.classList.add('date');
  span2.classList.add('temp');
  
  div.appendChild(span1);
  div.appendChild(h1);
  div.appendChild(span2); 
  return div;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  const selector1 = document.querySelector(selector);
  
  selector1.appendChild(Header('mine','mine','mine'));
}

export { Header, headerAppender }
