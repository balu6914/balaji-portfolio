export interface Skill {
  category: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
  proficiency: 'expert' | 'advanced' | 'intermediate';
  yearsOfExperience: number;
}

export const skills: Skill[] = [
  {
    category: 'Blockchain Technologies',
    items: [
      { name: 'Solidity', proficiency: 'expert', yearsOfExperience: 5 },
      { name: 'Web3.js / Ethers.js', proficiency: 'expert', yearsOfExperience: 5 },
      { name: 'Smart Contract Development', proficiency: 'expert', yearsOfExperience: 5 },
      { name: 'Ethereum', proficiency: 'expert', yearsOfExperience: 5 },
      { name: 'Solana', proficiency: 'advanced', yearsOfExperience: 3 },
      { name: 'Rust (Smart Contracts)', proficiency: 'advanced', yearsOfExperience: 3 },
      { name: 'Cosmos SDK', proficiency: 'advanced', yearsOfExperience: 3 },
      { name: 'Hyperledger Fabric', proficiency: 'advanced', yearsOfExperience: 4 },
      { name: 'Go Blockchain Dev', proficiency: 'advanced', yearsOfExperience: 4 },
      { name: 'DeFi Protocols', proficiency: 'expert', yearsOfExperience: 4 },
    ]
  },
  {
    category: 'Programming Languages',
    items: [
      { name: 'JavaScript / TypeScript', proficiency: 'expert', yearsOfExperience: 8 },
      { name: 'Go', proficiency: 'advanced', yearsOfExperience: 4 },
      { name: 'Rust', proficiency: 'advanced', yearsOfExperience: 3 },
      { name: 'Python', proficiency: 'advanced', yearsOfExperience: 6 },
      { name: 'Java', proficiency: 'intermediate', yearsOfExperience: 4 },
      { name: 'C++', proficiency: 'intermediate', yearsOfExperience: 2 },
    ]
  },
  {
    category: 'Web & Frontend',
    items: [
      { name: 'React.js', proficiency: 'expert', yearsOfExperience: 7 },
      { name: 'Next.js', proficiency: 'expert', yearsOfExperience: 4 },
      { name: 'TypeScript', proficiency: 'expert', yearsOfExperience: 5 },
      { name: 'Tailwind CSS', proficiency: 'expert', yearsOfExperience: 4 },
      { name: 'Redux / State Management', proficiency: 'expert', yearsOfExperience: 6 },
      { name: 'Angular.js', proficiency: 'advanced', yearsOfExperience: 3 },
    ]
  },
  {
    category: 'Backend & Infrastructure',
    items: [
      { name: 'Node.js / Express.js', proficiency: 'expert', yearsOfExperience: 6 },
      { name: 'Nest.js', proficiency: 'advanced', yearsOfExperience: 3 },
      { name: 'Docker & Kubernetes', proficiency: 'advanced', yearsOfExperience: 4 },
      { name: 'CI/CD Pipelines', proficiency: 'advanced', yearsOfExperience: 4 },
      { name: 'AWS', proficiency: 'intermediate', yearsOfExperience: 3 },
    ]
  },
  {
    category: 'Big Data & Databases',
    items: [
      { name: 'Apache Spark', proficiency: 'advanced', yearsOfExperience: 4 },
      { name: 'Apache Hadoop', proficiency: 'advanced', yearsOfExperience: 4 },
      { name: 'Kafka', proficiency: 'advanced', yearsOfExperience: 3 },
      { name: 'PostgreSQL', proficiency: 'expert', yearsOfExperience: 7 },
      { name: 'MongoDB', proficiency: 'advanced', yearsOfExperience: 5 },
      { name: 'Redis', proficiency: 'advanced', yearsOfExperience: 4 },
    ]
  },
  {
    category: 'Testing & Security',
    items: [
      { name: 'Smart Contract Auditing', proficiency: 'advanced', yearsOfExperience: 5 },
      { name: 'Hardhat Testing', proficiency: 'expert', yearsOfExperience: 4 },
      { name: 'Jest / Mocha', proficiency: 'advanced', yearsOfExperience: 6 },
      { name: 'Slither / Mythril', proficiency: 'advanced', yearsOfExperience: 3 },
      { name: 'Gas Optimization', proficiency: 'advanced', yearsOfExperience: 4 },
    ]
  }
];
