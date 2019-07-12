
function sets(){
    // let collection will hold the set
    let collection = [];

    // method to check for the presence of an element and return a boolean
    this.has = function() {
        return (collection.indexOf(element) !== -1);
    };
} 