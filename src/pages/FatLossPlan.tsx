
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FatLossPlan from "@/components/FatLossPlan";

const FatLossPlanPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-fitness-darkblue text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg mb-6">30-Day Fat Loss Plan</h1>
            <p className="text-lg opacity-90">
              Your comprehensive guide to effective and sustainable fat loss through proper nutrition and exercise.
            </p>
          </div>
        </div>
      </section>
      
      {/* Fat Loss Plan */}
      <section className="section-padding">
        <div className="container-custom">
          <FatLossPlan />
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-padding bg-fitness-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-md mb-4">Success Stories</h2>
            <p className="text-gray-600 mb-8">
              See the amazing results our members have achieved with our fat loss programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex flex-col items-center mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                    alt="Testimonial"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-bold">Priya S.</h3>
                <p className="text-fitness-purple">Lost 15 kg</p>
              </div>
              <p className="text-gray-600 italic">
                "The fat loss plan at Fitness Club completely changed my approach to health. I not only lost weight but also gained energy and confidence. The trainers were supportive throughout my journey."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex flex-col items-center mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                    alt="Testimonial"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-bold">Rahul M.</h3>
                <p className="text-fitness-purple">Lost 20 kg</p>
              </div>
              <p className="text-gray-600 italic">
                "After struggling with my weight for years, the structured approach of the fat loss plan finally helped me achieve results. The nutrition guidance was particularly eye-opening."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex flex-col items-center mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                    alt="Testimonial"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-bold">Anita K.</h3>
                <p className="text-fitness-purple">Lost 12 kg</p>
              </div>
              <p className="text-gray-600 italic">
                "What I love about this program is that it's not just about losing weight, but about building healthy habits. I've maintained my results for over a year now, something I never achieved before."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-fitness-purple text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to Start Your Transformation?</h2>
            <p className="text-lg mb-8">
              Join Fitness Club today and get access to our complete fat loss program, expert trainers, and supportive community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => window.location.href = '/membership'}
                className="bg-white text-fitness-purple px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all"
              >
                Join Now
              </button>
              <button 
                onClick={() => window.location.href = '/contact'}
                className="border border-white px-6 py-3 rounded-md hover:bg-white hover:bg-opacity-10 transition-all"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FatLossPlanPage;
