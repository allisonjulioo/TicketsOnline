export default async (endpoint, options) => {
  if (options) { 
    return await fetch(`https://bilheteria-online.herokuapp.com/${endpoint}`, {
      method: options.method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...options.body }),
    })
      .then(
        (data) => data,
        (reject) => reject
      )
      .catch((err) => err);
  } else {
    return await fetch(`https://bilheteria-online.herokuapp.com/${endpoint}`)
      .then(
        (data) => data,
        (reject) => reject
      )
      .catch((err) => err);
  }
};
