class linkedList {
    // Create constructor for the array that will hold the linkedList.
    constructor(list = []) {
        this.list = list
    }
    append(value) {
        // Create new node and add it to the list. 
        let listItem = new nodeItem(value)
        this.list.push(listItem)

        // If the node is the first item set the prop of head to true.
        // If the node is not index of 0 and is the last item in the array set tail prop to true. 
        if (this.list.indexOf(listItem) == 0) {
            listItem.head = true
        } else if (this.list.indexOf(listItem) == this.list[this.list.length - 1] && this.list.indexOf(this.list) !== 0) {
            listItem.tail = true
        }
        // If the node not the first item, add pointer to previous item to complete the link. 
        if (this.list.indexOf(listItem) !== 0) {
            let previousNode = this.list.indexOf(listItem) - 1
            previousNode.nextNode = listItem
        }
        
    }
}


// Create a node class that contains a param for a value and the
// next node in the link. 
class nodeItem {
    constructor(value = null, nextNode = null) {
        this.value = value
        this.nextNode = nextNode
        this.head = false
        this.tail = false
    }
}

