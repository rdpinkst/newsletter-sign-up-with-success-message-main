const { useState } = React;

function App() {
  const [signup, setSignup] = useState(true);
  const [email, setEmail] = useState("");

  if(signup) {
    return <SignupForm  signup={signup} setSignup={setSignup} email={email} setEmail={setEmail} />
  }
  else {
    return <SuccessSub signup={signup} setSignup={setSignup} email={email} setEmail={setEmail} />
  }
}

const domApp = document.getElementById("app");
const root = ReactDOM.createRoot(domApp);
root.render(<App />);