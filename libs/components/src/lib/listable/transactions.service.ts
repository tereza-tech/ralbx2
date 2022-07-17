import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Transaction } from './transaction';

@Injectable()
export class TransactionService {

    status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

    transactionNames: string[] = [
        "Bamboo Watch",
        "Black Watch",
        "Blue Band",
        "Blue T-Shirt",
        "Bracelet",
        "Brown Purse",
        "Chakra Bracelet",
        "Galaxy Earrings",
        "Game Controller",
        "Gaming Set",
        "Gold Phone Case",
        "Green Earbuds",
        "Green T-Shirt",
        "Grey T-Shirt",
        "Headphones",
        "Light Green T-Shirt",
        "Lime Band",
        "Mini Speakers",
        "Painted Phone Case",
        "Pink Band",
        "Pink Purse",
        "Purple Band",
        "Purple Gemstone Necklace",
        "Purple T-Shirt",
        "Shoes",
        "Sneakers",
        "Teal T-Shirt",
        "Yellow Earbuds",
        "Yoga Mat",
        "Yoga Set",
    ];

    constructor(private http: HttpClient) { }

    getTransactionsSmall() {
        return this.http.get<any>('assets/transactions-small.json')
            .toPromise()
            .then(res => <Transaction[]>res.data)
            .then(data => { return data; });
    }

    getTransactions() {
        return this.http.get<any>('assets/transactions.json')
            .toPromise()
            .then(res => <Transaction[]>res.data)
            .then(data => { return data; });
    }

    getTransactionsWithOrdersSmall() {
        return this.http.get<any>('assets/transactions-orders-small.json')
            .toPromise()
            .then(res => <Transaction[]>res.data)
            .then(data => { return data; });
    }

    generatePrduct(): Transaction {
        const transaction: Transaction = {
            id: this.generateId(),
            name: this.generateName(),
            description: "Transaction Description",
            price: this.generatePrice(),
            quantity: this.generateQuantity(),
            category: "Transaction Category",
            inventoryStatus: this.generateStatus(),
            rating: this.generateRating()
        };

        transaction.image = transaction.name.toLocaleLowerCase().split(/[ ,]+/).join('-') + ".jpg";;
        return transaction;
    }

    generateId() {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }

    generateName() {
        return this.transactionNames[Math.floor(Math.random() * Math.floor(30))];
    }

    generatePrice() {
        return Math.floor(Math.random() * Math.floor(299) + 1);
    }

    generateQuantity() {
        return Math.floor(Math.random() * Math.floor(75) + 1);
    }

    generateStatus() {
        return this.status[Math.floor(Math.random() * Math.floor(3))];
    }

    generateRating() {
        return Math.floor(Math.random() * Math.floor(5) + 1);
    }
}