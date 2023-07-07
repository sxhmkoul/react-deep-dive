const container = React.createElement("div", { id: "container" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1" }, "Hello I'm h1"),
    React.createElement("h2", { id: "heading2" }, "Hello I'm h2"),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading1" }, "Hello I'm h1"),
    React.createElement("h2", { id: "heading2" }, "Hello I'm h2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
