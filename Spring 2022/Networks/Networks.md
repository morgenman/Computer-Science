---
updated: 2022-02-16_10:35:42-05:00
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
	* if-modified-since: <date\>

* HTTP/1 vs HTTP/2:
	* ![[Pasted image 20220216103315.png]]
	* ![[Pasted image 20220216103327.png]]
	* Order matters less:
	* Http/3 has better security

## SMTP
* 