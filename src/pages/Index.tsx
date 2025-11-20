import { Button } from "@/components/ui/button";
import { FileText, Zap, Download, Edit } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Build Your Perfect Resume in Minutes
            </h1>
            <p className="text-lg lg:text-xl mb-8 text-white/90 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-150">
              Create a professional, ATS-friendly resume with our easy-to-use builder.
              Stand out from the crowd and land your dream job.
            </p>
            <Button
              size="lg"
              onClick={() => navigate("/auth")}
              className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300"
            >
              Start Building Now
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground">
            Why Choose Our Resume Builder?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                Lightning Fast
              </h3>
              <p className="text-muted-foreground">
                Create a professional resume in just minutes with our intuitive interface
                and smart templates.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Edit className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                Easy to Customize
              </h3>
              <p className="text-muted-foreground">
                Tailor your resume to any job with our flexible editing tools and
                real-time preview.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Download className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                Download & Print
              </h3>
              <p className="text-muted-foreground">
                Export your resume as a PDF or print it directly - ready to send to
                employers instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <FileText className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-card-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of job seekers who have successfully created their resumes
            with our builder.
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/builder")}
            className="font-semibold text-lg px-8 py-6"
          >
            Create Your Resume Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-section-bg border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 Resume Builder. Built with passion for job seekers.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
