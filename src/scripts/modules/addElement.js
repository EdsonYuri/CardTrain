export default function addElement(conteinerSelector, element) {
    const parentConteiner = document.querySelector(conteinerSelector)
    parentConteiner.appendChild(element)
}
