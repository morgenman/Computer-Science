# Schedulers
*Workload:* set of job descriptions
*Scheduler:* logic that decides when jobs run
*Metric:* measurement of scheduling quality

Scheduler 'algebra', given two variables, find the third
`f(W,S)=M`

**Preemptive:** When the operating system interrupts a program from running (vs. cooperative)

## Workload Assumptions:
1. Each jobs run for the same amount of time
2. All jobs arrive at the same time
3. All jobs only use the CPU (no IO)
4. The runtime of each job is known

![[Pasted image 20211018084025.png]]
first in first out
shortest job first
shortest to completion first
round robin (preemptive time slices with quantum time slices, cyclic nature of queue)

## Example: FIFO
* ![[Pasted image 20211018084408.png]]
* Turnaround: Completion time - arrival time
* ![[Pasted image 20211018084436.png]]
* Trace:
* ![[Pasted image 20211018084455.png]]
* ![[Pasted image 20211018084540.png]]

## Example: Shortest Job First, with a big first job
*What if they didn't run for the same amount of time?*
![[Pasted image 20211018084717.png]]
FIFO:
![[Pasted image 20211018084726.png]]
* when deciding what job to run next, choose the one with smallest run_time
* ![[Pasted image 20211018084802.png]]

## Example: Shortest Time to completion first
*What if jobs didn't arrive at the same time?*
![[Pasted image 20211018084927.png]]
Not good...

* Policy: switch jobs so we always run the one that will complete the quickest

![[Pasted image 20211018085007.png]]

## Example: Round Robin
*what if we care about when a job starts?*

Response time = first run - arrival time
![[Pasted image 20211020081120.png]]

Other schedulers have poor response time
![[Pasted image 20211020081506.png]]

## I/O Aware
*what if jobs wanted to use I/O?*

![[Pasted image 20211020081549.png]]
![[Pasted image 20211020081600.png]]

## MLFQ
*what if the runtime of each job is NOT known?*

* Multi-Level Feedback Queue
* General purpose scheduling

Two job types:
1. *interactive*: programs care about **response time**
2. *batch*: programs care about **turnaround time**

This solution is effectively multiple levels of round-robin

### Priorities
**Rule 1**: If priority(A) > Priority(B), A runs 
**Rule 2**: If priority(A) == Priority(B), A & B run in RR
**Rule 3**: Processes start at top priority 
**Rule 4**: If job uses whole slice, demote process

![[Pasted image 20211020081909.png]]

![[Pasted image 20211020082008.png]]

![[Pasted image 20211020082529.png]]

![[Pasted image 20211020082538.png]]

*problem:* unforgiving, gaming the system, hard to tune...

How do we fix processes getting stuck at q0:
**every so often we clear the queue, reschedule everything at highest priority**


## Lottery
### Proportional Share
* Give processes lottery tickets
* whoever wins runs
* higher priority = more tickets

```C
int counter = 0;
int winner = getrandom(0, totaltickets);
node_t *current = head;
while(current) { 
	counter += current->tickets; 
	if (counter > winner) break; 
	current = current->next; 
} // current is the winner
```

![[Pasted image 20211020084229.png]]
Winner = 102
![[Pasted image 20211020084323.png]]
![[Pasted image 20211020084332.png]]
![[Pasted image 20211020084344.png]]
![[Pasted image 20211020084359.png]]



