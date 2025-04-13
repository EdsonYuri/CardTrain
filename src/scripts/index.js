import { recoverCollection, registerCollection } from "./modules/collectionManager.js"
import toggleModals from "./modules/toggleModals.js"

const toggleAddCollectionModal = document.querySelectorAll('.toggle-addCollectionModal')
const addCollectionModal = document.querySelector('#addCollectionModal')
const addCollectionForm = document.querySelector('#addCollectionForm')

toggleModals(toggleAddCollectionModal, addCollectionModal)

addCollectionForm.addEventListener('submit', e => {
    e.preventDefault()

    const title = document.querySelector('#title').value
    const description = document.querySelector('#description').value

    registerCollection({ title, description, cards: [] })
})

