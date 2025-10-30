import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Star, TrendingUp } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";

interface Review {
  id: string;
  reviewerName: string;
  role: string;
  rating: number;
  reviewText: string;
  date: Date;
  isAnonymous?: boolean;
}

interface ReviewsTabProps {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
  ratingDistribution: { stars: number; count: number }[];
}

const ReviewsTab = ({ reviews, averageRating, totalReviews, ratingDistribution }: ReviewsTabProps) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in">
      {/* Review Summary */}
      <div className="lg:col-span-1 space-y-6">
        <Card className="p-6 shadow-card">
          <div className="text-center mb-6">
            <div className="text-5xl font-bold text-foreground mb-2">
              {averageRating.toFixed(1)}
            </div>
            <div className="flex justify-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-5 h-5 ${
                    star <= Math.round(averageRating)
                      ? "fill-accent text-accent"
                      : "text-muted"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Based on {totalReviews} reviews
            </p>
          </div>

          <div className="space-y-2">
            {ratingDistribution.map((item) => (
              <div key={item.stars} className="flex items-center gap-3">
                <span className="text-sm font-medium w-12">
                  {item.stars} <Star className="w-3 h-3 inline" />
                </span>
                <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-accent h-full transition-all"
                    style={{
                      width: `${(item.count / totalReviews) * 100}%`,
                    }}
                  />
                </div>
                <span className="text-sm text-muted-foreground w-8">
                  {item.count}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Review Submission Form */}
        <Card className="p-6 shadow-card">
          <h3 className="text-lg font-bold mb-4">Write a Review</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-sm font-medium mb-2 block">Your Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= (hoverRating || rating)
                          ? "fill-accent text-accent"
                          : "text-muted"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Name</label>
              <Input placeholder="Your name (optional)" />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Role/Job Title</label>
              <Input placeholder="e.g., Senior Developer" />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Your Review</label>
              <Textarea
                placeholder="Share your experience..."
                rows={4}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="employee" />
              <label htmlFor="employee" className="text-sm text-muted-foreground">
                I am/was an employee at this company
              </label>
            </div>

            <Button type="submit" className="w-full">
              Submit Review
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Your review will be visible after approval
            </p>
          </form>
        </Card>
      </div>

      {/* Reviews List */}
      <div className="lg:col-span-2 space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Employee Reviews</h3>
          <Button variant="outline" size="sm" className="gap-2">
            <TrendingUp className="w-4 h-4" />
            Most Helpful
          </Button>
        </div>

        {reviews.map((review, index) => (
          <Card 
            key={review.id} 
            className="p-6 shadow-soft hover:shadow-card transition-shadow animate-slide-up"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-semibold text-foreground">
                  {review.isAnonymous ? "Anonymous" : review.reviewerName}
                </h4>
                <p className="text-sm text-muted-foreground">{review.role}</p>
              </div>
              <div className="text-right">
                <div className="flex gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= review.rating
                          ? "fill-accent text-accent"
                          : "text-muted"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  {format(review.date, 'MMM dd, yyyy')}
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {review.reviewText}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReviewsTab;
