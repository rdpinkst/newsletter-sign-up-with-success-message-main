function SuccessSub({ signup, setSignup, email, setEmail }) {

    function reset() {
        setEmail("");
        setSignup(prevState => !prevState);
    }
  
    return (
        <div className="flex flex-col bg-white w-96 h-full p-10 border border-black 
            rounded-3xl max-[850px]:border-none">
          <img className="h-12 w-12 mb-8 max-[850px]:mt-[100px]" src="./assets/images/icon-list.svg" alt="check mark" />
          <h1 className="font-bold text-[#242742] text-5xl mb-4">Thanks for subscribing!</h1>
          <p className="mb-4">A confirmation email has been sent to <span className="font-bold">{email}</span>. 
          Please open it and click the button inside to confirm your subscription.</p>
          <button className="bg-[#242742] hover:bg-gradient-to-r from-[#ff6257] to-[#F28C28] 
                  max-[850px]:mt-auto text-white px-2 py-3 w-full font-bold rounded"
                  onClick={reset}>Dismiss message</button>
        </div>
    )
}