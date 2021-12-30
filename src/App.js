import Header from "./components/Header";

function App() {
  const name = 'Brad'
  const x = false
  return (
    <div className="container">
      <Header />
    </div>
  );
}

Header.defaultProps = {
  title: 'Task Tracker',
}

export default App;
