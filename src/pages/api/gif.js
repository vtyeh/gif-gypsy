export default async function handler(req, res) {
  const apiKey = process.env.GIPHY_API_KEY;
  console.log(apiKey);

  function getRandomString(strings) {
    const randomIndex = Math.floor(Math.random() * strings.length);
    return strings[randomIndex];
  }

  const searchQueries = [
    "spongebob",
    "family guy",
    "disney",
    "math lady",
    "cat",
    "bob's burgers",
    "schitts creek",
  ];
  const randomQuery = getRandomString(searchQueries);

  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${randomQuery}&limit=10`
    );
    const data = await response.json();
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: "failed to fetch gif" });
  }
}
