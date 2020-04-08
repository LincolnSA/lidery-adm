
/* 
    Efeito scroll 
 */
const menuItems = document.querySelectorAll('a[href^="#"');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
});

function scrollToIdOnClick(event) {
    event.preventDefault();

    const element = event.target;
    const id = element.getAttribute('href');
    const toSection = document.querySelector(id).offsetTop;

    window.scroll({
        top: toSection,
        behavior: "smooth"
    });
};

/* 
    validate form
*/

const inputEmail = document.querySelector('form input[name="email"]');

inputEmail.addEventListener("blur", () => {
    
    const value = inputEmail.value;
    const user = value.substring(0, value.indexOf("@"));
    const domain = value.substring(value.indexOf("@") + 1, value.length);

    if (
        (user.length >= 1) &&
        (domain.length >= 3) &&
        (user.search("@") == -1) &&
        (domain.search("@") == -1) &&
        (user.search(" ") == -1) &&
        (domain.search(" ") == -1) &&
        (domain.search(".") != -1) &&
        (domain.indexOf(".") >= 1) &&
        (domain.lastIndexOf(".") < domain.length - 1) ||
        (value.length == 0)
    ) {
        inputEmail.style.border = "none";
    } else {
        inputEmail.style.borderBottom = "1px solid red";
    }

});
