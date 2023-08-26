function App() {
    return (
        <div>
            <h1>Working</h1>
            <SignupForm />
            {/* <SuccessSub /> */}
        </div>
    )
}

const domApp = document.getElementById("app");
const root = ReactDOM.createRoot(domApp);
root.render(<App />);