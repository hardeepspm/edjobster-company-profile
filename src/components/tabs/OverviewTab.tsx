import { Briefcase, Calendar, MapPin, Building2, Users, TrendingUp, Award, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

interface OverviewTabProps {
  activeJobs: number;
  foundedYear: number;
  location: string;
  companySize: string;
  industry: string;
}

const OverviewTab = ({ 
  activeJobs, 
  foundedYear,
  location,
  companySize,
  industry
}: OverviewTabProps) => {
  const stats = [
    { icon: Briefcase, label: "Active Jobs", value: activeJobs.toString(), color: "text-primary" },
    { icon: TrendingUp, label: "Growth Rate", value: "28% YoY", color: "text-accent" },
    { icon: Award, label: "Awards Won", value: "15+", color: "text-secondary" },
    { icon: Globe, label: "Global Offices", value: "12", color: "text-primary" },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Company Info */}
      <Card className="p-6 shadow-card">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Location */}
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-primary/10 p-2">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-semibold text-foreground">{location}</p>
            </div>
          </div>

          {/* Company Size */}
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-secondary/10 p-2">
              <Users className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Company Size</p>
              <p className="font-semibold text-foreground">{companySize}</p>
            </div>
          </div>

          {/* Industry */}
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-accent/20 p-2">
              <Building2 className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Industry</p>
              <p className="font-semibold text-foreground">{industry}</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card 
            key={index} 
            className="p-6 shadow-soft hover:shadow-card transition-shadow animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start gap-4">
              <div className={cn("rounded-lg bg-primary/10 p-3", stat.color)}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OverviewTab;

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
