// News data structure
export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  source?: string;
  sourceUrl?: string;
  coverImage: string;
  publishDate: string;
  readTime: number; // Read time in minutes
  category: string; // News category
  tags: string[];
  featured?: boolean;
}

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Indo Wagen Launches New Service Center Network Across 5 States',
    slug: 'indo-wagen-launches-service-center-network',
    excerpt: 'Expanding our reach to provide better service and support to customers in 5 key states.',
    content: `
      <p>Indo Wagen, a leading manufacturer of electric rickshaws, has announced the launch of 25 new service centers across five states in India. This expansion is part of the company's commitment to providing comprehensive after-sales support to its growing customer base.</p>
      
      <p>The new service centers, located in Uttar Pradesh, Bihar, West Bengal, Haryana, and Rajasthan, will offer a range of services including:</p>
      
      <ul>
        <li>Routine maintenance and servicing</li>
        <li>Warranty repairs</li>
        <li>Battery diagnostics and replacement</li>
        <li>Spare parts availability</li>
        <li>Technical assistance and driver training</li>
      </ul>
      
      <p>"Our customers rely on their E-rickshaws for their daily livelihood. Quick and effective service support is not just a convenience—it's essential for their business continuity," said Rajan Gupta, Head of After-Sales Service at Indo Wagen. "With these new centers, we ensure that no customer has to travel more than 50 kilometers to reach an authorized service point."</p>
      
      <p>Each service center is equipped with diagnostic tools and staffed by technicians trained specifically in electric vehicle maintenance. The company has also implemented a digital service management system that allows for efficient scheduling, inventory management, and service history tracking.</p>
      
      <p>The expansion brings Indo Wagen's total service network to over 100 locations nationwide, reinforcing its position as the company with the most extensive service coverage in the E-rickshaw segment. Future plans include the addition of mobile service vans to reach customers in more remote areas.</p>
      
      <p>E-rickshaw owners can locate their nearest service center through the Indo Wagen website or by calling the customer support helpline.</p>
    `,
    coverImage: '/images/news/service-center-launch.jpg',
    publishDate: 'March 24, 2025',
    readTime: 5,
    category: 'Company News',
    tags: ['Service Centers', 'Company News', 'Customer Support'],
    featured: true
  },
  {
    id: '2',
    title: 'Indo Wagen Awarded "Green Mobility Champion" at National EV Conference',
    slug: 'green-mobility-champion-award',
    excerpt: 'Recognition for our contribution to sustainable transportation and environmental impact.',
    content: `
      <p>Indo Wagen has been honored with the prestigious "Green Mobility Champion" award at the 5th National Electric Vehicle Conference held in Delhi last week. The award recognizes the company's significant contribution to promoting sustainable transportation solutions in India.</p>
      
      <p>The selection committee highlighted Indo Wagen's comprehensive approach to sustainability, which extends beyond just manufacturing electric vehicles to include:</p>
      
      <ul>
        <li>Sustainable manufacturing practices at its production facilities</li>
        <li>Battery recycling initiatives</li>
        <li>Solar-powered charging infrastructure development</li>
        <li>Driver education programs on eco-friendly operation</li>
      </ul>
      
      <p>Accepting the award, Vikash Mishra, CEO of Indo Wagen, said, "This recognition reaffirms our commitment to creating not just electric vehicles, but a complete ecosystem that supports sustainable mobility. Our vision goes beyond replacing fossil fuel vehicles—we aim to transform how people think about and use transportation."</p>
      
      <p>The award committee particularly noted the company's impact in tier-2 and tier-3 cities, where Indo Wagen's electric rickshaws have significantly reduced carbon emissions while providing affordable transportation options.</p>
      
      <p>The National EV Conference, attended by industry leaders, policy makers, and environmental advocates, serves as a platform to discuss challenges and opportunities in India's electric mobility sector. The event featured panel discussions on battery technology, charging infrastructure, government policies, and consumer adoption trends.</p>
      
      <p>Indo Wagen also showcased its upcoming model with enhanced range and features at the conference, generating considerable interest among attendees and potential distribution partners.</p>
    `,
    source: 'EV Industry Today',
    sourceUrl: 'https://example.com/ev-industry-today',
    coverImage: '/images/news/award-ceremony.jpg',
    publishDate: 'March 20, 2025',
    readTime: 4,
    category: 'Awards & Recognition',
    tags: ['Awards', 'Recognition', 'Sustainability'],
    featured: true
  },
  {
    id: '3',
    title: 'Government Announces Enhanced Subsidies for Electric Commercial Vehicles',
    slug: 'enhanced-subsidies-electric-commercial-vehicles',
    excerpt: 'New policy updates offer increased financial incentives for electric rickshaw operators and fleet owners.',
    content: `
      <p>The Ministry of Heavy Industries has announced an enhancement to the FAME II (Faster Adoption and Manufacturing of Electric Vehicles) scheme, with specific focus on electric three-wheelers used for commercial purposes, including E-rickshaws.</p>
      
      <p>Key highlights of the revised scheme include:</p>
      
      <ul>
        <li>Increased subsidy amount from ₹50,000 to ₹75,000 per vehicle</li>
        <li>Additional incentives for scrapping old fossil fuel vehicles</li>
        <li>Extended eligibility for fleet operators with simplified documentation</li>
        <li>Special provisions for women operators and operators from economically weaker sections</li>
      </ul>
      
      <p>The enhanced subsidies are expected to accelerate the adoption of electric three-wheelers, contributing to the government's target of 30% electric vehicle penetration by 2030.</p>
      
      <p>"This policy enhancement reflects the government's commitment to sustainable transportation and recognizes the vital role of small commercial vehicles in India's mobility ecosystem," said a ministry spokesperson. "It will not only contribute to reducing emissions but also create economic opportunities for operators."</p>
      
      <p>Industry experts estimate that the revised subsidies could reduce the effective cost of an E-rickshaw by 15-20%, making it an even more attractive option for operators transitioning from conventional vehicles.</p>
      
      <p>Indo Wagen welcomes these policy changes as they align with our mission of making electric mobility accessible and affordable. Our dealerships are prepared to assist customers in understanding the new subsidy structure and completing the necessary documentation to avail these benefits.</p>
      
      <p>Prospective buyers are encouraged to visit authorized Indo Wagen showrooms for detailed information on how these subsidies apply to specific models and purchasing scenarios.</p>
    `,
    source: 'Economic Times',
    sourceUrl: 'https://example.com/economic-times',
    coverImage: '/images/news/government-policy.jpg',
    publishDate: 'March 15, 2025',
    readTime: 6,
    category: 'Policy Updates',
    tags: ['Government Policy', 'Subsidies', 'FAME II'],
    featured: false
  },
  {
    id: '4',
    title: 'Indo Wagen Partners with Finance Companies for Special Loan Programs',
    slug: 'finance-partnership-loan-programs',
    excerpt: 'New financing options make it easier for operators to purchase and upgrade to electric rickshaws.',
    content: `
      <p>Indo Wagen has announced strategic partnerships with three leading financial institutions to offer specialized loan programs for E-rickshaw purchasers. These partnerships aim to make financing more accessible and affordable for individual operators and small fleet owners.</p>
      
      <p>The partner institutions include a major national bank, a regional rural bank, and a microfinance organization, ensuring options for customers across different financial profiles. The programs offer:</p>
      
      <ul>
        <li>Reduced interest rates (up to 2% lower than standard vehicle loans)</li>
        <li>Extended repayment periods of up to 5 years</li>
        <li>Lower down payment requirements (starting from 10%)</li>
        <li>Simplified documentation process</li>
        <li>Special schemes for first-time business owners and women entrepreneurs</li>
      </ul>
      
      <p>"Financial accessibility is often the biggest barrier to adoption of electric vehicles, especially for small operators," explained Neeraj Joshi, Director of Sales at Indo Wagen. "These partnerships address that challenge directly, making the transition to electric mobility financially viable for more people."</p>
      
      <p>The financing programs also include insurance coverage with special premiums for electric vehicles and maintenance packages that cover battery health checks and routine servicing.</p>
      
      <p>Particularly innovative is the "Drive Now, Pay Later" scheme that allows operators to start earning with their E-rickshaw before making their first payment, with a 60-day moratorium period on loan repayment.</p>
      
      <p>Indo Wagen's dealership staff have been trained to guide customers through the loan application process and help them select the financing option that best suits their individual circumstances.</p>
      
      <p>The company expects these new financing options to boost sales by approximately 30% and support the growing demand for E-rickshaws in both urban and rural markets.</p>
    `,
    coverImage: '/images/news/finance-partnership.jpg',
    publishDate: 'March 10, 2025',
    readTime: 4,
    category: 'Partnerships',
    tags: ['Financing', 'Partnerships', 'Loans'],
    featured: false
  },
  {
    id: '5',
    title: "Indo Wagen's New R&D Center Focuses on Battery Technology Innovation",
    slug: 'new-rd-center-battery-technology',
    excerpt: 'Investment in research and development aims to improve battery performance, lifespan, and sustainability.',
    content: `
      <p>Indo Wagen has inaugurated a state-of-the-art Research and Development center in Pune, focused primarily on advancing battery technology for electric rickshaws. The facility represents an investment of ₹25 crore and will employ a team of 30 engineers and technical specialists.</p>
      
      <p>The R&D center will concentrate on three key areas:</p>
      
      <ul>
        <li><strong>Battery Performance:</strong> Developing batteries with improved energy density and power delivery</li>
        <li><strong>Battery Lifespan:</strong> Researching ways to extend cycle life and reduce degradation</li>
        <li><strong>Sustainability:</strong> Creating more environmentally friendly battery compositions and recycling processes</li>
      </ul>
      
      <p>The facility is equipped with advanced testing equipment, environmental simulation chambers, and prototype development capabilities. It will collaborate with leading technical institutes and global technology partners to accelerate innovation.</p>
      
      <p>"Battery technology is the heart of electric mobility, and advancements in this area directly translate to better performance, lower costs, and greater sustainability," said Dr. Anand Sharma, newly appointed Head of R&D. "Our goal is to develop India-specific solutions that address the unique challenges of our operating environment, from extreme temperatures to varied road conditions."</p>
      
      <p>The first project underway at the center is the development of a new battery management system that adapts to India's fluctuating grid power quality, protecting batteries during charging and extending their useful life.</p>
      
      <p>The company also announced plans to explore alternative battery chemistries beyond the current lead-acid and lithium-ion options, seeking more affordable and locally sourceable materials.</p>
      
      <p>"This R&D investment reflects our long-term commitment to the electric mobility sector in India," commented Vikash Mishra, CEO. "While imports and adaptations have served the market initially, true growth and accessibility will come from homegrown innovations tailored to Indian conditions and requirements."</p>
      
      <p>The center is expected to deliver its first commercial innovations within 12-18 months, with potential applications extending beyond E-rickshaws to other electric mobility solutions in the future.</p>
    `,
    coverImage: '/images/news/rd-center.jpg',
    publishDate: 'March 5, 2025',
    readTime: 7,
    category: 'Innovation',
    tags: ['R&D', 'Battery Technology', 'Innovation'],
    featured: false
  }
];
