const headerTabs = document.querySelectorAll('.header__tab'),
    mainTitlte = document.querySelector('.main__title')

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

const collapsBlocks = document.querySelectorAll('.faq__question'),
    collapsTriggers = document.querySelectorAll('.faq__question-trigger')

collapsTriggers.forEach(item => {
    item.addEventListener('click', (e) => {
        collapsTriggers.forEach(item => {
            item.setAttribute('src', 'img/faq/plus.svg')
        })
        collapsBlocks.forEach(item => {
            item.classList.remove('faq__question-active')
        })
        e.target.setAttribute('src', 'img/faq/arrow.svg')
        e.target.parentNode.classList.add('faq__question-active')
    })
})