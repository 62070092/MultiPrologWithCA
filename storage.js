function submitComment(){
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    localStorage.getItem("NAME", name);
    localStorage.getItem("COMMENT", comment);

    return;
}
