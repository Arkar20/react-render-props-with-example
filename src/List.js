export default function ({ render, items }) {
  console.log(render);
  return <ul>{items.map((item) => render(item))}</ul>;
}
