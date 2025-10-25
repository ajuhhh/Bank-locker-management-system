document.querySelectorAll('.dropbtn').forEach(button => {
    button.addEventListener('click', function () {
        let dropdown = this.nextElementSibling;
        dropdown.classList.toggle('show');
    });
});
