const reactvar = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "children" },
    React.createElement("h1", {}, "this ia h1 tag")
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(reactvar);
