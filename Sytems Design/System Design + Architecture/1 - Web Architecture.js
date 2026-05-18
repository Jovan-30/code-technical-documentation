// System Design - process of planning, structuring and defining the architecture of
//                 software system
// ---------------------------------------------------------------------------------


// What are the systems and the environments they live in?
// ---------------------------------------------------------------------------------


// Scalability - practice of designing and coding software systems to handle increased
//               worloads (more users, data or requests) while maintaining perfromance,
//               reliability and efficiency.
// ---------------------------------------------------------------------------------


// 1. Client - Device/Software that initiates communication by requesting data or services
//             from a server
// ---------------------------------------------------------------------------------
// Browser - interact with web and access different websites (Chrome, Safari)
// Client  - directly access without having to go through a browser application (app)
//
// Simple Level:
// Browser/Client --> Request (Files)                   --> Server
// Server         --> Response (HTML, CSS, JavaScript)  --> Client
//
// Does not scale well with millions of users, accessing millions of webistes



// IP Address - unique adress on web for evey device connected to a network, enabling
//              communication and data exchange across local and global networks
// ---------------------------------------------------------------------------------
// Every website has an IP address.



// 2. Domain Name System (DNS) - translates human readabel domain names into IP addresses,
//                               enabling users to access websites easily.
// ---------------------------------------------------------------------------------
// Figures out what the IP address is so you get what you want
//
// Websites have multiple IP addresses for load balancing to distribute traffic
// across servers, improving speed and preventing crashes



// 3. Web Servers - Process requests sent over a network and reply to them
// ---------------------------------------------------------------------------------
// What drives a web server?
// 1. Buesinss/ (Application Logic) - JavaScript code like backend code (outcomes). GET Comments Data
// 2. Database                      - Hold data in specific categories
//
// Sends back HTML, CSS, JavaScript for a website or portion of website
// Example: Client sends request for comments. Server sends response of comments data (JSON)
//
// Millions of users trying to access web server to get relevant comments for them (large traffic)
// Thus, the web server needs to consume resources:
// 1. Storage           - Hard Drive
// 2. Memory            - RAM - short term memory, temporay but quickly accessible data
// 3. Processing Power  - CPU unit that runs application logic
// 4. Network Speed     - access to the actual internet and how fast that access is.
//
//
// Increase the capacity for web server to consume resources:
// 1. Vertical Scaling
// 2. Horizontal Scaling



// Vertical Scaling (Scale Up) - add/increase more resources to existing server (RAM, CPU) to
//                               help handle more traffic
// ---------------------------------------------------------------------------------
// Pros:
// Low or moderate traffic
//
// Cons:
// Only so much you can add to a single server
// Limit to how much you can upgrade server
// Lack of redundacny, if server goes down, your whole application goes down with single server



// Horizontal Scaling (Scale Out) - add more servers to share the load. Duplicate/Clone
//                                  of application logic accessing the same databases
// ---------------------------------------------------------------------------------
// Can duplicate/clone these servers virtually
// Going to clonse the application logic but it doesn't make sense duplicating the data, thus
// we have the database, all the server copies connect to same database
//
// Pros:
// More suitable for large scale applications, higher fold tolerance (server does down, have othere)
// Better scalability have more servers than needed
//
// Cons:
//
//


// How do we when we have millions of users trying to request posts from web server?
// How do we horizontally scale out servers in order to service users?
// ---------------------------------------------------------------------------------
// Load Balancer



// Latency - time it takes for browser to fire a request and get back response, that total
//           travel time from when the browser starts request to response is latency.
// ---------------------------------------------------------------------------------
// Different requests take different time
// Requests can take longer due to more or larger data
// Latency might take longer because of network speed, different computer speed or resources



// Bottleneck - A bottleneck refers to a point in a system where the flow of data or processes
//              is limited, leading to a slowdown in overall performance. Such as CPU,
//              memory storage reaching its maximum capacity.
// ---------------------------------------------------------------------------------



// 4. Load Balancer - a server that distributes incoming network traffic across backend
//                    servers to ensure that no single server gets overwhelmed
// ---------------------------------------------------------------------------------
// Entry point into application space or the system
// Browser will communicate with the load balancer not directly to server
//
// Many complex systems have multiple load balancers



// How a load balancer chooses what server to route a request to? A strategy
// ---------------------------------------------------------------------------------



// Round Robin Strategy - go in order of the list of servers we have access to
// ---------------------------------------------------------------------------------
// As requests come in it goes to the next corresponding server in the list
// Assumption is the latency is the same from these requests, thus servers evenly sharing the load



// Server Down - load balancer knows if server goes down don't route requests to it,
//               now distribute load with remaining servers
// ---------------------------------------------------------------------------------


// Session Persistence - load balancing technique that directs a client's requests to
//                       the same backend server for the duration of a session. Connection
//                       between client and server is maintained for the session
// ---------------------------------------------------------------------------------
// Example, continuing scrolling, or speaking to user thus constantly making requests
//
// Thus, communication between client and server has to be consistent, meaning you can't
// jump between multiple servers and one client as that server is aware of what it has
// given the session so far. Thus maintain session persistence between client and web server.
//
// 1. Load balancer establishes connection to server
// 2. Load balancer locks in connection
// 3. User can conitnue to request things from the same server
// 4. Load balancer keeps tracking of session persistence
//
// If server goes down, the load balancer will once again re-distribute.
// So how does new server keep tracking or server down's session information?
// 1. Keep it on client, thus information that gets sent in the request to what session is about,
//    thus servers will have to be additonal computing and time to catch up to actively take over
//    session. Worse user experience because of delay.
// 2. Load balancer can also store information like client, will also be additonal computing
//    and time




// 5. Databases - store and retrieve data
// ---------------------------------------------------------------------------------
// Web servers have our business/application (functionality/outcome) logic that gets data
// from a database
//
// Larger the data, the data retrieval is very slow
//
// Storage and retireval from database is the most latency heavy step inside of the system.
// Thus, this process is time consuming.
//
// Example, if many users are requesting Canucks posts then we are doing the same thing,
// and repeating ourselves in the system and it takes the time consuming step of interacting
// with database. Then we introduce caching service to speed up process. When users (same region)
// making the same request



// 6. Caching Service - high-speed temporary data storage layer that stores frequently
//                      accessed data to reduce latency, decrease database load and
//                      improve application throughput (measure volume of data)
// ---------------------------------------------------------------------------------
// Interacting with database can be expensive in terms of time (scale out), thus caching service
//
// A form of data storage, prioritizes speed over amount of data stored, stores less data
// Not storing all data, only important data
//
// Caching service is good for heavy latency database interaction
// Only storing high impact data, caching specific data



// Business Logic     - code that has to interface with user or as a result of user (user driven)
// Application Logic  - context of code written not around the user anymore (not user driven)
// ---------------------------------------------------------------------------------


// 7. Job Servers - specialized component/service/machine responsible for managing,
//                  scheduling, executing and monitoring tasks asynchronously.
// ---------------------------------------------------------------------------------
// Job is a unit of work (computational work to have correct functionality/data so it
// performs for the user)
//
// Making sure we have correct data (application logic)
//
// Example: Store comments data inside database, get posts from news, magazines, or blogs.
// These external sources. This is where job server gets up to data, where we have written
// our application logic. Job server queries thet news and gets it back, stores into database.
// Depends on the context as to if we query all data points and then add to database, or one
// by one.


// 8. Job/General Queue - structured (first in first out) where these pending tasks
//                        wait to be processed
// ---------------------------------------------------------------------------------
//
// Example: Go to single news outlet and then updates the database. This is one job.
// Same thing with magazine or blog then update database. That is also a singnular job.



// Priority Queue - the higher the priority you want to prioritize that job over lower
//                  priority
// ---------------------------------------------------------------------------------
// 1. Higher Priority > Lower Priority
// 2. First In, First Out



// Something has to send the jobs into job queue? Web Servers
// ---------------------------------------------------------------------------------
// Web server sends jobs into the job queue.
//
// Queues and figures out when to start setting up these jobs
//
//
// How it happens?
// Up to code


// 9. Service    - a self contained deliverable system
// 9. Service(s) - encapsulate all of the components that design system (as a service)
// ---------------------------------------------------------------------------------
// Example: A profile for user, when login you are doing authentication, which is a service
// for an entire feature itself. News posts is another feature or service. Chat application
// is another service.
//


// Microservices - compositon of small independant services, each focused on a specific
//                 business capaiblity (loosely coupled).
// ---------------------------------------------------------------------------------
// Can be developed, scaled, and deployed independantly
//
// Example: Thus the news post feature doesn't need to worry about authentication service,
// it only focuses on the news post. Maybe the news post can benefit from authetication.



// Application System - overall system
// ---------------------------------------------------------------------------------
// Load balancer as an entry poiny and web server allows services to communicate with each other
//
// Web server communicates with each system
//
// Acess token - prove authorization, reducing the need to keep sending credentials
// Example: User logs in with email and password. Web server sends this to authentication service.
// Which sends an access token back to client. Client requests for posts with an access token going
// with this request. Request is sent to authentication service to verify access token. Then once
// verified (with permissions can only access specific posts) it's passed to news posts service.
// This service sees the access token verified and responds to client with posts.




// 10. Data Hose - entry point for all raw data of user actions, user behavious, events
// ---------------------------------------------------------------------------------
// Can go though some other entry point in the system, not always the server, can be client
//
// Business logic could generate this raw data from server or client
//
// Gets the raw data into a format more readable or a format that needs to be stored in data warehouse
// Both raw data and formatted data stored in data warehouse




// 11. Data Warehouse - a storage solution
// ---------------------------------------------------------------------------------
// For business intelligence, analytics, and decision making



// 12. Cloud Storage - backup source of data, lives in cloud not on sit (local machine)
// ---------------------------------------------------------------------------------
// Anywhere you can store data you want to back it up in the cloud storage


// Edge Server - sponge of servers that live in different parts of world (localized servers)
// ---------------------------------------------------------------------------------


// 13. Content Delivery Network (CDN) - deliver content to users faster and more reliable
//                                      by distributing it across geographically distributed
//                                      servers/data centers (edge servers)
// ---------------------------------------------------------------------------------
// Caching and processing data of most frequently visited websites to deliver content faster
// 
// Store files you need for website in CDN either from:
// 1. Cloud storage
// 2. Load balancer
//
// CDN holds the files that you are going to serve without having to go to web server directly
//
// Increase performance due to it decreasing latency.
// Best for global usage
// 
// Example: Origin server is where we host is in England. Now we have a user in Canada who has
// to make the request directly to origin server. This is halfway around the world so the latency
// is very long. Thus, we have an edge server. SO when the same user wants to make a request the
// DNS will work with the CDN to figure out the nearest edge server based on user's location. Find
// the IP address of nearest edge server and then make request