// Authorization - needs to check what resources users can access or not
// -----------------------------------------------------------------------------------------
// What they can do?
//
// User A - write access
// User B - read access
// User C - full control, manage settings



// Common Authorization Models
// -----------------------------------------------------------------------------------------
// Real systems often combine multiple models
//
// 1. Role Based Access Control
// 2. Attribute Based Access Control
// 3. Access Control Limit



// Role Based Access Control - assigns roles to user (admin, editor)
// -----------------------------------------------------------------------------------------
// Roles:
// Admin  - full access
// Editor - create, read, update
// Viewer - read



// Attribute Based Access Control - based on user/resource attributes
// -----------------------------------------------------------------------------------------
// User         - department, person
// Resource     - owner, classification,
// Environment  - time of day, location,
//
//
// Example:
// Only allow access when certain conditions are met
// Employee department can access at a certain time of day




// Access Control Limit - each resource has its own permission list
// -----------------------------------------------------------------------------------------
// Example: access control list for a specific resource





// Token Based Authorization (JWT, Bearer Token and Permission Logic)
// -----------------------------------------------------------------------------------------
// Whenever a user makes a request it alwayys carries this token information.
// Server validates and appl permission logic
//
// User ---> Token ---> Server
//
// Token:
// user id, roles, scopes, expiration, issuer




// Authorization Models vs Token
// -----------------------------------------------------------------------------------------
// Token carries identity and claims
// Authorization model defines what is allowed




// OAuth2 + JWT
// -----------------------------------------------------------------------------------------
// User --> (Request Access) App --> (Get Token) GitHub API
//      
// Access Tokens - represent permission you approved