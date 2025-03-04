document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    document.querySelector('.wrapper').classList.remove('hide');
  }, 2000);
  setTimeout(() => {
    document.querySelector('.wrapper').classList.add('animate-wrapper');
  }, 3000); // Запускаем анимацию через 5 секунд
  const options = {
    root: null,
    threshold: 0.5 // Элемент считается видимым, когда 50% его площади находится в области просмотра
  };
  
  const animatedElements = document.querySelectorAll(".event");
  
  const observerLeft = new IntersectionObserver(handleLeft, options);
  const observerRight = new IntersectionObserver(handleRight, options);
  for (let i = 0; i < animatedElements.length; i++) {
    console.log("test")
    if (i % 2) {
      observerRight.observe(animatedElements[i])
    }
    else {
      observerLeft.observe(animatedElements[i]);
    }
  }

  const iframe = document.getElementById("googleFormIframe");

  function observeIframeChanges(mutations) {
      if(iframe.textContent.includes("Спасибо за ваш ответ")){
        window.scrollTo(0);
      }
      consoler.log(iframe.textContent)
  }

  const observer = new MutationObserver(observeIframeChanges);
  observer.observe(iframe.contentDocument.body, { childList: true });


});

function handleLeft(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fadeInLeft');
      entry.target.classList.remove('hide');
      observer.unobserve(entry.target);
    }
  });
}

function handleRight(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fadeInRight');
      entry.target.classList.remove('hide');
      observer.unobserve(entry.target);
    }
  });
}