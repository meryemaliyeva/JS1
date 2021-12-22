images = [
    {
      img: 'foto1.jpg',
      id: 1,
    },
    {
        img: 'foto2.jpg',
      id: 1,
    },
    {
        img: 'foto3.jpg',
      id: 1,
    },
    {
        img: 'foto4.jpg',
      id: 1,
    },
    {
        img: 'foto5.jpg',
      id: 1,
    },
    {
        img: 'foto6.jpg',
      id: 1,
    },
    {
        img: 'foto7.jpg',
      id: 1,
    },
    {
        img: 'foto8.jpg',
      id: 1,
    },
    {
        img: 'foto9.jpg',
      id: 1,
    },
    {
        img: 'foto10.jpg',
      id: 1,
    },
    {
        img: 'foto11.jpg',
      id: 1,
    },
    {
        img: 'foto12.jpg',
      id: 1,
    },

    {
        img: 'foto5.jpg',
      id: 2,
    },
    {
        img: 'foto10.jpg',
      id: 2,
    },

    {
        img: 'foto1.jpg',
      id: 3,
    },

    {
        img: 'foto2.jpg',
      id: 3,
    },
    {
        img: 'foto12.jpg',
      id: 3,
    },

    {
        img: 'foto6.jpg',
      id: 4,
    },

    {
        img: 'foto7.jpg',
      id: 4,
    },

    {
        img: 'foto11.jpg',
      id: 4,
    },
    {
        img: 'foto8.jpg',
      id: 4,
    },

    {
        img: 'foto3.jpg',
      id: 5,
    },

    {
        img: 'foto4.jpg',
      id: 5,
    },
    {
        img: 'foto9.jpg',
      id: 5,
    },
  ];
  document.getElementById('bir').addEventListener('click', function () {
    document.querySelector('.photo').innerHTML = '';
    images.forEach((item) => {
      if (item.id == 1) {
        document.querySelector('.photo').innerHTML += `
          <img  src='${item.img}' />
          `;
      }
    });
  });
  document.getElementById('iki').addEventListener('click', function () {
    document.querySelector('.photo').innerHTML = '';
  
    images.forEach((item) => {
      if (item.id == 2) {
        document.querySelector('.photo').innerHTML += `
          <img src='${item.img}' />
          `;
      }
    });
  });
  document.getElementById('uc').addEventListener('click', function () {
    document.querySelector('.photo').innerHTML = '';
  
    images.forEach((item) => {
      if (item.id == 3) {
        document.querySelector('.photo').innerHTML += `
          <img src='${item.img}' />
          `;
      }
    });
  });

  document.getElementById('dord').addEventListener('click', function () {
    document.querySelector('.photo').innerHTML = '';
  
    images.forEach((item) => {
      if (item.id == 4) {
        document.querySelector('.photo').innerHTML += `
          <img src='${item.img}' />
          `;
      }
    });
  });

  document.getElementById('bes').addEventListener('click', function () {
    document.querySelector('.photo').innerHTML = '';
  
    images.forEach((item) => {
      if (item.id == 5) {
        document.querySelector('.photo').innerHTML += `
          <img src='${item.img}' />
          `;
      }
    });
  });