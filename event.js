
window.addEventListener('click', () => {
    
    const text = sessionStorage.getItem('NAME');
    document.getElementById('text-choose').innerHTML = text;
});


