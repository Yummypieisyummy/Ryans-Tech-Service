export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Virus & malware removal',
      description: 'Pop-ups, slow performance, or sketchy behavior? I\'ll clean it out and get you running safely again!'
    },
    {
      id: 2,
      title: 'Hardware repair & upgrades',
      description: 'Bad RAM or failing drives? I diagnose it, source the part, and fix it!'
    },
    {
      id: 3,
      title: 'New device setup',
      description: 'Got a new PC or laptop? I\'ll get it set up, your files moved over, and everything the way you want it.'
    },
    {
      id: 4,
      title: 'Data backup & transfer',
      description: 'Moving to a new machine or just want peace of mind? I\'ll make sure nothing gets left behind.'
    },
    {
      id: 5,
      title: 'Software troubleshooting',
      description: 'Something won\'t install, won\'t open, or just won\'t behave? I\'ll figure out why.'
    },
    {
      id: 6,
      title: 'Network setup',
      description: 'Home Wi-Fi giving you trouble or need a new router configured properly? I\'ve got it.'
    },
    {
      id: 7,
      title: 'Custom PC builds',
      description: 'Need a new computer built to your specifications? I\'d be happy to help!'
    },
    {
      id: 8,
      title: 'Website development',
      description: 'Need a website built or updated? I\'ll create something that looks great and works well!'
    },
    {
      id: 9,
      title: 'Custom Solutions',
      description: 'Got a unique problem or need a custom solution? I\'ll work with you to find the best approach.'
    }
  ];

  return (
    <section id="services" className="bg-gray-50 py-10 w-full">
      <div className="mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Services</h2>
        <p className="text-gray-600 text-center mb-12 w-full mx-auto">
          Here's some of the services I offer. If you don't see what you need, just ask! I'm happy to help with any computer-related issues you might have.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200" // hover:bg-blue-50 Hover effect for later functionality
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3 p-4 rounded-lg bg-blue-100">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
