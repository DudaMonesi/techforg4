class Order {
    private items: { name: string, price: number }[] = [];
    private totalPrice: number = 0;
    private paymentStatus: string = 'Pending';
    private shippingStatus: string = 'Not Shipped';

    addItem(item: { name: string, price: number }): void {
        this.items.push(item);
        this.calculateTotalPrice();
    }

    private calculateTotalPrice(): void {
        this.totalPrice = this.items.reduce((total, item) => total + item.price, 0);
    }

    processPayment(): void {
        
        this.paymentStatus = 'Paid';


    updateShippingStatus(status: string): void {
        this.shippingStatus = status;
    }

    getOrderDetails(): object {
        return {
            items: this.items,
            totalPrice: this.totalPrice,
            paymentStatus: this.paymentStatus,
            shippingStatus: this.shippingStatus
        };
    }
}


//
class Cart {
    private items: { name: string, price: number }[] = [];

    addItem(item: { name: string, price: number }): void {
        this.items.push(item);
    }

    calculateTotalPrice(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    getItems(): { name: string, price: number }[] {
        return this.items;
    }
}

class Payment {
    private status: string = 'Pending';

    processPayment(): void {
        
        this.status = 'Paid';
    }

    getStatus(): string {
        return this.status;
    }
}

class Shipping {
    private status: string = 'Not Shipped';

    updateStatus(status: string): void {
        this.status = status;
    }

    getStatus(): string {
        return this.status;
    }
}

class Order {
    private cart: Cart;
    private paymnt: Payment;
    private shipping: Shipping;

    constructor() {
        this.cart = new Cart();
        this.payment = new Payment();
        this.shipping = new Shipping();
    }

    addItem(item: { name: string, price: number }): void {
        this.cart.addItem(item);
    }

    processPayment(): void {
        this.payment.processPayment();
    }

    updateShippingStatus(status: string): void {
        this.shipping.updateStatus(status);
    }

    getOrderDetails(): object {
        return {
            items: this.cart.getItems(),
            totalPrice: this.cart.calculateTotalPrice(),
            paymentStatus: this.payment.getStatus(),
            shippingSttus: this.shipping.getStatus()
        };
    }
}



/////atividade 2

class UserManager {
    private users: { name: string, email: string }[] = [];

    createUser (name: string, email: string): void {
        this.users.push({ name, email });
        this.sendNotification(email);
    }

    private sendNotification(email: string): void {
        console.log(`Notification sent to ${email}`);
    }
}

//

class EmailNotification {
    send(email: string): void {
        console.log(`Notification sent to ${email}`);
    }
}

class UserManager {
    private users: { name: string, email: string }[] = [];
    private emailNotification: EmailNotification;

    constructor(emailNotification: EmailNotification) {
        this.emailNotification = emailNotification;
    }

    createUser (name: string, email: string): void {
        this.users.push({ name, email });
        this.emailNotification.send(email);
    }
}


/////atividade 3

class EmailSender {
    sendEmail(email: string, message: string): void {
        if (this.validateEmail(email)) {
            console.log(`Email sent to ${email}: ${message}`);
        } else {
            console.log(`Invalid email: ${email}`);
        }
    }

    private validateEmail(email: string): boolean {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
}

//

