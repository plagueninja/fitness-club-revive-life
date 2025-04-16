
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const BasicPlan = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-fitness-light py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-lg mb-6 text-center">Basic Membership Plan</h1>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Basic Gym Facilities"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <div className="text-3xl font-bold">₹999</div>
                    <div className="text-sm opacity-80">per month</div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6">Basic Plan Features</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-fitness-purple h-6 w-6 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">Access to gym equipment</h3>
                      <p className="text-gray-600">Use our state-of-the-art equipment during regular hours (5AM-11PM weekdays, 6AM-10PM weekends).</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-fitness-purple h-6 w-6 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">Basic fitness assessment</h3>
                      <p className="text-gray-600">Initial assessment to establish your baseline fitness level and help set appropriate goals.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-fitness-purple h-6 w-6 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">2 sessions with a trainer</h3>
                      <p className="text-gray-600">Two complimentary personal training sessions to help you get started with proper form and technique.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-fitness-purple h-6 w-6 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">Access to group classes</h3>
                      <p className="text-gray-600">Join our energetic group classes including yoga, HIIT, and more (subject to availability).</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-fitness-light p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Best For</h3>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>Beginners to fitness</li>
                      <li>Those on a budget</li>
                      <li>People with flexible schedules</li>
                    </ul>
                  </div>
                  
                  <div className="bg-fitness-light p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Limitations</h3>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>Limited personal training</li>
                      <li>No nutrition guidance</li>
                      <li>Regular hours only (no 24/7)</li>
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
          <h2 className="heading-md mb-8 text-center">Our Basic Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Gym Equipment"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Cardio Area</h3>
                <p className="text-gray-600">Modern treadmills, ellipticals, and stationary bikes</p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Weight Area"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Weight Section</h3>
                <p className="text-gray-600">Free weights and strength training machines</p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1520877880798-5ee004e3f11e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Group Classes"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Class Studio</h3>
                <p className="text-gray-600">Spacious area for our group fitness sessions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BasicPlan;
