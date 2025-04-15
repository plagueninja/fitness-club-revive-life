
import { CalendarClock, Dumbbell, Salad, Award } from "lucide-react";

const FatLossPlan = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Your 30-Day Fat Loss Plan</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Dumbbell className="text-fitness-purple" />
            Workout Plan
          </h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-fitness-blue">Days 1, 3, 5: Full Body Strength</h4>
              <ul className="list-disc ml-5 text-gray-700">
                <li>Squats: 3 sets of 12-15 reps</li>
                <li>Push-ups: 3 sets of 10-12 reps</li>
                <li>Dumbbell Rows: 3 sets of 12 reps per side</li>
                <li>Lunges: 3 sets of 10 reps per leg</li>
                <li>Plank: 3 sets of 30-45 seconds</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-fitness-blue">Days 2, 4, 6: Cardio Focus</h4>
              <ul className="list-disc ml-5 text-gray-700">
                <li>30 minutes of brisk walking or jogging</li>
                <li>15 minutes of interval training (30s high intensity, 60s rest)</li>
                <li>5 minutes cooldown stretching</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-fitness-blue">Day 7: Active Recovery</h4>
              <ul className="list-disc ml-5 text-gray-700">
                <li>Light walking</li>
                <li>Yoga or gentle stretching</li>
                <li>Foam rolling</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Salad className="text-fitness-purple" />
            Nutrition Plan
          </h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-fitness-blue">Daily Caloric Deficit</h4>
              <p className="text-gray-700">
                Aim for a moderate caloric deficit of 300-500 calories per day, based on your calculated maintenance calories.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-fitness-blue">Macronutrient Breakdown</h4>
              <ul className="list-disc ml-5 text-gray-700">
                <li>Protein: 1.6-2.0g per kg of body weight</li>
                <li>Fats: 0.5-0.8g per kg of body weight</li>
                <li>Carbohydrates: Remaining calories</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-fitness-blue">Key Guidelines</h4>
              <ul className="list-disc ml-5 text-gray-700">
                <li>Eat plenty of vegetables with each meal</li>
                <li>Stay hydrated (aim for 3-4 liters of water daily)</li>
                <li>Minimize processed foods and sugary drinks</li>
                <li>Have protein with each meal</li>
                <li>Plan meals ahead to avoid impulsive choices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <CalendarClock className="text-fitness-purple" />
            Weekly Progress Tracking
          </h3>
          
          <ul className="list-disc ml-5 text-gray-700">
            <li>Take weekly measurements (weight, waist, hips)</li>
            <li>Progress photos from the front, side, and back</li>
            <li>Track workout performance (weights, reps, time)</li>
            <li>Adjust caloric intake based on results</li>
            <li>Review and plan each week ahead</li>
          </ul>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Award className="text-fitness-purple" />
            Tips for Success
          </h3>
          
          <ul className="list-disc ml-5 text-gray-700">
            <li>Focus on consistency rather than perfection</li>
            <li>Get 7-9 hours of quality sleep each night</li>
            <li>Manage stress through mindfulness or relaxation techniques</li>
            <li>Have a support system or accountability partner</li>
            <li>Be patient - sustainable fat loss takes time</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="italic text-gray-600">
          * This is a general plan. For personalized guidance, please consult with one of our fitness trainers.
        </p>
        <button className="btn-primary mt-4">
          Get Personalized Plan
        </button>
      </div>
    </div>
  );
};

export default FatLossPlan;
