function Food({ fav }) {
  return <h3>I Love {fav}</h3>;
}

function App() {
  return (
    <div className="App">
      <h1>Hello React!!</h1>
      <Food fav={"kimchi"} />
      <Food fav={"ramen"} />
      <Food fav={"gookbap"} />
      <Food fav={"sakedon"} />
    </div>
  );
}

export default App;
