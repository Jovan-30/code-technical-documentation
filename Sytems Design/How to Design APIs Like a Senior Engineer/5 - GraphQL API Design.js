// GraphQL API Design - signle endpoint that gives client exactly what they need with a query
// -----------------------------------------------------------------------------------------
// REST API requires too much or not not enough data, thus multiple requests are required



// Why GraphQL?
// -----------------------------------------------------------------------------------------
// Client will make multiple requests, and not get all data, thus overall latency for page
// increases, page will not load until all data is received.



// GraphQL an HTTP request?
// -----------------------------------------------------------------------------------------
// Yes, though you can specify the exact data we need so we are not overfetching.



// Schema Design - contract between client and server
// Type Design   - process of defining the schema that outlines the structure of your data
// -----------------------------------------------------------------------------------------
// Object Types - represent object you can fecth from your service
//
// type  User {
//   id: ID!
//   name: String!
//   posts: [Post!]!
// }
//
// Query - read data
//
// type Query {
//   user(id: ID!): User;
// }
//
// Mutation - equivalent to POST, PUT, GET OR DELETE:
//
// type Mutation {
//   createUser(name: String!): User
// }


// Error Handline
// -----------------------------------------------------------------------------------------
// Returns 200 in all responses even if there was an error
//
// Thus must state:
//
// "errors" : [
//   {
//     "statusCode": 404
//     "message": "User not found",
//     "path": ["user"]
//   }
// ]


// Best Practices
// -----------------------------------------------------------------------------------------
// Keep schemas not large
// Avoid deeply nested queries, implement query depth limits
// Meaningful naming
// Use input types for mutations