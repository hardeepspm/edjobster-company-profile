import { useState } from "react";
import { ArrowLeft, Home, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import CompanyHeader from "@/components/CompanyHeader";
import TabNavigation from "@/components/TabNavigation";
import OverviewTab from "@/components/tabs/OverviewTab";
import AboutTab from "@/components/tabs/AboutTab";
import ActiveJobsTab from "@/components/tabs/ActiveJobsTab";
import ReviewsTab from "@/components/tabs/ReviewsTab";
import NewsTab from "@/components/tabs/NewsTab";
import { Button } from "@/components/ui/button";

const CompanyDetails = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data
  const companyData = {
    name: "TechCorp Solutions",
    tagline: "Building the Future of Technology",
    location: "Bangalore, Karnataka, India",
    companySize: "5000+ employees",
    industry: "Information Technology & Services",
    website: "https://techcorpsolutions.com",
    socialLinks: {
      linkedin: "https://linkedin.com/company/techcorp",
      twitter: "https://twitter.com/techcorp",
      facebook: "https://facebook.com/techcorp",
      instagram: "https://instagram.com/techcorp",
    },
  };

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "about", label: "About" },
    { id: "jobs", label: "Active Jobs" },
    { id: "reviews", label: "Reviews" },
    { id: "news", label: "News" },
  ];

  const jobs = [
    {
      id: "TCORP-2025-SE-001",
      title: "Senior Software Engineer",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      workMode: "Hybrid",
      postedDate: new Date(2025, 9, 5),
      isHot: true,
    },
    {
      id: "TCORP-2025-PM-002",
      title: "Product Manager",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      workMode: "Remote",
      postedDate: new Date(2025, 9, 12),
    },
    {
      id: "TCORP-2025-DS-003",
      title: "Data Scientist",
      location: "Hyderabad, Telangana",
      type: "Full-time",
      workMode: "On-site",
      postedDate: new Date(2025, 9, 20),
    },
  ];

  const reviews = [
    {
      id: "1",
      reviewerName: "Rajesh Kumar",
      role: "Senior Developer",
      rating: 5,
      reviewText: "Amazing company culture! Great work-life balance and cutting-edge projects. The team is supportive and management values employee growth. Highly recommend for anyone looking to advance their career in tech.",
      date: new Date(2025, 8, 15),
    },
    {
      id: "2",
      reviewerName: "Priya Sharma",
      role: "Product Designer",
      rating: 4,
      reviewText: "Good learning opportunities and excellent benefits package. The collaborative environment encourages innovation. Some projects can be challenging but that's part of the growth process.",
      date: new Date(2025, 8, 10),
    },
    {
      id: "3",
      reviewerName: "Anonymous",
      role: "DevOps Engineer",
      rating: 5,
      reviewText: "Best decision of my career! Modern tech stack, flexible working hours, and genuinely caring leadership. The company invests heavily in employee development and the compensation is competitive.",
      date: new Date(2025, 7, 28),
      isAnonymous: true,
    },
  ];

  const news = [
    {
      id: "1",
      title: "TechCorp Launches New AI-Powered Platform",
      summary: "Revolutionary platform set to transform enterprise solutions with advanced machine learning capabilities and seamless integration.",
      category: "Product Launch",
      publishedDate: new Date(2025, 9, 15),
    },
    {
      id: "2",
      title: "Expanding to 5 New Countries in 2026",
      summary: "Strategic expansion plan announced to strengthen global presence and bring innovative solutions to new markets worldwide.",
      category: "Company Growth",
      publishedDate: new Date(2025, 9, 10),
    },
    {
      id: "3",
      title: "Recognized as Best Employer of the Year",
      summary: "TechCorp Solutions receives prestigious award for outstanding workplace culture, employee satisfaction, and innovative HR practices.",
      category: "Awards",
      publishedDate: new Date(2025, 9, 1),
    },
  ];

  const ratingDistribution = [
    { stars: 5, count: 28 },
    { stars: 4, count: 10 },
    { stars: 3, count: 3 },
    { stars: 2, count: 1 },
    { stars: 1, count: 0 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center gap-2">
                <span className="text-2xl font-bold">
                  <span className="text-primary">Ed</span>
                  <span className="text-accent-foreground">Jobster</span>
                </span>
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
                <Link to="/jobs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Jobs
                </Link>
                <Link to="/companies" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Companies
                </Link>
                <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
                <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">Account</Button>
              <Button size="sm">Post a Job</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Back Button & Breadcrumbs */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4 mb-3">
            <Button variant="ghost" size="sm" className="gap-2" asChild>
              <Link to="/companies">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Link>
            </Button>
          </div>
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground flex items-center gap-1">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <span>›</span>
            <Link to="/companies" className="hover:text-foreground flex items-center gap-1">
              <Briefcase className="w-4 h-4" />
              Companies
            </Link>
            <span>›</span>
            <span className="text-foreground font-medium">{companyData.name}</span>
          </nav>
        </div>
      </div>

      {/* Company Header */}
      <CompanyHeader
        companyName={companyData.name}
        tagline={companyData.tagline}
        websiteUrl={companyData.website}
        socialLinks={companyData.socialLinks}
      />

      {/* Tabbed Navigation */}
      <TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "overview" && (
          <OverviewTab
            activeJobs={jobs.length}
            averageRating={4.7}
            foundedYear={2010}
            headquarters="Bangalore, Karnataka"
            location={companyData.location}
            companySize={companyData.companySize}
            industry={companyData.industry}
          />
        )}

        {activeTab === "about" && (
          <AboutTab
            aboutText={`TechCorp Solutions has been at the forefront of technological innovation since 2010. We specialize in developing cloud-based enterprise solutions that help businesses scale efficiently and compete effectively in the digital age.

Our team of over 5,000 talented professionals across the globe works tirelessly to deliver cutting-edge solutions that address real-world business challenges. From Fortune 500 companies to emerging startups, we've partnered with organizations of all sizes to transform their digital infrastructure.

We pride ourselves on fostering a culture of continuous learning, collaboration, and innovation. Our employees are our greatest asset, and we invest heavily in their professional development and well-being.`}
            mission="To empower businesses through cutting-edge technology and exceptional service, enabling them to achieve their full potential in the digital era."
            vision="To be the world's most trusted technology partner, driving innovation and creating lasting value for our clients, employees, and communities."
            values={[
              "Innovation First: We constantly push boundaries and embrace new technologies",
              "Customer Success: Our clients' success is our success",
              "Integrity: We conduct business with honesty and transparency",
              "Collaboration: We believe in the power of teamwork",
              "Excellence: We strive for excellence in everything we do",
              "Diversity: We celebrate diverse perspectives and backgrounds",
            ]}
          />
        )}

        {activeTab === "jobs" && <ActiveJobsTab jobs={jobs} />}

        {activeTab === "reviews" && (
          <ReviewsTab
            reviews={reviews}
            averageRating={4.7}
            totalReviews={42}
            ratingDistribution={ratingDistribution}
          />
        )}

        {activeTab === "news" && <NewsTab news={news} />}
      </div>
    </div>
  );
};

export default CompanyDetails;
