import mobileImage from "../assets/images/illustration-sign-up-mobile.svg"

function SignupForm({ signup, setSignup, email, setEmail }) {
  const [error, setError] = useState("");

  function validateEmail(e) {
    e.preventDefault();
    if(email === "") {
      setError("Email address required.")
      return;
    }
    setSignup(prevState => !prevState) 
  }
  function inputEmail(e) {
    let currError = error;
    setEmail(prevEmail => {
      currError = "";
      prevEmail = e.target.value;
      return prevEmail;
    });
    setError(currError)
  }

    return (
      <div className="flex border border-black rounded-3xl bg-white w-full 
           max-[850px]:flex-col-reverse max-[850px]:w-full max-[850px]:border-none max-[850px]:rounded-none">
        <div className="w-50 h-50 flex flex-col justify-center m-10 max-[850px]:ml-4 max-[850px]:mr-4">
  
          <h1 className="font-bold text-6xl mb-4 mr-10 ml-10 max-[850px]:text-4xl max-[850px]:ml-0 max-[850px]:mb-6">Stay updated!</h1>
        
          <p className="mb-4 text-lg max-[850px]:mb-5">Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className="list-image-none text-lg list-inside mb-4 max-[850px]:mb-6">
            <li className="flex mb-2 items-start"><img className="mr-4" src="../assets/images/icon-list.svg" /><span>Product discovery and building what matters</span></li>
            <li className="flex mb-2 items-start"><img className="mr-4" src="../assets/images/icon-list.svg" /><span>Measuring to ensure updates are a success</span></li>
            <li className="flex mb-2 items-start"><img className="mr-4" src="../assets/images/icon-list.svg" /><span>And much more!</span></li>

          </ul>
          
          <form action="#" className="flex flex-col" onSubmit={validateEmail}> 
            <label className="block text-sm font-bold mb-2 max-[850px]:text-xs" htmlFor="email">Email address</label>
            <input className="appearance-none border rounded w-full px-2 py-3 mb-1 cursor-pointer max-[850px]:rounded-lg" 
                    type="email" name="email" id="email" placeholder="email@company.com" 
                    value={email} onChange={inputEmail} />
            <small className="h-1 mb-6 text-red-800">{error}</small>
            <button className="bg-[#242742] font-bold px-2 py-4 rounded-lg w-full 
                    text-white hover:bg-gradient-to-r from-[#ff6257] to-[#F28C28] hover:shadow-[#ff6257]-500/50"
                    type="submit">Subscribe to monthly newsletter</button>
          </form>
        </div>
        <div className="w-50">
          <picture>
            <source className="w-full" 
              // srcSet="../assets/images/illustration-sign-up-mobile.svg" 
              srcSet={mobileImage}
              media="(max-width: 850px)"
              sizes="850px" />
            <img className="m-4 max-w-none max-[850px]:m-0 max-[850px]:w-full" src="../assets/images/illustration-sign-up-desktop.svg" alt="" />
          </picture>
          
        </div>
      </div>
    )
}