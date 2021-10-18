# Schedulers
*Workload:* set of job descriptions
*Scheduler:* logic that decides when jobs run
*Metric:* measurement of scheduling quality

Scheduler 'algebra', given two variables, find the third
`f(W,S)=M`

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
**