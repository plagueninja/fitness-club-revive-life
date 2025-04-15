
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Dumbbell, Salad, Video, Award, Calendar, BarChart, Heart, BookOpen } from "lucide-react";

const Services = () => {
  // Service categories
  const serviceCategories = [
    {
      title: "Strength & Conditioning",
      description: "Build muscle, increase strength, and improve your overall fitness.",
      icon: <Dumbbell size={24} />,
      services: [
        {
          title: "Personal Training",
          description: "One-on-one sessions with expert trainers who will guide you every step of the way towards your fitness goals.",
          price: "₹1,200 per session"
        },
        {
          title: "Group Strength Training",
          description: "Join small groups for effective strength training in a supportive, motivational environment.",
          price: "₹600 per session"
        },
        {
          title: "Sport-Specific Training",
          description: "Customized training programs to improve performance in your specific sport or athletic activity.",
          price: "₹1,500 per session"
        }
      ]
    },
    {
      title: "Nutrition & Diet",
      description: "Expert guidance for optimal nutrition to support your fitness goals.",
      icon: <Salad size={24} />,
      services: [
        {
          title: "Nutrition Consultation",
          description: "Comprehensive nutrition assessment and personalized diet recommendations based on your goals.",
          price: "₹2,000 per consultation"
        },
        {
          title: "Custom Meal Plans",
          description: "Detailed meal plans customized to your dietary preferences, lifestyle, and fitness objectives.",
          price: "₹3,500 per plan"
        },
        {
          title: "Ongoing Nutrition Coaching",
          description: "Regular check-ins and adjustments to your nutrition plan as you progress toward your goals.",
          price: "₹1,800 per month"
        }
      ]
    },
    {
      title: "Video Workouts",
      description: "Access to video-based workouts that you can follow anytime, anywhere.",
      icon: <Video size={24} />,
      services: [
        {
          title: "On-Demand Library",
          description: "Access hundreds of workout videos ranging from beginner to advanced across multiple fitness disciplines.",
          price: "₹799 per month"
        },
        {
          title: "Live Virtual Classes",
          description: "Join scheduled live classes with real-time feedback from trainers.",
          price: "₹300 per class"
        },
        {
          title: "Custom Video Programs",
          description: "Personalized video workout series created specifically for your goals and fitness level.",
          price: "₹4,999 one-time"
        }
      ]
    },
    {
      title: "Specialized Programs",
      description: "Targeted programs for specific goals and fitness levels.",
      icon: <Award size={24} />,
      services: [
        {
          title: "Weight Loss Program",
          description: "Comprehensive 8-week program combining nutrition, exercise, and lifestyle changes for effective weight management.",
          price: "₹9,999 for 8 weeks"
        },
        {
          title: "Muscle Building",
          description: "Focused program designed to maximize muscle growth through strategic training and nutrition.",
          price: "₹8,999 for 12 weeks"
        },
        {
          title: "Functional Fitness",
          description: "Improve everyday movement, prevent injuries, and enhance quality of life through functional training.",
          price: "₹7,499 for 8 weeks"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-fitness-darkblue text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg mb-6">Our Services</h1>
            <p className="text-lg opacity-90">
              Discover our comprehensive range of fitness services designed to help you achieve your health and wellness goals.
            </p>
          </div>
        </div>
      </section>
      
      {/* Service Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-md mb-4">What We Offer</h2>
            <p className="text-gray-600">
              From personal training to nutrition guidance, we provide everything you need to transform your fitness journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <ServiceCard
              title="Strength Training"
              description="Expert-guided programs to build muscle and increase strength for all fitness levels."
              icon={<Dumbbell size={24} />}
            />
            <ServiceCard
              title="Nutrition Planning"
              description="Personalized diet plans tailored to your specific goals and lifestyle needs."
              icon={<Salad size={24} />}
            />
            <ServiceCard
              title="Video Workouts"
              description="Access to a library of workouts you can follow anytime, anywhere."
              icon={<Video size={24} />}
            />
            <ServiceCard
              title="Online Coaching"
              description="Virtual guidance and support from our expert trainers."
              icon={<Calendar size={24} />}
            />
            <ServiceCard
              title="Fitness Assessment"
              description="Comprehensive evaluation of your current fitness level and goals."
              icon={<BarChart size={24} />}
            />
            <ServiceCard
              title="Recovery Sessions"
              description="Specialized recovery techniques to enhance performance and prevent injuries."
              icon={<Heart size={24} />}
            />
            <ServiceCard
              title="Wellness Workshops"
              description="Educational sessions on various aspects of health and fitness."
              icon={<BookOpen size={24} />}
            />
            <ServiceCard
              title="Personal Training"
              description="One-on-one sessions with certified trainers tailored to your goals."
              icon={<Award size={24} />}
            />
          </div>
        </div>
      </section>
      
      {/* Detailed Service Categories */}
      {serviceCategories.map((category, index) => (
        <section 
          key={index} 
          className={`py-16 ${index % 2 === 0 ? 'bg-fitness-light' : 'bg-white'}`}
        >
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-start gap-12">
              {/* Category Info */}
              <div className="md:w-1/3">
                <div className="bg-white p-3 rounded-full inline-block mb-4 text-fitness-purple shadow-md">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold mb-4">{category.title}</h2>
                <p className="text-gray-700 mb-6">{category.description}</p>
                <button className="btn-secondary">
                  Learn More
                </button>
              </div>
              
              {/* Services List */}
              <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <div 
                    key={serviceIndex} 
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-fitness-purple font-semibold">{service.price}</span>
                      <button className="text-fitness-blue hover:text-fitness-purple transition-colors font-medium">
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
      
      {/* CTA Section */}
      <section className="section-padding bg-fitness-darkblue text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to Start Your Fitness Journey?</h2>
            <p className="text-lg mb-8">
              Contact us today to discuss how our services can help you achieve your fitness goals.
            </p>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="btn-primary"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
