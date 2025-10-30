import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import companyBanner from "@/assets/company-banner.jpg";
import companyLogo from "@/assets/company-logo.png";

interface CompanyHeaderProps {
  companyName: string;
  tagline: string;
  websiteUrl: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
}

const CompanyHeader = ({ companyName, tagline, websiteUrl, socialLinks }: CompanyHeaderProps) => {
  return (
    <div className="relative bg-card border-b border-border overflow-hidden">
      {/* Banner Image */}
      <div className="h-64 w-full relative">
        <img 
          src={companyBanner} 
          alt="Company Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
      </div>

      {/* Company Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-16 pb-8">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
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

            {/* Company Name, Tagline, Website, Social */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-foreground mb-2">{companyName}</h1>
              <p className="text-lg text-muted-foreground mb-2">{tagline}</p>
              <a 
                href={websiteUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline inline-block mb-4"
              >
                {websiteUrl.replace(/^https?:\/\//, '')}
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
