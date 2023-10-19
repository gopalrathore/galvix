document.getElementById('toggleButton').addEventListener('click', function() {
    var element = document.getElementById('right-nav');
    
    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
});
