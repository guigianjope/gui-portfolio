//responsive navbar
$(document).ready(function() {
    $(".menu-mobile").click(function () {
        $(this).toggleClass("active");
        $(".menu").toggleClass("active");
    });
});


//modal
function open(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('show');

    modal.addEventListener('click', function(e) {
        if(e.target.id == modalId || e.target.id == 'close') {
            modal.classList.remove('show');
        }
    })
}

const educationButton = document.getElementById('education')
educationButton.addEventListener('click', function() {
    open('modal_education');
})

const careerButton = document.getElementById('career')
careerButton.addEventListener('click', function() {
    open('modal_career');
})
