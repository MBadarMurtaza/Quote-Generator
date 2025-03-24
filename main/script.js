const url =
  "https://api.codetabs.com/v1/proxy?quest=https://zenquotes.io/api/random";
let quote = document.getElementById("quote");
let auth = document.getElementById("author");
async function fetchData(link) {
  try {
    const response = await fetch(link);
    const data = await response.json();
    quote.innerHTML = `"${data[0].q}"`;
    auth.innerHTML = data[0].a;
  } catch (error) {
    console.error("Error fetching quote:", error);
  }
}
fetchData(url);
