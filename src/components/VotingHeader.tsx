import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wallet, Vote, Trophy, Star } from "lucide-react";

export default function VotingHeader() {
  return (
    <header className="relative border-b border-border bg-gradient-card backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-xl bg-gradient-primary animate-glow">
                <Vote className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Moonbeam VoteSite
                </h1>
                <p className="text-sm text-muted-foreground">
                  Community-driven website trust scoring
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Trophy className="h-4 w-4 text-secondary" />
                <span className="text-sm text-foreground">Reputation:</span>
                <Badge variant="secondary" className="animate-pulse-glow">
                  1,250
                </Badge>
              </div>
              
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-primary" />
                <span className="text-sm text-foreground">Votes:</span>
                <Badge variant="outline" className="border-primary text-primary">
                  42
                </Badge>
              </div>
            </div>

            <Button 
              variant="outline" 
              size="sm"
              className="bg-card/50 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary cosmic-glow"
            >
              <Wallet className="h-4 w-4 mr-2" />
              Connect Wallet
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}