'use strict'

const inp = document.querySelector('input'),
      view = document.querySelector('.view');



function debounce(func, wait, immediate) {
    let timeout;
  
    return function executedFunction() {
      const context = this;
      const args = arguments;
  
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
  
      const callNow = immediate && !timeout;
  
      clearTimeout(timeout);
  
      timeout = setTimeout(later, wait);
  
      if (callNow) func.apply(context, args);
    };
  };


  const returnedFunction = debounce(function(e) {
        let target = e.target

        view.textContent = target.value;
    
  }, 300);
  
  inp.addEventListener('input', returnedFunction)

