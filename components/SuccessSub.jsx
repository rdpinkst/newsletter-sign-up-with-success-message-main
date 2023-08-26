function SuccessSub() {
    return (
        <div className="bg-white w-96 h-full p-10 border border-black rounded-3xl">
          <img className="h-12 w-12 mb-8" src="../assets/images/icon-list.svg" alt="check mark" />
          <h1 className="font-bold text-[#242742] text-4xl mb-4">Thanks for subscribing!</h1>
          <p className="mb-4">A confirmation email has been sent to <span className="font-bold">ash@loremcompany.com</span>. 
          Please open it and click the button inside to confirm your subscription.</p>
          <button className="bg-[#242742] text-white px-2 py-3 w-full font-bold rounded">Dismiss message</button>
        </div>
    )
}