const cards = document.querySelectorAll('.card');
cards.forEach(c=>c.addEventListener('mouseover',()=>c.classList.add('hovered')));
cards.forEach(c=>c.addEventListener('mouseout',()=>c.classList.remove('hovered')));

document.getElementById('feedbackForm').onsubmit = e=>{
  e.preventDefault();
  const f={ name:e.target.name.value, email:e.target.email.value, message:e.target.message.value };
  const arr=JSON.parse(localStorage.getItem('feedbacks') || '[]');
  arr.push(f);
  localStorage.setItem('feedbacks', JSON.stringify(arr));
  e.target.reset();
  alert("Teşekkürler, mesajınız alındı!");
};
