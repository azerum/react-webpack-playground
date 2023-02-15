const users = [{
  name: 'Bob'
}, {
  name: 'Jack'
}, {
  name: 'Jill'
}];
function Counter({
  initialCount
}) {
  const [count, setCount] = React.useState(initialCount);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(prev => prev + 1)
  }, "+"), /*#__PURE__*/React.createElement("p", null, count), /*#__PURE__*/React.createElement("ul", null, users.map((u, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, u.name))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(prev => prev - 1)
  }, "-"));
}
const app = /*#__PURE__*/React.createElement(Counter, {
  initialCount: 42
});
const root = ReactDOM.createRoot(banana);
root.render(app);