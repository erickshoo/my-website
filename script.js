if(window.AOS)AOS.init({duration:900,once:true,disable:matchMedia('(prefers-reduced-motion: reduce)').matches});
const t=document.querySelector('.mobile-nav-toggle'),n=document.getElementById('navmenu');
t&&t.addEventListener('click',()=>{const o=n.classList.toggle('active');t.setAttribute('aria-expanded',o)});
const f=document.getElementById('contact-form');
f&&f.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(f);
location.href='mailto:jina@example.com?subject='+encodeURIComponent('Ujumbe kutoka '+d.get('jina'))+'&body='+encodeURIComponent(d.get('ujumbe')+'\n\n'+d.get('barua'))});
