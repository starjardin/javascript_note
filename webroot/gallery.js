function Gallery(gallery) {
    if (!gallery) {
        throw Error("No images found");
    };

    const images = Array.from(gallery.querySelectorAll('img'));
    const modal = document.querySelector('.modal');
    const prevButton = modal.querySelector('.prev');
    const nextButton = modal.querySelector('.next');
    let currentImage;

    function handleClickOutside(e) {
        if (e.currentTarget === e.target) {
            closeModal();
        }
    }

    function openModal() {
        if (modal.matches(".open")) {
            console.info("Modal already open");
        }
        modal.classList.add("open");
    }

    function closeModal() {
        modal.classList.remove("open");
    }

    function showImage(el) {
        if (!el) {
            console.info("no image is found");
            return;
        }
        modal.querySelector("img").src = el.src;
        currentImage = el;
        openModal();
    }

    images.forEach(image => {
        image.addEventListener('click', e => showImage(e.currentTarget));
    })

}

const gallery1 = Gallery(document.querySelector(".gallery1"));
const gallery2 = Gallery(document.querySelector(".gallery2"));