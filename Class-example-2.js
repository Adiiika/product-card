class AppleDevice {
    constructor (model, price, warranty) {
        this.model = model;
        this.price = price;
        this.warranty = warranty;
    }
    presentDevice() {
        console.log(`${this.model} стоит ${this.price} рублей и гарантия на него ${this.warranty}`)
    }
}
class Iphone extends AppleDevice {
    constructor(model, functions, price, warranty) {
        super(model, price, warranty)
        this.functions = functions
    }
    showDeviceInfo() {
        console.log(`${this.model} имеет такие функции как ${this.functions} и будет стоить ${this.price} рублей и гарантия на него ${this.warranty}`)
    }
}

const AppleDevice1 = new AppleDevice('Airpods pro 2', 15000, '12 месяцев');
const AppleDevice2 = new AppleDevice('Ipad m2 mini', 34000, '24 месяцев');
AppleDevice1.presentDevice();
AppleDevice2.presentDevice();

const PresentIphone1 = new Iphone('Iphone 11', 'Face ID, True Tone, Широкоугольная камера', 25000, '12 месяцев')
const PresentIphone2 = new Iphone('Iphone 16 Pro Max', 'Быстрая зарядка, Dynamic Island', 85000, '24 месяцев')
PresentIphone1.showDeviceInfo();
PresentIphone2.showDeviceInfo();

