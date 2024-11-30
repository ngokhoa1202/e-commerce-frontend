
export default function RegistrationPage(): JSX.Element {

  return (
     <section className="mx-auto mt-20 bg-[url('/registration/background/classroom.webp')] py-8">
      
      <form className="max-w-xl mx-auto px-16 py-10 border border-blue-400 rounded-2xl shadow-md shadow-blue-600 bg-blue-50 relative">
        <h1 className="text-3xl text-blue-800 text-center">Register</h1>

        <div className="mb-8 mt-12 grid grid-cols-2 gap-x-8">
          <div>
            <label htmlFor="firstname" className="block mb-2 text-normal font-medium text-gray-900 dark:text-white">
              First name
            </label>
            <input type="text" id="firstname" 
              className="bg-gray-50 border border-blue-500 text-gray-900 text-normal rounded-lg focus:ring-blue-500 focus:border-blue-700 block w-full p-2.5" required placeholder="John"/>
          </div>
          
          <div>
            <label htmlFor="lastname" className="block mb-2 text-normal font-medium text-gray-900 dark:text-white">
              Last name
            </label>
            <input type="text" id="lastname" 
              className="bg-gray-50 border border-blue-500 text-gray-900 text-normal rounded-lg focus:ring-blue-500 focus:border-blue-700 block w-full p-2.5" required placeholder="Smith"/>
          </div>
        </div>

        <div className="mb-8 mt-12">
          <label htmlFor="email" className="block mb-2 text-normal font-medium text-gray-900 dark:text-white">
            Your email
          </label>
          <input type="email" id="email" 
            className="bg-gray-50 border border-blue-500 text-gray-900 text-normal rounded-lg focus:ring-blue-500 focus:border-blue-700 block w-full p-2.5" required placeholder="example@abc.com"/>
          
        </div>
        <div className="mb-8">
          <label htmlFor="password" className="block mb-2 text-normal font-medium text-gray-900 dark:text-white">
            Your password 
          </label>

          <input type="password" id="password" 
            className="bg-gray-50 border border-gray-500 text-gray-900 text-normal rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5" required placeholder="********"/>
        </div>
        
        <div className="mb-12">
          <label htmlFor="password" className="block mb-2 text-normal font-medium text-gray-900 dark:text-white">
            Confirm your password
          </label>

          <input type="password" id="password" 
            className="bg-gray-50 border border-gray-500 text-gray-900 text-normal rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5" required placeholder="********"/>
        </div>

        <div className="grid grid-cols-3">

          <div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-3 text-center">
                Register
            </button>
          </div>

          <div>
            <button type="submit" className="text-gray-800 bg-slate-300 hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-3 text-center">
                Reset
            </button>
          </div>

          
        </div>
        
        <a className="absolute font-normal text-normal text-blue-600 hover:text-blue-700 active:text-blue-800 hover:underline hover:underline-offset-4 active:underline active:underline-offset-2 top-4 left-8 flex justify-center items-center" href="/login">
          &larr; Back to login
        </a>
      </form>
    </section>
  );
}
