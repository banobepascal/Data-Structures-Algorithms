
function mySet(){
    // let collection will hold the set
    let collection = [];

    // method to check for the presence of an element and return a boolean
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
} 