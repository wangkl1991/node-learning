class LinkedList{
    constructor(){
        this.head = new Node('head');
    }
    find(item) {
        var currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;

    }
    findLast() {
        var currNode = this.head;
        while (!(currNode.next == null)) {
            currNode = currNode.next;
        }
        return currNode;
    }
}

class Node{
    constructor(element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }
}