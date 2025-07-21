import VotingHeader from "@/components/VotingHeader";
import WebsiteCard from "@/components/WebsiteCard";
import SubmitWebsiteDialog from "@/components/SubmitWebsiteDialog";
import FilterTabs from "@/components/FilterTabs";
import cosmicBg from "@/assets/cosmic-bg.jpg";

const sampleWebsites = [
  {
    title: "Uniswap Protocol",
    url: "https://app.uniswap.org",
    description: "Leading decentralized exchange protocol on Ethereum with deep liquidity and innovative AMM design.",
    trustScore: 94,
    totalVotes: 1247,
    positiveVotes: 1172,
    category: "DeFi",
    timeAdded: "2 days ago",
    isVerified: true,
  },
  {
    title: "OpenSea NFT Marketplace",
    url: "https://opensea.io",
    description: "World's largest NFT marketplace for buying, selling, and discovering digital collectibles.",
    trustScore: 87,
    totalVotes: 892,
    positiveVotes: 776,
    category: "NFT Marketplace",
    timeAdded: "5 days ago",
    isVerified: true,
  },
  {
    title: "Moonbeam Network Docs",
    url: "https://docs.moonbeam.network",
    description: "Official documentation and developer resources for the Moonbeam parachain ecosystem.",
    trustScore: 98,
    totalVotes: 456,
    positiveVotes: 447,
    category: "Educational",
    timeAdded: "1 week ago",
    isVerified: true,
  },
  {
    title: "CoinGecko",
    url: "https://coingecko.com",
    description: "Comprehensive cryptocurrency data platform with market analysis, portfolio tracking, and DeFi insights.",
    trustScore: 91,
    totalVotes: 2143,
    positiveVotes: 1950,
    category: "News & Media",
    timeAdded: "3 days ago",
    isVerified: true,
  },
  {
    title: "Aave Protocol",
    url: "https://aave.com",
    description: "Open-source liquidity protocol for earning interest on deposits and borrowing assets.",
    trustScore: 89,
    totalVotes: 734,
    positiveVotes: 653,
    category: "DeFi",
    timeAdded: "1 week ago",
  },
  {
    title: "Axie Infinity",
    url: "https://axieinfinity.com",
    description: "Play-to-earn gaming universe where players can battle, breed, and trade digital pets called Axies.",
    trustScore: 73,
    totalVotes: 1567,
    positiveVotes: 1144,
    category: "Gaming",
    timeAdded: "4 days ago",
  },
];

export default function VotingDashboard() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${cosmicBg})`
      }}
    >
      <VotingHeader />
      
      <main className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-6 items-start justify-between mb-8">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Community Trust Scores
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Vote on websites you trust and earn rewards when your picks align with community consensus. 
              Help build a decentralized reputation system for the web.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <SubmitWebsiteDialog />
          </div>
        </div>

        <FilterTabs>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {sampleWebsites.map((website, index) => (
              <WebsiteCard
                key={index}
                {...website}
              />
            ))}
          </div>
        </FilterTabs>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-card border border-primary/20 rounded-lg px-6 py-4 cosmic-glow">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse-glow"></div>
            <span className="text-sm text-muted-foreground">
              Connected to Moonbeam Network
            </span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow"></div>
          </div>
        </div>
      </main>
    </div>
  );
}