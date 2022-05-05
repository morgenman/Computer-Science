---
updated: 2022-05-05_10:07:54-04:00
---
# Binary Tree
## Basics
* Root
	* two subtrees per each node
	* edge connects them
* If there is a sequence of nodes n1...nk such that ni is parent of ni+1, it is a **path** from ni to nk
* length of path:k-1
* depth is length of the path from root to the node
* level is depth
* height is depth+1
* leaf has 2 empty children
	* each node is structured so it has data and two pointers L&R, 
* Internal nodes have one non-empty child

## Types of Trees
* Oak 🤣
* Full Binary Tree
	* each node is either (an internal node with exactly two non empty children) or (a leaf)
* Complete binary tree
	* shape is restricted and obtained by starting at the root and filling the tree levels from left to right
	
## Analysis
* Ratio of internal nodes to leaf nodes?
	* Upper bound will occur when each internal node has 2 non-empty children
	* This doesn't tell us what shape of tree will give the highest percentage of non-empty leaves
	* *all full binary trees with n internal nodes have the same number of leaves*
	* we can use this to compute space requirements
	
## Full Binary Tree Theorem

***MIDTERM***

* The number of leaves in a non-empty full binary tree is one more than the number of internal nodes

> TBP The number of leaves in a FBT is one more than the number of internal nodes
> Proof: By induction, the number of internal nodes
> Basis:  0 internal nodes 1 leaf node $\checkmark$
> 1 internal node, 2 leaf nodes $\checkmark$
> Inductive Hypothesis: Assume and FBT, T containing k+1 internal nodes has k leaf nodes for some k $\geq$ 1
> Inductive Step: We must show  that the theorem holds for $\mathbb{k}$+1->(k-1)+1
> a) Tree T has (k-1)+1 = k internal nodes, by the IH
> See tree T: Select internal node i whose children are leaves
> b) remove i's children. i is now a leaf node. 
> See Tree T' : T' has k-1 internal nodes so it has k leave by IH
> c) Restore I's children. 
> We again have tree T with k internal nodes
> How many leaves in T
> T' had K leaves
> Restoring to T gives k+2
> BUT 
> i was counted as a leave in T' and in T is an internal node. 
> $\therefore$ the number of leaves in T is k+2-1 = k+1
> $\therefore$ Tree T has k internal nodes and k+1 leaf nodes
> $\therefore$  Theorem is true by PMI for n $\geq$ 0 


```nomnoml
#direction:down
[0]
```
```nomnoml
#direction:down
[0]-[1]
[0]-[2]
```

```nomnoml
#direction:down
Tree T
[0]-[1]
[0]-[2]
[1]-[3]
[1]-[i]
[i]-[5]
[i]-[6]
```

```nomnoml
#direction:down
Tree T'
[0]-[1]
[0]-[2]
[1]-[3]
[1]-[i]
```

If you take an arbitrary binary tree T, replace every empty subtree with a leaf

**The number of empty subtrees in T is one more than the number of nodes in T.**

---

Every node in a binary tree has 2 children for a total of 2n children in a tree of n nodes
Every node by the root has one parent for a total of n-1 nodes with parents. 
There are n-1 non-empty children. 
2n total children, so n+1 children are empty

```java
public interface BinNode<E>{
	// return and set element value
	public E element();
	public void setElement(E v);

	// return the left child
	public BinNode<E> left();

	// return the right child
	public BinNode<E> right();

	// return true if is leaf
	public boolean isLeaf();
}
```

Traversal: process for visiting all nodes in some order.
Three types we will cover:
* **Pre order**: left side (root left right starting at root)
* **In order**: bottom  (left to right on a tree ignoring level)
* **Post order**: right side (left right root starting at leftmost leaf)
![[Pasted image 20220411192548.png]]
Trace a path around the tree. As you pass a node on the proper side, process it

```java
void preorder (BinNode rt){
	if (rt == null) return; // empty subtree
	visit(rt);
	preorder(rt.left());
	preorder(rt.right());
}
void preorder2(BinNode rt){
	visit(rt); // if root is null, we might have a problem
	if (rt.left() != null) preorder2(rt.left());
	if (rt.right() != null) preorder2(rt.right());
}

void inorder (BinNode rt){
	if (rt == null) return; // empty subtree
	inorder(rt.left());
	visit(rt);
	inorder(rt.right());
}

void postorder (BinNode rt){
	if (rt == null) return; // empty subtree
	postorder(rt.left());
	postorder(rt.right());
	visit(rt);
}
int count (BinNode rt){
	if (rt == null) return 0; // empty subtree
	int n = 1;
	n += count(rt.left());
	n += count(rt.right());
	return n;
}
boolean checkBST (BinNode<integer> rt, int low, int high){
	if (rt == null) return true;
	int rootKey = rt.element();
	if (rt.element() < low || rt.element() > high) return false;
	if (!checkBST(rt.left(), low, rt.element())) return false;
	return checkBST(rt.right(), rootKey, high);
}
```

## Overhead fraction/ratio:
* Space requirements (simple pointer based implementation):
	* n(2P+D)
	* n = number of nodes
	* P = size of pointer
	* D = size of data
* Total overhead space for entire tree: 2Pn
* Total overhead fraction = $\frac{2Pn}{n(2P+D)}=\frac{2P}{2P+D}$
	* if P=D, a full tree has about 2/3 of it's total storage taken up in overhead! 
	* AND 1/2 of the pointers are NULL (theorem 5.2)

* What if we remove pointers on leaf nodes
	* half of nodes are leaf nodes, so that gives us n/2 pointers
	* $\frac{P}{P+D}$
* What if we we have internal nodes with pointers but no data, and leaf nodes with no pointers?
	* 2Pn+D(n+1) units of space
	* overhead is about $\frac{2P}{2P+D}=\frac{2}{3}$

EG: 
all nodes store:
*  data  (4B)
* parent pointer (4B)
* 2 child pointers (4B each)

Overhead ratio is $\frac{Ptrs}{Data}=\frac{3(4B)}{3(4B)+4B}=\frac{12B}{16B}=\frac{3}{4}$

If you can fully fill it up, an array is most efficient. 
We can use an array to store the tree, since the shape of the tree is static. 



## Binary Search Tree
* Way of storing a collection of elements so that inserting and searching for records can be done quickly?
* unsorted list is quick insertion, searching is $\Theta$(n) average case
* sorted list
	* no speed up in searching ll
	* array based list: use binary search, so search becomes $\Theta$(n)
* For every node in the tree
	* left node has key value less than node
	* right node has greater or equal to node
* In-order traversal prints them in order

* Node can be implemented with separate key value and data element as in the books code
* Finding a record with key value K in BST:
	* begin at root
	* if root stores record with key value K, you're done
	* otherwise search appropriate subtree
		* if K < root node's key, left
		* if K > root node's key, right
* Deleting is much harder
	* Find value in R's subtrees that is most like R (least key value >= R or greatest < R)
	* if no duplicates, it doesn't matter
	* if there are dupes, must use R subtree
	* We want to replace the node with this node
### Cost
* finding/inserting/removing is depth of node
* height of tree 
	* log(n)
* Balanced Tree
	* Average operations are $\Theta$(log(n))
	* if we insert n nodes it's $\Theta$(nlog(n))
* Unbalanced
	* height can be as much as n
	* Worst case $\Theta$(n)
	* inserting n nodes is $\Theta$(n$^2$)
* Traversal 
	* $\Theta$(n) regardless of the shape


Simple to implement, efficient when balanced. 
Unbalanced is a problem


## AVL Tree
* named after adelson-velskii and landis
* With each insertion or deletion that the depth of each subtree at each node does not differ by more than once
* Need to be able to maintain balance in $\Theta$(log(n))
* Example: adding 10 -> 6 -> 4
	* to fix this, we are going to rotate grandparent right to the child of the parent
	* 4 <- 6 -> 10
	* Left imbalance, right rotation etc.
* We are taking three elements and rearranging the tree so the median element is on top
* Example: adding 4 -> 8 -> 6
	* we want to right rotate to 4 -> 6 -> 8
	* then we can fix it
## Splay
* don't maintain balance, but improve balance when tree is accessed


![[Heaps]]


---
Cutoff for midterm

# Binary Tree
## Basics
* Root
	* two subtrees per each node
	* edge connects them
* If there is a sequence of nodes n1...nk such that ni is parent of ni+1, it is a **path** from ni to nk
* length of path:k-1
* depth is length of the path from root to the node
* level is depth
* height is depth+1
* leaf has 2 empty children
	* each node is structured so it has data and two pointers L&R, 
* Internal nodes have one non-empty child

## Types of Trees
* Oak 🤣
* Full Binary Tree
	* each node is either (an internal node with exactly two non empty children) or (a leaf)
* Complete binary tree
	* shape is restricted and obtained by starting at the root and filling the tree levels from left to right
	
## Analysis
* Ratio of internal nodes to leaf nodes?
	* Upper bound will occur when each internal node has 2 non-empty children
	* This doesn't tell us what shape of tree will give the highest percentage of non-empty leaves
	* *all full binary trees with n internal nodes have the same number of leaves*
	* we can use this to compute space requirements
	
## Full Binary Tree Theorem

***MIDTERM***

* The number of leaves in a non-empty full binary tree is one more than the number of internal nodes

> TBP The number of leaves in a FBT is one more than the number of internal nodes
> Proof: By induction, the number of internal nodes
> Basis:  0 internal nodes 1 leaf node $\checkmark$
> 1 internal node, 2 leaf nodes $\checkmark$
> Inductive Hypothesis: Assume and FBT, T containing k+1 internal nodes has k leaf nodes for some k $\geq$ 1
> Inductive Step: We must show  that the theorem holds for $\mathbb{k}$+1->(k-1)+1
> a) Tree T has (k-1)+1 = k internal nodes, by the IH
> See tree T: Select internal node i whose children are leaves
> b) remove i's children. i is now a leaf node. 
> See Tree T' : T' has k-1 internal nodes so it has k leave by IH
> c) Restore I's children. 
> We again have tree T with k internal nodes
> How many leaves in T
> T' had K leaves
> Restoring to T gives k+2
> BUT 
> i was counted as a leave in T' and in T is an internal node. 
> $\therefore$ the number of leaves in T is k+2-1 = k+1
> $\therefore$ Tree T has k internal nodes and k+1 leaf nodes
> $\therefore$  Theorem is true by PMI for n $\geq$ 0 


```nomnoml
#direction:down
[0]
```
```nomnoml
#direction:down
[0]-[1]
[0]-[2]
```

```nomnoml
#direction:down
Tree T
[0]-[1]
[0]-[2]
[1]-[3]
[1]-[i]
[i]-[5]
[i]-[6]
```

```nomnoml
#direction:down
Tree T'
[0]-[1]
[0]-[2]
[1]-[3]
[1]-[i]
```

If you take an arbitrary binary tree T, replace every empty subtree with a leaf

**The number of empty subtrees in T is one more than the number of nodes in T.**

---

Every node in a binary tree has 2 children for a total of 2n children in a tree of n nodes
Every node by the root has one parent for a total of n-1 nodes with parents. 
There are n-1 non-empty children. 
2n total children, so n+1 children are empty

```java
public interface BinNode<E>{
	// return and set element value
	public E element();
	public void setElement(E v);

	// return the left child
	public BinNode<E> left();

	// return the right child
	public BinNode<E> right();

	// return true if is leaf
	public boolean isLeaf();
}
```

Traversal: process for visiting all nodes in some order.
Three types we will cover:
* **Pre order**: left side (root left right starting at root)
* **In order**: bottom  (left to right on a tree ignoring level)
* **Post order**: right side (left right root starting at leftmost leaf)
![[Pasted image 20220411192548.png]]
Trace a path around the tree. As you pass a node on the proper side, process it

```java
void preorder (BinNode rt){
	if (rt == null) return; // empty subtree
	visit(rt);
	preorder(rt.left());
	preorder(rt.right());
}
void preorder2(BinNode rt){
	visit(rt); // if root is null, we might have a problem
	if (rt.left() != null) preorder2(rt.left());
	if (rt.right() != null) preorder2(rt.right());
}

void inorder (BinNode rt){
	if (rt == null) return; // empty subtree
	inorder(rt.left());
	visit(rt);
	inorder(rt.right());
}

void postorder (BinNode rt){
	if (rt == null) return; // empty subtree
	postorder(rt.left());
	postorder(rt.right());
	visit(rt);
}
int count (BinNode rt){
	if (rt == null) return 0; // empty subtree
	int n = 1;
	n += count(rt.left());
	n += count(rt.right());
	return n;
}
boolean checkBST (BinNode<integer> rt, int low, int high){
	if (rt == null) return true;
	int rootKey = rt.element();
	if (rt.element() < low || rt.element() > high) return false;
	if (!checkBST(rt.left(), low, rt.element())) return false;
	return checkBST(rt.right(), rootKey, high);
}
```

## Overhead fraction/ratio:
* Space requirements (simple pointer based implementation):
	* n(2P+D)
	* n = number of nodes
	* P = size of pointer
	* D = size of data
* Total overhead space for entire tree: 2Pn
* Total overhead fraction = $\frac{2Pn}{n(2P+D)}=\frac{2P}{2P+D}$
	* if P=D, a full tree has about 2/3 of it's total storage taken up in overhead! 
	* AND 1/2 of the pointers are NULL (theorem 5.2)

* What if we remove pointers on leaf nodes
	* half of nodes are leaf nodes, so that gives us n/2 pointers
	* $\frac{P}{P+D}$
* What if we we have internal nodes with pointers but no data, and leaf nodes with no pointers?
	* 2Pn+D(n+1) units of space
	* overhead is about $\frac{2P}{2P+D}=\frac{2}{3}$

EG: 
all nodes store:
*  data  (4B)
* parent pointer (4B)
* 2 child pointers (4B each)

Overhead ratio is $\frac{Ptrs}{Data}=\frac{3(4B)}{3(4B)+4B}=\frac{12B}{16B}=\frac{3}{4}$

If you can fully fill it up, an array is most efficient. 
We can use an array to store the tree, since the shape of the tree is static. 



## Binary Search Tree
* Way of storing a collection of elements so that inserting and searching for records can be done quickly?
* unsorted list is quick insertion, searching is $\Theta$(n) average case
* sorted list
	* no speed up in searching ll
	* array based list: use binary search, so search becomes $\Theta$(n)
* For every node in the tree
	* left node has key value less than node
	* right node has greater or equal to node
* In-order traversal prints them in order

* Node can be implemented with separate key value and data element as in the books code
* Finding a record with key value K in BST:
	* begin at root
	* if root stores record with key value K, you're done
	* otherwise search appropriate subtree
		* if K < root node's key, left
		* if K > root node's key, right
* Deleting is much harder
	* Find value in R's subtrees that is most like R (least key value >= R or greatest < R)
	* if no duplicates, it doesn't matter
	* if there are dupes, must use R subtree
	* We want to replace the node with this node
### Cost
* finding/inserting/removing is depth of node
* height of tree 
	* log(n)
* Balanced Tree
	* Average operations are $\Theta$(log(n))
	* if we insert n nodes it's $\Theta$(nlog(n))
* Unbalanced
	* height can be as much as n
	* Worst case $\Theta$(n)
	* inserting n nodes is $\Theta$(n$^2$)
* Traversal 
	* $\Theta$(n) regardless of the shape


Simple to implement, efficient when balanced. 
Unbalanced is a problem


## AVL Tree
* named after adelson-velskii and landis
* With each insertion or deletion that the depth of each subtree at each node does not differ by more than once
* Need to be able to maintain balance in $\Theta$(log(n))
* Example: adding 10 -> 6 -> 4
	* to fix this, we are going to rotate grandparent right to the child of the parent
	* 4 <- 6 -> 10
	* Left imbalance, right rotation etc.
* We are taking three elements and rearranging the tree so the median element is on top
* Example: adding 4 -> 8 -> 6
	* we want to right rotate to 4 -> 6 -> 8
	* then we can fix it
## Splay
* don't maintain balance, but improve balance when tree is accessed