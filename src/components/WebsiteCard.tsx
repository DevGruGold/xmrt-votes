import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ThumbsUp, 
  ThumbsDown, 
  ExternalLink, 
  TrendingUp,
  Shield,
  Users,
  Clock
} from "lucide-react";

interface WebsiteCardProps {
  title: string;
  url: string;
  description: string;
  trustScore: number;
  totalVotes: number;
  positiveVotes: number;
  category: string;
  timeAdded: string;
  isVerified?: boolean;
}

export default function WebsiteCard({
  title,
  url,
  description,
  trustScore,
  totalVotes,
  positiveVotes,
  category,
  timeAdded,
  isVerified = false
}: WebsiteCardProps) {
  const positivePercentage = totalVotes > 0 ? (positiveVotes / totalVotes) * 100 : 0;
  
  return (
    <Card className="card-glow hover:shadow-glow transition-all duration-300 group">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">
                {title}
              </h3>
              {isVerified && (
                <Shield className="h-4 w-4 text-secondary animate-pulse-glow" />
              )}
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
              {description}
            </p>
            <div className="flex items-center space-x-2">
              <ExternalLink className="h-3 w-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground truncate">
                {url}
              </span>
            </div>
          </div>
          
          <div className="flex flex-col items-end space-y-2 ml-4">
            <Badge variant="outline" className="border-secondary/50 text-secondary">
              {category}
            </Badge>
            <div className="text-right">
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                {trustScore}%
              </div>
              <div className="text-xs text-muted-foreground flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                Trust Score
              </div>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Community Consensus</span>
            <span className="text-sm font-medium">{positivePercentage.toFixed(1)}% Positive</span>
          </div>
          <Progress 
            value={positivePercentage} 
            className="h-2 bg-muted/50"
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">{totalVotes} votes</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">{timeAdded}</span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="flex items-center space-x-2 w-full">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 bg-green-500/10 border-green-500/50 text-green-400 hover:bg-green-500/20 hover:border-green-500"
          >
            <ThumbsUp className="h-4 w-4 mr-2" />
            Trust
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 bg-red-500/10 border-red-500/50 text-red-400 hover:bg-red-500/20 hover:border-red-500"
          >
            <ThumbsDown className="h-4 w-4 mr-2" />
            Don't Trust
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            className="px-3 hover:bg-primary/10 hover:text-primary"
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}