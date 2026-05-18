// Backend
// --------------------------------------------------------------------------------------
// app/movies/route.ts --> localhost:3000/movies
// app/movies/db.ts
//

// GET
// --------------------------------------------------------------------------------------
// route.ts
//
// Example 1:
// export async function GET() {
//   return new Response("Hello World");
// }
//
//
// Example 2:
// import { movies } from "./db";
//
// export async function GET() {
//   return Response.json(movies);
// }
//
//

// POST
// --------------------------------------------------------------------------------------
// export async function POST(req: Request) {
//   let movie = await req.json();
//
//   const newMovie = { ...movie };
//   movies.push(newMovie);
//
//   return new Response(JSON.stringify(newMovie));
// }
//
//
//
//

// Dynamic Backend Routes
// --------------------------------------------------------------------------------------
// movies/[id]/route.ts ----> localhost:3000/movies/3
//
//
// import { movies } from "../db";
// export async function GET(
//   _req: Request,
//   { params }: { params: { id: string } },
// ) {
//   const { id } = await params;
//   const movie = movies.find((m) => m.id === Number(id));
//
//   return movie
//     ? new Response(JSON.stringify(movie))
//     : new Response("Movie not found", { status: 404 });
// }
//
//
//

// PATCH
// --------------------------------------------------------------------------------------
// export async function PATCH(
//   req: Request,
//   { params }: { params: { id: string } },
// ) {
//   const { id } = params;
//   const movieId = +id;
//
//   // Check if movie exists
//   const movie = movies.find((m) => m.id === movieId);
//   if (!movie) {
//     return new Response(JSON.stringify({ error: "Movie not found" }), {
//       status: 404,
//     });
//   }
//
//   try {
//     const updatedMovie = await req.json();
//     // Find the index of the movie
//     const index = movies.findIndex((m) => m.id === movieId);
//
//     if (index === -1) {
//       return new Response(JSON.stringify({ error: "Movie not found" }), {
//         status: 404,
//       });
//     }
//     // Update the movie
//     movies[index] = { ...movie, ...updatedMovie };
//
//     return new Response(JSON.stringify(movies[index]), { status: 200 });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: "Failed to parse JSON" }), {
//       status: 400,
//     });
//   }
// }
//
//
//

// DELETE
// --------------------------------------------------------------------------------------
// export async function DELETE(
//   req: Request,
//   { params }: { params: { id: string } }
// ) {
//   const { id } = params;
//   const movieId = +id;
//
//   // Find the movie index
//   const index = movies.findIndex((m) => m.id === movieId);
//
//   if (index === -1) {
//     return new Response(JSON.stringify({ error: "Movie not found" }), {
//       status: 404,
//     });
//   }
//
//   // Remove the movie from the collection
//   movies.splice(index, 1);
//
//   return new Response(
//     JSON.stringify({ message: "Movie deleted successfully" }),
//     { status: 200 }
//   );
// }
//
//

// URL Query Param
// --------------------------------------------------------------------------------------
// localhost:3000/movies?query=matrix
// http://localhost:3000/movies?query=dark
//
// Example 1:
// import { movies } from "./db";
// import { NextRequest } from "next/server";
//
// export async function GET(request: NextRequest) {
//   const searchParams = request.nextUrl.searchParams;
//   const query = searchParams.get("query");
//
//   const filteredMovies = query
//     ? movies.filter((m) => m.name.toLowerCase().includes(query))
//     : movies;
//
//   return new Response(JSON.stringify(filteredMovies));
// }
//
//

// Middleware
// --------------------------------------------------------------------------------------
// Middleware - function that passes as middle of request and response cycle,
//              three parameters (req, res, next)
//
// app/middleware.ts
//
//
// import { NextRequest, NextResponse } from "next/server";
// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname === "/dashboard") {
//     return NextResponse.redirect(new URL("/register", request.nextUrl));
//   }
// }
// export const config = {
//   matchers: "/dashboard",
// };
