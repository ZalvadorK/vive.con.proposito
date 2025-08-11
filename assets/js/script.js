//Animacion con gsap
gsap.from(".nav__logo",{

    x: -150,
    duration: 3,
    ease: "elastic.out(1,0.3)"

})

gsap.from(".nav__item",{

    y: -150,
    duration: 1,
    ease: "power3.out",
    stagger: 0.1

})

gsap.from(".nav__toggle",{

    x: 150,
    duration: 3,
    ease: "elastic.out(1,0.3)"

})

gsap.from(".hero__text h1",{

    x: 150,
    duration: 3,
    ease: "elastic.out(1,0.3)"

})

gsap.from(".hero__text p",{

    x: -150,
    duration: 3,
    ease: "elastic.out(1,0.3)"

})

gsap.from(".hero-visual",{

    duration: 1,
    ease: "bounce.out",
    y: 250

})


// Obtener elementos
const mobileMenu = document.getElementById('mobile-menu');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-btn');
const navLinks = document.querySelectorAll('.nav__link');
const sidebarLinks = document.querySelectorAll('.sidebar__link');

// Abrir menú lateral
mobileMenu.addEventListener('click', function() {
    mobileMenu.classList.add('active');
    sidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Cerrar menú lateral
function closeMenu() {
    mobileMenu.classList.remove('active');
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Cerrar con botón X
closeBtn.addEventListener('click', closeMenu);

// Cerrar con overlay
overlay.addEventListener('click', closeMenu);

// Cerrar con tecla Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeMenu();
    }
});

// Cerrar menú al hacer click en enlaces del sidebar
sidebarLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        closeMenu();
        
        // Remover clase active de todos los enlaces
        navLinks.forEach(function(l) {
            l.classList.remove('active');
        });
        sidebarLinks.forEach(function(l) {
            l.classList.remove('active');
        });
        
        // Agregar clase active al enlace clickeado
        link.classList.add('active');
        
        // Encontrar el enlace correspondiente en el navbar desktop
        const href = link.getAttribute('href');
        const desktopLink = document.querySelector('.nav__link[href="' + href + '"]');
        if (desktopLink) {
            desktopLink.classList.add('active');
        }
    });
});

// Manejar clicks en enlaces del navbar desktop
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        // Remover clase active de todos los enlaces
        navLinks.forEach(function(l) {
            l.classList.remove('active');
        });
        sidebarLinks.forEach(function(l) {
            l.classList.remove('active');
        });
        
        // Agregar clase active al enlace clickeado
        link.classList.add('active');
        
        // Encontrar el enlace correspondiente en el sidebar
        const href = link.getAttribute('href');
        const sidebarLink = document.querySelector('.sidebar__link[href="' + href + '"]');
        if (sidebarLink) {
            sidebarLink.classList.add('active');
        }
    });
});

// Cambiar enlace activo según scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(function(section, index) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            // Remover active de todos los enlaces
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            sidebarLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            
            // Agregar active a los enlaces correspondientes
            if (navLinks[index]) {
                navLinks[index].classList.add('active');
            }
            if (sidebarLinks[index]) {
                sidebarLinks[index].classList.add('active');
            }
        }
    });
});

// Activar primer enlace al cargar
window.addEventListener('load', function() {
    if (navLinks[0]) {
        navLinks[0].classList.add('active');
    }
    if (sidebarLinks[0]) {
        sidebarLinks[0].classList.add('active');
    }
});
