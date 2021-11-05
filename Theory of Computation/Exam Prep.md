# Exam Prep

# Pumping Lemma: HW Problems

## A = {www|w \i\n {ab}\*}; prove A is not regular
suppose A is regular
$w = a^{p}ba^{p}ba^{p}b$, |w| $\ge$ p

1. |xy| $\le$ p 
2. y $\ne$ e
3. xy$^{k}$z $\in$ L $\forall$ k $\geq$ 0

### 1: clear that xy are all a's 
* so for k = 0 => xy$^{0}$z
	* xy = a$^{p-|y|}ba^{p}ba^{p}b\notin A$
	* same for k = 2, p+y

## 