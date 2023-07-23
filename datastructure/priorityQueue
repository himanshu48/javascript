function PriorityQueue(){
	let items = [];
    
	return {
		enQueue: function(element, priority){
            let qElement = { element, priority }
            let contain = false;
    
            for (let i = 0; i < items.length; i++) {
                if (items[i].priority > qElement.priority) {
                    items.splice(i, 0, qElement);
                    contain = true;
                    break;
                }
            }
    
            if (!contain) {
                items.push(qElement);
            }
        },
        dequeue: function() {
            if (this.isEmpty())
                return "Underflow";
            return items.shift();
        },
    
        front: function() {
            if (this.isEmpty())
                return "No elements in Queue";
            return items[0];
        },
    
        rear: function() {
            if (this.isEmpty())
                return "No elements in Queue";
            return items[items.length - 1];
        },
    
        isEmpty: function() {
            return items.length == 0;
        },
    
        printPQueue: function() {
            let str = "";
            for (let i = 0; i < items.length; i++)
                str += items[i].element + " ";
            return str;
        }
	}
}

let pq = PriorityQueue();
pq.enQueue(3,.5)
pq.enQueue(2,.6)
pq.enQueue(4,.7)
pq.enQueue(5,.4)
console.log(pq.printPQueue());
console.log(pq.dequeue());
console.log(pq.dequeue());

// 5 3 2 4 
// { element: 5, priority: 0.4 }
// { element: 3, priority: 0.5 }
