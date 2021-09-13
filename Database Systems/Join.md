# Join
## AKA Natural Join or Theta Join
![[Pasted image 20210909133030.png]]
* Essentially a [[Cartesian Product]] which matches [[Primary Key]] using [[Select]]
* ![[Pasted image 20210909134115.png]]
* The difference is this is more computationally intense but uses less memory, queries both tables before merging vs merging and filtering


## There are two kinds: Natural and Theta
* natural join does not have duplicate attributes
* theta is natural join with a condition, BUT it does not remove duplicate attributes 
* Theta is basically the [[Cartesian product]] with a condition
* ![[Pasted image 20210913161827.png]]
* 
