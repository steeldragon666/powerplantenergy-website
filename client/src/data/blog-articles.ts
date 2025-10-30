export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  slug: string;
  readTime: string;
}

export const blogArticles: BlogArticle[] = [
  {
    id: "1",
    title: "The Unseen Champion: What Makes Beema Bamboo a Game-Changer for a Sustainable Australia?",
    excerpt: "Discover why Beema Bamboo is revolutionizing Australia's bioenergy future with its exceptional productivity, environmental benefits, and versatility as a feedstock for both sustainable aviation fuel and battery-grade graphite.",
    date: "October 30, 2025",
    author: "Power Plant Energy",
    category: "Technology",
    slug: "beema-bamboo-game-changer-sustainable-australia",
    readTime: "8 min read"
  },
  {
    id: "2",
    title: "Australia at a Crossroads: A Perfect Storm of Policy and Funding Ignites the Bioenergy Revolution",
    excerpt: "Explore how the convergence of national bioenergy strategy, defence imperatives, and $1.1 billion in government funding is creating unprecedented opportunities for Australia's sustainable fuel industry.",
    date: "October 29, 2025",
    author: "Power Plant Energy",
    category: "Policy",
    slug: "australia-bioenergy-revolution-policy-funding",
    readTime: "7 min read"
  },
  {
    id: "3",
    title: "The Biofuel Dilemma: Why Beema Bamboo is the Answer to the Food vs. Fuel Debate",
    excerpt: "Learn why traditional agricultural crops like corn and sugarcane fall short as biofuel feedstocks, and how Beema Bamboo offers a sustainable solution that doesn't compete with food production.",
    date: "October 28, 2025",
    author: "Power Plant Energy",
    category: "Sustainability",
    slug: "beema-bamboo-food-vs-fuel-solution",
    readTime: "6 min read"
  },
  {
    id: "4",
    title: "From Bamboo to Batteries: Power Plant Energy's Graphite Patents Signal a New Era for Australian Manufacturing",
    excerpt: "Discover how Power Plant Energy's four new patents for converting Beema Bamboo into battery-grade graphite are positioning Australia as a key player in the global battery supply chain.",
    date: "October 27, 2025",
    author: "Power Plant Energy",
    category: "Innovation",
    slug: "bamboo-to-batteries-graphite-patents",
    readTime: "7 min read"
  },
  {
    id: "5",
    title: "The Blueprint for a Bio-Circular Australia: Power Plant Energy's Plan for Collaborative Success",
    excerpt: "Explore Power Plant Energy's comprehensive strategy for building a sovereign bio-circular economy through strategic partnerships with agriculture, industry, and government.",
    date: "October 26, 2025",
    author: "Power Plant Energy",
    category: "Strategy",
    slug: "bio-circular-australia-collaborative-blueprint",
    readTime: "8 min read"
  }
];
