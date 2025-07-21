import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Globe, Tag, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function SubmitWebsiteDialog() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    url: "",
    description: "",
    category: "",
  });
  const { toast } = useToast();

  const categories = [
    "DeFi",
    "NFT Marketplace",
    "Educational",
    "News & Media",
    "Social Platform",
    "Developer Tools",
    "Gaming",
    "Other"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.url || !formData.description || !formData.category) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically submit to your backend
    console.log("Submitting website:", formData);
    
    toast({
      title: "Website Submitted!",
      description: "Your website has been added to the voting queue.",
      className: "bg-gradient-card border-primary/50",
    });

    setFormData({ title: "", url: "", description: "", category: "" });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-primary hover:opacity-90 cosmic-glow">
          <Plus className="h-4 w-4 mr-2" />
          Submit Website
        </Button>
      </DialogTrigger>
      <DialogContent className="card-glow border-primary/20">
        <DialogHeader>
          <DialogTitle className="bg-gradient-primary bg-clip-text text-transparent">
            Submit Website for Community Review
          </DialogTitle>
          <DialogDescription>
            Add a website to be evaluated by the Moonbeam community. Quality submissions earn rewards!
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>Website Title *</span>
            </Label>
            <Input
              id="title"
              placeholder="e.g., Uniswap - DeFi Exchange"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="bg-card/50 border-border focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="url" className="flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <span>Website URL *</span>
            </Label>
            <Input
              id="url"
              type="url"
              placeholder="https://example.com"
              value={formData.url}
              onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              className="bg-card/50 border-border focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category" className="flex items-center space-x-2">
              <Tag className="h-4 w-4" />
              <span>Category *</span>
            </Label>
            <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
              <SelectTrigger className="bg-card/50 border-border focus:border-primary">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent className="card-glow border-primary/20">
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">
              Description *
            </Label>
            <Textarea
              id="description"
              placeholder="Describe what this website offers and why it should be trusted by the community..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="bg-card/50 border-border focus:border-primary resize-none"
              rows={4}
            />
          </div>

          <div className="flex space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-primary hover:opacity-90"
            >
              Submit Website
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}