import Header from "./components/Header";

function App() {

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
