const headerTabs = document.querySelectorAll('.header__tab')
const mainTitlte = document.querySelector('.main__title')

headerTabs.forEach(item => {
    item.addEventListener('click', (e) => {
        headerTabs.forEach(item => {
            item.classList.remove('header__tab-active')
        })
        e.target.classList.add('header__tab-active')
        mainTitlte.innerHTML = e.target.textContent

    })
})

const tabs = document.querySelectorAll('.card__button-mini')

tabs.forEach(item => {
    item.addEventListener('click', () => {
        tabs.forEach(item => {
            item.classList.remove('card__button-mini-active')
        })
        item.classList.add('card__button-mini-active')
    })
})