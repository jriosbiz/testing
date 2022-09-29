
async function start() {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await response.json();
  //console.log(data);
  //console.log(data[0].name);
  createList(data);
}
start();

function createList(comments) {
  document.querySelector('.comments').innerHTML += `
    <ul class ="list">
    ${comments.map(function (comment) {
      return `<li>${comment.body}</li>`;
    }).join('')}</ul>
  `;
}
