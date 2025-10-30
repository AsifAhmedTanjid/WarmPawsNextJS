
import next from "next";

export default async function getAllServices() {
  const result = await fetch(
    "http://localhost:3000/data/data.json",
    {
      next: {
        revalidate: 10,
      },
    }
  );
  if (!result.ok) {
    throw new Error("There was an error fetching data");
  }

  return result.json();
}