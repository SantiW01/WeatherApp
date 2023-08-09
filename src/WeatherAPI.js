const key = process.env.API_KEY;

export default async function getAPI() {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${key}`
  );
  const json = await response.json();
  console.log(json);
}
