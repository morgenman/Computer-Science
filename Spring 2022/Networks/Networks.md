---
updated: 2022-02-07_10:21:36-05:00
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


# Data Transmission
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
* 

