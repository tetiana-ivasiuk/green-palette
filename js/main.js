const swiper = new Swiper('.reviews__slider', {

   
    breakpoints:{
      640: {
        slidesPerView: 2,
        fill: 'column',
      },
      320: {
        slidesPerView: 1,
        grid: {
          fill: 'row',
          rows: 2,
        },
         // Navigation arrows
        navigation: {
          nextEl: '.reviews__item-next',
          prevEl: '.reviews__item-prev',
          },
        spaceBetween: 22,
        loop: true,
      }
    },


  });



  const menuBtn = document.querySelector('.menu__btn');
  const menuHeader = document.querySelector('.nav__menu-header');

  menuBtn.addEventListener('click', () => {
    menuHeader.classList.toggle('nav__menu-header--open');
  });

  const accordeonTitle = document.querySelectorAll('.accordeon__title');

  accordeonTitle.forEach(item => {
    item.addEventListener('click', () => {

      const parent = item.parentNode;

      if (parent.classList.contains('accordeon__item--active')) {
        parent.classList.remove('accordeon__item--active')
      } else {
        
        accordeonTitle.forEach(element => {
          element.parentNode.classList.remove('accordeon__item--active')
        });

        parent.classList.add('accordeon__item--active')
      }



      // item.parentNode.classList.toggle('accordeon__item--active')
    })
  });