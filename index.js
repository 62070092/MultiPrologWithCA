window.addEventListener('load', () => {
    const name = localStorage.getItem('NAME');
    const comment = localStorage.getItem('COMMENT');

    document.getElementById('result_name').innerHTML = name;
    document.getElementById('result_comment').innerHTML = comment;

});

