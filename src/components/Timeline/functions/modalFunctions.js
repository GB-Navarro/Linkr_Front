export function openModal(setIsOpen) {
    setIsOpen(true);
}

export function afterOpenModal(subtitle) {
    subtitle.style.color = '#f00';
}

export function closeModal(setIsOpen) {
    setIsOpen(false);
}

  