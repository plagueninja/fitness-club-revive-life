
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="section-padding flex-grow flex items-center justify-center bg-fitness-light">
        <div className="container-custom">
          <LoginForm />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Login;
