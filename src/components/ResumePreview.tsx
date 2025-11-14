import { ResumeData } from "@/pages/Builder";
import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

interface ResumePreviewProps {
  data: ResumeData;
}

const ResumePreview = ({ data }: ResumePreviewProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden print:shadow-none print:rounded-none" id="resume-preview">
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #resume-preview, #resume-preview * {
            visibility: visible;
          }
          #resume-preview {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
      `}</style>
      
      <div className="p-8 space-y-6">
        {/* Header */}
        <div className="border-b-2 border-primary pb-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {data.personalInfo.fullName || "Your Name"}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            {data.personalInfo.email && (
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                <span>{data.personalInfo.email}</span>
              </div>
            )}
            {data.personalInfo.phone && (
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                <span>{data.personalInfo.phone}</span>
              </div>
            )}
            {data.personalInfo.location && (
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{data.personalInfo.location}</span>
              </div>
            )}
            {data.personalInfo.linkedin && (
              <div className="flex items-center gap-1">
                <Linkedin className="w-4 h-4" />
                <span>{data.personalInfo.linkedin}</span>
              </div>
            )}
            {data.personalInfo.portfolio && (
              <div className="flex items-center gap-1">
                <Globe className="w-4 h-4" />
                <span>{data.personalInfo.portfolio}</span>
              </div>
            )}
          </div>
        </div>

        {/* Summary */}
        {data.summary && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Professional Summary</h2>
            <p className="text-gray-700 text-sm leading-relaxed">{data.summary}</p>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Work Experience</h2>
            <div className="space-y-4">
              {data.experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="font-semibold text-gray-900">{exp.title}</h3>
                      <p className="text-gray-700">{exp.company}</p>
                    </div>
                    <div className="text-right text-sm text-gray-600">
                      <p>{exp.location}</p>
                      <p>
                        {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                      </p>
                    </div>
                  </div>
                  {exp.description && (
                    <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Education</h2>
            <div className="space-y-3">
              {data.education.map((edu) => (
                <div key={edu.id} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-700">{edu.school}</p>
                    {edu.gpa && <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>}
                  </div>
                  <div className="text-right text-sm text-gray-600">
                    <p>{edu.location}</p>
                    <p>{edu.graduationDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Skills</h2>
            <div className="space-y-2">
              {data.skills.map((skill) => (
                <div key={skill.id}>
                  <span className="font-semibold text-gray-900">{skill.category}: </span>
                  <span className="text-gray-700">{skill.items}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumePreview;
