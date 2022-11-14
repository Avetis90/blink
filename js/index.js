document.addEventListener('DOMContentLoaded', function () {
    const contactBtn = document.getElementById('btn-contact')

    function validateEmail(email) {
        const emailRegex =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return email.match(emailRegex)
    }

    contactBtn.addEventListener('click', function () {
        const email = document.getElementById('contact-email').value
        const name = document.getElementById('contact-name').value

        console.log(email)
        if (!email) {
            // Todo - add error for email empty field
        } else if (validateEmail(email)) {
            // Todo - add error for correct email
        }

        if (!name) {
            // Todo - add error for name empty field
        }

        // Todo - if no error submit

    })

    const mobileMenuIcon = document.getElementById('menu-icon')
    const mobileMenu = document.getElementById('mobile-menu')
    mobileMenuIcon.addEventListener('click', function (e) {
        mobileMenuIcon.classList.contains('active') ? mobileMenu.classList.remove('opened') : mobileMenu.classList.add('opened')
        e.currentTarget.classList.toggle('active')

    })
})
