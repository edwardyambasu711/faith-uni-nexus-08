import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import {
  Menu,
  X,
  Home,
  User,
  BookOpen,
  Calendar,
  CreditCard,
  FileText,
  MessageSquare,
  Settings,
  LogOut,
  Bell,
  GraduationCap,
  Users,
  BarChart3,
  UserCheck,
  Building,
  DollarSign,
  ClipboardList,
  CheckSquare,
  Upload,
  PieChart,
  UserPlus,
  FileCheck,
  Cog,
  Shield
} from "lucide-react";

interface PortalLayoutProps {
  children: React.ReactNode;
  userType: "student" | "staff" | "admin";
  userName: string;
  userRole?: string;
  notifications?: number;
}

const PortalLayout = ({ children, userType, userName, userRole, notifications = 0 }: PortalLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Navigation items based on user type
  const getNavigationItems = () => {
    const baseUrl = `/${userType}`;
    
    switch (userType) {
      case "student":
        return [
          { name: "Dashboard", href: `${baseUrl}/dashboard`, icon: Home },
          { name: "Profile", href: `${baseUrl}/profile`, icon: User },
          { name: "Course Registration", href: `${baseUrl}/courses`, icon: BookOpen },
          { name: "Timetable", href: `${baseUrl}/timetable`, icon: Calendar },
          { name: "Fees & Payments", href: `${baseUrl}/fees`, icon: CreditCard },
          { name: "Results", href: `${baseUrl}/results`, icon: FileText },
          { name: "Support", href: `${baseUrl}/support`, icon: MessageSquare },
        ];
      
      case "staff":
        return [
          { name: "Dashboard", href: `${baseUrl}/dashboard`, icon: Home },
          { name: "Profile", href: `${baseUrl}/profile`, icon: User },
          { name: "My Courses", href: `${baseUrl}/courses`, icon: BookOpen },
          { name: "Attendance", href: `${baseUrl}/attendance`, icon: UserCheck },
          { name: "Gradebook", href: `${baseUrl}/gradebook`, icon: ClipboardList },
          { name: "Course Materials", href: `${baseUrl}/materials`, icon: Upload },
          { name: "Support", href: `${baseUrl}/support`, icon: MessageSquare },
        ];
      
      case "admin":
        return [
          { name: "Dashboard", href: `${baseUrl}/dashboard`, icon: Home },
          { name: "Admissions", href: `${baseUrl}/admissions`, icon: UserPlus },
          { name: "Academic Management", href: `${baseUrl}/academic`, icon: Building },
          { name: "Results Management", href: `${baseUrl}/results`, icon: FileCheck },
          { name: "Finance", href: `${baseUrl}/finance`, icon: DollarSign },
          { name: "User Management", href: `${baseUrl}/users`, icon: Users },
          { name: "Reports", href: `${baseUrl}/reports`, icon: BarChart3 },
          { name: "Settings", href: `${baseUrl}/settings`, icon: Cog },
        ];
        
      default:
        return [];
    }
  };

  const navigationItems = getNavigationItems();

  const handleLogout = () => {
    navigate("/login");
  };

  const getPortalTitle = () => {
    switch (userType) {
      case "student": return "Student Portal";
      case "staff": return "Staff Portal";
      case "admin": return "Admin Portal";
      default: return "Portal";
    }
  };

  const getPortalIcon = () => {
    switch (userType) {
      case "student": return GraduationCap;
      case "staff": return Users;
      case "admin": return Shield;
      default: return Home;
    }
  };

  const PortalIcon = getPortalIcon();

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Portal Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center space-x-3">
          <div className="bg-primary/10 rounded-xl p-2">
            <PortalIcon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="font-bold text-academic">{getPortalTitle()}</h2>
            <p className="text-xs text-muted-foreground">Faith University</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-academic hover:bg-muted/50"
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              <Icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* User Info */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center space-x-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src="" />
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
              {userName.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-academic truncate">{userName}</p>
            {userRole && (
              <p className="text-xs text-muted-foreground truncate">{userRole}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="flex h-screen">
        {/* Desktop Sidebar */}
        <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
          <div className="flex flex-col flex-grow bg-card border-r border-border shadow-sm">
            <SidebarContent />
          </div>
        </div>

        {/* Mobile Sidebar */}
        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetContent side="left" className="p-0 w-64">
            <SidebarContent />
          </SheetContent>
        </Sheet>

        {/* Main Content */}
        <div className="flex flex-col flex-1 lg:pl-64">
          {/* Top Header */}
          <header className="bg-card border-b border-border shadow-sm">
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center space-x-4">
                {/* Mobile Menu Button */}
                <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="lg:hidden"
                    >
                      <Menu className="w-5 h-5" />
                    </Button>
                  </SheetTrigger>
                </Sheet>

                {/* Page Title */}
                <div>
                  <h1 className="text-xl font-bold text-academic">
                    {navigationItems.find(item => item.href === location.pathname)?.name || "Dashboard"}
                  </h1>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex items-center space-x-4">
                {/* Notifications */}
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="w-5 h-5" />
                  {notifications > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs p-0">
                      {notifications > 9 ? "9+" : notifications}
                    </Badge>
                  )}
                </Button>

                {/* User Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="" alt={userName} />
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {userName.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{userName}</p>
                        {userRole && (
                          <p className="text-xs leading-none text-muted-foreground">{userRole}</p>
                        )}
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to={`/${userType}/profile`}>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={`/${userType}/settings`}>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default PortalLayout;