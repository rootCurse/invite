document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.querySelector('.wrapper').classList.add('hide');
      }, 2000);
    setTimeout(() => {
      document.querySelector('.wrapper').classList.add('animate-wrapper');
    }, 3000); // Запускаем анимацию через 5 секунд
  });