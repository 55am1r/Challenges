const getElements = document.getElementsByClassName('accordion');
for (let i of getElements) {
    i.children[0].addEventListener('click', () => {
        i.children[0].children[1].classList.toggle('rotate');
        i.children[1].classList.toggle('display-b');
    })
}