import { Building2, Globe, ExternalLink, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CompanyHeaderProps {
  companyName: string;
  tagline: string;
  logoUrl?: string;
  bannerUrl?: string;
  websiteUrl?: string;
}

const CompanyHeader = ({ 
  companyName, 
  tagline, 
  logoUrl, 
  bannerUrl,
  websiteUrl 
}: CompanyHeaderProps) => {
  return (
    <div className="relative">
      {/* Banner Image */}
      <div 
        className="h-64 w-full bg-gradient-to-br from-primary to-secondary relative overflow-hidden"
        style={bannerUrl ? { backgroundImage: `url(${bannerUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
      </div>

      {/* Company Info Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-20 pb-6">
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-end">
            {/* Company Logo */}
            <div className="bg-card rounded-2xl p-4 shadow-xl border-4 border-background">
              {logoUrl ? (
                <img 
                  src={logoUrl} 
                  alt={`${companyName} logo`}
                  className="w-28 h-28 object-contain"
                />
              ) : (
                <div className="w-28 h-28 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Building2 className="w-16 h-16 text-primary-foreground" />
                </div>
              )}
            </div>

            {/* Company Name & Actions */}
            <div className="flex-1 flex flex-col sm:flex-row justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-1">{companyName}</h1>
                <p className="text-muted-foreground text-lg">{tagline}</p>
              </div>

              <div className="flex gap-3">
                {websiteUrl && (
                  <Button variant="outline" size="lg" className="gap-2" asChild>
                    <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
                      <Globe className="w-4 h-4" />
                      Visit Website
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                )}
                <Button variant="default" size="lg" className="gap-2">
                  <Bookmark className="w-4 h-4" />
                  Follow Company
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyHeader;
