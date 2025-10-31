import { Linkedin, Twitter, Facebook, Instagram, ExternalLink, Star } from "lucide-react";
import companyBanner from "@/assets/company-banner.jpg";
import companyLogo from "@/assets/company-logo.png";

interface CompanyHeaderProps {
  companyName: string;
  websiteUrl: string;
  averageRating: number;
  totalReviews: number;
  onTabChange: (tab: string) => void;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
}

const CompanyHeader = ({ companyName, websiteUrl, averageRating, totalReviews, onTabChange, socialLinks }: CompanyHeaderProps) => {
  return (
    <div className="relative bg-card border-b border-border overflow-hidden">
      {/* Banner Image */}
      <div className="h-48 w-full relative">
        <img 
          src={companyBanner} 
          alt="Company Banner" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Company Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-12 pb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Company Logo */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-2xl bg-card shadow-card border-4 border-card overflow-hidden">
                <img 
                  src={companyLogo} 
                  alt={`${companyName} Logo`} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Company Name, Website, Rating, Social */}
            <div className="flex-1 text-center md:text-left pt-4">
              <div className="flex flex-col md:flex-row items-center md:items-center gap-3 mb-3">
                <h1 className="text-4xl font-bold text-foreground">{companyName}</h1>
                <button 
                  onClick={() => onTabChange('reviews')}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors cursor-pointer"
                >
                  <Star className="w-4 h-4 text-accent fill-accent" />
                  <span className="font-semibold text-foreground">{averageRating}</span>
                  <span className="text-sm text-muted-foreground">({totalReviews} reviews)</span>
                </button>
              </div>
              
              <a 
                href={websiteUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline inline-flex items-center gap-1.5 mb-4"
              >
                {websiteUrl.replace(/^https?:\/\//, '')}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              
              {/* Social Links */}
              {socialLinks && (
                <div className="flex gap-3 justify-center md:justify-start">
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
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyHeader;
