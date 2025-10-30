import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  imageUrl?: string;
  publishedDate: Date;
  category?: string;
}

interface NewsTabProps {
  news: NewsItem[];
}

const NewsTab = ({ news }: NewsTabProps) => {
  const newsImages = [news1, news2, news3];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item, index) => (
          <Card 
            key={item.id} 
            className="overflow-hidden shadow-soft hover:shadow-card transition-all group cursor-pointer animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Featured Image */}
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
              <img
                src={item.imageUrl || newsImages[index % newsImages.length]}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              {item.category && (
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                  {item.category}
                </span>
              )}
              
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {item.title}
              </h3>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Calendar className="w-4 h-4" />
                {format(item.publishedDate, 'MMM dd, yyyy')}
              </div>

              <p className="text-muted-foreground line-clamp-3 mb-4">
                {item.summary}
              </p>

              <Button variant="ghost" className="gap-2 p-0 h-auto hover:bg-transparent group/btn">
                Read More
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {news.length === 0 && (
        <Card className="p-12 text-center shadow-soft">
          <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">No News Available</h3>
          <p className="text-muted-foreground">Stay tuned for company updates and announcements!</p>
        </Card>
      )}

      {news.length > 0 && (
        <div className="flex justify-center">
          <Button variant="outline" size="lg">
            Load More News
          </Button>
        </div>
      )}
    </div>
  );
};

export default NewsTab;
