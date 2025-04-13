export default function toggleModals(buttonSelected, modalSelected) {
    buttonSelected.forEach(btn => {
        btn.addEventListener('click', () => {
            modalSelected.hasAttribute('open') ? modalSelected.close() : modalSelected.showModal()
        })
    })
}
