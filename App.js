const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "childern" }, [
    React.createElement("h1", {}, "Hello! I'm h1 tag"),
    React.createElement("h2", {}, "Hello! I'm h2 tag"),
  ]),
  React.createElement("div", { id: "childern2" }, [
    React.createElement("h1", {}, "Hello! I'm h1 tag"),
    React.createElement("h2", {}, "Hello! I'm h2 tag"),
  ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
