import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Search, 
  Shield, 
  CheckCircle, 
  XCircle, 
  FileText, 
  Calendar,
  User,
  GraduationCap,
  Award,
  AlertTriangle
} from "lucide-react";

const VerifyCertificate = () => {
  const { toast } = useToast();
  const [certificateId, setCertificateId] = useState('');
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Mock verification data
  const mockResults = {
    'FUC/2023/CS/001': {
      valid: true,
      studentName: 'John Doe',
      program: 'Bachelor of Computer Science',
      graduationDate: '2023-07-15',
      gpa: '3.75',
      classification: 'Second Class Upper',
      certificateType: 'Bachelor\'s Degree',
      issueDate: '2023-08-20',
      verificationDate: new Date().toISOString().split('T')[0]
    },
    'FUC/2022/BBA/045': {
      valid: true,
      studentName: 'Mary Johnson',
      program: 'Bachelor of Business Administration',
      graduationDate: '2022-11-30',
      gpa: '3.92',
      classification: 'First Class',
      certificateType: 'Bachelor\'s Degree',
      issueDate: '2023-01-15',
      verificationDate: new Date().toISOString().split('T')[0]
    },
    'INVALID123': {
      valid: false,
      error: 'Certificate not found in our records'
    }
  };

  const handleVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!certificateId.trim()) {
      toast({
        title: "Error",
        description: "Please enter a certificate ID",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const result = mockResults[certificateId] || {
        valid: false,
        error: 'Certificate not found in our records'
      };
      
      setVerificationResult(result);
      setIsLoading(false);
      
      if (result.valid) {
        toast({
          title: "Certificate Verified",
          description: "The certificate is valid and authentic.",
        });
      } else {
        toast({
          title: "Verification Failed",
          description: result.error,
          variant: "destructive"
        });
      }
    }, 2000);
  };

  const handleReset = () => {
    setCertificateId('');
    setVerificationResult(null);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header Section */}
        <section className="bg-gradient-hero text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/10 p-4 rounded-2xl">
                  <Shield className="w-12 h-12 text-yellow-200" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Certificate Verification
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Verify the authenticity of Faith University College certificates. 
                Enter the certificate ID to check if it's genuine and valid.
              </p>
            </div>
          </div>
        </section>

        {/* Verification Form */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {/* Search Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Search className="w-6 h-6 mr-3 text-primary" />
                    Verify Certificate
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Enter the certificate ID found on the official document to verify its authenticity.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleVerification} className="space-y-6">
                    <div>
                      <Label htmlFor="certificateId">Certificate ID *</Label>
                      <div className="flex gap-4 mt-2">
                        <Input
                          id="certificateId"
                          value={certificateId}
                          onChange={(e) => setCertificateId(e.target.value)}
                          placeholder="e.g., FUC/2023/CS/001"
                          className="flex-1"
                          required
                        />
                        <Button 
                          type="submit" 
                          variant="hero" 
                          disabled={isLoading}
                          className="min-w-[120px]"
                        >
                          {isLoading ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                              Verifying...
                            </>
                          ) : (
                            <>
                              <Search className="w-4 h-4 mr-2" />
                              Verify
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start space-x-2">
                        <FileText className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div className="text-sm text-blue-800">
                          <p className="font-medium mb-1">Certificate ID Format</p>
                          <p className="text-blue-700">
                            Certificate IDs follow the format: FUC/YEAR/PROGRAM/NUMBER
                            <br />
                            Example: FUC/2023/CS/001, FUC/2022/BBA/045
                          </p>
                        </div>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Verification Result */}
              {verificationResult && (
                <Card className={verificationResult.valid ? 'border-green-200 bg-green-50/50' : 'border-red-200 bg-red-50/50'}>
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      {verificationResult.valid ? (
                        <>
                          <CheckCircle className="w-6 h-6 mr-3 text-green-600" />
                          Certificate Verified
                        </>
                      ) : (
                        <>
                          <XCircle className="w-6 h-6 mr-3 text-red-600" />
                          Verification Failed
                        </>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {verificationResult.valid ? (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div>
                              <Label className="text-muted-foreground">Student Name</Label>
                              <div className="flex items-center mt-1">
                                <User className="w-4 h-4 text-green-600 mr-2" />
                                <span className="font-medium text-academic">{verificationResult.studentName}</span>
                              </div>
                            </div>
                            
                            <div>
                              <Label className="text-muted-foreground">Program</Label>
                              <div className="flex items-center mt-1">
                                <GraduationCap className="w-4 h-4 text-green-600 mr-2" />
                                <span className="font-medium text-academic">{verificationResult.program}</span>
                              </div>
                            </div>
                            
                            <div>
                              <Label className="text-muted-foreground">Classification</Label>
                              <div className="flex items-center mt-1">
                                <Award className="w-4 h-4 text-green-600 mr-2" />
                                <Badge variant="secondary" className="bg-green-100 text-green-800">
                                  {verificationResult.classification}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <div>
                              <Label className="text-muted-foreground">Graduation Date</Label>
                              <div className="flex items-center mt-1">
                                <Calendar className="w-4 h-4 text-green-600 mr-2" />
                                <span className="font-medium text-academic">
                                  {new Date(verificationResult.graduationDate).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                  })}
                                </span>
                              </div>
                            </div>
                            
                            <div>
                              <Label className="text-muted-foreground">CGPA</Label>
                              <div className="flex items-center mt-1">
                                <span className="font-medium text-academic text-lg">{verificationResult.gpa}/4.0</span>
                              </div>
                            </div>
                            
                            <div>
                              <Label className="text-muted-foreground">Certificate Type</Label>
                              <div className="flex items-center mt-1">
                                <FileText className="w-4 h-4 text-green-600 mr-2" />
                                <span className="font-medium text-academic">{verificationResult.certificateType}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border-t border-green-200 pt-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">Certificate Issue Date:</span>
                              <span className="ml-2 font-medium">{new Date(verificationResult.issueDate).toLocaleDateString()}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Verification Date:</span>
                              <span className="ml-2 font-medium">{new Date(verificationResult.verificationDate).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-green-100 border border-green-200 rounded-lg p-4">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <span className="font-medium text-green-800">
                              This certificate is authentic and issued by Faith University College.
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="bg-red-100 border border-red-200 rounded-lg p-4">
                          <div className="flex items-start space-x-2">
                            <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                            <div>
                              <p className="font-medium text-red-800 mb-1">Certificate Not Found</p>
                              <p className="text-red-700 text-sm">
                                {verificationResult.error}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-sm text-muted-foreground">
                          <p className="mb-2">If you believe this is an error, please:</p>
                          <ul className="list-disc list-inside space-y-1 ml-2">
                            <li>Double-check the certificate ID for any typos</li>
                            <li>Ensure you're using the complete certificate ID</li>
                            <li>Contact our registrar's office for assistance</li>
                          </ul>
                        </div>
                      </div>
                    )}
                    
                    <Button 
                      onClick={handleReset} 
                      variant="outline" 
                      className="mt-6"
                    >
                      Verify Another Certificate
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* Sample Certificates for Testing */}
              <Card className="bg-muted/30">
                <CardHeader>
                  <CardTitle className="text-lg">Sample Certificate IDs for Testing</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    You can use these sample IDs to test the verification system:
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="bg-white p-3 rounded border">
                        <p className="font-mono text-sm font-medium">FUC/2023/CS/001</p>
                        <p className="text-xs text-muted-foreground">Valid - Computer Science Graduate</p>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <p className="font-mono text-sm font-medium">FUC/2022/BBA/045</p>
                        <p className="text-xs text-muted-foreground">Valid - Business Administration Graduate</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-white p-3 rounded border">
                        <p className="font-mono text-sm font-medium">INVALID123</p>
                        <p className="text-xs text-muted-foreground">Invalid - Will show error message</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded border border-blue-200">
                        <p className="text-xs text-blue-700">
                          Note: This is a demo system. In production, real certificate data would be verified.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default VerifyCertificate;