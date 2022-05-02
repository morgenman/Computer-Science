---
updated: 2022-05-02_10:05:30-04:00
---
# Networks

* Syllabus


# Overview
![[Pasted image 20220131102906.png]]
* *Protocols* define the format, order of messages sent and received among network entities, and actions taken on msg transmission, receipt
* **frequency division multiplexing**: different channels transmitted in different bands
* ![[Pasted image 20220131104412.png]]
* Link Layer vs Network Layer...

* Cell towers ~= 10km range


# Data Transmission Introduction
Packets of data of length **L** bits
Transmits into access network at transmission rate **R**
*Link transmission rate* is a metric of bandwidth


*Transmission Delay*
*Propagation Delay*
*Processing Delay*
*Queueing Delay*

*Guided Media*: Signals propagate in solid media (copper, fiber, coax)
*Unguided Media*: Signals propagate freely (radio, wifi)
 
$\lceil$ Message size / 1500 $\rceil$ = no. of packets

Packet transmission delay = time needed to transmit l bit packet into link = L(bits)/R(bits/sec)
![[Pasted image 20220204101632.png]]
## Packet Switching
* Split into packets

![[Pasted image 20220204102004.png]]
## Transmission Delay
$\frac{L}{R}$
* L/R seconds to transmit L-bit packet into link at R bps
* **Store and Forward**: entire packet must arrive at router before it can be transmitted on next link
## End to End Delay
$\frac{2L}{R}$
* ^^ Assuming zero propagation delay and only for diagram above. The two is there because the packets are put on the link twice (one when first sent, one when it hits the middle node)
## Packet Queueing and Loss
* If arrive rate (bps) is bigger than transmission rate (bps) packets will queue, waiting to be transmitted
* Could be dropped if buffer fills
* when arrival rate > output link capacity

## Queueing Delay
* Memory size of cache
* how much 

## Routing Algorithm
![[Pasted image 20220204102844.png]]
* Part of Network Layer
* Local Forwarding Table holds header value and output link
## Circuit Switching
![[Pasted image 20220204103433.png]]
* Dedicated Resources: no sharing
* circuit-like guaranteed performance
* Waste of resources if each circuit isn't being constantly used

Two methods:
![[Pasted image 20220204104034.png]]
### Frequency Division Multiplexing (FDM)
* narrow frequency bands 
* Full bandwidth for narrow frequency band

### Time Division Multiplexing (TDM)
* Time divided into slots
* Full bandwidth for full frequency band

## Packet vs. Circuit
* Packet = more users, since users rarely are working at the same time
* How are you using the network?
	* Bursty data? Packet Switching for sure
	* on demand 
* ![[Pasted image 20220207102544.png]]

# All about delays
![[Pasted image 20220207103110.png]]

## Processing Delay
* How long does it take for the router to:
	* check bit errors
	* determine output link
* typically < msec
## Queueing Delay
* time waiting at output link for transmission
* depends on congestion level of router
## Propagation Delay
* based on distance of link
* d: length of physical link
* s: propagation speed (~2x10$^8$ m/s)
* $d_{prop}=\frac{d}{s}$
## Transmission Delay
* L: packet length (bits)
* R: link transmission rate (bps)
* $d_{trans}=\frac{L}{R}$

## Example end to end

```nomnoml
[S] 0- R,d,s[X1]
[X1] 1- R,d,s [X2]
[X2] 2- R,d,s[X3]
[X3] 3- R,d,s [D]
 ```

 $0=(\frac{L}{R}+ \frac{d}{s})$
 $1=(d_{proc}+d_{que}+ \frac{L}{R}+ \frac{d}{s})$
 $2=(d_{proc}+d_{que}+ \frac{L}{R}+ \frac{d}{s})$
 $3=(d_{proc}+d_{que}+ \frac{L}{R}+ \frac{d}{s})$
 End to end:

 $\left(\frac{L}{R}+ \frac{d}{s}\right)+(d_{proc}+d_{que}+ \frac{L}{R}+ \frac{d}{s})_{1} +$$(d_{proc}+d_{que}+ \frac{L}{R}+ \frac{d}{s})_{2} +(d_{proc}+d_{que}+ \frac{L}{R}+ \frac{d}{s})_{3}$
 ## Impact of Queueing Delay
 * R: link bandwidth (bps)
 * L: packet length (bits)
 * a: average packet arrival rate
 * Analysis:
	 * La/R ~  0 : avg. queueing delay small
	 * La/R -> 1 : avg. queueing delay large
	 * La/R >  1 : avg. queueing delay infinite

## Measuring Delay
![[Pasted image 20220207104939.png]]

```
traceroute to google.com (142.251.40.238), 30 hops max, 60 byte packets
 1  Cole-Xiaomi15.mshome.net (172.23.192.1)  0.344 ms  0.287 ms  0.266 ms
 2  137.143.63.254 (137.143.63.254)  11.186 ms  11.466 ms  11.451 ms
 3  199.109.9.105 (199.109.9.105)  17.718 ms  18.857 ms  18.833 ms
 ```

 Average, min, max

 ## Throughput
 * rate at which bits are being sent from sender to receiver
 * based on lowest link speed:
 * ![[Pasted image 20220209100943.png]]
 * $R_{S}$ is the limiting factor (*bottleneck link*)
 # Protocol Layers
 * **application**: supporting network applications 
	 * IMAP, SMTP, HTTP
 * **transport**: process-process data transfer 
	 * TCP, UDP
 * **network**: routing of datagrams from source to destination 
	 * IP, routing protocols
 * **link**: data transfer between neighboring network elements 
	 * Ethernet, 802.11 (WiFi), PPP
* **physical**: bits “on the wire”
* ![[Pasted image 20220209102753.png]]


# Network Applications
* two general paradigms: Client/Server and P2P

## Sockets
* Socket is IP:port

## Application Layer
* Protocols for transferring information 

## Transport Layer
*What does the transport layer provide to an app?*
* data integrity
* throughput
	* **Elastic**: when an app is capable of operating with whatever throughput is available
* timing
* security


![[Pasted image 20220214100912.png]]
![[Pasted image 20220214100934.png]]
![[Pasted image 20220214104452.png]]
* Proxy server caches often

* Conditional get:
	* if-modified-since: </date>

* HTTP/1 vs HTTP/2:
	* ![[Pasted image 20220216103315.png]]
	* ![[Pasted image 20220216103327.png]]
	* Order matters less:
	* Http/3 has better security

## SMTP
* Security using TCP (transport layer)
## DNS
* application layer protocol
![[Pasted image 20220218101500.png]]
* ICANN
* only 13 root servers
* Educause owns .edu
* Network Solutions owns .com .net
* Authoritative DNS servers

### RR Format
* distributed database storing resource records (RR)
	* format: `(name, value, type, ttl)`
	* ![[Pasted image 20220218103226.png]]
	* ns stores the authoritative name server 
	* ![[Pasted image 20220218103426.png]]
## P2P
![[Pasted image 20220218103854.png]]
* Client-Server vs P2P
	* Time to transfer file sized F to N peers?
	* Client-server:
		* $D_{c-s}\geq max\{N\frac{F}{u_s},\frac{F}{d_{min}}\}$
		*  ($d_{min}$ is the minimum client download rate)
		* increases linearly with N clients
	* P2P:
		* $D_{P2P}\geq max\{ \frac{F}{u_s},\frac{F}{d_{min}},N\frac{F}{(u_{s}+ \sum u_{i})}\}$
		* increases linearly with N, but peer brings service capacity
		* ![[Pasted image 20220218104809.png]]

> idea: P2P protocol which uses traditional ip/server as client



## DASH
* Dynamic Adaptive Streaming over HTTP
* Each chunk is encoded at different rates
* manifest provides urls for different chunks


# Transport Layer vs Network Layer
## Multiplexing/Demultiplexing
* done by transport layer
* Sender/Receiver 
```nomnoml
[Packet|Segment|IP Datagram]
```
![[Pasted image 20220225102446.png]]
![[Pasted image 20220225103203.png]]

Checksum

Flow Control (**receiver side**)
vs
Congestion control (**network side**)

# R(eliable) D(ata) T(ransfer)
## RDT 1.0
* Checksum to detect bit errors
* ![[Pasted image 20220228102354.png]]

## RDT 2.0
* Adding Acknowledgements
* Adding Negative Acknowledgements (NAKs)
* retransmit on NAK
* Stop and wait
* ![[Pasted image 20220228102454.png]]
* Flaw is: What happens if the Ack is lost?

## RDT 2.1
* Uses a sequence of 01010101 to keep track of whether ack/nak is needed

## RDT 2.2 
* NAK free!
* ACK for last pkt received OK

## RDT 3.0
* timeout
* Performance suffers though

$U_{sender}:$ utilization - fraction of time sender busy sending
![[Pasted image 20220302101045.png]]
![[Pasted image 20220302101108.png]]
### Solution! Pipelining
![[Pasted image 20220302101403.png]]
* Ack are delayed. 
	* if packets 5,6,7,8,9 have been sent but 6 doesn't get there, receiver sends ACK 5 until he gets 6. Then he sends ACK9 and the stream continues
	* it will only send the packed of the one not recieved

* Window size to sequence numbers
	* They can't be close to each other. 
* ![[Pasted image 20220302103250.png]]
* ![[Pasted image 20220302103738.png]]
* ACK number is the number of the **next byte expected**
* Out of order packets stored in buffer

* Receive window: how much free space in receiver buffer. 
	* *dynamic* 



	# Exam 1:
* What is a protocol? (Set of rules for everyone to follow). Defined by RFC (Request for commenting)
* Performance
	* different types of delay:
		* d_trans = L/R
		* bits/bps or B/Bps
		* K = 10^{3} M = 10^{6} G=10^{9}
		* d_{prop}= d/s
		* d_{proc}= given
		* d_{queue}=given
* packet vs circuit switching
	* Sharing the link:
		* FDM (frequency division multiplexing)
		* TDM (time)
	* Traffic intensity:
		* $\frac{La}{R}$ a = avg packet arrival rate
		* if 0, small queueing delay
		* -> 1 larg
		* > 1 inf
* Ping and Traceroute
* DOS & DDOS

* Client-Server vs P2P
* file distribution: slides 75-77
* Process is identified with IP:Port

* slides 11 & 12 api & TLS
* TCP vs UDP
	* connection oriented, connection less
	* Neither provide security or guaranteed throughput
		* only circuit switching
	* RDT vs no RDT
	* Conjestion/flow control vs not
* Persistent vs non persistent
* Proxy server reduces load
* DNS Authoritative LTD
* types of records: MX vs...

how does TCP 3.x work?
* flow control -> receiver side
* congestion control -> network


# Congestion Management
* Ex. one router inf buffer. Input/output capacity: R
	* each rate is R/2
* AIMD
	* additive increase, multiplicative decrease


## Reno (delay) vs Tahoe (loss)
* if congestion window size goes to 0, probably loss (tahoe) protocol
* Reno
	* CW : SSThresh + 3
	* SSThresh : SSThreshPrevious/2
* Tahoe
	* CW : 1
	* SSThresh : SSThreshPrevious/2

## ECN
* Explicit congestion notification
* TCP *network-assisted* congestion control
* 2 bit in IP header ToS by network router to indicate congestion
* if both 1, it's congested


# Network Layer
* Packet forwarding
* Routing
* Data plane:
	* local per router function
	* determines how datagram arrive on port is forwarded to output port
* Control Plane:
	* network wide logic
	* Two: traditional (implemented in routers) & SDN (Software defined networking)
* Best effort service model is no guarantees

* destination based forwarding (traditional)
* Generalized forwarding (based on header)


Buffer (with N flows)  = $\frac{RTT\cdot C}{\sqrt(N)}$ 

* Buffer management
	* drop: which packet to add, drop when buffers are full
	* tail drop: drop arriving packet
	* priority: drop/remove on priority basis
	* marking: which packets to mark to signal congestion

* Packet Scheduling:
	* First come first serve
	* Priority
	* Round Robin
	* Weighted fair queuing

* Priority Scheduling
	* High priority queue
	* Low priority queue
	* High priority queue is served first
* Head of line blocking

* Weighted Fair Queueing
	* generalized round robin
	* each class, i, has weight, w_i and gets weighted amount of service each cycle:
	* $w_i = \frac{1}{\sum_{j=1}^N w_j}$  (this is what the copilot came up with)
	* $w_i = \frac{w_j}{\sum_{j=1}^N w_j}$ (correct)

* Network Neutrality
	* technical
		* how an ISP should share/allocate it's resources
		  * packet scheduling, buffer management are mechanisms
		
# IP: The Internet Protocol
Segment on TCP layer
Packet on application layer
Datagram on Network layer
![[Pasted image 20220328100327.png]]

![[Pasted image 20220328100458.png]]

* ICMP interconnection message protocol
	* Used for error handling
* IP
	* max length: 64k bytes
	* typically 1500 bytes or less
	* **Every interface can have a separate IP**

## Subnets
* Higher order bits vs lower order bits
  * on an ip address, the 0.0.X.0 is higher than the far right bits
	* Subnet mask vs network mask
		* subnet: /24
			* out of 32 bits, 24 bits are common
	* CIDR: Classless InterDomain Routing
	  * pronounced 'cider'
		* a.b.c.d/x, where x is # of bits in subnet portion of address
## DHCP
* Longest prefix match
* How does an ISP get a block of addresses?
	* ICANN - allocates through 5 regional registries (RRs)
	* manages DNS root zone, including delegation of individual TLS (.com, .edu, ...) management
	* last chunk of IPv4 addresses to RRs in 2011
* IPv6 has 128 bit address space
* **Provides IP, gateway, and DNS**

## NAT
* Network Address Table
	* WAN side conversion to LAN side address
	* Cannot assign more IPs than the number of ports available
	* Outgoing datagrams replace source IP & port with NAT IP & new port
	
## IPv6
* additional motivation:
	* speed processing/forwarding: 40 byte fixed length header
	* enable different network layer treatment of flows (QoS)
	* No need for fragmentation since packets are small
	* Not all routers can be upgraded simultaneously
		* no 'flag days'
			* where you bring the network down
![[Pasted image 20220330104413.png]]
* Legacy support for ipv6: tunnel across ipv4 network
* (encapsulation)
### IP fragmentation/reassembly
* MTU (max transfer size)
* Large IP datagram divided within net
	* 4000 B datagram
	* MTU = 1500B
	* 20 B of header per each
	* 4000/1480
* How do we identify fragments
	* Len
	* ID
	* fragflag = 0
	* offset = 0

> Example
>
> 2600 datagram
> 700 bytes MTU
> ID = 424

Take off 20 bytes from 2600 (original header)
2580 bytes of data
Each datagram is going to get that header, so 680 data 20 header
offset is the bytes divided by 8
so 680/8 = 85 (divide by 8 for some reason even though already in bytes)

| Frag. # | ID  | Datagram Length | Frag flag | Offset |
| ------- | --- | --------------- | --------- | ------ |
| 1       | 424 | 700             | 1         |   0     |
| 2       | 424 | 700             | 1         |  85      |
| 3       | 424 | 700             | 1         | 170       |
| 4       | 424 | ?            | 0         |  255      |


# SDN
* Openflow: match + action 
## Flow Table
* flow defined by header fields
* generalized forwarding: simple packet-handling rules
	* match
	* actions
	* priority
	* counters
* Router
	* match: longest destination IP prefix
	* action: forward out link
* Switch
	* match: dest mac
	* action: forward/flood
* firewall
	* match: ip +udp/tcp port
	* action: permit/deny
* NAT 
	* match: ip + port
	* action: rewrite address & port


# Control Pane (routing algorithms)
* control pane = routing
* data plane = forwarding


## Link State (Dijkstra's algorithm)
* Best for static routes, or routes that change slowly over time
* each n iteration, need to check all nodes. 
	* n(n+1)/2 comparisons: O($n^{2}$) complexity
* each router must broadcast its link state information to other n routers
* When link costs depend on traffic volume, route oscillations are possible
	* ie, link being used less, so its a better route, etc
![[Pasted image 20220404102416.png]]
* **Direct cost is $\infty$ if they are not direct neighbors ** 
* Use when you have complete information about every router on the network (complete topology)
![[Pasted image 20220404103221.png]]
![[Pasted image 20220404103619.png]]
![[Pasted image 20220404104647.png]]

## Distance Vector (Bellman-Ford equation (dynamic programming)
Bellman ford equation:

Let $D_{x}(y)$: cost of least-cost path from x to y
Then...
$D_{x}(y)= min_{v}\{c_{x,v}+D_{v}(y)\}$
Recursive

Whenever a node gets a new value from it's neighbor, it recalculates it's value

Good news travels fast, bad news travels slow
n routers O($n^{2}$) messages sent


LS: incorrect link cost
DV: incorrect path cost (I have a low cost path to everywhere black holing)

## How do these scale up?
* aggregate networks into regions known as **autonomous systems**
* Intra-AS (intra-domain) protocol
	* routing within same AS 'network'
	* all routers in AS must run same intradomain protocol
	* routers in different AS can run different intra-domain routing protocols
	* 'gateway router' at edge of it's own as has links to routers in other as's
	* Common ones:
		* (provided by router manufacturer)
		* RIP
		* EIGRP
		* OSPF
			* open shortest path first
			* classic link state
			* multiple link cost metrics, dijkstras for forwarding table
		* Hierarchical ospf
			* 2 level hierarchy
			* local & backbone 
			* Each local can know just the local topology
			* each othese is NOT a unique AS. Still one AS
		

* Inter-AS (inter-domain)
	* routing among as's
	* gateways perform inter domain routing
	* boundary routers connect to backbone
	*  BGP
		* holds the internet together
		* Border Gateway Protocol (the de facto inter-domain routing protocol)
		*
		* ![[Pasted image 20220418043504.png]]
	* Routers talk to each other over TCP
	* Hot potato
		* Keep multiple routes, choose the one that has the least intra domain cost

## For Exam:
congestion control
fragmentation
longest prefix match
link state
distance vector


# Software Defined Networking (SDN)
* Congestion is solved by routing
* Around 2005, there was a renewed interest in rethinking the network control plane
We can use per router Control Plane...
* Routing done individually on each node
OR we can used a centralized controller to send them routes

## Why a logically centralized control plane?
* Easier network management: avoid router misconfigurations, greater flexibility of traffic flows
* Routers can be 'dumb': Link is broken? just push updated forwarding tables to adjust, routers don't need to 'react'
* Table-based forwarding allows 'programming' routers
* Open, non-proprietary implementation allows quick innovation
* Traffic engineering is difficult with traditional routing

## OpenFlow Controller
* Key controller to switch messages
	* features?
	* configure
	* modify state
	* packet out (send a packet out of a specific port)
* Southbound/Northbound 
	* northbound: application(network applications)plane <-> control plane
	* southbound: control plane <-> data plane
![[Pasted image 20220411104105.png]]

# ICMP (internet control message protocol)
* used by hosts and routers to communicate network-level information
	* error reporting: unreachable host, network, port, protocol
	* echo request/reply (used by ping)
* Network layer 'above' IP
	* carried in IP datagrams
* 8 bits: type, code, plus first 8 bytes of IP datagram causing error

# Link Layer
No single Link Layer protocol
Implemented in Network Interface Card (NIC)

![[Pasted image 20220413102628.png]]
## Flow Control
* Pacing between adjacent sending and receiving nodes

## Error Detection
* Errors caused by signal attenation, noise
* Detection of errors is a key component to reliable delivery
* Single bit parity: set bit so even number of 1's
* 2d parity: row & column parity
![[Pasted image 20220413103057.png]]
### Cyclic Redundancy Check (CRC)
* More powerful error detection
* D: data bits
* G: bit pattern (generator) of r+1 bits (given)
* r: number of bits
* R: the pattern of bits
* n: a value that we don't care about, except when checking our work
* R = $D\cdot 2^{r}$  XOR $R$ (xor is interchangeable with %)

Example: 
```
[   G    ][     D      ]
 1 0 0 1 || 1 0 1 1 1 0
```
G = 1001 (4 bits)
r+1 bits
r = 3 bits
$2^{r}$ = $2^{3}$=1000
D * $2^{r}$ :
```
101110 x
  1000
________

```
![[Pasted image 20220413104430.png]]
![[Pasted image 20220413104930.png]]
## Error Correction
* Correction of bit errors without retransmission

## Half/Full Duplex
* Half: one direction, then another
* Full: both at the same time


# Access Protocols
* point to point
	* ethernet connection between host and client
	* PPP for dialup
* broadcast
	* old fashioned shared wire ethernet
	* upstream HFC in cable based network
	* wifi, 4g etc
## Multiple Access Protocol 
* Distributed algorithm that determines how nodes share channels (ie determine when node can transmit)
* Communication about channel sharing must use channel itself!
	* no out-of-band channel for coordination



An ideal multiple access protocol:
*given*: multiple access channel (MAC) of rate R bps
*desiderata*: 
1. when one node wants to transmit, it can send at rate R. 
2. when M nodes want to transmit, each can send at average rate R/M
3. fully decentralized: • no special node to coordinate transmissions • no synchronization of clocks, slots
4. simple

* Three broad classes:
	* channel partitioning 
		* divide channel into smaller “pieces” (time slots, frequency, code)
		* allocate piece to node for exclusive use
		* this is where TDM and FDM come into play
			* not practical though, only so many frequencies/time atoms
	* random access 
		* channel not divided, allow collisions  
		* “recover” from collisions
		* Aloha slotted/unslotted (37%/18.1%)
		* CSMA
	* “taking turns” 
		* nodes take turns, but nodes with more to send can take longer turns
		* 

* TDMA: Time Division Multiple access
### Randoms
#### Aloha
![[Pasted image 20220415101534.png]]
![[Pasted image 20220415101546.png]]
![[Pasted image 20220415101755.png]]
![[Pasted image 20220415101804.png]]
![[Pasted image 20220415101814.png]]
* Efficiency: long-run fraction of successful slots
	* ![[Pasted image 20220415102432.png]]
	* Max efficiency is 1/e = 0.37 (37%)
	* ![[Pasted image 20220415102534.png]]
#### CSMA
* Simple: listen before transmit
	* idle? send frame
	* busy? defer
* Don't interrupt

* CSMA/CD (with collision detection)
	* Collisions detected
	* colliding transmissions aborted, reducing channel wastage
	* easy w/ wired, hard w/ wireless 
* Propagation delay causes two nodes to not hear each other's started transmission
	* entire packet transmission time wasted
![[Pasted image 20220415103448.png]]
* Efficiency: 
![[Pasted image 20220415104131.png]]


### Take your turn
#### Polling
![[Pasted image 20220415104408.png]]
#### Token passing
![[Pasted image 20220415104425.png]]
### Summary of MAC
![[Pasted image 20220422101854.png]]
* For a link, there may be multiple MAC addresses (but only one IP)
* the mac address allows us to 

# Ethernet
* Bus vs Switch
	* bus is out of date a bit

## Frame Structure
![[Pasted image 20220425101159.png]]
* Preamble used to synchronize receiver, sender clock rates
* Unreliable, connectionless
CSMA/CD - binary backoff 


## 802.3 Ethernet standards
* many different standards/speeds etc

## Switch
* link layer device which takes an *active* role
* Store, forward ethernet frames
* examine incoming MAC addresses, selectively forward frame to one or more outgoing links when frame is to be forwarded on segment, uses CSMA/CD to access segment
* Port based vlans
	* multiple virtual LANS over single physical lan infrastructure
* 802.1q protocol to link switches together in order to span Vlans


# Datacenter Networks
* thousands of hosts, closely coupled
## Load Balancer: Application Layer Routing
* Receives external client request
* directs workload within data center
## Protocols
Link Layer
* RoCE: remote DMA (RDMA) over converged ethernet
## Routing Management
* SDN

# Synthesis: A web request
*scenario*: Student connects to campus network and requests www.google.com

1. DHCP Broadcast (gives us) - encapsulated 
	1. Our own IP
	2. Addr. of first hop router
	3. DNS
2. ARP 
	1. Address Resolution Protocol
	2. mac address exchange
3. DNS
4. TCP (carrying HTTP)

# Security 
* Bob,Alice vs Trudy (intruder)


The Triad:
## Confidentiality
## Authentication
## Integrity 

Symmetric key crypto: DES


# RSA
0. given (n,e) and (n,d) as computed above
1. to encrypt message m(<n), compute $c=m^{e}mod n$
2. to decrypt received bit pattern, c, compute $m=c^{d}mod {n}$

EG: bob choose p = 5, q = 7. Then n = 35, z = 24 
e = 5 ( so e, z relatively prime)
d = 29 ( so ed-1 exactly divisible by z)

bit pattern: 00001000 
m = 12
$12^{e}$ = 24832
c = $m^{e}mod$ n 

decrypt
c = 17 
$c^{d}$ = long num
m = $c^{d}$ mod n = 12
![[Pasted image 20220502100542.png]]

## Chinese Remainder Theorem 