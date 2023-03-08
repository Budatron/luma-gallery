async function load({ data, fetch }) {
  const response = await fetch("/luma-links.json");
  const lumas = await response.json();
  return {
    age: 30,
    lumas
  };
}
export {
  load
};
