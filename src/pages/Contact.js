function Contact({ lang }) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-gray-900">
          {lang === "mr" ? "संपर्क" : "Contact"}
        </h1>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              {lang === "mr" ? "तपशील" : "Details"}
            </h2>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>
                <span className="font-medium">Email:</span> info@maharashtraagro.com
              </li>
              <li>
                <span className="font-medium">Phone:</span> +91 90665 15656
              </li>
              <li>
                <span className="font-medium">{lang === "mr" ? "कार्यालय:" : "Office:"}</span> Pune, Maharashtra, India
              </li>
              <li>
                <span className="font-medium">{lang === "mr" ? "मुख्य कार्यालय:" : "Head Office:"}</span> Karjat, Dist. Ahilyanagar, Maharashtra, India
              </li>
            </ul>
          </div>
          <form className="bg-white rounded-lg border p-6 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  {lang === "mr" ? "पूर्ण नाव" : "Full Name"}
                </label>
                <input type="text" className="mt-1 w-full rounded-md border-gray-300 focus:border-green-600 focus:ring-green-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  {lang === "mr" ? "फोन" : "Phone"}
                </label>
                <input type="tel" className="mt-1 w-full rounded-md border-gray-300 focus:border-green-600 focus:ring-green-600" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input type="email" className="mt-1 w-full rounded-md border-gray-300 focus:border-green-600 focus:ring-green-600" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  {lang === "mr" ? "विषय" : "Subject"}
                </label>
                <select className="mt-1 w-full rounded-md border-gray-300 focus:border-green-600 focus:ring-green-600">
                  <option>{lang === "mr" ? "सामान्य चौकशी" : "General Inquiry"}</option>
                  <option>{lang === "mr" ? "सदस्यत्व अर्ज" : "Membership Application"}</option>
                  <option>{lang === "mr" ? "सेवा" : "Services"}</option>
                  <option>{lang === "mr" ? "बाजारपेठ जोडणी" : "Market Linkage"}</option>
                  <option>{lang === "mr" ? "प्रशिक्षण" : "Training"}</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  {lang === "mr" ? "संदेश" : "Message"}
                </label>
                <textarea rows={5} className="mt-1 w-full rounded-md border-gray-300 focus:border-green-600 focus:ring-green-600" />
              </div>
              <div className="sm:col-span-2">
                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                  <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-600" />
                  {lang === "mr"
                    ? "दिलेली माहिती योग्य असल्याची खात्री देतो."
                    : "I confirm the information provided is accurate."}
                </label>
              </div>
            </div>
            <button
              type="button"
              className="mt-4 inline-flex items-center justify-center rounded-md bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
            >
              {lang === "mr" ? "सबमिट" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;