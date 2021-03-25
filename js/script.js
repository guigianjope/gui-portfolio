//navbar
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

const personalButton = document.getElementById('personal')
personalButton.addEventListener('click', function() {
    open('modal_personal');
})

const professionalButton = document.getElementById('professional')
professionalButton.addEventListener('click', function() {
    open('modal_professional');
})
