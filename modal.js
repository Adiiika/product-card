export class Modal {
    constructor(modalId) {
        this.modalId = document.getElementById(modalId);
        this.modalOverlay = document.getElementById('overlay');
    }

    open() {
        this.modalId.classList.add('modal-content--open');
        this.modalOverlay.classList.add('modal-overlay--open');
    }

    close() {
        this.modalId.classList.remove('modal-content--open');
        this.modalOverlay.classList.remove('modal-overlay--open');
    }

    checkIsOpenModal() {
        return this.modalId.classList.contains('modal-content--open');
    }
}   