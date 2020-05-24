export default async (endpoint, { method = "GET", body }) => {
  return await fetch(`http://localhost:4567/${endpoint}`, {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...body }),
  })
    .then(
      (data) => data,
      (reject) => reject
    )
    .catch((err) => err);
};
