import { Card } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";
import culture1 from "@/assets/culture-1.jpg";
import culture2 from "@/assets/culture-2.jpg";
import culture3 from "@/assets/culture-3.jpg";

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

        {/* Company Culture Images */}
        <Card className="p-6 shadow-card">
          <h3 className="text-lg font-bold mb-4">Company Culture</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="aspect-square rounded-lg overflow-hidden shadow-soft">
              <img src={culture1} alt="Team collaboration" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-soft">
              <img src={culture2} alt="Office workspace" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-2 aspect-video rounded-lg overflow-hidden shadow-soft">
              <img src={culture3} alt="Team meeting" className="w-full h-full object-cover" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AboutTab;
