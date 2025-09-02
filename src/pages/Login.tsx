import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, User, Users, ShieldCheck, Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginType, setLoginType] = useState("student");

  const handleLogin = (e: React.FormEvent, userType: string) => {
    e.preventDefault();
    // Mock login - redirect to appropriate dashboard
    if (userType === "student") {
      window.location.href = "/student/dashboard";
    } else if (userType === "staff") {
      window.location.href = "/staff/dashboard";
    } else if (userType === "admin") {
      window.location.href = "/admin/dashboard";
    }
  };

  const userTypes = [
    {
      id: "student",
      label: "Student",
      icon: GraduationCap,
      description: "Access your student portal, view results, register for courses, and manage your academic journey.",
      placeholder: "Enter your student ID or email"
    },
    {
      id: "staff",
      label: "Staff/Lecturer",
      icon: Users,
      description: "Access staff portal, manage courses, take attendance, and enter grades.",
      placeholder: "Enter your staff ID or email"
    },
    {
      id: "admin",
      label: "Admin/Registrar",
      icon: ShieldCheck,
      description: "Access administrative functions, manage admissions, and oversee university operations.",
      placeholder: "Enter your admin credentials"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <GraduationCap className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
            <p className="mt-2 text-white/80">Sign in to your Faith University account</p>
          </div>

          {/* Login Form */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl font-bold text-academic">Login</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={loginType} onValueChange={setLoginType} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  {userTypes.map((type) => {
                    const Icon = type.icon;
                    return (
                      <TabsTrigger 
                        key={type.id} 
                        value={type.id}
                        className="flex flex-col items-center space-y-1 p-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-xs">{type.label}</span>
                      </TabsTrigger>
                    );
                  })}
                </TabsList>

                {userTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <TabsContent key={type.id} value={type.id} className="mt-0">
                      <div className="text-center mb-6">
                        <div className="flex justify-center mb-3">
                          <div className="bg-primary/10 rounded-2xl p-3">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                        <h3 className="font-semibold text-academic mb-2">{type.label} Portal</h3>
                        <p className="text-sm text-muted-foreground">{type.description}</p>
                      </div>

                      <form onSubmit={(e) => handleLogin(e, type.id)} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor={`${type.id}-username`}>Username or Email</Label>
                          <Input
                            id={`${type.id}-username`}
                            type="text"
                            placeholder={type.placeholder}
                            required
                            className="h-12"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor={`${type.id}-password`}>Password</Label>
                          <div className="relative">
                            <Input
                              id={`${type.id}-password`}
                              type={showPassword ? "text" : "password"}
                              placeholder="Enter your password"
                              required
                              className="h-12 pr-10"
                            />
                            <button
                              type="button"
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-academic"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <label className="flex items-center space-x-2 text-sm">
                            <input type="checkbox" className="rounded border-border" />
                            <span>Remember me</span>
                          </label>
                          <Link 
                            to="/forgot-password" 
                            className="text-sm text-primary hover:text-primary-glow transition-colors"
                          >
                            Forgot password?
                          </Link>
                        </div>

                        <Button type="submit" variant="hero" className="w-full h-12 text-base">
                          Sign In to {type.label} Portal
                        </Button>
                      </form>
                    </TabsContent>
                  );
                })}
              </Tabs>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="text-center space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Don't have an account?
                  </p>
                  <div className="flex flex-col space-y-2">
                    <Link to="/apply">
                      <Button variant="outline" className="w-full">
                        Apply as New Student
                      </Button>
                    </Link>
                    <Link to="/verify-certificate">
                      <Button variant="ghost" className="w-full">
                        Verify Certificate
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Help Links */}
          <div className="text-center">
            <p className="text-white/70 text-sm">
              Need help? 
              <Link to="/contact" className="text-white font-medium hover:text-yellow-200 ml-1 transition-colors">
                Contact Support
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;