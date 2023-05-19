class linkedList {
    // Create constructor for the array that will hold the linkedList.
    constructor(list = []) {
        this.list = list
    }

    append(value) {
        // Create new node and add it to end of the list. 
        let listItem = new nodeItem(value)
        this.list.push(listItem)

        // If the node is the first item set the prop of head to true.
        // If the node is not index of 0 and is the last item in the array set tail prop to true. 
        if (this.list.indexOf(listItem) == 0) {
            listItem.head = true

        // If the listItem is the last item in the array and is not the only item, set tail prop to true.
        } else if (this.list.indexOf(listItem) == this.list[this.list.length - 1] && this.list.indexOf(this.list) !== 0) {
            listItem.tail = true
        }
        // If the node not the first item, add pointer to previous item to complete the link. 
        if (this.list.indexOf(listItem) !== 0) {
            let previousNode = this.list.indexOf(listItem) - 1
            previousNode.nextNode = listItem
        }

    }

    prepend(value) {
        // Create a new node and add it to the start of the list.
        let listItem = new nodeItem(value)
        this.list.unshift(listItem)

        // Find the next item if there is one, and add it as the nextNode property value.
        if(this.list[this.list.indexOf(listItem) + 1] !== undefined) {
            listItem.nextNode = this.list[this.list.indexOf(listItem) + 1]
        }
    }
    // Create a method that provides the length of the linkedList.
    size() {
        return this.list.length
    }
    // Create a method that returns the head (first element) of the linked list.
    head() {
        return this.list[0]
    }
    // Create a method that returns the tail of the linkedList.
    tail() {
        return this.list[this.list.length - 1]
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

