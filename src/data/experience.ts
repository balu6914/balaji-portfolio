export interface Experience {
  id: string;
  position: string;
  company: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
  technologies: string[];
  type: 'full-time' | 'contract';
}

export const experiences: Experience[] = [
  {
    id: 'cognizant-sr',
    position: 'Sr. Associate Blockchain Developer',
    company: 'Cognizant',
    duration: '2022 - Present',
    startDate: 'Feb 2022',
    endDate: 'Present',
    description: 'Leading blockchain development initiatives with focus on smart contract architecture, DeFi protocols, and cross-chain solutions.',
    highlights: [
      'Developed and deployed 15+ Ethereum smart contracts (Breeding, Staking, DAO), improving performance by 30%',
      'Created responsive web3 front-end interfaces, increasing user engagement by 20%',
      'Built efficient Ethereum bot using Geth, Golang reducing resource usage by 25%',
      'Deployed 15+ Cosmos SDK modules (Governance, Staking, IBC), enhancing performance by 30%',
      'Engineered secure Airdrop smart contract using Merkle tree technology',
      'Architected framework of runbooks for Base L2 protocol',
      'Performed security assessments and threat modeling of blockchain protocols'
    ],
    technologies: ['Solidity', 'Ethereum', 'Cosmos SDK', 'Go', 'React.js', 'Web3.js', 'TypeScript'],
    type: 'full-time'
  },
  {
    id: 'lti-module-lead',
    position: 'Module Lead',
    company: 'LTI - Mindtree',
    duration: '2018 - 2022',
    startDate: 'Sep 2018',
    endDate: 'Feb 2022',
    description: 'Led team of 5 developers in designing and implementing decentralized exchanges and blockchain solutions on Hyperledger Fabric.',
    highlights: [
      'Led 5 developers implementing DEX on Hyperledger Fabric, achieving 300% increase in daily trading volume',
      'Optimized gas usage reducing average transaction cost by 35%',
      'Developed Cosmos SDK modules with boilerplate ABCI implementation',
      'Integrated Layer 2 scaling solutions improving throughput by 200%',
      'Leveraged PWA techniques and Hyperledger Explorer for data visualization',
      'Built Layer-1 Public Blockchain Network using Tendermint BFT Consensus',
      'Developed high-performance customer-facing React web applications'
    ],
    technologies: ['Hyperledger Fabric', 'Cosmos SDK', 'Tendermint', 'React.js', 'Node.js', 'JavaScript', 'Docker'],
    type: 'full-time'
  },
  {
    id: 'wipro-sr-engineer',
    position: 'Sr. Software Engineer',
    company: 'Wipro',
    duration: '2016 - 2018',
    startDate: 'Jun 2016',
    endDate: 'Aug 2018',
    description: 'Designed and implemented scalable Big Data solutions integrating Hadoop, Spark, and Kafka for enterprise clients.',
    highlights: [
      'Integrated Big Data solutions with Hadoop, Spark, and Kafka',
      'Designed scalable data pipeline enhancing ingestion speed',
      'Created interactive dashboards for real-time data visualization',
      'Migrated legacy systems to cloud-based Big Data architecture',
      'Reduced storage costs while increasing operational efficiency',
      'Authored robust test scripts for data accuracy validation'
    ],
    technologies: ['Apache Spark', 'Apache Hadoop', 'Kafka', 'Python', 'SQL', 'AWS', 'Tableau'],
    type: 'full-time'
  },
  {
    id: 'techmahindra-trainee',
    position: 'GIS and Big Data Trainee Software Engineer',
    company: 'TechMahindra',
    duration: '2013 - 2016',
    startDate: 'May 2013',
    endDate: 'Jun 2016',
    description: 'Built foundational expertise in web development and big data technologies while supporting enterprise projects.',
    highlights: [
      'Collected and translated user requirements into implementation plans',
      'Conceived optimized landing pages for integration and cross-browser compatibility',
      'Delivered comprehensive user support and training',
      'Employed coding practices based on industry standards',
      'Collaborated with designers to create innovative UI designs',
      'Developed RESTful web services for dynamic datasets'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Java', 'GIS Tools', 'REST APIs'],
    type: 'full-time'
  }
];
