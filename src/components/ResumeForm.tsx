import { ResumeData } from "@/pages/Builder";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

interface ResumeFormProps {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
}

const ResumeForm = ({ data, onChange }: ResumeFormProps) => {
  const updatePersonalInfo = (field: string, value: string) => {
    onChange({
      ...data,
      personalInfo: { ...data.personalInfo, [field]: value },
    });
  };

  const updateSummary = (value: string) => {
    onChange({ ...data, summary: value });
  };

  const addExperience = () => {
    onChange({
      ...data,
      experience: [
        ...data.experience,
        {
          id: Date.now().toString(),
          title: "",
          company: "",
          location: "",
          startDate: "",
          endDate: "",
          current: false,
          description: "",
        },
      ],
    });
  };

  const updateExperience = (id: string, field: string, value: any) => {
    onChange({
      ...data,
      experience: data.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    });
  };

  const removeExperience = (id: string) => {
    onChange({
      ...data,
      experience: data.experience.filter((exp) => exp.id !== id),
    });
  };

  const addEducation = () => {
    onChange({
      ...data,
      education: [
        ...data.education,
        {
          id: Date.now().toString(),
          degree: "",
          school: "",
          location: "",
          graduationDate: "",
          gpa: "",
        },
      ],
    });
  };

  const updateEducation = (id: string, field: string, value: string) => {
    onChange({
      ...data,
      education: data.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    });
  };

  const removeEducation = (id: string) => {
    onChange({
      ...data,
      education: data.education.filter((edu) => edu.id !== id),
    });
  };

  const addSkill = () => {
    onChange({
      ...data,
      skills: [
        ...data.skills,
        {
          id: Date.now().toString(),
          category: "",
          items: "",
        },
      ],
    });
  };

  const updateSkill = (id: string, field: string, value: string) => {
    onChange({
      ...data,
      skills: data.skills.map((skill) =>
        skill.id === id ? { ...skill, [field]: value } : skill
      ),
    });
  };

  const removeSkill = (id: string) => {
    onChange({
      ...data,
      skills: data.skills.filter((skill) => skill.id !== id),
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              value={data.personalInfo.fullName}
              onChange={(e) => updatePersonalInfo("fullName", e.target.value)}
              placeholder="John Doe"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={data.personalInfo.email}
                onChange={(e) => updatePersonalInfo("email", e.target.value)}
                placeholder="john@example.com"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                value={data.personalInfo.phone}
                onChange={(e) => updatePersonalInfo("phone", e.target.value)}
                placeholder="(555) 123-4567"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={data.personalInfo.location}
              onChange={(e) => updatePersonalInfo("location", e.target.value)}
              placeholder="New York, NY"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="linkedin">LinkedIn</Label>
              <Input
                id="linkedin"
                value={data.personalInfo.linkedin}
                onChange={(e) => updatePersonalInfo("linkedin", e.target.value)}
                placeholder="linkedin.com/in/johndoe"
              />
            </div>
            <div>
              <Label htmlFor="portfolio">Portfolio</Label>
              <Input
                id="portfolio"
                value={data.personalInfo.portfolio}
                onChange={(e) => updatePersonalInfo("portfolio", e.target.value)}
                placeholder="johndoe.com"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Professional Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            value={data.summary}
            onChange={(e) => updateSummary(e.target.value)}
            placeholder="Write a brief summary about your professional background and goals..."
            rows={4}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Work Experience</CardTitle>
          <Button onClick={addExperience} size="sm" variant="outline">
            <Plus className="w-4 h-4 mr-2" />
            Add Experience
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {data.experience.map((exp) => (
            <div key={exp.id} className="space-y-4 p-4 border border-border rounded-lg">
              <div className="flex justify-between items-start">
                <div className="grid grid-cols-2 gap-4 flex-1">
                  <div>
                    <Label>Job Title</Label>
                    <Input
                      value={exp.title}
                      onChange={(e) => updateExperience(exp.id, "title", e.target.value)}
                      placeholder="Software Engineer"
                    />
                  </div>
                  <div>
                    <Label>Company</Label>
                    <Input
                      value={exp.company}
                      onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                      placeholder="Tech Corp"
                    />
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeExperience(exp.id)}
                  className="ml-2"
                >
                  <Trash2 className="w-4 h-4 text-destructive" />
                </Button>
              </div>
              <div>
                <Label>Location</Label>
                <Input
                  value={exp.location}
                  onChange={(e) => updateExperience(exp.id, "location", e.target.value)}
                  placeholder="San Francisco, CA"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Start Date</Label>
                  <Input
                    value={exp.startDate}
                    onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
                    placeholder="Jan 2020"
                  />
                </div>
                <div>
                  <Label>End Date</Label>
                  <Input
                    value={exp.endDate}
                    onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                    placeholder="Dec 2023"
                    disabled={exp.current}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={`current-${exp.id}`}
                  checked={exp.current}
                  onCheckedChange={(checked) =>
                    updateExperience(exp.id, "current", checked)
                  }
                />
                <Label htmlFor={`current-${exp.id}`}>I currently work here</Label>
              </div>
              <div>
                <Label>Description</Label>
                <Textarea
                  value={exp.description}
                  onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                  placeholder="Describe your responsibilities and achievements..."
                  rows={3}
                />
              </div>
            </div>
          ))}
          {data.experience.length === 0 && (
            <p className="text-center text-muted-foreground py-8">
              No experience added yet. Click "Add Experience" to get started.
            </p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Education</CardTitle>
          <Button onClick={addEducation} size="sm" variant="outline">
            <Plus className="w-4 h-4 mr-2" />
            Add Education
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {data.education.map((edu) => (
            <div key={edu.id} className="space-y-4 p-4 border border-border rounded-lg">
              <div className="flex justify-between items-start">
                <div className="grid grid-cols-2 gap-4 flex-1">
                  <div>
                    <Label>Degree</Label>
                    <Input
                      value={edu.degree}
                      onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                      placeholder="Bachelor of Science"
                    />
                  </div>
                  <div>
                    <Label>School</Label>
                    <Input
                      value={edu.school}
                      onChange={(e) => updateEducation(edu.id, "school", e.target.value)}
                      placeholder="University Name"
                    />
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeEducation(edu.id)}
                  className="ml-2"
                >
                  <Trash2 className="w-4 h-4 text-destructive" />
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Location</Label>
                  <Input
                    value={edu.location}
                    onChange={(e) => updateEducation(edu.id, "location", e.target.value)}
                    placeholder="Boston, MA"
                  />
                </div>
                <div>
                  <Label>Graduation Date</Label>
                  <Input
                    value={edu.graduationDate}
                    onChange={(e) => updateEducation(edu.id, "graduationDate", e.target.value)}
                    placeholder="May 2019"
                  />
                </div>
              </div>
              <div>
                <Label>GPA (Optional)</Label>
                <Input
                  value={edu.gpa}
                  onChange={(e) => updateEducation(edu.id, "gpa", e.target.value)}
                  placeholder="3.8/4.0"
                />
              </div>
            </div>
          ))}
          {data.education.length === 0 && (
            <p className="text-center text-muted-foreground py-8">
              No education added yet. Click "Add Education" to get started.
            </p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Skills</CardTitle>
          <Button onClick={addSkill} size="sm" variant="outline">
            <Plus className="w-4 h-4 mr-2" />
            Add Skill Category
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {data.skills.map((skill) => (
            <div key={skill.id} className="space-y-2 p-4 border border-border rounded-lg">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1 space-y-2">
                  <div>
                    <Label>Category</Label>
                    <Input
                      value={skill.category}
                      onChange={(e) => updateSkill(skill.id, "category", e.target.value)}
                      placeholder="Programming Languages"
                    />
                  </div>
                  <div>
                    <Label>Skills</Label>
                    <Input
                      value={skill.items}
                      onChange={(e) => updateSkill(skill.id, "items", e.target.value)}
                      placeholder="JavaScript, Python, Java"
                    />
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeSkill(skill.id)}
                >
                  <Trash2 className="w-4 h-4 text-destructive" />
                </Button>
              </div>
            </div>
          ))}
          {data.skills.length === 0 && (
            <p className="text-center text-muted-foreground py-8">
              No skills added yet. Click "Add Skill Category" to get started.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumeForm;
