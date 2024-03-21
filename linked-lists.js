function Node (initValue = null) {
    let value = initValue;
    let next = null;
    return {value, next};
}

function LinkedList () {
    let headNode = null;
    let tailNode = null;

    const head = () => {
        return headNode;
    };

    const tail = () => {
        return tailNode;
    };

    const append = (value) => {
        let newNode = Node(value);
        if (headNode == null && tailNode == null) {
            headNode = newNode;
            tailNode = newNode;
        } else {
            tailNode.next = newNode;
            tailNode = newNode;
        }
    };

    const prepend = (value) => {
        let newNode = Node(value);
        if (headNode == null && tailNode == null) {
            headNode = newNode;
            tailNode = newNode;
        } else {
            newNode.next = headNode;
            headNode = newNode;
        }
    };

    const size = () => {
        let iterNode = headNode;
        let count = 1;
        while (iterNode.next != null) {
            count++;
            iterNode = iterNode.next;
        }
        return count;
    };

    const at = (index) => {
        let iterNode = headNode;
        let count = 0;
        while (count !== index) {
            count++;
            iterNode = iterNode.next;
        }
        return iterNode;
    };

    const pop = () => {
        if (headNode == null && tailNode == null) {
            console.log('no node to pop');
            return;
        } else if (headNode == tailNode) {
            headNode = null;
            tailNode = null;
        } else {
            let prevNode;
            let iterNode = headNode;
            while (iterNode.next != null) {
                prevNode = iterNode;
                iterNode = iterNode.next;
            }
            prevNode.next = null;
            tailNode = prevNode;
            delete iterNode;
        }
    };

    const contains = (value) => {
        let isValuePresent = false;
        if (headNode == null && tailNode == null) {
            console.log('no nodes');
            return isValuePresent;
        } else {
            iterNode = headNode;
            while (iterNode != null) {
                if (iterNode.value == value) {
                    isValuePresent = true;
                    return isValuePresent;
                }
                iterNode = iterNode.next;
            }
            return isValuePresent;
        }
    };

    const find = (value) => {
        let foundIndex = null;
        let count = 0;
        if (headNode == null && tailNode == null) {
            console.log('no nodes to find');
            return foundIndex;
        } else {
            iterNode = headNode;
            while (iterNode != null) {
                if (iterNode.value == value) {
                    foundIndex = count;
                    return foundIndex;
                }
                count++;
                iterNode = iterNode.next;
            }
            return foundIndex;
        }
    };

    const toString = () => {
        let s = '';
        if (headNode == null && tailNode == null) {
            s += 'null';
            return s;
        } else {
            iterNode = headNode;
            while (iterNode != null) {
                s += `( ${iterNode.value} ) -> `;
                iterNode = iterNode.next;
            }
            s += 'null';
        }
        return s;
    };

    const insertAt = (value, index) => {
        if (index == 0) {
            prepend(value);
            return;
        } else if (index >= size() - 1) {
            append(value);
            return;
        } else {
            let newNode = Node(value);
            let prevNode = at(index - 1);
            let nextNode = at(index);
            prevNode.next = newNode;
            newNode.next = nextNode;
            return;
        }
    };

    const removeAt = (index) => {
        if (index == 0) {
            headNode = headNode.next;
        } else if (index >= size() - 1) {
            pop();
        } else {
            let prevNode = at(index - 1);
            let nextNode = at(index + 1);

            prevNode.next = nextNode;
        }
    };

    return {
        head,
        tail,
        append,
        prepend,
        size,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt,
    };

};


console.log('Create linkList variable with LinkedList()...');
let linkList = LinkedList();
console.log(`linkList = ${linkList.toString()}`);
console.log(`head = ${linkList.head()} | tail = ${linkList.tail()}`)

console.log('\n=== Append Testing ===');
console.log('Append 0 to null linked list...');
linkList.append(0);
console.log(`linkList = ${linkList.toString()}`);
console.log(`head = ${linkList.head().value} | tail = ${linkList.tail().value}`)
console.log('Append 1 to linked list...');
linkList.append(1);
console.log(`linkList = ${linkList.toString()}`);
console.log(`head = ${linkList.head().value} | tail = ${linkList.tail().value}`)
console.log('Append 2 to linked list...');
linkList.append(2);
console.log(`linkList = ${linkList.toString()}`);
console.log(`head = ${linkList.head().value} | tail = ${linkList.tail().value}`)

console.log('\n=== Prepend Testing ===');
console.log('Prepend something to linked list...');
linkList.prepend('before 0 #2');
console.log(`linkList = ${linkList.toString()}`);
console.log(`head = ${linkList.head().value} | tail = ${linkList.tail().value}`)
console.log('Prepend another thing to linked list...');
linkList.prepend('before 0 #1');
console.log(`linkList = ${linkList.toString()}`);
console.log(`head = ${linkList.head().value} | tail = ${linkList.tail().value}`)

console.log('\n=== Size Testing ===');
console.log('Check size of linked list so far...');
console.log(`size = ${linkList.size()}`);
console.log(`linkList = ${linkList.toString()}`);
console.log(`head = ${linkList.head().value} | tail = ${linkList.tail().value}`)
console.log('Check size again after appending once and prepending once...');
linkList.prepend('before 0 size check');
linkList.append('after 3 size check');
console.log(`size = ${linkList.size()}`);
console.log(`linkList = ${linkList.toString()}`);
console.log(`head = ${linkList.head().value} | tail = ${linkList.tail().value}`)

console.log('\n=== At Testing ===');
console.log('Check that at() works as expected...');
console.log(`At index 0 is "before 0 size check": ${linkList.at(0).value}`);
console.log(`At index 3 is "0": ${linkList.at(3).value}`);
console.log(`At index 6 is "after 3 size check": ${linkList.at(6).value}`);
console.log(`linkList = ${linkList.toString()}`);
console.log(`head = ${linkList.head().value} | tail = ${linkList.tail().value}`)

console.log('\n=== Pop Testing ===');
console.log('Check popping of last element...');
linkList.pop();
console.log(`linkList = ${linkList.toString()}`);
console.log(`head = ${linkList.head().value} | tail = ${linkList.tail().value}`)
linkList.pop();
console.log(`linkList = ${linkList.toString()}`);
console.log(`head = ${linkList.head().value} | tail = ${linkList.tail().value}`)
linkList.pop();
console.log(`linkList = ${linkList.toString()}`);
console.log(`head = ${linkList.head().value} | tail = ${linkList.tail().value}`)
linkList.pop();
console.log(`linkList = ${linkList.toString()}`);
console.log(`head = ${linkList.head().value} | tail = ${linkList.tail().value}`)

console.log('\n=== Contains Testing ===');
console.log('Check if the linked list contains elements...');
console.log(`linkList = ${linkList.toString()}`);
console.log(`head = ${linkList.head().value} | tail = ${linkList.tail().value}`)
console.log(`Contains "before 0 size check"? ${linkList.contains('before 0 size check')}`)
console.log(`Contains "before 0 #2"? ${linkList.contains('before 0 #2')}`)
console.log(`Contains "2"? ${linkList.contains(2)}`)
console.log(`Contains "null"? ${linkList.contains(null)}`)

console.log('\n=== Find Testing ===');
console.log('Check if the linked list contains elements...');
console.log(`linkList = ${linkList.toString()}`);
console.log(`head = ${linkList.head().value} | tail = ${linkList.tail().value}`)
console.log(`Find index of "before 0 size check": ${linkList.find('before 0 size check')}`)
console.log(`Find index of "before 0 #2"" ${linkList.find('before 0 #2')}`)
console.log(`Find index of "2": ${linkList.find(2)}`)
console.log(`Find index of "null": ${linkList.find(null)}`)

console.log('\n=== InsertAt Testing ===');
console.log('Insert at index 0...');
linkList.insertAt('now im the first one', 0);
console.log(`linkList = ${linkList.toString()}`);
console.log(`head = ${linkList.head().value} | tail = ${linkList.tail().value}`)
console.log('Insert at index 100 (much greater than size)...');
linkList.insertAt('now im the very last one', 100);
console.log(`linkList = ${linkList.toString()}`);
console.log(`head = ${linkList.head().value} | tail = ${linkList.tail().value}`)
console.log('Insert at index 4 (size - 1)...');
console.log(`size = ${linkList.size()}`);
linkList.insertAt('i was inserted at size - 1', 4);
console.log(`linkList = ${linkList.toString()}`);
console.log(`head = ${linkList.head().value} | tail = ${linkList.tail().value}`)
console.log('Insert somewhere between...');
linkList.insertAt('between #1 and #2', 3);
console.log(`linkList = ${linkList.toString()}`);
console.log(`head = ${linkList.head().value} | tail = ${linkList.tail().value}`)

console.log('\n=== RemoveAt Testing ===');
console.log(`linkList = ${linkList.toString()}`);
console.log(`head = ${linkList.head().value} | tail = ${linkList.tail().value}`)
console.log('Remove at index 0...');
linkList.removeAt(0);
console.log(`linkList = ${linkList.toString()}`);
console.log(`head = ${linkList.head().value} | tail = ${linkList.tail().value}`)
console.log('Remove at index 100 (much greater than size)...');
linkList.removeAt(100);
console.log(`linkList = ${linkList.toString()}`);
console.log(`head = ${linkList.head().value} | tail = ${linkList.tail().value}`)
console.log('Remove at index 4 (size - 1)...');
linkList.removeAt(4);
console.log(`linkList = ${linkList.toString()}`);
console.log(`head = ${linkList.head().value} | tail = ${linkList.tail().value}`)
console.log('Remove the "between" node...');
linkList.removeAt(2);
console.log(`linkList = ${linkList.toString()}`);
console.log(`head = ${linkList.head().value} | tail = ${linkList.tail().value}`)