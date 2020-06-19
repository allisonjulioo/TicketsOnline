export default async (endpoint, options) => {
  if (options) { 
    return await fetch(`http://localhost:4567/${endpoint}`, {
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
    return await fetch(`http://localhost:4567/${endpoint}`)
      .then(
        (data) => data,
        (reject) => reject
      )
      .catch((err) => err);
  }
};
