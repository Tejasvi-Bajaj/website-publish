document.addEventListener('DOMContentLoaded', function () {
    const readMoreBtn = document.getElementById('Readmore');

    if (readMoreBtn) {
        readMoreBtn.addEventListener('click', function () {
            alert('Subscribe to read more');
        });
    }
});
