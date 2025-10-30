import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary via-secondary to-primary">
      <div className="text-center px-4">
        <h1 className="mb-4 text-5xl font-bold text-primary-foreground animate-fade-in">
          Welcome to <span className="text-accent">EdJobster</span>
        </h1>
        <p className="text-xl text-primary-foreground/90 mb-8 animate-slide-up">
          Discover amazing companies and exciting career opportunities
        </p>
        <Button size="lg" variant="secondary" className="gap-2 animate-scale-in" asChild>
          <Link to="/company/techcorp-solutions">
            View Company Example
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
