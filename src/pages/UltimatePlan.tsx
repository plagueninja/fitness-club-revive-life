
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Award } from "lucide-react";
import { Link } from "react-router-dom";

const UltimatePlan = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-fitness-light py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-lg mb-6 text-center">Ultimate Membership Plan</h1>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Ultimate Gym Experience"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <div className="text-3xl font-bold">₹3,499</div>
                    <div className="text-sm opacity-80">per month</div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-fitness-blue text-white px-4 py-1 rounded-full font-semibold text-sm flex items-center">
                  <Award className="h-4 w-4 mr-1" />
                  Elite Access
                </div>
              </div>
              
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6">Ultimate Plan Features</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-fitness-blue h-6 w-6 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">24/7 gym access</h3>
                      <p className="text-gray-600">Unlimited access to all facilities any time, day or night, with special keycard entry.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-fitness-blue h-6 w-6 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">Weekly fitness assessments</h3>
                      <p className="text-gray-600">Regular progress tracking with advanced metrics and performance analysis.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-fitness-blue h-6 w-6 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">10 sessions with a trainer</h3>
                      <p className="text-gray-600">Ten monthly personal training sessions with priority scheduling and our most experienced trainers.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-fitness-blue h-6 w-6 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">Priority booking for classes</h3>
                      <p className="text-gray-600">First access to all classes and workshops with guaranteed spots.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-fitness-blue h-6 w-6 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">Customized nutrition plan</h3>
                      <p className="text-gray-600">Comprehensive nutrition program with regular consultations and meal planning.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-fitness-blue h-6 w-6 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">Recovery sessions</h3>
                      <p className="text-gray-600">Access to specialized recovery techniques including massage therapy and cryotherapy.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-fitness-blue h-6 w-6 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">Exclusive app access</h3>
                      <p className="text-gray-600">Premium features in our mobile app including workout tracking and direct trainer communication.</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-fitness-light p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Best For</h3>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>Advanced fitness enthusiasts</li>
                      <li>Athletes and competitors</li>
                      <li>Those with demanding schedules</li>
                      <li>People seeking maximum results</li>
                    </ul>
                  </div>
                  
                  <div className="bg-fitness-light p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Elite Benefits</h3>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>VIP treatment</li>
                      <li>Comprehensive support system</li>
                      <li>Maximum flexibility</li>
                      <li>Premium recovery services</li>
                      <li>Holistic fitness approach</li>
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
          <h2 className="heading-md mb-8 text-center">Ultimate Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Elite Training"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Elite Training</h3>
                <p className="text-gray-600">Work with our highest-tier certified trainers</p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Recovery Zone"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Recovery Zone</h3>
                <p className="text-gray-600">Premium recovery services to optimize performance</p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="24/7 Access"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">24/7 Access</h3>
                <p className="text-gray-600">Train on your schedule with unlimited facility access</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default UltimatePlan;
