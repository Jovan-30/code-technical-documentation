// System Design - process of planning, structuring and defining the architecture of
//                 software system
// ---------------------------------------------------------------------------------


// Goal (System Design) - build systems in a coherent, effecient and organized way
// ---------------------------------------------------------------------------------
// Designing the:
// 1. Architecture
// 2. Interface
// 3. Data



// Principles of System Design - Availability - percentage of time within some period
//                                              when system can be used and perform what
//                                              it's supposed to do.
// ---------------------------------------------------------------------------------
// Determine quality of system we design
// Able to access - Available
//
// Timeframe = (Uptime + Downtime)    - Total time system is in existence.
// Functioning = Uptime               - When system is accessible and operating
//
// What percentage of our system is "functioning" within a given timeframe?
//
// Availability = Uptime / (Uptime + Downtime)
//
// Example 1:
// Uptime   = 300 hours
// Downtime = 15 hours (due to updates)
// Availability = 300 hours / 315 hours
// Availability = 0.952  * 100 = 95.2%



// Nine's of Availability
// ---------------------------------------------------------------------------------
// Example: A life support device then you need to maximize the availability of a system.
// High amount of availability is more expensive