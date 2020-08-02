const modal = document.querySelector('.wrap');
const closeBtn = document.querySelector('span');
const showBtn = document.querySelector('button');

closeBtn.addEventListener('click', function () {
    modal.classList.remove('zoomInDown');
    modal.classList.add('zoomOut');
    setTimeout(function() {
        modal.classList.add('hidden');
    }, 1000);
});

showBtn.addEventListener('click', function () {
    modal.classList.remove('zoomOut', 'hidden');
    modal.classList.add('animated', 'zoomInDown');
});
