---
created: 2021-10-22T08:02:22-04:00
updated: 2021-10-22T08:02:22-04:00
---
# Limited Direct Execution
What to limit?
* General memory access
* I/O
* Special x86 instructions like `lidt`
how? get hw help but processes in 'user mode'

* Smooth context switching makes each process think it has its own CPU (Virtualization)
* Direct execution makes processes fast
* HW provides a lot of OS support
	* limited direct execution
	* timer interrupts
	* automatic register saving

* 