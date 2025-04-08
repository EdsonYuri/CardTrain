import { recoverCollection, registerCollection } from "./modules/collectionManager.js"

const addCollectionForm = document.querySelector('#addCollectionForm')

addCollectionForm.addEventListener('submit', e => {
    e.preventDefault()

    const title = document.querySelector('#title').value
    const description = document.querySelector('#description').value

    registerCollection({title, description, cards: []})

})
