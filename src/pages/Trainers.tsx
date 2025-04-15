
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrainerCard from "@/components/TrainerCard";
import { useState } from "react";

interface Trainer {
  id: number;
  name: string;
  image: string;
  specialization: string;
  bio: string;
  experience: number;
  certifications: string[];
}

const Trainers = () => {
  // Filter state
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  // Sample trainers data
  const trainersData: Trainer[] = [
    {
      id: 1,
      name: "John Doe",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      specialization: "Strength Training",
      bio: "With 10+ years of experience, John specializes in strength training and powerlifting. He has helped hundreds of clients reach their fitness goals through customized training programs.",
      experience: 10,
      certifications: ["NSCA-CPT", "CSCS", "Precision Nutrition Level 2"]
    },
    {
      id: 2,
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      specialization: "Yoga & Flexibility",
      bio: "Sarah is a certified yoga instructor with expertise in improving flexibility and mindfulness. Her holistic approach focuses on both physical and mental wellbeing.",
      experience: 8,
      certifications: ["RYT-500", "ACE-CPT", "Yoga Alliance Certified"]
    },
    {
      id: 3,
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e6349?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      specialization: "Nutrition & Weight Loss",
      bio: "Michael combines nutrition science and exercise physiology to create effective weight management programs. He holds advanced certifications in sports nutrition.",
      experience: 7,
      certifications: ["NASM-CPT", "Precision Nutrition Level 2", "ISSA Nutritionist"]
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      specialization: "Cardio & HIIT",
      bio: "Emma specializes in high-intensity interval training and cardio programs. Her energetic approach makes workouts fun while delivering exceptional results.",
      experience: 6,
      certifications: ["ACE-CPT", "AFAA Group Fitness", "TRX Certified"]
    },
    {
      id: 5,
      name: "David Kim",
      image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      specialization: "Bodybuilding",
      bio: "David has competed in numerous bodybuilding competitions and brings his expertise to clients looking to build muscle mass and improve physique.",
      experience: 12,
      certifications: ["IFBB Pro", "NASM-CPT", "Sports Nutrition Specialist"]
    },
    {
      id: 6,
      name: "Priya Patel",
      image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      specialization: "Pilates & Core Training",
      bio: "Priya is an expert in Pilates and core strengthening. She helps clients improve posture, reduce back pain, and build functional strength.",
      experience: 9,
      certifications: ["PMA Certified", "STOTT Pilates", "ACE-CPT"]
    },
    {
      id: 7,
      name: "Mark Wilson",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      specialization: "CrossFit",
      bio: "Mark is a CrossFit coach who focuses on building functional fitness through varied high-intensity workouts. His coaching emphasizes proper technique and safety.",
      experience: 8,
      certifications: ["CrossFit Level 3", "USAW Sports Performance", "Mobility Specialist"]
    },
    {
      id: 8,
      name: "Lisa Thompson",
      image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      specialization: "Senior Fitness",
      bio: "Lisa specializes in working with seniors and individuals with limited mobility. She develops safe and effective programs to improve quality of life.",
      experience: 15,
      certifications: ["ACE Senior Fitness Specialist", "NASM-CPT", "Functional Aging Specialist"]
    }
  ];
  
  // Filter options
  const specializations = [
    { id: "all", label: "All Specialties" },
    { id: "strength", label: "Strength Training" },
    { id: "yoga", label: "Yoga & Flexibility" },
    { id: "nutrition", label: "Nutrition" },
    { id: "cardio", label: "Cardio & HIIT" },
    { id: "pilates", label: "Pilates" }
  ];
  
  // Filter trainers based on active filter
  const filteredTrainers = activeFilter === "all" 
    ? trainersData 
    : trainersData.filter(trainer => 
        trainer.specialization.toLowerCase().includes(activeFilter.toLowerCase())
      );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-fitness-darkblue text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg mb-6">Our Expert Trainers</h1>
            <p className="text-lg opacity-90">
              Meet our team of certified fitness professionals dedicated to helping you reach your goals.
            </p>
          </div>
        </div>
      </section>
      
      {/* Trainers Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Filters */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {specializations.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveFilter(item.id)}
                className={`py-2 px-4 rounded-full text-sm font-medium transition-all ${
                  activeFilter === item.id
                    ? "bg-fitness-purple text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Trainers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredTrainers.map(trainer => (
              <TrainerCard
                key={trainer.id}
                name={trainer.name}
                image={trainer.image}
                specialization={trainer.specialization}
                bio={trainer.bio}
              />
            ))}
          </div>
          
          {filteredTrainers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No trainers match your filter criteria.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Become a Trainer Section */}
      <section className="section-padding bg-fitness-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Join Our Team of Trainers</h2>
            <p className="text-lg text-gray-700 mb-8">
              Are you a fitness professional looking to grow your career? We're always looking for talented trainers to join our team.
            </p>
            <button 
              onClick={() => window.location.href = '/membership'}
              className="btn-primary"
            >
              Apply Now
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Trainers;
