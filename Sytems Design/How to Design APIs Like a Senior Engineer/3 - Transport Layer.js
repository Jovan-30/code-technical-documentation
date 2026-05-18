// Transport Layer - ensure reliable, end-to-end delivery of complete message by breaking data
//                   into segments (TCP/UDP)
//-------------------------------------------------------------------------------------------


// Transmission Control Protocol (TCP) (reliable but slower)
//-------------------------------------------------------------------------------------------
// Guaranteed delivery
// Connection based (Three way handshake) - Before it sends any data
// Ordered Packets
// Error Checking
//
// Three Way Handshake
// 1. Client --> SYN --> Server     // Sends request
// 2. Server --> SYN-ACK --> Client // Receives request and acknowledge the request
// 3. Client --> ACK --> Server     // Client acknowledges the server



// User Datagram Protocol (UDP) (faster but unreliable)
//-------------------------------------------------------------------------------------------
// No delivery guaranteed (packets can be lost)
// Connectionless (No handshake)
// Faster transmission - because no handshake
// Less overhead - doesn't worry if packets sent or in order
//
// Example: Online games, live streams, etc.
