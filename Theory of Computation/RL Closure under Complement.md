## Theorem: The class of regular languages is closed under complementation

### Proof:
Let A be a regular language
Let M be the DFA that accepts A
Let M' be the result of switching the accepting states of every state in M

if $M=(Q,\Sigma,\delta,q_0,f)$ then 
   $M'=(Q,\Sigma,\delta,q_0,Q-f)$ then
   we claim $L(M')=\overline{A}$
   
   how do we prove this?
   
   Suppose $w\in A$ then $w$ lead to an accepting state in $M$
   $w$ leads to the same state in $M'$ but that is not an accepting state in $M'$
   
   if $w\in A$ then $M$ accepts it
   if $w\not\in A$ then $M'$ accepts it 
   $\therefore L(M')=\overline A$
   
   
   
   
