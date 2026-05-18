// Introduction
// --------------------------------------------------------------------------------------
// Need a database, a DBMS (Database Management System) to communicate with a database
//
// Issue: Complicated and diffcult to learn
// Solution: Prisma - API that lets you interact with database with Javascript and Typescript

// Benefits
// --------------------------------------------------------------------------------------
// No raw SQL     - Work with database without neding to provide SQL manually
// Type Safety    - Ensuring the code matches database structure
// DB Migrations  - Changing you database scehma easy
// Modern         - To make database interaction smooth and efficient
// Easy           - No complex setup
// Perforamnce    - Fast and scale well
// Auto Code Gen  - Automatically generate the code you need for database queries
//
//

// Prisma Tools
// --------------------------------------------------------------------------------------
// Prisma Client  - interact with a DB simple and efficient, easily read and write to a DB
//                  without having to write complex SQL queries
// Prisma Migrate - manage changes to DB schema in easy and ogranized way, create, apply and
//                  track changes to structure of DB (adding/removing tables or columns)
// Prisma Studio  - visual tool to help developers work with their database
//
//

// Install
// --------------------------------------------------------------------------------------
// npm init -y
// npm install typescript tsx @types/node --save-dev
// npx tsc --init
// npm install prisma @types/pg --save-dev
// npm install @prisma/client @prisma/adapter-pg pg dotenv
// npx prisma init --datasource-provider postgresql --output ../generated/prisma
//

// Initial Code (primsa/schema.prisma)
// --------------------------------------------------------------------------------------
// Generate clinet that allows to interact with DB using JavaScript:
//

// Code setups connecting to SQLite DB
//
// datasource db {
//   provider = "sqlite"
//   url      = env("DATABASE_URL")
// }
//
//

// Prisma Model (primsa/schema.prisma)
// --------------------------------------------------------------------------------------
// model Movie {
//   id Int @id @default(autoincrement())
//   title String
//   description String
//   genre String
//   releaseDate DateTime
//   rating Float?
//   createdAt DateTime @default(now())
//   updatedAt DateTime @updatedAt
// }
//

// Telling Prisma (We Made Changes)
// --------------------------------------------------------------------------------------
// npx prisma migrate dev --name init
// npx prisma generate
//

// Basic Imports (index.ts)
// --------------------------------------------------------------------------------------
// import { PrismaClient } from "@prisma/client";
//
// const prisma = new PrismaClient();
//
// async function main() {
//
// }
//
// main()
//   .then(async () => await prisma.$disconnect())
//   .catch(async (e) => {
//     console.log(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
//
//
//

// Is Prisma Working?
// --------------------------------------------------------------------------------------
// npx prisma studio
//

// lib/prisma.ts
// --------------------------------------------------------------------------------------
// import "dotenv/config";
// import { PrismaPg } from "@prisma/adapter-pg";
// import { PrismaClient } from "../generated/prisma/client.js";
//
// const connectionString = `${process.env.DATABASE_URL}`;
// const adapter = new PrismaPg({ connectionString });
// const prisma = new PrismaClient({ adapter });
// export { prisma };
//
//
//

// src/index.ts
// --------------------------------------------------------------------------------------
// import { prisma } from "../lib/prisma.js";
//
// async function main() {
//   // CREATE
//   // READ
//   // UPDATE
//   // DELETE
// }
//
// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

// Run Script:
// --------------------------------------------------------------------------------------
// "scripts": {
//   "dev": "tsx ./src/index.ts"
// },
