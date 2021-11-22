function submitComment(){

    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    localStorage.setItem("NAME", name);
    localStorage.setItem("COMMENT", comment);
    
    return;

}



