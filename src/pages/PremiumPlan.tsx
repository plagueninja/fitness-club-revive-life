
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";

const PremiumPlan = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-fitness-light py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-lg mb-6 text-center">Premium Membership Plan</h1>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-fitness-purple">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Premium Gym Facilities"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <div className="text-3xl font-bold">₹1,999</div>
                    <div className="text-sm opacity-80">per month</div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-fitness-purple text-white px-4 py-1 rounded-full font-semibold text-sm flex items-center">
                  <Star className="h-4 w-4 mr-1" />
                  Most Popular
                </div>
              </div>
              
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6">Premium Plan Features</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-fitness-purple h-6 w-6 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">Unlimited gym access</h3>
                      <p className="text-gray-600">Enjoy extended hours and priority access to all gym facilities and equipment.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-fitness-purple h-6 w-6 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">Comprehensive fitness assessment</h3>
                      <p className="text-gray-600">Detailed assessment including body composition analysis and movement screening.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-fitness-purple h-6 w-6 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">5 sessions with a trainer</h3>
                      <p className="text-gray-600">Five monthly personal training sessions with your choice of our expert trainers.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-fitness-purple h-6 w-6 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">Unlimited group classes</h3>
                      <p className="text-gray-600">Access all group classes with priority booking up to a week in advance.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-fitness-purple h-6 w-6 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">Personalized workout plan</h3>
                      <p className="text-gray-600">Custom training program designed specifically for your goals and fitness level.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-fitness-purple h-6 w-6 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">Nutrition consultation</h3>
                      <p className="text-gray-600">Initial consultation with our nutrition specialist to align your diet with your fitness goals.</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-fitness-light p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Best For</h3>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>Intermediate fitness enthusiasts</li>
                      <li>Those seeking structure</li>
                      <li>People with specific goals</li>
                      <li>Those who enjoy group classes</li>
                    </ul>
                  </div>
                  
                  <div className="bg-fitness-light p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">What You'll Love</h3>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>Personalized attention</li>
                      <li>Balanced program approach</li>
                      <li>Variety of training options</li>
                      <li>Integrated nutrition support</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/membership" className="text-center py-3 px-6 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                    Compare Plans
                  </Link>
                  <button className="btn-primary">
                    Sign Up Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Images */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="heading-md mb-8 text-center">Premium Member Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Personal Training"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Personal Training</h3>
                <p className="text-gray-600">One-on-one sessions with our expert trainers</p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Nutrition Planning"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Nutrition Guidance</h3>
                <p className="text-gray-600">Expert advice to optimize your diet</p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Group Classes"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Premium Classes</h3>
                <p className="text-gray-600">Priority access to our most popular classes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PremiumPlan;
