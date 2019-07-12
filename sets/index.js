
function mySet(){
    // let collection will hold the set
    let collection = [];

    // method to check for the presence of an element and return a boolean
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // method to return the values in a collection
    this.values = function(){
        return collection;
    };
    // method to add an element to the set
    this.add = function(element){
        if (!this.has(element)){
            collection.push(element);
            return true;
        } 
        return false;
    };
    // method to remove element from set
    this.remove = function(element){
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
            
        } 
        return false;  
    }
    // method to return size of the collection
    this.size = function(){
        return collection.length;
    }
} 