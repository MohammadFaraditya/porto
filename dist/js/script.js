const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')
const cookMate = document.querySelector('#cookmate')

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden')
});

window.onscroll = function () {
    const header = document.querySelector('header');
    const fixnav = header.offsetTop;

    if (window.pageYOffset > fixnav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed')
    }
}

cookMate.addEventListener('click', function () {
    alert("Proyek ini masih ditinjau oleh tim Bangkit, nanti kalau sudah selesai akan di publish:)")
});


function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_6nnb5wc";
    const templateID = "template_8dipnr3";
    const publicKey = "fjkxMPjWh6eALoQRV";

    emailjs
        .send(serviceID, templateID, params, publicKey)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Email Anda berhasil dikirim.");
        })
        .catch((err) => {
            console.log(err);
            alert("Terjadi kesalahan saat mengirim email.");
        });
}

const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Mencegah perilaku default saat diklik

        const target = document.querySelector(link.getAttribute('href'));

        if (target) {
            // Lakukan scroll ke elemen target dengan efek smooth
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth',
            });
        }
    });
});


