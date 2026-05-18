// API (Application Programming Interface) - defines how software components should interact
//                                           (communicate and exchange data) with each other
// -----------------------------------------------------------------------------------------
// Set of rules and protocols that define how software components should interact
//
// Example 1:
// Client <---> API <---> Server
//
//
// API is a contract:
// What requests can be made?
// How to make them?
// What responses to expect?



// Stateful Design - remember past interactions; requests are connected
//                   maintains state/session information of each client
// -----------------------------------------------------------------------------------------
// Define: Maintains information about the client's state across multiple requests, the server
//         remembers previous interactions.
//
// Example: A shopping cart application where the server remembers what items you’ve added to
//          your cart during your session.



// Stateless Design - no memory of past requests; each request is independant (only required info)
//                    does not store any client session information between requests
// -----------------------------------------------------------------------------------------
// Define: each request from client to server is treated as independant, server does not store
//         any information about the client's previous requests
//
// Example: HTTP is a stateless protocol, when you make requests to a web server, it process
//          that request without remembering any previous interactions.
//



// REST (Representational State Transfer) - transfer state between applications using HTTP
//                                          and working with JSON exchanging data
// -----------------------------------------------------------------------------------------
// Resource Based - organized around resources using HTTP methods
// Stateless.
// Standardized Methods - GET, POST, PUT, DELETE.
// Advantage: common type
// Protocol: HTTP
//
// Best For: web and mobile apps



// GraphQL - (backend with) a single endpoint that the client connects to and client makes
//           a request/query
// -----------------------------------------------------------------------------------------
// Query Language - client requests what they need
// Single Endpoint - one endpoint for all operations
// Operations: query (read), mutation (write), subscription (real time)
// Advantage: not a lot of round trips (single request and get all data)
// Protocol: HTTP
//
// Best For: complex user interfaces



// gRPC (Remote Procedure Call) - protocol buffers
// -----------------------------------------------------------------------------------------
//
// Advantage: not a lot of round trips
//
// Best For: microservices



// REST vs GraphQL
// -----------------------------------------------------------------------------------------
// Resource based endpoints     ---   Single endpoint for all operations
// Multiple requests for data   ---   Single request for precise data
// HTTP methods                 ---   Query language
// Fixed response structure     ---   Client specific response structure
// Built-in HTTP caching        ---   Application level caching
// Specific versioning (/v1/v2) ---   Schema evolution without versioning



// Design Principles
// -----------------------------------------------------------------------------------------
// 1. Consistent  - naming, patterbs
// 2. Simplicity  - core use cases
// 3. Security    - authentication, authorization, input validation, rate limiting
// 4. Performance - caching stategies, pagination, limit payloads, reduce round trips


