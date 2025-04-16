
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Dumbbell, Salad, Video, Award, Calendar, BarChart, Heart, BookOpen } from "lucide-react";

const Services = () => {
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
          
          {/* Added images section */}
          <div className="mt-16">
            <h2 className="heading-md mb-8 text-center">Our Facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Modern Gym Equipment"
                  className="w-full h-72 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">State-of-the-art Equipment</h3>
                  <p className="text-gray-600">The latest fitness technology to maximize your workouts</p>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Strength Training Area"
                  className="w-full h-72 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Strength Zone</h3>
                  <p className="text-gray-600">Comprehensive weight training area for all levels</p>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Group Fitness"
                  className="w-full h-72 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Group Exercise Studios</h3>
                  <p className="text-gray-600">Spacious studios for our diverse range of classes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
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
