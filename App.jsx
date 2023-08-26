function App() {
    return (
      <div>
        {/* <SignupForm /> */}
        <SuccessSub />
      </div>
    )
}

const domApp = document.getElementById("app");
const root = ReactDOM.createRoot(domApp);
root.render(<App />);