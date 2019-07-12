

function Queue() {
    let collection = [];
    // all items in the queue
    this.print = function(){
        console.log(collection);
    };
    this.enque = function(element){
         collection.push(element);
    };
    // remove an item from the queue
    this.denque = function(){
        return collection.shift();
    };
    // getting first element on the queue
    this.front = function(){
        return collection[0];
    };
    // getting length of the queue
    this.size = function(){
        return collection.length;
    }
    // getting errors in queue
    this.isEmpty = function(){
        return (collection.length === 0)

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
