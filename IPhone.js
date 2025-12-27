import { AppleDevice } from "./Apple-device.js"
class Iphone extends AppleDevice {

    constructor(model, functions, price, warranty) {
        super(model, price, warranty)
        this.functions = functions
    }

    showDeviceInfo() {
        console.log(`${this.model} имеет такие функции как ${this.functions} и будет стоить ${this.price} рублей и гарантия на него ${this.warranty}`)
    }
    
}

const PresentIphone1 = new Iphone('Iphone 11', 'Face ID, True Tone, Широкоугольная камера', 25000, '12 месяцев');
const PresentIphone2 = new Iphone('Iphone 16 Pro Max', 'Быстрая зарядка, Dynamic Island', 85000, '24 месяцев');
PresentIphone1.showDeviceInfo();
PresentIphone2.showDeviceInfo();
