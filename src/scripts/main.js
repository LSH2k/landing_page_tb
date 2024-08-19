document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]')

    const heroSection = document.querySelector('.hero')
    const alturaHero = heroSection.clientHeight

    window.addEventListener('scroll', function () {
        const posicaoAtual = window.scrollY

        if (posicaoAtual < alturaHero) {
            ocultaHeader()
        } else {
            exibeHeader()
        }
    })

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeAbas()
            aba.classList.add('characters__list--is-active')
            removeBotaoAtivo()
            botao.target.classList.add('characters__tabs__button--is-active')
        })
    }
})

function ocultaHeader() {
    const header = document.querySelector('header')
    header.classList.add('header--is-hidden')
}

function exibeHeader() {
    const header = document.querySelector('header')
    header.classList.remove('header--is-hidden')
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('characters__tabs__button--is-active')
    }
}

function escondeAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('characters__list--is-active')
    }
}