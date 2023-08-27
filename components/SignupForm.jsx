function SignupForm() {
    return (
      <div className="flex border border-black rounded-3xl bg-white w-50">
        <div className="w-50 h-50 flex flex-col justify-center m-10">
  
          <h1 className="font-bold text-5xl mb-4 mr-10 ml-10">Stay updated!</h1>
        
          <p className="mb-4 text-[#9294a0]">Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className="list-image-[url(../assets/images/icon-list.svg)] list-inside mb-4">
            <li className="mb-2">Product discovery and building what matters</li>
            <li className="mb-2">Measuring to ensure updates are a success</li>
            <li className="mb-2">And much more!</li>  
          </ul>
          
          <form action="#" className="flex flex-col"> 
            <label className="block text-sm font-bold mb-2" htmlFor="email">Email address</label>
            <input className="appearance-none border rounded w-full px-2 py-3 mb-6" type="email" name="email" id="email" placeholder="email@company.com" />
            <button className="bg-[#242742] font-bold px-2 py-3 rounded w-full text-white hover:bg-gradient-to-r from-[#ff6257] to-[#F28C28]">Subscribe to monthly newsletter</button>
          </form>
        </div>
        <div className="h-50 w-50">
          <img className="m-4" src="../assets/images/illustration-sign-up-desktop.svg" alt="" />
        </div>
      </div>
    )
}