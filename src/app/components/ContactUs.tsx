export default function ContactUs() {
    return(
        <>
        {/* Contact Section */}
      <section className="flex-1 container mx-auto p-6 text-center md:text-left">
        <div className='grid grid-cols-1 md:grid-cols-2 border-b-2'>
        <h1 className="text-4xl font-bold text-gray-800 mb-4 self-center">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-8 mx-auto md:mx-0 text-left md:text-left max-w-md md:max-w-2xl">
          Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.
        </p>
        </div><br></br>

        <div className="flex flex-wrap gap-8">
          {/* Contact Form */}
          <form className="bg-white shadow-lg rounded-lg p-6 flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-gray-700 mb-1 font-bold sm:text-left">First Name</label>
                <input type="text" id="firstName" placeholder="First Name" className="border p-2 rounded w-full" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-700 mb-1 font-bold sm:text-left">Last Name</label>
                <input type="text" id="lastName" placeholder="Last Name" className="border p-2 rounded w-full" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1 font-bold sm:text-left">Email</label>
                <input type="email" id="email" placeholder="Email" className="border p-2 rounded w-full" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-1 font-bold sm:text-left">Phone</label>
                <input type="tel" id="phone" placeholder="Phone" className="border p-2 rounded w-full" />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="subject" className="block text-gray-700 mb-1 font-bold sm:text-left">Subject</label>
              <input type="text" id="subject" placeholder="Subject" className="border p-2 rounded w-full" />
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="block text-gray-700 mb-1 font-bold sm:text-left">Message</label>
              <textarea id="message" placeholder="Enter your Message here..." className="border p-2 rounded w-full h-32"></textarea>
            </div>
            <button className="bg-orange-500 text-white px-4 py-2 rounded mt-4">Send Your Message</button>
          </form>


          {/* Contact Information */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 space-y-6 text-gray-700">
            {/* Email */}
            <div className="flex items-center space-x-4">
              <img src="/email.svg" alt="Email Icon" className="h-6 w-6" />
              <span className="text-gray-600">support@skillbridge.com</span>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <img src="/phone.svg" alt="Phone Icon" className="h-6 w-6" />
              <span className="text-gray-600">+91 00000 00000</span>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4">
              <img src="/location.svg" alt="Location Icon" className="h-6 w-6" />
              <span className="text-gray-600">Somewhere in the World</span>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <img src="/facebook.svg" alt="Facebook Icon" className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-400">
                <img src="/twitter.svg" alt="Twitter Icon" className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-700">
                <img src="/linkedin.svg" alt="LinkedIn Icon" className="h-6 w-6" />
              </a>
              <span className='text-gray-600'>Social Network</span> 
            </div>
          </div>
        </div>
      </section>
        </>
    )
}