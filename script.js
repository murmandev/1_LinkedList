class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    remove(value) {
        if (!this.head) {
            return;
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    display() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        return result.join(' -> ');
    }
}

const list = new LinkedList();

function addNode() {
    const value = document.getElementById('valueInput').value;
    if (value) {
        list.add(value);
        document.getElementById('valueInput').value = '';
        displayList();
    }
}

function removeNode() {
    const value = document.getElementById('valueInput').value;
    if (value) {
        list.remove(value);
        document.getElementById('valueInput').value = '';
        displayList();
    }
}

function displayList() {
    const listDisplay = document.getElementById('listDisplay');
    listDisplay.textContent = list.display();
}