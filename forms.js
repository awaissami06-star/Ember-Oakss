import { showToast } from './toast.js';
document.getElementById('contactForm').addEventListener('submit', (e)=>{
  e.preventDefault();
  document.getElementById('contactForm').style.display = 'none';
  document.getElementById('formSuccess').classList.add('show');
});
document.getElementById('resetForm').addEventListener('click', ()=>{
  document.getElementById('contactForm').reset();
  document.getElementById('contactForm').style.display = 'block';
  document.getElementById('formSuccess').classList.remove('show');
});
document.getElementById('newsletterForm').addEventListener('submit', (e)=>{
  e.preventDefault();
  showToast("You're on the list — welcome to the drop.");
  e.target.reset();
});
function initEmailCapture(formId){
  const form = document.getElementById(formId);
  const field = form.querySelector('.ec-field');
  const input = form.querySelector('input[type=email]');
  const submitBtn = form.querySelector('.ec-submit');
  const success = form.querySelector('.ec-success');
  const originalIcon = submitBtn.innerHTML;

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const val = input.value.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    if(!valid){
      field.classList.add('invalid','shake');
      input.focus();
      setTimeout(()=> field.classList.remove('shake'), 400);
      return;
    }
    field.classList.remove('invalid');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="ec-spinner"></span>';
    setTimeout(()=>{
      form.classList.add('submitted');
      success.classList.add('show');
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalIcon;
      input.value = '';
      setTimeout(()=>{
        form.classList.remove('submitted');
        success.classList.remove('show');
      }, 4000);
    }, 650);
  });
  input.addEventListener('input', ()=> field.classList.remove('invalid'));
}
initEmailCapture('footerNewsletterForm');
