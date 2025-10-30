import { Card } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";

interface AboutTabProps {
  aboutText: string;
  mission?: string;
  vision?: string;
  values?: string[];
}

const AboutTab = ({ aboutText, mission, vision, values }: AboutTabProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in">
      {/* Main Content */}
      <div className="lg:col-span-2 space-y-6">
        <Card className="p-8 shadow-card">
          <h2 className="text-2xl font-bold mb-6">About Us</h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {aboutText}
            </p>
          </div>
        </Card>

        {mission && (
          <Card className="p-8 shadow-card">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-primary/10 p-3">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">{mission}</p>
              </div>
            </div>
          </Card>
        )}

        {vision && (
          <Card className="p-8 shadow-card">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-secondary/10 p-3">
                <Eye className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">{vision}</p>
              </div>
            </div>
          </Card>
        )}
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {values && values.length > 0 && (
          <Card className="p-6 shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-lg bg-accent/20 p-2">
                <Heart className="w-5 h-5 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold">Our Values</h3>
            </div>
            <ul className="space-y-3">
              {values.map((value, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}

        {/* Placeholder for culture images */}
        <Card className="p-6 shadow-card">
          <h3 className="text-lg font-bold mb-4">Company Culture</h3>
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i}
                className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20"
              />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AboutTab;
