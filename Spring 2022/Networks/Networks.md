---
updated: 2022-04-06_10:07:51-04:00
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


