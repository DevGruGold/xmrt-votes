import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, TrendingUp, Clock, Award } from "lucide-react";

interface FilterTabsProps {
  children: React.ReactNode;
}

export default function FilterTabs({ children }: FilterTabsProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search websites..."
            className="pl-10 bg-card/50 border-border focus:border-primary"
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Category:</span>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary/10 hover:border-primary">
            All
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary/10 opacity-60">
            DeFi
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary/10 opacity-60">
            NFT
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary/10 opacity-60">
            Gaming
          </Badge>
        </div>
      </div>

      <Tabs defaultValue="trending" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-card/50 border border-border">
          <TabsTrigger 
            value="trending" 
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center space-x-2"
          >
            <TrendingUp className="h-4 w-4" />
            <span className="hidden sm:inline">Trending</span>
          </TabsTrigger>
          <TabsTrigger 
            value="newest" 
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center space-x-2"
          >
            <Clock className="h-4 w-4" />
            <span className="hidden sm:inline">Newest</span>
          </TabsTrigger>
          <TabsTrigger 
            value="top-rated" 
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center space-x-2"
          >
            <Award className="h-4 w-4" />
            <span className="hidden sm:inline">Top Rated</span>
          </TabsTrigger>
          <TabsTrigger 
            value="controversial" 
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center space-x-2"
          >
            <span className="text-sm">🔥</span>
            <span className="hidden sm:inline">Hot</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="trending" className="mt-6">
          {children}
        </TabsContent>
        <TabsContent value="newest" className="mt-6">
          {children}
        </TabsContent>
        <TabsContent value="top-rated" className="mt-6">
          {children}
        </TabsContent>
        <TabsContent value="controversial" className="mt-6">
          {children}
        </TabsContent>
      </Tabs>
    </div>
  );
}