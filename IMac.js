import { AppleDevice } from "./Apple-device.js";

class IMac extends AppleDevice {
    constructor(model, storage, price, warranty) {
        super(model, price, warranty);
        this.storage = storage;
    }

    presentDevice() {
        console.log(`Этот ${this.model} с памятью ${this.storage} будет стоить ${this.price} и гарантия на него ${this.warranty}`)
    }
}

const IMac1 = new IMac('Macbook air m2', '256 гб и 8 гб ОЗУ', 65000, '12 месяцев');
const IMac2 = new IMac('Macbook m4 pro', '1 тб и 32 гб ОЗУ', 124000, '18 месяцев');
IMac1.presentDevice();
IMac2.presentDevice();