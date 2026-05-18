import { prisma } from "../lib/prisma.js";

async function createMovie() {
  const newMovie = await prisma.movie.create({
    data: {
      title: "Inception",
      description:
        "A cinematic masterpiece that seamlessly blends reality and dreams, Inception is a captivating story of a dream within a dream.",
      genre: "Sci-Fi",
      releaseDate: new Date("2010-07-16"),
      rating: 8.8,
    },
  });

  console.log(newMovie);
}

async function main() {
  await createMovie();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
