const video = document.getElementById('video');
const btnInicio = document.getElementById('btnInicio');

video.addEventListener('ended', function() {
    btnInicio.style.display = 'block';
    video.style.display = 'none';
});