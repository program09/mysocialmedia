


/* ------------------------------ MENU USUARIO ------------------------------ */
$(document).ready(function () {
    $('#btn_user').click(function () {
        $('#menu_user').fadeToggle();
        $('#menu_alert').fadeOut();
    });
    $('#btn_alert').click(function () {
        $('#menu_alert').fadeToggle();
        $('#menu_user').fadeOut();
    });
    $('#btn_aside').click(function () {
        $('#aside_main').toggleClass('active_aside');
    })
});

/* --------------------------------- VER MAS -------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
    const descriptionContainers = document.querySelectorAll(".public_description");

    descriptionContainers.forEach((descriptionContainer) => {
        const readMoreLink = descriptionContainer.nextElementSibling;

        // Verificar si el contenido sobrepasa la altura máxima
        if (descriptionContainer.scrollHeight > 50) {
            readMoreLink.style.display = "inline"; // Mostrar el enlace "Ver más"
        } else {
            readMoreLink.style.display = "none"; // Ocultar el enlace "Ver más"
        }

        readMoreLink.addEventListener("click", function () {
            if (descriptionContainer.classList.contains("expanded")) {
                descriptionContainer.classList.remove("expanded");
                readMoreLink.textContent = "Ver más";
            } else {
                descriptionContainer.classList.add("expanded");
                readMoreLink.textContent = "Ver menos";
            }
        });
    });
});


/* --------------------------------- LOADER --------------------------------- */
$(document).ready(function () {
    const $publicElements = $('.public');

    $(window).scroll(function () {
        $publicElements.each(function () {
            const $this = $(this);
            const position = $this.offset().top;
            const scrollPosition = $(window).scrollTop();
            const windowHeight = $(window).height();
            const threshold = 100; // Distancia antes de que el elemento esté en la pantalla

            if (position < scrollPosition + windowHeight + threshold) {
                // Cargar el contenido del elemento solo si no se ha cargado aún
                if (!$this.hasClass('loaded')) {
                    $this.addClass('loaded');
                    // Aquí podrías cargar el contenido del elemento
                }
            }
        });
    });
});



/* ------------------------ ITEMS FOTO PUBLICACIONES ------------------------ */
$(document).ready(function () {
    const $scrollContainer = $('.foto-all');
    const scrollDistance = 300; // Distancia de desplazamiento en píxeles

    $('.prev-button').click(function () {
        $scrollContainer.scrollLeft($scrollContainer.scrollLeft() - scrollDistance);
    });

    $('.next-button').click(function () {
        $scrollContainer.scrollLeft($scrollContainer.scrollLeft() + scrollDistance);
    });
});

/* ------------------------------ MOSTRAR FOTO ------------------------------ */
$(document).ready(function () {
    $('.foto_item img').click(function () {
        const imageUrl = $(this).attr('src');
        $('#modalImage').attr('src', imageUrl);
        $('#view_foto_public').modal('show');
    });
});




/* ------------------------- MOSTRAR VIDEO EN MODAL ------------------------- */
document.addEventListener("DOMContentLoaded", function () {
    const modalVideo = document.getElementById("modalVideo");
    const fotoImgDivs = document.querySelectorAll(".foto_img");
    const modal = new bootstrap.Modal(document.getElementById("view_video_public"));

    fotoImgDivs.forEach(function (div) {
        div.addEventListener("click", function () {
            const videoSrc = div.querySelector("video source").getAttribute("src");
            modalVideo.src = videoSrc;
            modal.show();
        });
    });

    modal._element.addEventListener("hidden.bs.modal", function () {
        modalVideo.pause();
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const loopVideos = document.querySelectorAll("video[data-duration]");

    loopVideos.forEach(function (video) {
        const duration = parseInt(video.getAttribute("data-duration")) * 1000;

        video.addEventListener("canplaythrough", function () {
            setTimeout(function () {
                video.currentTime = 0; // Reiniciar al inicio del video
                video.play();
            }, duration);
        });
    });
});


/* ------------------------- mostrar y ocultar chat ------------------------- */
document.addEventListener("DOMContentLoaded", function () {
    const cerrarChatLink = document.getElementById("cerrar-chat-link");
    const chatLinks = document.querySelectorAll(".chat-link");
    const chatSection = document.getElementById("chats");
    const personasSection = document.querySelector("#personas");

    cerrarChatLink.addEventListener("click", function (event) {
        event.preventDefault();
        chatSection.style.display = "none";
        personasSection.style.display = "block";
    });

    chatLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            chatSection.style.display = "block";
            personasSection.style.display = "none";
        });
    });
});



/* ----------------------------- ANIMACION ICONO ---------------------------- */
const animationContainer = document.getElementById("lottie-icon");
const animationData = {
    container: animationContainer,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "public/icon-animate/sms.json" // Ruta al archivo JSON descargado
};

// Cargar y reproducir la animación
const animation = lottie.loadAnimation(animationData);