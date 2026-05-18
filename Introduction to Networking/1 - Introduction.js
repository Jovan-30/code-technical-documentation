// Networking - practice of connecting multiple devices to share information and resources
//-------------------------------------------------------------------------------------------
// Networking connects us.
//
// Important:
// 1. Global connectivity
// 2. Efficient and Productive
// 3. Information Sharing
// 4. Economic Impact
// 5. Innovation



// Types of Networks
//-------------------------------------------------------------------------------------------
// 1. Personal Area Network (PAN) - connects devices within a user's immediate user (wired/wireless)
// Example:
// Phone and headphones
// Printers
//
//
// 2. Local Area Network (LAN) - connects devices together in one physical location (home, building,
// Example:
// Home , Office
//
// 3. Metropoltian Area Network (MAN) - over a geographical location (city, town, etc.)
//
// 4. Wide Area Network (WAN) - network of information not tied to a single location
// Example:
// Internet



// How are devices identified on networks?
//-------------------------------------------------------------------------------------------
// MAC Adress (unique) and IP address (not always unique for every device)



// MAC Address (Media Access Control) - (hardware/physical address), is a unique identifier
//                                      assigned to a network interface controller (NIC) in a
//                                      computer or networking device
//-------------------------------------------------------------------------------------------
// Unique, Non-Chanding, Fixed Format
//
// First 4-digits represent   - Manufacturer
// Next 4-digits represent    - Unique Identifier



// Data Packets - formatted unit of data sent over a network
//-------------------------------------------------------------------------------------------



// Routers - directing data packets between networks, "traffic director" (LAN and WAN)
//-------------------------------------------------------------------------------------------
// Routing tables to determine best path for data to travel



// Switches - use MAC address of a device to send data only to the port that the destination
//            is plugged into
//-------------------------------------------------------------------------------------------
// MAC address tables to understand which device are connected



// Modems - connects your network to Ineternet Service Provider infastructure, translates data
//          that can be transmitted over provider's network
//-------------------------------------------------------------------------------------------



// Peer-to-Peer - devies in networks that are equal status, act as clients and servers
//-------------------------------------------------------------------------------------------



// IP Address - unique identifier assigned to every device for identification and location
//-------------------------------------------------------------------------------------------
// Not always unique, devices within a home/business/building network can share the same address
// using internal, non-unique private IP address.
//
// Public IP Address  - unique identifier connected to internet
// Private IP Address - only unique within local network (conserve limitited IPv4 addresses)
//                      great for security and efficient communication
//
// IPv4 Address
// IPv6 Address - hexadecimal, due to running out of IP addresses



// Subnet Mask - defines a range of IP address that can be used within a network
//-------------------------------------------------------------------------------------------
// 255.255.255.0 ----> Network.Network.Network.Host



// Subnetting - dividing network into two or more networks (security and performance)
//-------------------------------------------------------------------------------------------



// Commands
//-------------------------------------------------------------------------------------------
// ping IP Address/Domain Name              - check network connectvity
// tracert IP Address/Domain Name           - path packets take to reach destination
// ipconfig                                 - displays information about network interface
// netstat -nt                              - monition for connects over network



// Protocol - rules that dictate the transmission of data over a network this including addressing,
//            routing and error handling
//-------------------------------------------------------------------------------------------




// HTTP/HTTPS (Hypertext Transfer Protocol) - core Internet protocol that defines how data is
//                                            exchanged between clients and servers on the web
//-------------------------------------------------------------------------------------------
// Forms the foundation of data transfer
// Enables communication between web browsers and web servers
// HTTP Port  - 80
// HTTPS Port - 443
// Stateless
// HTTP has no encryption data is transferred with plain text, HTTPS has encryption



// DNS (Domain Name System) - match domain name to IP address
//-------------------------------------------------------------------------------------------
// Don't have to write IP address, can use domain name, as DNS matches the address to domain
//
// Request (Search Domain Name) --> DNS Cache --> Hosts File ---> DNS Server



// SSH (Secure Shell) - establishes encrypted connections between computers for secure remote access
//-------------------------------------------------------------------------------------------
// Authentication (Verify Users)
// Secure Communication
// Portability (available for Linux, Unix, Mac, Windows)



// Network Security
//-------------------------------------------------------------------------------------------
// HTTP is not secure for passwords since plain text, need HTTPs




// Open System Interconnection (OSI) Model - show how communication occur on devices in network
//-------------------------------------------------------------------------------------------
// Layer 1: Physical  - actual physical connection between the devices (information in bits)
// Layer 2: Data Link - data transfer is error free from one node to another over physcial layer,
//                      use MAC addresses for this (handling errors)
// Layer 3: Network   - routing data across different networks, use IP addresses to direct packets
//                      to destination (IPv4/IPv6)
// Layer 4: Transport - ensure reliable, end-to-end delivery of complete message by breaking data
//                      into segments (TCP/UDP)
// Layer 5: Session   - manages session by establishing, maintaining and terminating connections
//
// Layer 6: Presentation   - translator, translates, encrypts and compresses data for application
//                           layer
// Layer 7: Application    - interacts with softare and data to be transferred over the network
//                           (protocols: HTTP/WebSockets)


// Bandwidth  - max amount of data that can be transferred
// Throughput - how much data transferred successfully
//-------------------------------------------------------------------------------------------

