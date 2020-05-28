const images = document.querySelectorAll('[data-src');
console.log(images);

const loadImage = img => {
    const src = img.getAttribute('data-src');
    img.src = src;
}

const option = {};
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return
        }
        //console.log(entry.target);
        loadImage(entry.target);
        observer.unobserve(entry.target);
    })
}, option);

images.forEach(image => observer.observe(image))