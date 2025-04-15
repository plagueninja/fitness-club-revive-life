
import { useState } from "react";
import { Play, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Sample video URL - replace with your actual fitness video URL
const WORKOUT_VIDEO_URL = "https://player.vimeo.com/video/414860166?h=7158ba0342";

const VideoHero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative h-[600px] flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          className="object-cover w-full h-full"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-people-exercising-in-a-fitness-class-6869-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-fitness-darkblue opacity-70"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="heading-xl mb-4 leading-tight">
            Fitness is not a destination.
            <span className="text-fitness-purple"> It is a way of life.</span>
          </h1>
          <p className="text-lg opacity-90 mb-8">
            Transform your body and mind with our expert trainers and state-of-the-art facilities. 
            Start your fitness journey today.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              className="btn-primary flex items-center gap-2"
              onClick={() => window.location.href = '/fat-loss-plan'}
            >
              Get Started
              <ChevronRight size={20} />
            </button>
            <button 
              className="flex items-center gap-2 text-white border border-white py-3 px-6 rounded-md hover:bg-white hover:bg-opacity-10 transition-all"
              onClick={() => setIsVideoOpen(true)}
            >
              <Play size={20} className="text-fitness-purple" />
              Watch Video
            </button>
          </div>
        </div>
      </div>

      {/* Video Dialog */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-3xl p-0 bg-black">
          <div className="relative pb-[56.25%] overflow-hidden">
            <iframe 
              src={WORKOUT_VIDEO_URL}
              className="absolute top-0 left-0 w-full h-full" 
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default VideoHero;
