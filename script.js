document.getElementById('show-more').addEventListener('click', function() {
    const extraContent = document.getElementById('extra-content');
    if (extraContent.style.display === 'none') {
        extraContent.style.display = 'block';
        this.textContent = 'Show Less';
    } else {
        extraContent.style.display = 'none';
        this.textContent = 'Show More';
    }
    const ca = 0;
});
