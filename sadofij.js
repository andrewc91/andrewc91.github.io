function LinkedList(){
  this.head = null;
}

function Node(val){
  this.value = val;
  this.next = null;
}

LinkedList.prototype.addFront = function(val)
{
  var node = {
    value: val,
    next: this.head
  }
  this.head = node;
}

LinkedList.prototype.reverse = function(){
  if (!this.head){
    return null;
  }

  var previous = null;
  var runner = this.head;
  var hold;

  while (runner){
    hold = runner.next;
    runner.next = previous;
    previous = runner;
    runner = hold;
  }
  this.head = previous;
}

var LL = new LinkedList();
LL.addFront(5);
LL.addFront(1);
LL.addFront(2);
console.log(LL.head);
LL.reverse();
console.log(LL.head);
