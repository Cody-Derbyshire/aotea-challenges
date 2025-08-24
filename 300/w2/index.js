const root = document.getElementById('menu');
const form = document.getElementById('openMenu');

form.addEventListener('submit', (event) => {
  let sideMenu = document.querySelector('.sideMenu');
  let btn = document.querySelector('button');
  event.preventDefault();

  if (sideMenu === null) {
    let div = document.createElement('div');
    div.className = 'sideMenu';

    const menuHeader = document.createElement('div');
    menuHeader.className = 'menuHeader';

    const h3 = document.createElement('h3');
    h3.textContent = 'menu';

    const close = document.createElement('button');
    close.className = 'closeBtn';
    close.textContent = 'close';

    close.addEventListener('click', () => {
      // placeholder
    });

    menuHeader.appendChild(h3);
    menuHeader.appendChild(close);
    div.appendChild(menuHeader);
    root.appendChild(div);

    btn.remove();
  } else {
    btn.textContent = 'menu';
    location.reload();
  }
});
