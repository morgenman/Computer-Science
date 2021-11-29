---
updated: 2021-11-29_08:36:55-05:00
---
# Operating Systems
## What does it do?
* Handle physical resources and [[Virtualization|virtualize]] them
* Handle [[Concurrency]]
* Store data with [[Persistence]]

## Components 
* Libraries
* File System
* [[System Call]] vs [[Procedure Call]]
	* [[System Call]] transfers control into OS while raising the [[Hardware Privledge Level]] 
		* Runs in [[User Mode]]
		* transfers control to [[trap-handler]] which raises the [[Hardware Privledge Level]] to [[Kernel Mode]]
* A [[Process]] is an abstraction of a running program
* Taking an [[Interrupt]] copies the data in the registers and puts it into the **[[K-Stack]]**

## What Only Hardware Can do:
* [[Interrupt]]
* [[Privilege Bit]]
* [[System Call]]
* [[Address Translation]]
* [[Atomic Instructions]]

* The CPU [[Status Register]] has a [[Privilege Bit]]:
	* 0 -> [[User Mode]]
	* 1 -> [[Kernel Mode]]

* [[K-Stack]] is in the [[Interrupt Service Vector]]
* In the [[K-Stack]] is a pointer at the [[Interrupt Handler]]

## What is a [[Jump Table]]?
* Outside world provides a number
* Inside we have an array of pointers at code

* A [[Process]] is simply a [[Program]] with context

## Programming, Data Types, etc.
* [[Abstract Data Type|ADT]]: Data structure where you *don't have to understand how it's implemented*
* [[Pointers]]

* A [[Quantum]] is a unit of time for a cpu process to run (think when it switches back and forth, each time it runs is a quantum)

# A Computer is...
### CPU
* [[Registers]]
* [[Program Couter]]
* fetch-decode-execute ([[Von Neumann Model of computing]])
### RAM
### I/O devices

## Computing Resources
* CPU *Cycles*
* RAM *address spaces*
* RAM *safe concurrent access*
* Device *interaction*
* Persistent storage *organization*

## Mechanism vs Policy
* Mechanism: a low level capability. **How** the system works
	* How does the OS switch contexts of two processes
* Policy: a high level strategy. **Which** resources go to which process
	* Which process is scheduled to have the CPU after we interrupt the current one?
* **Policies** are implemented by making use of **Mechanisms**

## An OS is a Resource Manager for one or more processes using the computer hardware concurrently
* Concurrent: happening at the same time, overlapping duration
* What services does it offer:
	* Multiprocessing
		* Sharing CPU/RAM
		* Process Management - loading/unloading, starting/pausing/stopping
		* Scheduling based on some criteria
	* Safe Sharing (of resources like RAM)
		* Uncontrolled concurrent access of a single physical resource is inherently unsafe
	* Device Interface
		* Multiple devices attach to the computer
		* a *facade* place in front of all devices raises the level of abstraction at which they are used 
		* Example of a common interface:
			* What is a file?
				* sequence of bytes
				* must be opened/closed after interaction
				* A naming scheme is provided to find resources
				* persists longer than one process execution
	* [[Persistence]] (files)
	* Error detection/correction/recovery


* Program is the file, process is what's actually running

# Devices: How does the OS talk to devices
* Status, control, data registers
* ![[Pasted image 20210920081216.png]]
* ![[Pasted image 20210920081244.png]]
* ![[Pasted image 20210920080406.png]]
* In RAM, there is a segment that linked to the status register on the hw device 
```
While (STATUS == BUSY) wait for interrupt; // wait until device is not busy 
	Write data to DATA register 
	Write command to COMMAND register (starts the device and executes the command) 
	While (STATUS == BUSY) wait for interrupt; // wait until device is done with your request
```
* Using interrupts ensures that you are not wasting CPU Cycles 'Spinning
	* Are interrupts worse? 
		Yes, they can cause a livelock (flood of network packets)
* Techniques
	* hybrid
	* interrupt coalescing

## Status Checks: Polling vs Interrupts
* Polling:
	* wait until resource is available
* Interrupts:
	* take process off cpu until next interrupt
## Data: PIO (Program IO) vs DMA (Direct Memory Access)
* PIO
	* CPU directly tells device what data is
* DMA 
	* CPU leaves data in memory 
	* device reads it directly
## Control: special instructions vs Memory Mapped IO
* Special Instructions
	* each device has a port
	* in/out instructions to communicate with device
* Memory Mapped IO
	* HW Maps registers into address space
	* loads/stores sent to device

## Problem: too many devices; Solution: drivers
* 70% of linux source code is drivers
* Encapsulation! 
* mix and match devices, schedulers, file systems
## Storage: loosing half a sector on average per file
* On the HDD, there is an array of inodes
* Three names for files:
	1. inode
		* Permanent name for a collection of datablocks
		* Access Rights
		* owner
		* ref count
		* Direct block array: Inode has blocks of where the file is stored (file data)	
		* Indirect -> points at a block which contains block numbers
			* this block is 4k long
			* 4 byte block addresses
			* = 1k block
			* So if a file is more than 10 blocks, the inode has an indirect block which contains more block references
		* if I need more than one indirect, I use a block of indirects (double indirect), then triple indirect etc. 
		* Inode structure is Preallocated,
	2. FD
		* File Descriptor
		* Internal view of a file in a running process
		* OS has an array with a bunch of File Control Blocks
		* holds metainformation
		* shortlived
		* only as long as the process needs to read a file
		* keeps track of where you are in a file 
		* stores File Control Blocks which store links to inodes
	3. pathname
		*  hierarchal 

OS owned file array per process
* this array holds an block
	* block has 
	* index i refers to the FD index in the FCB

Inode table block 2 (superblock) fixed
FCB table holds in use now blocks with inode # (in memory)
File Array table also in memory per process
FD is the index of this table ^^

![[PXL_20210924_122457556.jpg]]
### FileNames
* Three types: (see [[Operating Systems#Storage loosing half a sector on average per file]])
	* inode number
	* path
	* file descriptor
* Special Calls
	* `fsync(int fd)`
		* synchronizes file on device
	* `rename(char *oldpath, char *newpath)`
		* adds file to new directory table
		* removes file from old directory table
	* `flock(int fd,int operation)`
* Deleting a File:
	* remove references to file, which *should* lower the ref count on a file

### Contents of a File (in our filesystem)
* data block
	* Set aside blocks for data
* inode block
	* Set aside some sectors/blocks to store inodes (determines how many files you can store)
	* 16-32 inodes for block
	* Contents:
		* type
		* uid
		* rwx
		* size
		* blocks
		* time
		* ctime
		* links_count
		* addrs[N]
	* Offset for inode 0?
		* 256 byte sector
		* 3:0 (block 3 offset 0)
* indirect block
* directories
* data bitmap
* inode bitmap
* superblock


## File System integrity check (fsck)
* inodes are correct 
* rebuild bitmap from data


## Superblock
Need to know FS Metadata
* block size
* how many inodes are there
* how much free data
* allows mount operation
Store this in the Superblock

## Bitmaps are there for speed, not required

![[Pasted image 20211001082407.png]]

mkfs: make filesystem

## Formatting a disk
* Setting up all the data on the disk
* establishing /x/k, writing 'a' in file k, 
* mkdir /x/
* touch /x/y

| inodes        | data             | Explanation                                              |
| ------------- | ---------------- | -------------------------------------------------------- |
| 0 [d a:3 d:0] | 0 [..:0,.:0,x:1] | (dir, access ct:ref count, d:data block)(.. refers to 0) |
| 1 [d a:2 d:1] | 1 [..:0,.:1,k:2] |                                                          |
| 2 [f a:1 d:2] | 2 [a]            |                                                          |

todo ^^ :
1. `mkdir /x`
	* Search for `/`
2. open 
3. write 
4. link
5. unlink


## Cache needs a calculable access pattern


delay due to moving head track to track
t-t 5ms
rotation 0.2ms
transfer 0.1ms

Exam:

```bash
mv /x /t/y
	link(/t/y,/x)
	unlink(/x)
```


Block # = byte/block size
 5000k/4k: 1250
 -1032
 
 
Looking for byte 5000k
5000k/4000k = 1250
1250 - 1028 - 8 = 218


--- 
See [[processes.pdf]] for this section
# Memory Block
Low  to high

| Code  | Data | Heap -> |     | <- Stack |
| ----- | ---- | ------- | --- | -------- |
| 00000 |      |         |     | fffff    | 	

Stack allocated variables?
Allows recursion
Context is like a local variable
gets stored on the stack

* Context stored in registers
	* one of bits in the flags register is privledge 

## [[Interrupt Service Vector]] in memory?
![[Pasted image 20211013081732.png]]
![[Pasted image 20211013081715.png]]

* This shows us that the [[k-stack]] is only used when switching context
* When we take the interrupt, the context of the user process is transferred into the [[K-Stack]]

[Slides](http://pages.cs.wisc.edu/~harter/537/slides.html)
[Notes](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf)

# Data Structures in a process
Process List:
```C
// the registers xv6 will save and restore
// to stop and subsequently restart a process
struct context {
  int eip;
  int esp;
  int ebx;
  int ecx;
  int edx;
  int esi;
  int edi;
  int ebp;
};
// the different states a process can be in
enum proc_state { UNUSED, EMBRYO, SLEEPING, RUNNABLE, RUNNING, ZOMBIE };
// the information xv6 tracks about each process
// including its register context and state
struct proc {
  char *mem;     // Start of process memory
  uint sz;       // Size of process memory
  char *kstack;  // Bottom of kernel stack
  // for this process
  enum proc_state state;       // Process state
  int pid;                     // Process ID
  struct proc *parent;         // Parent process
  void *chan;                  // If !zero, sleeping on chan
  int killed;                  // If !zero, has been killed
  struct file *ofile[NOFILE];  // Open files
  struct inode *cwd;           // Current directory
  struct context context;      // Switch here to run process
  struct trapframe *tf;        // Trap frame for the
  // current interrupt
};
```

* Register Context will hold stopped process, contents of registers. 


* c++ filesystem

## Forking
* `vector` is the dynamic array

Program = process + context
# what is context?
states:
**Ready** (init or through descheduling) -> **Running** (through scheduling) -> **blocked** (I/0 Initiate) -> back to ready (I/0 Done)

## CPU Time Sharing
### Two goals
* efficiency
* control
	* processes shouldn't do bad things when running

### Solution: 
![[Limited Direct Execution]]

## How does a [[Privilege Bit]] work? 
![[Privilege Bit]]

STANDARD QUESTION:
**Let's pretend that we allow people to write the Interrupt service vector, how would that violate OS, how would it be bad??**
*Answer: Invalidates privilege bit, Only in privilege mode when we take an interrupt, so if we can change it and point at my code, we can do anything*

# Context Switching
When to switch process contexts?

Direct Execution => OS can't run while process runs
How can the OS do anything when it's not running?

Answer: 
Cooperative scheduling is one option, but process can 'steal' time 
actual answer...

## Timer Interrupts
* non-cooperative approach
* set up before processes
* hw does not let processes prevent this
* switches on a timer interrupt


Process A, timer interrupt save regs(A) to [[k-stack]](A) move to kernel mode jump to interrupt
etc etc

# Per Process State
```C
// Per-process state

struct proc {
 uint sz; // Size of process memory (bytes)
 pde_t* pgdir; // Page table
 char *kstack; // Bottom of kern stack for this proc
 enum procstate state; // Process state
 volatile int pid; // Process ID
 struct proc *parent; // Parent process
 struct trapframe *tf; // Trap frame for current syscall
 struct context *context; // swtch() here to run process
 void *chan; // If non-zero, sleeping on chan
 int killed; // If non-zero, have been killed
 struct file *ofile[NOFILE]; // Open files. Index 0 of this is current directory?
 struct inode *cwd; // Current directory
 char name[16]; // Process name (debugging)
};
```



# [[Schedulers]]


[[Limited Direct Execution]]


# Where do we keep processes when they are in these states?
*Run/Ready/Block*

```c
c = fork();
if(c>0)
	parent
else
	child
```

parent and child are blocks of code
calls exec, which loads a new context into a process


**Fork**: create a new process, with all the context copied

copied into the [[Process Control Block]]
new PID

Open files are in context

Same address in the instruction pointer
fork does return in both processes
so the code above runs 
environment is also passed

How does the shell run ls?


## What's in the parent block?
* could be wait(& info)

`ctrl + d is end of file marker`

single > is making a new file,  >> is for appending
ls . | sort
output of ls is piped into sort 

Signature for executable program: `#!`

## Where does the copy get put?
* ready state?


# Following a process into memory

| P2  | 0    |
| --- | ---- |
| P3  | 1000 |

Base register is a step towards having virtual memory
Bounds allows us to protect memory

# Paged Memory
## Physical Memory [Frames]
* Physical hardware is divided into frames
## Process Address Space [Pages]
* Stores table with forwards to actual memory
* Virtual addresses (per process)

[[Exam 2 Terms]]

---

After exam 2

Passing a vector as a 2d array

Vector is an array with some data, a length, and some field that might be called allocated

Like an arraylist

Data is stored contiguously

```c++
vector<const char *> v;
for (string str: args){
	v.push_back(str.c_str());
}
v.push_back(nullptr);
return v.data();

```

---

# Paged memory
* Address translation
	* How do you translate an address
	* Look it up in table to see..??
* Virtual Address: 
	* 16 bit for now
	* page numbers are the virtual numbers, they refer to frames

| 4 bit  | 12 bit |
| ------ | ------ |
| Page # | offset |


* offset is going to be the same size for every address
* PageTable for each process (held by OS, per process, part of context)
	* will have 16 entries
	* divided into Metadata and 20 bits for each frame
	* each entry in page table points to frame which holds 4k (2^12 from 12 bit offset)
	* page number is 4 bits (2^4 = 16 pages per process)
Physical memory will become 20 bits

Process address Space: 
* holds all the code from the process you are running
16 pages

Translated to:
(4 bit page number->20 bit frame number = 20bit) + 12 bit offset from virtual address = 32 bits

* Translation example: `11111111111100` 
* 1111-> lookup in page table
	* get back 00000000000000000000
* 1111111100 offset

* whenever I use address it's a per process virtual address
* whenever running in non-privileged mode


Let's try that again:

<page #, offset>
*page #*:which element in page table
*offset*: which byte in the page we are referring to 

<frame #, offset>
*frame #*: which block in actual memory
*offset*: which byte in frame (same as page)


Types of questions:
How big are these things?

---

# Fork() vs Exec()
## Fork
* creates a new PCB - OS specific data structure, access must be privileged
* is a library wrapper around a *system call*
* Trap(software generated interrupt) to the OS. *k-stack* saved to current (parent) PCB
* **duplicate parent PCB**, duplicate all file descriptors, duplicate memory assignment but separate writable pages
* **Policy**: Prefer parent or child process by returning from the system call to one or the other

## Exec
* loads new program code into memory and starts loaded program *from the beginning*
* Will read from *filesystem*. Will modify *context*.
* Privileged operations
* exec() is a library wrapper around a *system call*
* has to change Instruction Pointer
* Trap to OS. Save context to PCB. Release user memory (will keep FD and most of PCB the same)
* load beginning of code segment of `cmd` file. Allocate new memory for *heap* and *stack* for a new program
	* *heap* is where we get memory when we call new
	* *stack* is the memory that stores calls? not sure
* put string `cmd` and provided arguments in memory according to OS convention
* Modify context so IP contains virtual starting address for a new program
* return from interrupt
* **no PCB created** (kept the old one, PID stayed the same)


# Address Space
An *address space* is all of the memory that a process/machine can address

* if the address refers to actual RAM locations, they are **physical** addresses in a physical address space
* if addresses must be translated before they refer to actual RAM locations, they are **virtual** addresses in a virtual address space
* everything we work with is byte addressable 
* if it ends in 00 it's a multiple of 4

the something or another is $2^k$

## Virtualization of Memory
* should be transparent, process should be unaware
* the process sees a contiguous address space beginning at 0
* all addresses in process (contents of IP, pointers, `load/store` instruction targets) are virtual
* indirect addressing, through an OS supported translator, is always applied for user space machine code
* user space machine code cannot access memory directly

## How to do Address Translation (contiguous allocation, not paged)
* We want memory translation (moving memory without linking)
	* dynamic memory relocation
* A **base register** is a CPU or MMU register that permits dynamic memory relocation
* the *physical* address is calculated by adding the virtual address to the value in the base register
* base register alone can permit user programs to generate dangerous addresses
* combined with **bounds register**, making the translation safer
### Problems...
Using single base/bounds pair for a process permits dynamic relocation of the *who virtual address space*
This requires contiguous **physical** memory that can contain the **virtual** address space
Fixed size process will probably over-allocate, leading to internal fragmentation (inside of allocated memory not using all internal memory)
Variable sized process spaces will lead to external fragmentation (in actual physical memory)
### Solution? multiple base/bounds pairs
easier to fit if virtual address space is broken down into multiple pieces, each with it's own base/bounds pair
can break down by **segment**
* 4 registers = left most pair indicate which segment
	* effectively the base/bounds chunk of memory has been quartered
	* ***code;heap;stack;data***
	* exe on disk has:
		* code and data (global)
		* anything static or global
	* heap is dynamically allocated
	* stack is all the local variables and parameters
		* *current running functions & their activation records*
	* code is where instructions for functions and stuff are held
* OS can allocate 4 blocks, each a quarter of the size of the virtual address space 
* still variable size, capable of fragmenting
* all of this assumes you use the full address space
* speed of addition `O(log(bits))`
	* we are doing addition
* If we have a 32 bit address in hex
	* lets say I have 256 byte pages (kinda small)
	* if every page is this size I couldd split it to:
	* | six hex digits | 2 hex digits|
	* | frame/page #   | offset      |
	* offset tends to be the same size
	* every hex is 4 bits
### Problem: External fragmentation
Between in use memory
### Solution? only issue one size of object
* only allocating a single size of block
### Problem: dissonance between picking big and small block sizes
* Big: fewer base registers needed; more internal fragmentation
* Small: less fragmentation; more base registers
* registers are expensive

### Solution: Paged Virtual Memory
*frame*: physical
*page*: virtual

small page size with translation information accessed indirectly from RAM

We need something in the CPU though:
*page table base register* (pbr): CPU/MMU register that contains the physical address of the beginning of the page table

```nomnoml
[PBR] -> [Page Table|PTE: Page Table entries which store frame numbers]
```

* PBR is part of context
* per process 
* Address translation is done by separating to two parts
* | Page # | Offset |
* offset can only address x amount of bytes, so we *don't need* a bound's register
## Page Translation:
1. split virtual address <page,offset>
2. use page as an index into the page table array
3. get frame out of page table
4. combine <frame,offset> into physical address

*the idea is we are using small memory blocks, but keeping the addresses in ram, not in registers*

> Side note:
> Caching...
> locality of reference, predictability of reference
> We can speed up slowness by caching
> We can fix the fragmentation with small pages

```c++
Fetch
	Page Size	4KB
	IP			0000210C (virtual address)
	PBR			F0000000
	sizeof(PTE)	4B
Offset Bits		12b to address 4KB (3 hex digits)
				10b to address 1KB, 2b to address 4
				|20b page (5hex) | 12b offset(3hex)|
Page #			00002
Offset			10C
Address of PTE	F0000000 ...
				(addressing into array, index*size of entry + index)
				F0000000 + 4 * 00002 = F0000008
RAM[F0000008] =	007F2
Physical Address:
				007F210C
```

If privilege bit is not set, must be translated
![[Pasted image 20211105084449.png]]

### Metadata in PTE
* present
	* is the content of that page in a frame?
	* if no: it's on a disk and has to be loaded OR needs to be allocated if brand new
	* if new:
		* page fault
		* pause process
		* start pulling from disk
		* set present bit to 1
		* restart instruction
* dirty
	* The data in the page has differed from the thing it was loaded from on disk
	* let's say value of i is in page, but i has been changed
	* we need to save the contents if we 'clear' this page to use it
	* take whole thing, write to swap, mark as non present so all the data is saved
	* swap on disk
	* generally this would stay 1 forever, since it's been modified
* reference
	* has this page been referenced recently?
	* if we need to load a frame from disk we have to 'choose a victim', choose one with reference of 0
	* every once in a while we clear the reference bits on all of them, and see which ones are going to be used
* valid
	* if false, OS or compiler has dictated that we cannot actually use that bit of memory

PTBR: Page table base register (PBR)

2$^{10}$ 1KB
2$^{16}$ 64KB (2$^{6}$ = 64)
2$^{20}$ 1MB
2$^{30}$ 1GB

*frame*: physical
*page*: virtual

# Memory:

| Name            | Size  | Unit                   | Explanation                     |
| --------------- | ----- | ---------------------- | ------------------------------- |
| PTBR            | 03010 |                        | Pointer at array of addresses[] |
| Page/Frame Size | 256B  | 8 bits/offset or 2 Hex |                                 |
| Metadata        | 9b    |                        |                                 |
| Physical        | 1MB   | 20 bits/address        |                                 |
| Virtual         | 64kB  | 16 bits/address        |                                 |

bits per...

frame #?
- how many frames? Physical/page size
- 20 - 8 = 12 bits / frame #
- 2$^{12}$ = 4k

page #?
- how many pages?
- 16 - 8 = 12 bits / page # 
- 2$^{8}$ = 256

## Example:

```scheme
230c load  R1, 1308
2310 addi RI, R1, 1
2314 store R1, 1308
```

### Virtual
What are the virtual addresses you get from running these lines:
- fetch: `230C` is where we start 
- load: then we pull instruction at `1308`(v) to R1
---
- fetch: `2310` add 1 to register 1
---
- fetch: `2314`
- store: `1308`

### Physical
What are the physical addresses?
`23`:page# `0C`:offset
now we need frame number...

XXX|0C
what is XXX?

- Page table entry 23
- We need the sizeof(PTE[])
	- frame#(in bits) + metadata(bits) rounded up to nearest 8 bits
	- 12 bits + 9 bits = 21 bits => round up to 32 bits = 3B
- 23(hex)* 3B = 69(hex)

xxx is 03079 

**Arithmetic is in Hex**

| PTE[]   | Address | Result | Explanation                   |
| ------- | ------- | ------ | ----------------------------- |
| PTE[23] | 03079   | 971XXX | 03010 + 69                    |
|         | 9710C   |        | Now we have physical for 230C |
| PTE[13] | 03049   | 0F7XXX | 03010 + 13 * 3                |
|         | 0F708   |        | Now we have physical for 1308 |
| PTE[23] | 03079   | 971XXX | 03010 + 23 * 3                |
|         | 97110   |        | Now we have physical for 2310 |
| PTE[23] | 03079   | 971XXX |                               |
|         | 97114   |        | Now we have physical for 2314 |
| PTE[13] | 03049   | 0F7XXX |                               |
|         | 0F708   |        | Now we have physical for 1308 |

---
## Example
File PGM (program)

| ABC |
| --- |
| DEF |
| GHI |
| JKL |
| MNO |
| PQR |

^Sitting on the disk
fork and exec

Creates PGM PageTable:

|       | P(resent) | D(irty) |     | V(alid) | Frame |
| ----- | --------- | ------- | --- | ------- | ----- |
| 0     | 0         | 0       |     | 1       |       |
| 1     | 0         | 0       |     | 1       |       |
| 2     | 0         | 0       |     | 1       |       |
| 3     | 0         | 0       |     | 1       |       |
| 4     | 0         | 0       |     | 1       |       |
| 5     | 0         | 0       |     | 1       |       |
| 6     | 0         | 0       |     | 0       |       |
| 7     | 0         | 0       |     | 0       |       |
|       | ...       | ...     |     | ...     | ...   |
| F(16) | 1         |         |     | 1       | 0     |

first 6 are valid because it knew how big the file is
How big is an address
4 bit page number
need to address 4k, so 12 bits (2^12) for offset
16 bit address

Allocating this space

|     | RAM   |
| --- | ----- |
| 0   | STACK |
| 1   |       |
| 2   |       |
| 3   |       |
| 4   |       |
| 5   |       |
| 6   |       |
| 7   |       |
| ... |       |
|     |       |

Let's make the present bit 1 and location bit 4

| Location (Page #)(Offset)      | P(resent) | D(irty) |     | V(alid) | Frame #               | size |
| ------------------------------ | --------- | ------- | --- | ------- | --------------------- | ---- |
| C000  (address stored in PTBR) | 1         | 0       |     | 1       | 4                     | 1B   |
|                                | 0         | 0       |     | 1       |                       |      |
|                                | 0         | 0       |     | 1       |                       |      |
|                                | 0         | 0       |     | 1       |                       |      |
|                                | 0         | 0       |     | 1       |                       |      |
|                                | 0         | 0       |     | 1       |                       |      |
|                                | 0         | 0       |     | 0       |                       |      |
|                                | 0         | 0       |     | 0       |                       |      |
|                                | ...       | ...     |     | ...     | ...                   |      |
| C00F                           | 1         | 1       |     | 1       | 0 (where stack lives) |      |

All programs start at 0 (assumption)

let's say first addresses for PGM are:
### Virtual Address Trace
0000 (Fetch)
0004 (Fetch)
0008 (Fetch)
FFFC (Store)
### Physical Address Trace
1. Get PTE (Replace Page # with Frame #)
2. Get Physical


C000 (Fetch) C000 + 0 * 1B
4000 (4 comes from value in frame)

C000
4004

C000
4008

C00F
0FFC

### Problem: Too many duplicate requests
looking up C000 too many times
### Solution: Cache
*called Table Lookaside Buffer (TLB)*
Cache is empty. Looks up C000
0 - 10_1 4
...
F - 10_1 0

> Exam Question:
> Do Virtual address trace
> turn into physical address trace assume no TLB
> Which accesses(PT lookups) go away when you have a TLB

How do we know when to delete stuff in RAM? Timestamps? no.. too big... add "Reference"

| Location (Page #)(Offset)      | P(resent) | D(irty) | R(eference) | V(alid) | Frame #               | size |
| ------------------------------ | --------- | ------- | ----------- | ------- | --------------------- | ---- |
| C000  (address stored in PTBR) | 1         | 0       | 1           | 1       | 4                     | 1B   |
|                                | 0         | 0       | 0           | 1       |                       |      |
|                                | 0         | 0       | 0           | 1       |                       |      |
|                                | 0         | 0       | 0           | 1       |                       |      |
|                                | 0         | 0       | 0           | 1       |                       |      |
|                                | 0         | 0       | 0           | 1       |                       |      |
|                                | 0         | 0       | 0           | 0       |                       |      |
|                                | 0         | 0       | 0           | 0       |                       |      |
|                                | ...       | ...     |             | ...     | ...                   |      |
| C00F                           | 1         | 1       | 1           | 1       | 0 (where stack lives) |      |

Find one that's not referenced, remove it


Test is a week from next monday

# C++ Stuff

```c++
friend void function();
friend class();
```

friend allows access to private functions

## Lamda Functions

[](int input){return input++;}



32b virtual/physical

4b metadata

4KB page

20b frame/page (Number of pages is $2^{20}$ ~= 1 MB, that's how many it can address)
12b offset

How many bits in the pte?
|PTE| = $\lceil$(20 + 4)/8$\rceil$ = 3B
	
|Page Table| = # Pages * |PTE| =  3 MB

---
Assignment:
what's important?
* PTE
	* PageTable
vector 
* Frame
	* RAM

---

What if we broke up the page# and offset into page table + page # 

Smaller page table, less memory 

---

# Threading
* Allows us to 'be' in multiple places in the same program, so to speak

## Problems:
When we take an interrupt, it happens between instructions, so we could loose one, leading to wrong values

## Solution: 
### Shared MMU
* Context in MMU is shared between threads
* Has a thread control block
* Don't need a process control block


So how do we stop them from writing to the same value without stopping? 
Lock(i)

---

# Locks

*Let's imagine we have two locks:*
```
lock a
lock b
```
