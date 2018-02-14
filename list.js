class list {
    constructor() {
        this.listSize = 0;
        this.dataStore = [];
        this.pos = 0;
    }

    // add one element to list, the postion is the end
    append(element) {
            this.dataStore[this.listSize++] = element;
    }

    //find element return position
    find(element) {
        for (let i = 0; i < this.dataStore.length; i++) {
            if(this.dataStore[i] == element) {
                return i;
            }
        }

        return -1;

    }

    //remove element boolean
    remove(element) {
        let foundAt = this.find(element);
        if(foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            this.listSize = this.listSize -1;
            return true
        }
        return false;
    }

    //return length
    length() {
        return this.listSize;
    }    

    //move to first element
    front() {
        this.pos = 0;
    }

    //insert element after a element 
    insert(element, after) {
        
    }

}

var family = new list()
family.append('father');
family.append('mom');
family.append('son');
console.log(family);