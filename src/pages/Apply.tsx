import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Upload, 
  FileText, 
  CheckCircle,
  ArrowLeft,
  ArrowRight
} from "lucide-react";

const Apply = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    address: '',
    city: '',
    region: '',
    
    // Academic Information
    program: '',
    previousSchool: '',
    graduationYear: '',
    gradeAverage: '',
    
    // Documents
    documents: {
      transcript: null,
      certificate: null,
      passport: null,
      recommendation: null
    },
    
    // Declaration
    agreeToTerms: false,
    agreeToProcessing: false
  });

  const programs = [
    "Bachelor of Business Administration",
    "Bachelor of Computer Science", 
    "Bachelor of Nursing",
    "Bachelor of Accounting",
    "Bachelor of Laws (LLB)",
    "Bachelor of Medical Laboratory Science",
    "Bachelor of Engineering",
    "Bachelor of Education"
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Your application has been submitted successfully. You will receive a confirmation email shortly.",
    });
  };

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-academic mb-4">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name *</Label>
            <Input 
              id="firstName" 
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              required 
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name *</Label>
            <Input 
              id="lastName" 
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              required 
            />
          </div>
          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input 
              id="email" 
              type="email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required 
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input 
              id="phone" 
              type="tel" 
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required 
            />
          </div>
          <div>
            <Label htmlFor="dateOfBirth">Date of Birth *</Label>
            <Input 
              id="dateOfBirth" 
              type="date" 
              value={formData.dateOfBirth}
              onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
              required 
            />
          </div>
          <div>
            <Label htmlFor="gender">Gender *</Label>
            <Select onValueChange={(value) => setFormData({...formData, gender: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="nationality">Nationality *</Label>
            <Input 
              id="nationality" 
              value={formData.nationality}
              onChange={(e) => setFormData({...formData, nationality: e.target.value})}
              required 
            />
          </div>
          <div>
            <Label htmlFor="city">City *</Label>
            <Input 
              id="city" 
              value={formData.city}
              onChange={(e) => setFormData({...formData, city: e.target.value})}
              required 
            />
          </div>
        </div>
        <div className="mt-4">
          <Label htmlFor="address">Address *</Label>
          <Textarea 
            id="address" 
            value={formData.address}
            onChange={(e) => setFormData({...formData, address: e.target.value})}
            required 
          />
        </div>
      </div>
    </div>
  );

  const renderAcademicInfo = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-academic mb-4">Academic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <Label htmlFor="program">Program of Choice *</Label>
            <Select onValueChange={(value) => setFormData({...formData, program: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Select your program" />
              </SelectTrigger>
              <SelectContent>
                {programs.map((program) => (
                  <SelectItem key={program} value={program}>{program}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="previousSchool">Previous School/Institution *</Label>
            <Input 
              id="previousSchool" 
              value={formData.previousSchool}
              onChange={(e) => setFormData({...formData, previousSchool: e.target.value})}
              required 
            />
          </div>
          <div>
            <Label htmlFor="graduationYear">Graduation Year *</Label>
            <Input 
              id="graduationYear" 
              type="number" 
              min="2000" 
              max="2024"
              value={formData.graduationYear}
              onChange={(e) => setFormData({...formData, graduationYear: e.target.value})}
              required 
            />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="gradeAverage">Overall Grade/CGPA *</Label>
            <Input 
              id="gradeAverage" 
              placeholder="e.g., 3.5/4.0 or A/B/C"
              value={formData.gradeAverage}
              onChange={(e) => setFormData({...formData, gradeAverage: e.target.value})}
              required 
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderDocuments = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-academic mb-4">Required Documents</h3>
        <p className="text-muted-foreground mb-6">
          Please upload the following documents. All documents should be in PDF format and not exceed 5MB each.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
            <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
            <h4 className="font-medium text-academic mb-1">Academic Transcript *</h4>
            <p className="text-sm text-muted-foreground mb-3">Official academic records</p>
            <Button variant="outline" size="sm">
              <FileText className="w-4 h-4 mr-2" />
              Upload File
            </Button>
          </div>
          
          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
            <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
            <h4 className="font-medium text-academic mb-1">Graduation Certificate *</h4>
            <p className="text-sm text-muted-foreground mb-3">School leaving certificate</p>
            <Button variant="outline" size="sm">
              <FileText className="w-4 h-4 mr-2" />
              Upload File
            </Button>
          </div>
          
          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
            <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
            <h4 className="font-medium text-academic mb-1">Passport Photo *</h4>
            <p className="text-sm text-muted-foreground mb-3">Recent passport-size photo</p>
            <Button variant="outline" size="sm">
              <FileText className="w-4 h-4 mr-2" />
              Upload File
            </Button>
          </div>
          
          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
            <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
            <h4 className="font-medium text-academic mb-1">Recommendation Letter</h4>
            <p className="text-sm text-muted-foreground mb-3">From teacher/employer (optional)</p>
            <Button variant="outline" size="sm">
              <FileText className="w-4 h-4 mr-2" />
              Upload File
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDeclaration = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-academic mb-4">Declaration & Submission</h3>
        
        <div className="bg-muted/30 rounded-lg p-6 mb-6">
          <h4 className="font-medium text-academic mb-3">Application Summary</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Name:</span>
              <span className="ml-2 font-medium">{formData.firstName} {formData.lastName}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Email:</span>
              <span className="ml-2 font-medium">{formData.email}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Program:</span>
              <span className="ml-2 font-medium">{formData.program}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Phone:</span>
              <span className="ml-2 font-medium">{formData.phone}</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Checkbox 
              id="terms" 
              checked={formData.agreeToTerms}
              onCheckedChange={(checked) => setFormData({...formData, agreeToTerms: checked as boolean})}
            />
            <div className="text-sm">
              <Label htmlFor="terms" className="text-academic">
                I agree to the <Link to="/terms" className="text-primary hover:underline">Terms and Conditions</Link> and 
                <Link to="/privacy" className="text-primary hover:underline ml-1">Privacy Policy</Link> *
              </Label>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Checkbox 
              id="processing" 
              checked={formData.agreeToProcessing}
              onCheckedChange={(checked) => setFormData({...formData, agreeToProcessing: checked as boolean})}
            />
            <div className="text-sm">
              <Label htmlFor="processing" className="text-academic">
                I consent to the processing of my personal data for admission purposes *
              </Label>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
          <div className="flex items-start space-x-2">
            <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">Next Steps</p>
              <ul className="space-y-1 text-blue-700">
                <li>• You will receive a confirmation email with your application ID</li>
                <li>• Application review takes 2-3 weeks</li>
                <li>• You'll be notified of the admission decision via email</li>
                <li>• Application fee: L$ 50 (payable after submission)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const getStepContent = () => {
    switch (currentStep) {
      case 1: return renderPersonalInfo();
      case 2: return renderAcademicInfo();
      case 3: return renderDocuments();
      case 4: return renderDeclaration();
      default: return renderPersonalInfo();
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-gradient-hero text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Link to="/" className="inline-flex items-center text-white/90 hover:text-white mb-4 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Apply to Faith University College
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Take the first step towards your future. Complete your application in {totalSteps} simple steps.
              </p>
            </div>
          </div>
        </section>

        {/* Progress Indicator */}
        <section className="py-8 bg-muted/30 border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step === currentStep 
                      ? 'bg-primary text-primary-foreground' 
                      : step < currentStep 
                        ? 'bg-green-600 text-white' 
                        : 'bg-muted text-muted-foreground'
                  }`}>
                    {step < currentStep ? <CheckCircle className="w-5 h-5" /> : step}
                  </div>
                  {step < totalSteps && (
                    <div className={`w-16 h-1 mx-2 ${
                      step < currentStep ? 'bg-green-600' : 'bg-muted'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <span className={currentStep >= 1 ? 'text-primary font-medium' : 'text-muted-foreground'}>
                Personal Info
              </span>
              <span className={currentStep >= 2 ? 'text-primary font-medium' : 'text-muted-foreground'}>
                Academic Info
              </span>
              <span className={currentStep >= 3 ? 'text-primary font-medium' : 'text-muted-foreground'}>
                Documents
              </span>
              <span className={currentStep >= 4 ? 'text-primary font-medium' : 'text-muted-foreground'}>
                Submit
              </span>
            </div>
          </div>
        </section>

        {/* Form Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit}>
                  {getStepContent()}
                  
                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8 pt-6 border-t border-border">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={handlePrev}
                      disabled={currentStep === 1}
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Previous
                    </Button>
                    
                    {currentStep < totalSteps ? (
                      <Button type="button" onClick={handleNext}>
                        Next
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <Button 
                        type="submit" 
                        variant="hero"
                        disabled={!formData.agreeToTerms || !formData.agreeToProcessing}
                      >
                        Submit Application
                        <CheckCircle className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Apply;