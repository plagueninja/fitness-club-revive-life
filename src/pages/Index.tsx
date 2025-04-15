
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoHero from "@/components/VideoHero";
import ServiceCard from "@/components/ServiceCard";
import TrainerCard from "@/components/TrainerCard";
import { Link } from "react-router-dom";
import { Dumbbell, Salad, Video, Calendar, Award } from "lucide-react";

const Index = () => {
  // Sample trainers data
  const featuredTrainers = [
    {
      name: "John Doe",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      specialization: "Strength Training",
      bio: "With 10+ years of experience, John specializes in strength training and powerlifting. He has helped hundreds of clients reach their fitness goals through customized training programs."
    },
    {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      specialization: "Yoga & Flexibility",
      bio: "Sarah is a certified yoga instructor with expertise in improving flexibility and mindfulness. Her holistic approach focuses on both physical and mental wellbeing."
    },
    {
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e6349?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      specialization: "Nutrition & Weight Loss",
      bio: "Michael combines nutrition science and exercise physiology to create effective weight management programs. He holds advanced certifications in sports nutrition."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <VideoHero />
      
      {/* About Section */}
      <section className="section-padding bg-fitness-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-6">Welcome to Fitness Club</h2>
            <p className="text-lg text-gray-700">
              At Fitness Club, we believe in transforming lives through fitness. Our state-of-the-art facilities, expert trainers, and supportive community are here to help you achieve your health and fitness goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6">
              <div className="text-fitness-purple text-5xl font-bold">10+</div>
              <p className="mt-2 text-gray-600">Years of Excellence</p>
            </div>
            <div className="text-center p-6">
              <div className="text-fitness-purple text-5xl font-bold">20+</div>
              <p className="mt-2 text-gray-600">Expert Trainers</p>
            </div>
            <div className="text-center p-6">
              <div className="text-fitness-purple text-5xl font-bold">1000+</div>
              <p className="mt-2 text-gray-600">Success Stories</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Our Services</h2>
            <p className="text-gray-600">
              We offer a comprehensive range of services to support your fitness journey, from personalized training to nutrition guidance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              title="Strength Training"
              description="Build muscle, increase strength, and improve your overall fitness with our expert-guided strength training programs."
              icon={<Dumbbell size={24} />}
            />
            <ServiceCard
              title="Diet Plans"
              description="Personalized nutrition guidance tailored to your specific goals, preferences, and lifestyle needs."
              icon={<Salad size={24} />}
            />
            <ServiceCard
              title="Video Workouts"
              description="Access to a library of video-based workouts that you can follow anytime, anywhere, at your own pace."
              icon={<Video size={24} />}
            />
            <ServiceCard
              title="Personal Training"
              description="One-on-one sessions with expert trainers who will guide you every step of the way towards your fitness goals."
              icon={<Award size={24} />}
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Trainers Section */}
      <section className="section-padding bg-fitness-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Meet Our Trainers</h2>
            <p className="text-gray-600">
              Our expert trainers are passionate about helping you achieve your fitness goals through personalized guidance and support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTrainers.map((trainer, index) => (
              <TrainerCard key={index} {...trainer} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/trainers" className="btn-secondary">
              View All Trainers
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-fitness-darkblue text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg mb-6">Ready to Transform Your Life?</h2>
            <p className="text-lg mb-8">
              Join Fitness Club today and start your journey towards a healthier, stronger, and more confident you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/membership" className="btn-primary">
                Become a Member
              </Link>
              <Link to="/contact" className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-fitness-darkblue transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
