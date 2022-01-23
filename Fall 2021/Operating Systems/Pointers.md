# Pointers

* ```Node * cell = new Node();```
	* cell now stores the address of a block of memory allocated by the new operation.
	* (for this, node is an object with `int data`)
* ```(*celll ).data=900;``` is exactly the same as ```cell->data=900;```
	* This puts the value 900 into the block of data cell points at
* ![[Pasted image 20210910084304.png]]
* 