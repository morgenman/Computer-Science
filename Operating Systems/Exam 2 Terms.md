---
updated: 2021-11-16_17:54:16-05:00
---
# Exam 2 Terms

*Blocking receive*: The receiver blocks until a message is available.

*Blocking send*: The sending process is blocked until the message is received by the receiving process or by the mailbox.

*Bounded Buffer*: Assumes a fixed buffer size. The consumer must wait if the buffer is empty and the producer must wait if the buffer is full.

*Cascading Termination*: If process terminates then all its children must also be terminated

*Child Process*: New process created

*Communication Link*: If process P and Q want to communicate they must send and receive messages so a communication link must exist between them. This link can be implemented in direct and indirect communication.

*Context Switch*: Switching the CPU to another process by performing a state save of the current process and a state restore of a different process.

*Cooperating Processse*: If it can affect or be affected by other processes executing in the system.

*CPU-bound process*: generates I/O requests infrequently, using more of its time doing computations.

*Data Section*: Contains global variables.

*Degree of Multiprogramming*: The number of processes in memory, which is controlled by long term scheduler.

*Device Queue*: List of processes waiting for a particular I/O device

*Direct Communication*: Each process that want to communicate must explicitly name the recipient or sender of the communication.

*Heap*: Memory that is dynamically allocated during process run time.

*I/O-bound process*: One that spends more of its time doing I/O than it spends doing computations.

*Independent Processes*: A process that cannot affect or be affected by other processes executing in the system.

*Indirect Communication*: the messages are sent to and received from mailboxes or ports.

*Interproccess Communication*: Allows process to exchange data and information.

*Job Queue*: consists of all processes in the system.

*Long-Term Scheduler*: Selects processes from ones that are kept for later execution

*Medium-Term Scheduler*: Sometimes is advantageous to remove processes from memory and thus reduce the degree of multiprogramming.

*Message Passing*: Communication takes place by means of message exchanging between the cooperating processes.

*Non-Blocking receive*: The receiver either a valid message or null.

*Non-Blocking send*: The sending process sends the message and resumes operation

*Parent Process*: The creating process

*Process*: A program in execution

*Process Control Block*: Contains many pieces of information associated with a specific process including these : Process State, Program counter, CPU registers, CPU scheduler info, Memory management info, accounting info, I/O status info

*Process Dispatch*: A process is selected for execution so it is out of ready queue.

*Process Identifier (pid)*: unique identifier

*Process Mix*: Mix of I/O bound and CPU bound processes

*Process Scheduler*: selects an available process for program execution on CPU

*Process State*: Defined in part by the current activity of that process

*Process State: New*: The process is being created

*Process State: Ready*: The process is waiting to be assigned to a processor.

*Process State: Running*: Instructions are being executed

*Process State: Terminated*: The process has finished execution.

*Process State: Waiting*: Process is waiting for some event to occur (such as an I/O completion or reception of a signal)

*Program Counter*: Value that represents the current activity

*Ready Queue*: Processes that are residing in main memory and are ready and waiting to execute

*Shared Memory (for Communication)*: A reigion of memory that is shared by cooperating processes is established. Processes can then exchange information by reading and writing data to the shared region.

*Short-Term Scheduler*: Selects among processes that are ready to execute and allocates the CPU to one of them.

*Stack*: Contains temporary data(such as function parameters, return addresses, and local variables),

*State Restore (in Context Switch)*: Resume Operations

*State Save(in Context Switch)*: Save current state of CPU

*Swapping*: process is swapped out and later swapped in

*Text Section*: The program Code

*Unbounded Buffer*: Places no practical limit on the size of the buffer. The consumer may have to wait for new items, but the producer can always produce new items.

*Zero-capacity buffer*: The queue has a maximum length of zero; thus the link cannot have any messages waiting in it. In this case, the sender must block until the recipient receives the message.