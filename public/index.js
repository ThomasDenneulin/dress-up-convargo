/* global CONVARGO*/
'use strict';

(() => {
  const render = (actors) => {
    const fragment = document.createDocumentFragment();
    const ul = document.createElement('ul');
    ul.className = "list-group col-md-5";
    const template = actors.map(actor => {
      return `
        <li class="actor list-group-item">
          <span>${actor.who}</span>
          <span>${actor.type}</span>
          <span>${actor.amount}</span>
        </li>
      `;
    }).join('');

    ul.innerHTML = template;
    fragment.appendChild(ul);
    document.querySelector('#actors').innerHTML = '';
    document.querySelector('#actors').appendChild(fragment);
  };

  const button = document.querySelector('#compute');

  button.addEventListener('click', function onClick () {
    const trucker = CONVARGO.getTrucker();
    const distance = document.querySelector('.distance').value;
    const volume = document.querySelector('.volume').value;
    const option = document.querySelector('.option').checked;
    const actors = CONVARGO.payActors(trucker, distance, volume, option);

    render(actors);

    return;
  });
})();
