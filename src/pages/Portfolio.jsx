import pssaSetupImage from "../assets/PSSA Setup.jpg";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-gray-100 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Portfolio</h2>
      </div>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center">
          <img
            src={pssaSetupImage}
            alt="PSSA Setup"
            className="w-full h-64 object-cover object-center"
          />
          <div className="p-6 flex-1 flex flex-col justify-between">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">PSSA Setup</h3>
            <p className="text-gray-700 mb-4">Setup and configuration of a PSSA testing site, including hardware installation and network integration.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
