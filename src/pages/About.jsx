export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">About</h2>
        
        <div className="space-y-6 text-gray-600 text-lg">
          <p>
            I'm Ryan — a Western PA local with a CS degree and years of hands-on experience fixing computers for real people in the community. I started doing tech work through word of mouth because people needed someone they could actually trust, not a stranger at a help desk reading from a script. I come to you, I explain what's wrong in plain English, and I don't charge you for things you don't need. Most of my clients find me through a neighbor who sent them my way — and that's exactly how I like it.
          </p>
          
          {/* <div className="grid md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-500 mb-2">500+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-500 mb-2">10+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-500 mb-2">24/7</h3>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
