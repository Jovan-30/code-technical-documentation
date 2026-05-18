// Authentication - verifies that person or system trying to access app is legit
// -----------------------------------------------------------------------------------------
// Before we can authorize or restrict anything, know identity of the requester
//
// Who are you?



// Basic -
// -----------------------------------------------------------------------------------------
// Login request ---> base64(username + password)
//
// Outdated and not secure unless wrapped in HTTPS



// Bearer Token
// -----------------------------------------------------------------------------------------
// Send token (access token) with request, API verifies or rejects the token
//
// Client ---> Token ---> App ---> Success ---> Client
//
// Standard approach in API design
// Fast and stateless makes it easier to scale



// OAuth2 - protocol lets users login through a trusted provider like github
// JWT    - stateless token that contains information of user
// -----------------------------------------------------------------------------------------
// User ---> GitHub ---> App ---> API
//
// JWT Token Payload
// {
//    "user_id":
//    "expiration"
// }



// Access Token   - expire faster, used for API calls
// Refresh Token  - live longer (days/weeks), used less often (server side for security)
// -----------------------------------------------------------------------------------------
// Users don't have to log in again, and system is secure




// Single Sign On     - one login and access multiples services (company email, company calender)
// Identity Protocols - define how apps securely exchnage user login ingo
// -----------------------------------------------------------------------------------------
