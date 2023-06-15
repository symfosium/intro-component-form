const inputs = document.querySelectorAll('.form__name');
const icons = document.querySelectorAll('.icon');
const errorMessage = document.querySelectorAll('.invalid-message');
const submitBtn = document.querySelector('.form__button');


function checkInputs() {
   inputs.forEach((elem, index) => {
      if (elem.value === '') {
         elem.classList.add('error');
         icons[index].style.display = 'block';
         errorMessage[index].style.display = 'block';
      } else {
         elem.classList.remove('error');
         icons[index].style.display = 'none';
         errorMessage[index].style.display = 'none';
      }
   })
}

submitBtn.addEventListener('click', checkInputs);