import { Building2, MapPin, Users, Briefcase, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CompanyInfoSummaryProps {
  location: string;
  companySize: string;
  industry: string;
  website: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
}

const CompanyInfoSummary = ({ 
  location, 
  companySize, 
  industry, 
  website,
  socialLinks 
}: CompanyInfoSummaryProps) => {
  return (
    <Card className="p-6 shadow-card animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <Briefcase className="w-5 h-5 text-accent-foreground" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Industry</p>
            <p className="font-semibold text-foreground">{industry}</p>
          </div>
        </div>

        {/* Website */}
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-primary/10 p-2">
            <Building2 className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Website</p>
            <a 
              href={website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline truncate block max-w-[200px]"
            >
              {website.replace(/^https?:\/\//, '')}
            </a>
          </div>
        </div>
      </div>

      {/* Social Links */}
      {socialLinks && (
        <div className="mt-6 pt-6 border-t">
          <p className="text-sm text-muted-foreground mb-3">Connect with us</p>
          <div className="flex gap-3">
            {socialLinks.linkedin && (
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-lg bg-[#0077B5]/10 p-2.5 hover:bg-[#0077B5]/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-[#0077B5]" />
              </a>
            )}
            {socialLinks.twitter && (
              <a 
                href={socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-lg bg-[#1DA1F2]/10 p-2.5 hover:bg-[#1DA1F2]/20 transition-colors"
              >
                <Twitter className="w-5 h-5 text-[#1DA1F2]" />
              </a>
            )}
            {socialLinks.facebook && (
              <a 
                href={socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-lg bg-[#1877F2]/10 p-2.5 hover:bg-[#1877F2]/20 transition-colors"
              >
                <Facebook className="w-5 h-5 text-[#1877F2]" />
              </a>
            )}
            {socialLinks.instagram && (
              <a 
                href={socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-lg bg-[#E4405F]/10 p-2.5 hover:bg-[#E4405F]/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-[#E4405F]" />
              </a>
            )}
          </div>
        </div>
      )}
    </Card>
  );
};

export default CompanyInfoSummary;
