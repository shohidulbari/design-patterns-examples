class Collection {
  constructor() {
    this.items = [];
  }

  add(item) {
    this.items.push(item);
  }

  iterator() {
    return new Iterator(this);
  }
}

class Iterator {
  constructor(collection) {
    this.collection = collection;
    this.index = 0;
  }

  next() {
    if (this.index < this.collection.items.length) {
      return this.collection.items[this.index++];
    }
    return null;
  }

  hasNext() {
    return this.index < this.collection.items.length;
  }
}

// Client code
const collection = new Collection();
collection.add("Item 1");
collection.add("Item 2");
collection.add("Item 3");

const iterator = collection.iterator();
while (iterator.hasNext()) {
  console.log(iterator.next());
}
// Output:
// Item 1
// Item 2
// Item 3