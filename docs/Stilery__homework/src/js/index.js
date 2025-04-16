//             Номера в вопросиках
let quetionnItem = document.querySelectorAll('.quetions__item');

    quetionnItem.forEach((item, index) => {
        const number = (index + 1).toString().padStart(2, '0');
        item.style.setProperty('--item-number', '"' + number + '"');
    });
//              Счетчики     
const counterDiv = document.getElementById('count');
const counterDiv_2 = document.getElementById('count_2');
    
const targetValue = 800;
let currentValue = 0;
const intervalSpeed = 5;
let intervalId = null;
let counterStarted = false;
 
window.addEventListener('scroll', function() {
  if (window.scrollY > 1000 && !counterStarted) {
    intervalId = setInterval(() => {
      currentValue++;
      counterDiv.textContent = currentValue;
      if (currentValue >= targetValue) {
        clearInterval(intervalId);
        counterStarted = true;
      }
    }, intervalSpeed);
    counterStarted = true;
    
  }
else if(window.scrollY <= 1000) {
        if (intervalId) {
          clearInterval(intervalId);
          intervalId = null;
          counterStarted = false;
          currentValue = 0;
          counterDiv.textContent = 0;
        }
      }
    });
    const targetValue_2 = 42;
    let currentValue_2 = 0;
    const intervalSpeed_2 = 55;
    let intervalId_2 = null;
    let counterStarted_2 = false;
window.addEventListener('scroll', function() {
  if (window.scrollY > 1000 && !counterStarted_2) {
        intervalId_2 = setInterval(() => {
          currentValue_2++;
          counterDiv_2.textContent = currentValue_2;
          if (currentValue_2 >= 42) {
            clearInterval(intervalId_2);
            counterStarted_2 = true;
            counterDiv_2.textContent = "42,3";
          }

        }, intervalSpeed_2);
        counterStarted_2 = true;

  }
    else if(window.scrollY <= 1000) {
        if (intervalId_2) {
          clearInterval(intervalId_2);
          intervalId_2 = null;
          counterStarted_2 = false;
          currentValue_2 = 0;
          counterDiv_2.textContent = 0;
        }
      }
    });
//                 Выбор выпадающий в форме
const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');
      
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
    } 
  });

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}
//           Чекбоксы 
const btns = document.getElementsByClassName('rules__checkbox');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    // Проверяем, есть ли у текущей кнопки класс 'active'
    if (this.classList.contains('active')) {
      // Если есть, удаляем его
      this.classList.remove('active');
    } else {
      // Если нет, добавляем его
      this.classList.add('active');
    }
  });
}
//           Стрелка возвращающая вверх c помощью jQuery
const Sl_opacity = document.getElementsByClassName('Slowly_opacity');
$(document).ready(function(){
  $(window).scroll(function() {
          if ($(this).scrollTop() > 1600) {
              $('.pageup').fadeIn();
          } else {
              $('.pageup').fadeOut();
          }
      });

      $("a[href='#up']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
      });
      
      new WOW().init();
      //             Текст вначале 
      $(window).scroll(function() {
         if ($(this).scrollTop() > 850) {
             $('.Slowly_opacity').addClass('activate_p');
         } else {
             $('.Slowly_opacity').removeClass('activate_p');
         }
     });
});
//            Слайдеры 
let swiper = new Swiper (".swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 400,
  preventClicks: true,
  noSwiping: true,
  freeMode: false,
  navigation:{
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    550: {
      slidesPerView: 2, 
      spaceBetween: 20,
    }, 
    
  }
})
let swiper_2 = new Swiper (".swiper_2", {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 400,
  preventClicks: true,
  noSwiping: true,
  freeMode: false,
  navigation:{
    nextEl: ".next_2",
    prevEl: ".prev_2",
  },
  breakpoints: {
    550: {
      slidesPerView: 2, 
      spaceBetween: 20,
    }, 
    
  }
})
//               Placeholder свой
const inputs = document.querySelectorAll('input'); // Получаем все input элементы
const addedClasses = new WeakSet(); // Создаем WeakSet для отслеживания добавленных классов

inputs.forEach(input => {
    input.addEventListener('focus', function() {
        const nameDiv = this.nextElementSibling; // Находим следующий элемент, div.name

        if (nameDiv && nameDiv.classList.contains('name')) { // Если это div.name
          if (!addedClasses.has(nameDiv)){ // Проверяем, добавляли ли мы уже класс
              nameDiv.classList.add('active-placeholder'); // Добавляем класс
              addedClasses.add(nameDiv);  // Помечаем, что класс добавлен
          }
        }
    });
});