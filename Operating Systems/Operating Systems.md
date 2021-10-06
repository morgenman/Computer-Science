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
	* What happens to the 

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

##
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
`While (STATUS == BUSY) wait for interrupt; // wait until device is not busy 
	Write data to DATA register 
	Write command to COMMAND register (starts the device and executes the command) 
	While (STATUS == BUSY) wait for interrupt; // wait until device is done with your request`
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
* 

| inodes        | data             | Explanation                                              |
| ------------- | ---------------- | -------------------------------------------------------- |
| 0 [d a:3 d:0] | 0 [..:0,.:0,x:1] | (dir, access ct:ref count, d:data block)(.. refers to 0) |
| 1 [d a:2 d:1] | 1 [..:0,.:1,k:2] |                                                          |
| 2 [f a:1 d:2] | 2 [a]	            |                                                          |

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


