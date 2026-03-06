export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialUrl?: string;
  description: string;
}

export const certifications: Certification[] = [
  {
    id: 'cbd-blockchain-council',
    title: 'Certified Blockchain Developer',
    issuer: 'Blockchain Council Academy',
    issueDate: '2021',
    description: 'Advanced certification in blockchain development covering smart contracts, consensus mechanisms, and DeFi protocols.',
    credentialUrl: '#'
  },
  {
    id: 'blockchain-ethereum',
    title: 'Certification in Blockchain Basics (Ethereum, Cryptography, Blockchain, Bitcoin)',
    issuer: 'Coursera',
    issueDate: '2020',
    description: 'Comprehensive fundamentals covering blockchain technology, cryptocurrency, and Ethereum development.',
    credentialUrl: '#'
  },
  {
    id: 'python-coursera',
    title: 'Python Programming Certification',
    issuer: 'Coursera',
    issueDate: '2019',
    description: 'Advanced Python programming including data structures, algorithms, and backend development.',
    credentialUrl: '#'
  }
];
