
import { useState } from "react";
import { Link } from "react-router-dom";
import { UserPlus } from "lucide-react";

interface RegistrationFormProps {
  type: "member" | "trainer";
}

const RegistrationForm = ({ type }: RegistrationFormProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    // Trainer specific fields
    specialization: type === "trainer" ? "" : undefined,
    experience: type === "trainer" ? "" : undefined,
    bio: type === "trainer" ? "" : undefined,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log(`${type} registration form submitted:`, formData);
  };

  return (
    <div className="max-w-2xl w-full mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">
        {type === "member" ? "Become a Member" : "Apply as a Trainer"}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-fitness-purple focus:border-fitness-purple"
            />
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-fitness-purple focus:border-fitness-purple"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-fitness-purple focus:border-fitness-purple"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-fitness-purple focus:border-fitness-purple"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-fitness-purple focus:border-fitness-purple"
            />
          </div>
          
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-fitness-purple focus:border-fitness-purple"
            />
          </div>
        </div>
        
        {type === "trainer" && (
          <>
            <div>
              <label htmlFor="specialization" className="block text-sm font-medium text-gray-700 mb-1">
                Specialization
              </label>
              <select
                id="specialization"
                name="specialization"
                required
                value={formData.specialization}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-fitness-purple focus:border-fitness-purple"
              >
                <option value="">Select your specialization</option>
                <option value="Weight Training">Weight Training</option>
                <option value="Cardio">Cardio</option>
                <option value="Yoga">Yoga</option>
                <option value="CrossFit">CrossFit</option>
                <option value="Nutrition">Nutrition</option>
                <option value="Rehabilitation">Rehabilitation</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                Years of Experience
              </label>
              <input
                type="number"
                id="experience"
                name="experience"
                required
                min={0}
                max={50}
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-fitness-purple focus:border-fitness-purple"
              />
            </div>
            
            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                Professional Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                required
                rows={4}
                value={formData.bio}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-fitness-purple focus:border-fitness-purple"
                placeholder="Tell us about your experience and approach to fitness training..."
              />
            </div>
          </>
        )}
        
        <div className="flex items-center">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            required
            className="h-4 w-4 text-fitness-purple focus:ring-fitness-purple border-gray-300 rounded"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
            I agree to the{" "}
            <a href="#" className="font-medium text-fitness-purple hover:text-fitness-blue">
              terms and conditions
            </a>
          </label>
        </div>
        
        <button
          type="submit"
          className="btn-primary w-full flex items-center justify-center gap-2"
        >
          <UserPlus size={18} />
          {type === "member" ? "Register as Member" : "Apply as Trainer"}
        </button>
      </form>
      
      <div className="mt-6 text-center text-sm">
        <p className="text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-fitness-purple hover:text-fitness-blue">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
