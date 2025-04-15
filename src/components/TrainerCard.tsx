
interface TrainerCardProps {
  name: string;
  image: string;
  specialization: string;
  bio: string;
}

const TrainerCard = ({ name, image, specialization, bio }: TrainerCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg group">
      <div className="relative overflow-hidden aspect-[3/4]">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-fitness-purple font-medium mb-3">{specialization}</p>
        <p className="text-gray-600 line-clamp-3">{bio}</p>
        <button className="mt-4 text-fitness-blue font-medium hover:text-fitness-purple transition-colors">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default TrainerCard;
