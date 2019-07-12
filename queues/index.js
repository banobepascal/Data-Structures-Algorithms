
class Queue {
    constructor() {
        let collection = [];
        // all items in the queue
        this.print = function () {
            console.log(collection);
        };
        this.enque = function (element) {
            collection.push(element);
        };
        // remove an item from the queue
        this.denque = function () {
            return collection.shift();
        };
        // getting first element on the queue
        this.front = function () {
            return collection[0];
        };
        // getting length of the queue
        this.size = function () {
            return collection.length;
        };
        // getting errors in queue
        this.isEmpty = function () {
            return (collection.length === 0);
        };
    }
}

const q = new Queue();
q.enque('a');
q.enque('b');
q.enque('c');
q.enque('d');
q.denque();
q.print();
console.log(q.size());
console.log(q.front());



// Adding a Priority object
class Priorityqueue {
    constructor() {
        let collection = [];
        // all items in the queue
        this.print = function () {
            console.log(collection);
        };
        this.enque = function (element) {
            if (this.isEmpty()) {
                collection.push(element);
            }
            else {
                let added = false;
                for (let i = 0; i < collection.length; i++) {
                    if (element[1] < collection[i][1]) {
                        collection.splice(i, 0, element);
                        added = true;
                        break;
                    }
                }
                if (!added) {
                    collection.push(element);
                }
            }
        };
        // remove an item from the queue
        this.denque = function () {
            let value = collection.shift();
            return value[0];
        };
        // getting first element on the queue
        this.front = function () {
            return collection[0];
        };
        // getting length of the queue
        this.size = function () {
            return collection.length;
        };
        // getting errors in queue
        this.isEmpty = function () {
            return (collection.length === 0);
        };
    }
}

const pq = new Priorityqueue();
pq.enque(['Pascal', 4])
pq.enque(['Tonny', 2])
pq.enque(['Neymar', 1])
pq.enque(['Messi', 3])
pq.print();
console.log(pq.size());