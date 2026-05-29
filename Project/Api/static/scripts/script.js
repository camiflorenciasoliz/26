// Reveal on scroll
const cards = document.querySelectorAll('.card');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.style.opacity = 1;
      e.target.style.transform = 'translateY(0)';
      io.unobserve(e.target);
    }
  });
},{threshold:.15});
cards.forEach((c,i)=>{
  c.style.opacity=0;
  c.style.transform='translateY(30px)';
  c.style.transition=`opacity .6s ease ${i*0.08}s, transform .6s ease ${i*0.08}s, box-shadow .3s`;
  io.observe(c);
});

// Soft parallax on hero
const hero = document.querySelector('.hero');
window.addEventListener('scroll',()=>{
  const y = window.scrollY;
  if(y < 600) hero.style.backgroundPosition = `center ${y*0.3}px`;
});

// Smooth-scroll nav highlight
document.querySelectorAll('.nav nav a').forEach(a=>{
  a.addEventListener('click',()=>{
    document.querySelectorAll('.nav nav a').forEach(x=>x.style.color='');
    a.style.color = 'var(--orange)';
  });
});
