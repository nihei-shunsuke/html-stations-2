document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('button');
  const fruitsDiv = document.getElementById('fruits');

  function displayList() {
    const fruits = Array.from(document.querySelectorAll('#fruits p')).map(p => p.textContent);
    const ul = document.createElement('ul');

    fruits.forEach(function(fruit) {
      const li = document.createElement('li');
      li.textContent = fruit;
      ul.appendChild(li);
    });

    fruitsDiv.innerHTML = '';
    fruitsDiv.appendChild(ul);
  }

  button.addEventListener('click', displayList);
});