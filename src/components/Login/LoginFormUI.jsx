
const LoginFormUI = () => {
  return (
    <>
    <section className='bg-white-400 flex-row justify-content-center w-2/6 '>
        <div id='logo'>Instagram</div>
        <div id='formui'>
        <form>
            <label class="block">
              
              <input type="text"  placeholder="Phone number,username, or email " class=" w-3/5 mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"  />

               <input type="password" class="mt-1 block w-3/5 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500" placeholder='Password'/>

                <button class="rounded bg-sky-500 m-5 p-1 px-20 text-white font-semibold ">Log in </button> 
            </label>

            <div id='divider-or' className=' divide-y divide-solid divide-gray-400 flex justify-center'>
                <div> <h6>OR</h6> </div>
            </div>
            <h4>Log in with Facebook</h4>
            <h6>Forgot password?</h6>

        </form>
        </div>
        
    </section>

    <section className='box2 '>
      <h3>Dont have an account? <span>Signup</span> </h3>
    </section>

    <h3> Get the app</h3>
    </>
  )
}

export default LoginFormUI