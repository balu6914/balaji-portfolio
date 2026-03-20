export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  challenges: string;
  solutions: string[];
  results: string[];
  image?: string;
  github?: string;
  live?: string;
  category: 'blockchain' | 'bigdata' | 'fullstack' | 'dapp';
  year: number;
}

export const projects: Project[] = [
  {
    id: 'swell-network',
    title: 'Swell Network - Restaking Protocol',
    description: 'Enterprise-scale restaking yield layer supporting multi-asset liquid staking and restaking',
    longDescription: 'Led development of Swell Network, a comprehensive restaking protocol managing $89M+ TVL. Architected and deployed multiple liquid restaking tokens (rswETH, swBTC) integrated with EigenLayer and Symbiotic protocols. Built robust infrastructure for yield farming and restaking on Layer 2 Swellchain.',
    technologies: ['Solidity', 'Go', 'React.js', 'TypeScript', 'Web3.js', 'Ethers.js', 'Optimism', 'EigenLayer', 'Symbiotic'],
    challenges: 'Managing complex restaking mechanics across multiple yield layers, ensuring security with substantial TVL, integrating with EigenLayer and Symbiotic consensus mechanisms, optimizing gas costs for high-frequency restaking transactions',
    solutions: [
      'Architected multi-token restaking system supporting rswETH (ETH), swBTC (Bitcoin), and swETH (LST)',
      'Implemented secure smart contracts audited by Sigma Prime and Hexens with 95%+ security coverage',
      'Built high-performance Layer 2 infrastructure achieving sub-second transaction confirmation',
      'Designed efficient reward distribution mechanisms reducing gas overhead by 40%',
      'Integrated with leading DeFi protocols (Pancake Swap, Curve, Balancer) for deep liquidity'
    ],
    results: [
      'Managed $89M+ total protocol TVL with 187,567+ active users',
      'rswETH: $35M TVL with 39,086 users earning 2.75% APR',
      'swBTC: $812K TVL supporting Bitcoin restaking on Ethereum',
      'swETH: $39M TVL with 132,902 users earning steady yield',
      'earnETH Vault: $1.15M TVL achieving 3.41% APR with 377 users',
      '14,123+ users on Swellchain L2 with $13M+ TVL'
    ],
    category: 'blockchain',
    year: 2025,
    github: 'https://github.com/SwellNetwork',
    live: 'https://www.swellnetwork.io/'
  },
  {
    id: 'ambient-finance',
    title: 'Ambient Finance - DEX Protocol',
    description: 'Zero-to-one decentralized trading protocol with concentrated and ambient liquidity',
    longDescription: 'Developed Ambient Finance, a next-generation DEX protocol running the entire exchange in a single smart contract. Implemented dual liquidity models (concentrated V3 and ambient V2) enabling superior LP economics and trading efficiency. Built comprehensive frontend supporting swap, trade, pool, and vault operations.',
    technologies: ['Solidity', 'TypeScript', 'React.js', 'Web3.js', 'Ethers.js', 'GraphQL', 'Rust'],
    challenges: 'Implementing dual concentrated/ambient liquidity models in single contract, optimizing gas efficiency for complex order types, ensuring security with significant capital deployment, supporting range/limit orders alongside spot trading',
    solutions: [
      'Architected unified liquidity pool supporting concentrated (V3), ambient (V2), and knock-out orders',
      'Optimized smart contract reducing transaction costs 50%+ vs traditional AMMs',
      'Implemented sophisticated range and limit order engine for enhanced trader control',
      'Built high-performance frontend supporting real-time market data and order execution',
      'Integrated multiple investment partners and market makers (Block Tower, Jane Street, Circle)'
    ],
    results: [
      'Attracted major institutional investors: Block Tower, Jane Street, Circle, Naval Ravikant',
      'Supported by Quantstamp and other leading security firms',
      'Deployed across multiple blockchain networks with growing TVL',
      'Superior LP rewards through innovative V2/V3 hybrid model',
      'Trading volume growing with institutional and retail participation'
    ],
    category: 'dapp',
    year: 2023,
    github: 'https://github.com/CrocSwap',
    live: 'https://ambient.finance/'
  },
  {
    id: 'ethereum-staking-dapp',
    title: 'Ethereum Staking dApp',
    description: 'Full-stack decentralized staking platform on Ethereum',
    longDescription: 'Developed a production-ready staking dApp allowing users to stake ETH with automated reward distribution using smart contracts and node operators.',
    technologies: ['Solidity', 'React.js', 'Web3.js', 'Hardhat', 'Node.js', 'PostgreSQL'],
    challenges: 'Managing gas optimization, handling concurrent staking transactions, ensuring smart contract security',
    solutions: [
      'Implemented gas-efficient smart contracts reducing transaction costs by 35%',
      'Built advanced state management with Redux for real-time updates',
      'Conducted rigorous security audits using Slither and Mythril'
    ],
    results: ['30% improvement in transaction performance', '20% increase in user engagement', 'Successfully staked 5000+ ETH'],
    category: 'blockchain',
    year: 2023,
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    id: 'nft-marketplace',
    title: 'NFT Marketplace',
    description: 'Multi-chain NFT marketplace supporting ERC721 and ERC1155',
    longDescription: 'Architected and developed a scalable NFT marketplace with advanced features like lazy minting, royalty management, and collection management.',
    technologies: ['Solidity', 'React.js', 'Next.js', 'Web3.js', 'IPFS', 'Moralis'],
    challenges: 'Cross-chain compatibility, gas optimization for batch operations, IPFS integration',
    solutions: [
      'Implemented bridge contracts for multi-chain support',
      'Created efficient batch minting reducing costs by 40%',
      'Built custom IPFS pinning service for metadata storage'
    ],
    results: ['35% increase in user engagement', 'Supported 2+ blockchain networks', '10000+ listed NFTs'],
    category: 'blockchain',
    year: 2023
  },
  {
    id: 'cosmos-governance-module',
    title: 'Cosmos SDK Governance Module',
    description: 'Custom governance module for Cosmos-based blockchain',
    longDescription: 'Developed comprehensive governance module with proposal, voting, and execution mechanisms for a Cosmos-based blockchain network.',
    technologies: ['Go', 'Cosmos SDK', 'Tendermint', 'React.js', 'GraphQL'],
    challenges: 'Complex voting logic, state management across validators, real-time data sync',
    solutions: [
      'Implemented sophisticated voting algorithm with weighted delegation',
      'Built real-time GraphQL endpoints for proposal tracking',
      'Created comprehensive testing suite with 95% code coverage'
    ],
    results: ['30% performance improvement', '20% reduction in block time', 'Active network with 50+ validators'],
    category: 'blockchain',
    year: 2022
  },
  {
    id: 'hyperledger-dex',
    title: 'Hyperledger Fabric DEX',
    description: 'Enterprise Decentralized Exchange on Hyperledger Fabric',
    longDescription: 'Led team of 5 developers to build a production DEX on Hyperledger Fabric with automated market making and liquidity pooling.',
    technologies: ['Hyperledger Fabric', 'Hyperledger Composer', 'Node.js', 'React.js', 'GraphQL'],
    challenges: 'Managing state across channels, ensuring data consistency, complex order matching',
    solutions: [
      'Designed multi-channel architecture for scalability',
      'Implemented efficient order matching engine',
      'Built comprehensive explorer for transaction visibility'
    ],
    results: ['300% increase in daily trading volume', '20% improvement in user satisfaction', '₹100Cr+ daily volume'],
    category: 'blockchain',
    year: 2022
  },
  {
    id: 'big-data-pipeline',
    title: 'Scalable Big Data Pipeline',
    description: 'Real-time data processing pipeline using Hadoop, Spark, Kafka',
    longDescription: 'Designed and implemented enterprise-scale data pipeline processing 10TB+ daily data from multiple sources with real-time analytics.',
    technologies: ['Apache Hadoop', 'Apache Spark', 'Kafka', 'PostgreSQL', 'Python', 'Docker'],
    challenges: 'Data consistency at scale, real-time processing latency, cost optimization',
    solutions: [
      'Implemented stream processing with Kafka for real-time ingestion',
      'Built spark jobs with optimized partitioning reducing query time by 60%',
      'Created Docker-based microservices for scalable deployment'
    ],
    results: ['60% query performance improvement', 'Reduced storage costs by 40%', 'Processes 10TB+ daily data'],
    category: 'bigdata',
    year: 2022
  },
  {
    id: 'web3-dashboard',
    title: 'Web3 Analytics Dashboard',
    description: 'Real-time blockchain analytics and monitoring dashboard',
    longDescription: 'Built comprehensive dashboard for monitoring smart contract interactions, gas prices, and on-chain metrics with real-time updates.',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Web3.js', 'Ethers.js', 'GraphQL', 'Chart.js'],
    challenges: 'Real-time data synchronization, handling large datasets, performance optimization',
    solutions: [
      'Implemented WebSocket connections for real-time updates',
      'Used data virtualization for handling large datasets',
      'Optimized renders using useMemo and useCallback'
    ],
    results: ['95% uptime', 'Sub-second data refresh', 'Used by 1000+ analysts'],
    category: 'fullstack',
    year: 2023
  }
];
