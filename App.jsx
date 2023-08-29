const { useState } = React;

function App() {
  const [signup, setSignup] = useState(false);

  if(signup) {
    return <SignupForm  signup={signup} setSignup={setSignup} />
  }
  else {
    return <SuccessSub signup={signup} setSignup={setSignup} />
  }
}

const domApp = document.getElementById("app");
const root = ReactDOM.createRoot(domApp);
root.render(<App />);