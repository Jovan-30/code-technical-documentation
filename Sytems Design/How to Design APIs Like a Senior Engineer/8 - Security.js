// Rate Limiting - how many requests a client can make in a give time
// -----------------------------------------------------------------------------------------
// If user crosses the limit and block the next request and allow time to pass until next
//
// System and API can be exhausted
//
// Set for each endpoint
// Set for each user/IP address
// Overall rate limiting (if there are bots, each bot has its own rate limiting)




// Cross-Origin Resource Sharing - controls which domain can call your API from a browser
// -----------------------------------------------------------------------------------------
// Example: API is only for your application
//          Do not want other appliacation to act as if it is your application
//
// API ---> Your Application (Domain)
// API ---> Other Application (Domain)
//



// SQL & NoSQL Injection - user input is directly included in database query (read, delete data)
// -----------------------------------------------------------------------------------------



// Firewalls
// -----------------------------------------------------------------------------------------
// API --> Firewall --> Incoming Traffic



// VPN (Virtual Private Networks) - only accessed by someone within that network
// -----------------------------------------------------------------------------------------
// Internal tools like employee dashboard




// Cross-Site Request Forgery - tricks logged in user's browser into making unwanted requests
//                              to API
// -----------------------------------------------------------------------------------------
// CSRF Tokens with session cookie




// Cross-Site Scripting - inject scripts into web pages server to other users
// -----------------------------------------------------------------------------------------
// Example: A script in comments section.