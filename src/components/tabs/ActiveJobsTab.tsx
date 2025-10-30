import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, Clock, Flame } from "lucide-react";
import { format } from "date-fns";

interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  workMode: string;
  postedDate: Date;
  isHot?: boolean;
}

interface ActiveJobsTabProps {
  jobs: Job[];
}

const ActiveJobsTab = ({ jobs }: ActiveJobsTabProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Filter Bar */}
      <Card className="p-4 shadow-soft">
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" size="sm">All Locations</Button>
          <Button variant="outline" size="sm">All Departments</Button>
          <Button variant="outline" size="sm">Experience Level</Button>
          <Button variant="outline" size="sm">Work Mode</Button>
        </div>
      </Card>

      {/* Job Listings */}
      <div className="grid gap-4">
        {jobs.map((job, index) => (
          <Card 
            key={job.id} 
            className="p-6 shadow-soft hover:shadow-card transition-all cursor-pointer animate-slide-up"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-3">
                  <h3 className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  {job.isHot && (
                    <Badge variant="destructive" className="gap-1">
                      <Flame className="w-3 h-3" />
                      Hot Job
                    </Badge>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4" />
                    {job.type}
                  </span>
                  <Badge variant="secondary" className="font-normal">
                    {job.workMode}
                  </Badge>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    Posted {format(job.postedDate, 'MMM dd, yyyy')}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mt-2">
                  Job ID: {job.id}
                </p>
              </div>

              <div className="flex sm:flex-col gap-2">
                <Button className="w-full sm:w-auto">View Details</Button>
                <Button variant="outline" className="w-full sm:w-auto">Save Job</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {jobs.length === 0 && (
        <Card className="p-12 text-center shadow-soft">
          <Briefcase className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">No Active Jobs</h3>
          <p className="text-muted-foreground">Check back soon for new opportunities!</p>
        </Card>
      )}
    </div>
  );
};

export default ActiveJobsTab;
