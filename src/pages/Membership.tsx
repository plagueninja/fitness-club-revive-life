
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";
import { UserPlus, HeartHandshake, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Membership = () => {
  const [activeTab, setActiveTab] = useState<"member" | "trainer">("member");
  
  const membershipPlans = [
    {
      name: "Basic",
      price: "₹999",
      duration: "per month",
      features: [
        "Access to gym equipment",
        "Basic fitness assessment",
        "2 sessions with a trainer",
        "Access to group classes"
      ],
      recommended: false,
      link: "/basic-plan",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Premium",
      price: "₹1,999",
      duration: "per month",
      features: [
        "Unlimited gym access",
        "Comprehensive fitness assessment",
        "5 sessions with a trainer",
        "Unlimited group classes",
        "Personalized workout plan",
        "Nutrition consultation"
      ],
      recommended: true,
      link: "/premium-plan",
      image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Ultimate",
      price: "₹3,499",
      duration: "per month",
      features: [
        "24/7 gym access",
        "Weekly fitness assessments",
        "10 sessions with a trainer",
        "Priority booking for classes",
        "Customized nutrition plan",
        "Recovery sessions",
        "Exclusive app access"
      ],
      recommended: false,
      link: "/ultimate-plan",
      image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-fitness-darkblue text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg mb-6">Join Our Fitness Community</h1>
            <p className="text-lg opacity-90 mb-8">
              Whether you're looking to become a member or join our team of trainers, 
              we're excited to welcome you to the Fitness Club family.
            </p>
          </div>
        </div>
      </section>
      
      {/* Membership Plans */}
      <section className="section-padding bg-fitness-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Membership Plans</h2>
            <p className="text-gray-700">
              Choose the perfect membership plan that fits your fitness goals and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl ${
                  plan.recommended ? 'border-2 border-fitness-purple' : ''
                }`}
              >
                {plan.recommended && (
                  <div className="bg-fitness-purple text-white text-center py-2 font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={plan.image} 
                    alt={`${plan.name} Plan`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-600">{" "}{plan.duration}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-fitness-purple mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={plan.link}
                    className={`w-full py-3 px-4 rounded-md font-semibold flex items-center justify-center gap-2 ${
                      plan.recommended 
                        ? 'bg-fitness-purple text-white hover:bg-opacity-90' 
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    } transition-colors`}
                  >
                    View Plan Details
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Registration Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Register With Us</h2>
            <p className="text-gray-600">
              Fill out the form below to join our fitness community.
            </p>
            
            {/* Tab Buttons */}
            <div className="flex justify-center mt-8 mb-8 border-b">
              <button
                onClick={() => setActiveTab("member")}
                className={`flex items-center gap-2 px-6 py-3 font-medium ${
                  activeTab === "member"
                    ? "text-fitness-purple border-b-2 border-fitness-purple"
                    : "text-gray-500 hover:text-fitness-blue"
                }`}
              >
                <UserPlus size={20} />
                Register as Member
              </button>
              <button
                onClick={() => setActiveTab("trainer")}
                className={`flex items-center gap-2 px-6 py-3 font-medium ${
                  activeTab === "trainer"
                    ? "text-fitness-purple border-b-2 border-fitness-purple"
                    : "text-gray-500 hover:text-fitness-blue"
                }`}
              >
                <HeartHandshake size={20} />
                Apply as Trainer
              </button>
            </div>
          </div>
          
          {/* Registration Form */}
          <RegistrationForm type={activeTab} />
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding bg-fitness-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find answers to common questions about our membership and trainers.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">What are your gym's operating hours?</h3>
              <p className="text-gray-600">
                Our gym is open Monday to Friday from 5:00 AM to 11:00 PM, and on weekends from 6:00 AM to 10:00 PM. Premium and Ultimate members get 24/7 access.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Can I cancel my membership anytime?</h3>
              <p className="text-gray-600">
                Yes, you can cancel your membership with 30 days' notice. There are no cancellation fees for monthly memberships.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">What qualifications do your trainers have?</h3>
              <p className="text-gray-600">
                All our trainers are certified with nationally recognized fitness certifications and have at least 2+ years of professional experience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Do you offer any discounts for students or seniors?</h3>
              <p className="text-gray-600">
                Yes, we offer special discounted rates for students and seniors. Please contact our front desk for more information.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Membership;
