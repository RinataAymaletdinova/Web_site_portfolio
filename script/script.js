/*Мини галерея*/
document.addEventListener('DOMContentLoaded', function() {
    // Класс для создания слайдера
    class Slider {
        constructor(wrapperId) {
            this.wrapper = document.getElementById(wrapperId);
            this.slider = this.wrapper.querySelector('.slider');
            this.slides = this.wrapper.querySelectorAll('.slide');
            this.arrowLeft = this.wrapper.querySelector('.arrow-left');
            this.arrowRight = this.wrapper.querySelector('.arrow-right');
            this.dotsContainer = this.wrapper.querySelector('.dots-container');
            
            this.currentSlide = 0;
            this.slideInterval = null;
            
            this.init();
        }
        
        init() {
            this.createDots();
            this.bindEvents();
            this.startAutoSlide();
        }
        
        createDots() {
            // Очищаем контейнер с точками
            this.dotsContainer.innerHTML = '';
            
            // Создаем точки для каждого слайда
            for (let i = 0; i < this.slides.length; i++) {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                if (i === this.currentSlide) dot.classList.add('active');
                
                // Добавляем обработчик события для точки
                dot.addEventListener('click', () => {
                    this.clearInterval();
                    this.goToSlide(i);
                    this.startAutoSlide();
                });
                
                this.dotsContainer.appendChild(dot);
            }
            
            this.dots = this.dotsContainer.querySelectorAll('.dot');
        }
        
        bindEvents() {
            // Обработчики событий для стрелок
            this.arrowLeft.addEventListener('click', () => {
                this.clearInterval();
                this.prevSlide();
                this.startAutoSlide();
            });
            
            this.arrowRight.addEventListener('click', () => {
                this.clearInterval();
                this.nextSlide();
                this.startAutoSlide();
            });
        }
        
        goToSlide(n) {
            this.currentSlide = (n + this.slides.length) % this.slides.length;
            this.slider.style.transform = `translateX(-${this.currentSlide * 100}%)`;
            
            // Обновляем активную точку
            this.updateDots();
        }
        
        updateDots() {
            this.dots.forEach((dot, index) => {
                if (index === this.currentSlide) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
        
        nextSlide() {
            this.goToSlide(this.currentSlide + 1);
        }
        
        prevSlide() {
            this.goToSlide(this.currentSlide - 1);
        }
        
        startAutoSlide() {
            this.clearInterval();
            this.slideInterval = setInterval(() => this.nextSlide(), 8000);
        }
        
        clearInterval() {
            if (this.slideInterval) {
                clearInterval(this.slideInterval);
            }
        }
    }
    
    // Создаем два экземпляра слайдера
    const slider1 = new Slider('slider1');
    const slider2 = new Slider('slider2');
    
    console.log('Слайдер 1 инициализирован:', slider1);
    console.log('Слайдер 2 инициализирован:', slider2);
});




/*Мини галерея*/





/*Анимации выезда */

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);

  let NumSkills = document.querySelectorAll('.skills_numbers');
  for (let elm of NumSkills) {
    observer.observe(elm);
  }

  let TextMe = document.querySelectorAll('.text_me');
  for (let elm of TextMe) {
      observer.observe(elm);
  }

  let imageElements = document.querySelectorAll('.image_pieces');
  for (let elm of imageElements) {
      observer.observe(elm);
  }

  let coverElements = document.querySelectorAll('.expirience_image');
  for (let elm of coverElements) {
      observer.observe(elm);
  }

  let expTextElements = document.querySelectorAll('.expirience_text');
  for (let elm of expTextElements) {
      observer.observe(elm);
  }

  /*Анимации выезда конец */


/*Анимации прокуртки до момента*/
  document.getElementById('scroll_about').addEventListener('click', function() {
    const target = document.getElementById('end_scroll_about');
    target.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scroll_main').addEventListener('click', function() {
  const target = document.getElementById('end_scroll_main');
  target.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scroll_skills').addEventListener('click', function() {
    const target = document.getElementById('end_scroll_skills');
    target.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scroll_kontacts').addEventListener('click', function() {
    const target = document.getElementById('end_scroll_kontacts');
    target.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scroll_gallery').addEventListener('click', function() {
    const target = document.getElementById('end_scroll_gallery');
    target.scrollIntoView({ behavior: 'smooth' });
});

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
/*Анимации прокуртки до момента*/



