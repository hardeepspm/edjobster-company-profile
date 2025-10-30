import { Briefcase, Star, Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

interface OverviewTabProps {
  description: string;
  activeJobs: number;
  averageRating: number;
  foundedYear: number;
  headquarters: string;
}

const OverviewTab = ({ 
  description, 
  activeJobs, 
  averageRating, 
  foundedYear, 
  headquarters 
}: OverviewTabProps) => {
  const stats = [
    { icon: Briefcase, label: "Active Jobs", value: activeJobs.toString(), color: "text-primary" },
    { icon: Star, label: "Average Rating", value: `${averageRating}/5`, color: "text-accent-foreground" },
    { icon: Calendar, label: "Founded", value: foundedYear.toString(), color: "text-secondary" },
    { icon: MapPin, label: "Headquarters", value: headquarters, color: "text-primary" },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Description */}
      <Card className="p-6 shadow-card">
        <h2 className="text-2xl font-bold mb-4">About the Company</h2>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
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
