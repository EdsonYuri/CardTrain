const STORAGE_KEY = 'collections'

const recoverCollection = () => JSON.parse(localStorage.getItem(STORAGE_KEY)) || []

const registerCollection = (collectionItens) => {
    const collection = recoverCollection()

    collection.push(collectionItens)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(collection))
}

export { recoverCollection, registerCollection }
