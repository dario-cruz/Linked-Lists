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
            let previousNodeIndex = this.list.indexOf(listItem)
            this.list[previousNodeIndex - 1].nextNode = listItem
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
    // Create method that returns node at given index.
    at(index) {
        return this.list[index]
    }
    // Create a method that removed the last item from the list.
    pop() {
        // Remove the last item in the linkedList array.
        this.list.pop()
        // Find the last value in the list.
        // Set value to null as it is end of linkedList.
        this.list[this.list.length - 1].nextNode = null
        this.list[this.list.length - 1].tail = true
    }
    // Create a method that searched for a node in the linkedList via it's value
    contains(value) {
        let condition = false
        let objItem = this.list.find(obj => obj.value === value)
        if(objItem !== undefined) {
            condition = true
        }
        return condition
    }
    // Create a method that returns the index of a node that contains a specific value.
    find(value) {
        let foundNode = this.list.find(element => element.value == value)
        return this.list.indexOf(foundNode)
    }
    // Create a method that takes the linked list and represents it as a string. 
    toString() {
        let theString = '('
        this.list.forEach(item => {
            if (item.nextNode !== null) {
                theString += ` ${item.value} ) -> (`
            } else {
                theString += ` ${item.value} ) -> ( NULL )`
            }
        })
        return theString
    }

    // Create a method that inserts an item into the linked list at the given index.
    insertAt(value, index) {
        let newListItem = new nodeItem(value)
        
        // Update the item that comes before the inserted node
        let previousItem = this.list[index - 1]
        previousItem.nextNode = newListItem
        
        // If inserted node is not the last in the list update newListItem with nextNode.
        if (this.list[index + 1] !== undefined) {
            let nextItem = this.list[index + 1]
            newListItem.nextNode = nextItem   
        }
        // Insert the new node into the array. 
        this.list.splice(index, 0, newListItem)
    }
    
    // Create a node will remove the item at the given index and update linkedList
    removeAt(index) {
        // Remove node at a given index
        this.list.splice(index, 1)

        // Update linkedList items to reflect changes.
        if(this.list[index + 1] !== undefined) {
            this.list[index].nextItem = this.list[index + 1]
        }
        this.list[index - 1].nextItem = this.list[index]
    }
}



// Make use of the created classes to make a linked list and test all functions. 

let testLinkedList = new linkedList

testLinkedList.append('Apple')
testLinkedList.append('Banana')
testLinkedList.append('Oranges')
testLinkedList.append('Pineapple')
testLinkedList.append('Kiwi')
testLinkedList.append('Plum')
testLinkedList.append('Peach')

// Test creation of list.
// console.log(testLinkedList)

// Test size method
// console.log(testLinkedList.size())

// Test head and tail methods
// console.log(testLinkedList.head())
// console.log(testLinkedList.tail())

// Test at method
// console.log(testLinkedList.at(3))

// Test pop method functionality.
// testLinkedList.pop()
// console.log(testLinkedList)

// Test contains method, should return true or false
// console.log(testLinkedList.contains('Kiwi'))

// Test find method, should return the index of the nodeItem if it exists.
// console.log(testLinkedList.find('Kiwi'))

// Test, to string method, should return a visual of the linkedList. 
// console.log(testLinkedList.toString())

// Test insertAt method, should insert new node in location and update links respectively. 
// testLinkedList.insertAt('Dragon Fruit', 3)
// console.log(testLinkedList)
// console.log(testLinkedList.toString())

// Test removeAt method, should remove node at specific location and update links respectively. 
// testLinkedList.removeAt(1)
// console.log(testLinkedList)
// console.log(testLinkedList.toString())