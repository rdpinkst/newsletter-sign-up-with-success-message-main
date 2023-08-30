function SignupForm({ signup, setSignup }) {
  const [email, setEmail] = useState("");

  function validateEmail(e) {
    e.preventDefault();
    if(email === "") {
      return;
    }
    setEmail(prevEmail => "")
    setSignup(prevState => !prevState)
    
  }

    return (
      <div className="flex border border-black rounded-3xl bg-white w-50 
           max-[375px]:flex-col-reverse max-[375px]:w-full max-[375px]:border-none max-[375px]:rounded-none">
        <div className="w-50 h-50 flex flex-col justify-center m-10 max-[375px]:ml-4 max-[375px]:mr-4">
  
          <h1 className="font-bold text-5xl mb-4 mr-10 ml-10 max-[375px]:text-4xl max-[375px]:ml-0 max-[375px]:mb-6">Stay updated!</h1>
        
          <p className="mb-4 max-[375px]:mb-5">Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className="list-image-none list-inside mb-4 max-[375px]:mb-6">
            {/* <li className="mb-2"><span className="ml-2">Product discovery and building what matters</span></li> */}
            <li className="flex mb-2 items-start"><img className="mr-3" src="../assets/images/icon-list.svg" /><span>Product discovery and building what matters</span></li>

            {/* <li className="mb-2"><span className="ml-2">Measuring to ensure updates are a success</span></li> */}
            <li className="flex mb-2 items-start"><img className="mr-3" src="../assets/images/icon-list.svg" /><span>Measuring to ensure updates are a success</span></li>
            {/* <li className="mb-2"><span className="ml-2">And much more!</span></li>   */}
            <li className="flex mb-2 items-start"><img className="mr-3" src="../assets/images/icon-list.svg" /><span>And much more!</span></li>

          </ul>
          
          <form action="#" className="flex flex-col max-[375px]:mb-6" onSubmit={validateEmail}> 
            <label className="block text-sm font-bold mb-2" htmlFor="email">Email address</label>
            <input className="appearance-none border rounded w-full px-2 py-3 mb-6 cursor-pointer" 
                    type="email" name="email" id="email" placeholder="email@company.com" 
                    value={email} onChange={(e) => setEmail(e.target.value)} />
            <button className="bg-[#242742] font-bold px-2 py-3 rounded w-full 
                    text-white hover:bg-gradient-to-r from-[#ff6257] to-[#F28C28] hover:shadow-[#ff6257]-500/50"
                    type="submit">Subscribe to monthly newsletter</button>
          </form>
        </div>
        <div className="h-50 w-50">
          <picture>
            <source className="w-full" 
              srcSet="../assets/images/illustration-sign-up-mobile.svg" 
              media="(max-width: 375px)"
              sizes="375px" />
            <img className="m-4 max-[375px]:m-0" src="../assets/images/illustration-sign-up-desktop.svg" alt="" />
          </picture>
          
        </div>
      </div>
    )
}