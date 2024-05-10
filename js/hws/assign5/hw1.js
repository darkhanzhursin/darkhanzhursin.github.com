// task 1

class Node {
  constructor(data) {
    this.element = data;
    this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    let node = new Node(element);
    let current;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  remove(element) {
    let prev = null;
    let current = this.head;

    while (current != null) {
      if (current.element === element) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.element;
      }
      prev = current;
      current = current.next;
    }
    return -1;
  }

  print() {
    let curr = this.head;
    let list = [];
    let str = "";
    while (curr) {
      list.push(curr.element);
      curr = curr.next;
    }
    str = list.join(",");
    console.log("LinkedList{" + str + "}");
  }
}

let linkedList = new MyLinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.print();
linkedList.remove(3);
linkedList.print();
