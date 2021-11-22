window.addEventListener('load', () => {

    const name = localStorage.getItem('NAME');
    const comment = localStorage.getItem('COMMENT');

    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-comment').innerHTML = comment;

});

