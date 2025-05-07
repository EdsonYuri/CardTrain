import { recoverCollection, registerCollection } from "./modules/collectionManager.js"
import toggleModals from "./modules/toggleModals.js"
import addElement from "./modules/addElement.js"

const toggleAddCollectionModal = document.querySelectorAll('.toggle-addCollectionModal')
const addCollectionModal = document.querySelector('#addCollectionModal')
const addCollectionForm = document.querySelector('#addCollectionForm')

window.onload = () => {
    createsCollectionItems()
}

toggleModals(toggleAddCollectionModal, addCollectionModal)

addCollectionForm.addEventListener('submit', e => {
    e.preventDefault()

    const collectionCardInputs = document.querySelectorAll('.addCards__addCardsInput')

    const title = document.querySelector('#title').value
    const description = document.querySelector('#description').value
    const id = `data-id=${crypto.randomUUID()}`

    const cards = Array.from(collectionCardInputs).map(item => {
        const cardInputs = item.querySelectorAll('input')
        return {
            question: cardInputs[0]?.value.trim(),
            response: cardInputs[1]?.value.trim()
        }
    }).filter(card => card.question && card.response)

    registerCollection({ title, description, cards, id })
    createsCollectionItems()
    
    addCollectionForm.reset()
})

const createsCollectionItems = () => {
    const collectionItens = recoverCollection()
    
    collectionItens.forEach(item => {
        const collectionExistent = document.getElementById(item.id)
        if(collectionExistent) return;

        const collectionItemElement = document.createElement('div')
        collectionItemElement.className = 'main_collectionItem'
        collectionItemElement.id = item.id

        const titleCollection = document.createElement('h3')
        titleCollection.textContent = item.title
        const descriptionCollection = document.createElement('p')
        descriptionCollection.textContent = item.description

        collectionItemElement.appendChild(titleCollection)
        collectionItemElement.appendChild(descriptionCollection)

        addElement('main', collectionItemElement)
    });
}
