export default async function fetchData(url, options) {
  try {
    const data = await fetch(url, options)
    return await data.json()
  } catch (error) {
    return error
  }
}

