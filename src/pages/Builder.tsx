import { useState } from "react";
import ResumeForm from "@/components/ResumeForm";
import ResumePreview from "@/components/ResumePreview";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    portfolio: string;
  };
  summary: string;
  experience: Array<{
    id: string;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
  }>;
  education: Array<{
    id: string;
    degree: string;
    school: string;
    location: string;
    graduationDate: string;
    gpa: string;
  }>;
  skills: Array<{
    id: string;
    category: string;
    items: string;
  }>;
}

const Builder = () => {
  const navigate = useNavigate();
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      portfolio: "",
    },
    summary: "",
    experience: [],
    education: [],
    skills: [],
  });

  return (
    <div className="min-h-screen bg-section-bg">
      <header className="bg-card border-b border-border sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
          <h1 className="text-xl font-semibold text-foreground">Resume Builder</h1>
          <Button onClick={() => window.print()} variant="default">
            Download PDF
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg shadow-md p-6 h-fit">
            <ResumeForm data={resumeData} onChange={setResumeData} />
          </div>
          <div className="lg:sticky lg:top-24 h-fit">
            <ResumePreview data={resumeData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;
