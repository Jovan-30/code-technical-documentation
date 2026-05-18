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



// Resource Modeling
// -----------------------------------------------------------------------------------------
// Business Domain  - Product --> Order --> Reviews
// Rest Resoucres   - products --> orders --> reviews
// URL Patterns     - /api/v1/products/id --> /api/v1/orders/id --> /products/id/reviews
//
// Do not use getProducts just label it as products as RESTful principles want resource-oriented
// nouns like products not action verbs like getProducts



// Filtering - don't want all results at once
// -----------------------------------------------------------------------------------------
// ? - query parameter start after this
//
// Example:
// GET /products?category=books&inStock=true



// Sorting - should be done in backend
// -----------------------------------------------------------------------------------------
// ? - query parameter start after this
//
// Example:
// { id: 100, title: "title", price: 100.00 }
// GET /products?sort=price_asc



// Pagination
// -----------------------------------------------------------------------------------------
// ? - query parameter start after this
//
// Example:
// [ page: 2, limit: 3, { { id: 100, title: "title", price: 100.00 } }]
// GET /products?page=2&size/limit=10



// Bandwidth  - max amount of data that can be transferred
//-------------------------------------------------------------------------------------------
// Reducing bandwidth: optomize performance, reduce latency, lower data costs



// Throughput - how much data transferred successfully
//-------------------------------------------------------------------------------------------



// Benfits of Filtering, Sorting and Pagination
// -----------------------------------------------------------------------------------------
// Saves bandwidth
// Improves performance
// Front-end more flexibility



// HTTP Methods - actions client wants to perfrom
// -----------------------------------------------------------------------------------------
// Safe         - does not change server
// Idempotent   - same effect if repeated
// 
// 
// GET    - retrieve data   // Safe and Idempotent
// POST   - create data
// PUT    - update data     // Idempotent
// DELETE - remove data     // Idempotent
// PATCH  - partial update  