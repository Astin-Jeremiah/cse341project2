const name = document.getElementById("name");

window.addEventListener('load', () => {
    alertify.prompt('Please Enter Your Name', '', function (evt, value) {
        name.innerHTML = value;
    });

});
