export interface Accessory {
  id: string;
  name: string;
  description: string;
  price: string;
  priceValue: number;
  image: string;
  compatibleModels: string[];
  category: string;
  rating?: number;
  featured?: boolean;
  inStock: boolean;
}

export const accessories: Accessory[] = [
  {
    id: 'battery-72v-35ah',
    name: '72V 35Ah Lithium-ion Battery Pack',
    description: 'High-performance lithium-ion battery pack specially designed for Indo Wagen e-vehicles. Offers extended range and superior cycle life compared to lead-acid alternatives.',
    price: '₹24,999',
    priceValue: 24999,
    image: '/images/accessories/battery-pack.jpg',
    compatibleModels: ['E-Rickshaw Standard', 'E-Rickshaw Deluxe', 'E-Rickshaw Premium'],
    category: 'Batteries',
    rating: 4.8,
    featured: true,
    inStock: true
  },
  {
    id: 'fast-charger-pro',
    name: 'Fast Charger Pro - 15A',
    description: 'Charge your electric vehicle up to 40% faster with our premium 15A fast charger. Features intelligent charge management and battery protection systems.',
    price: '₹4,599',
    priceValue: 4599,
    image: '/images/accessories/fast-charger.jpg',
    compatibleModels: ['E-Rickshaw Standard', 'E-Rickshaw Deluxe', 'E-Rickshaw Premium', 'E-Cart Mini', 'E-Cart Standard'],
    category: 'Chargers',
    rating: 4.6,
    featured: true,
    inStock: true
  },
  {
    id: 'digital-speedometer',
    name: 'Digital Speedometer with Battery Indicator',
    description: 'Advanced digital dashboard with speedometer, battery level indicator, and trip computer functionality. Easy installation with weather-resistant design.',
    price: '₹2,199',
    priceValue: 2199,
    image: '/images/accessories/digital-speedometer.jpg',
    compatibleModels: ['E-Rickshaw Standard', 'E-Rickshaw Deluxe', 'E-Rickshaw Premium', 'E-Cart Mini', 'E-Cart Standard', 'E-Loader 250', 'E-Loader 450'],
    category: 'Electronics',
    rating: 4.5,
    inStock: true
  },
  {
    id: 'canopy-deluxe',
    name: 'Deluxe Weather Canopy',
    description: 'Premium weather-resistant canopy providing excellent protection from sun and rain. Features reinforced mounting points and UV-resistant materials.',
    price: '₹3,999',
    priceValue: 3999,
    image: '/images/accessories/canopy.jpg',
    compatibleModels: ['E-Rickshaw Standard', 'E-Rickshaw Deluxe'],
    category: 'Body Parts',
    rating: 4.3,
    inStock: true
  },
  {
    id: 'led-headlight-kit',
    name: 'LED Headlight Upgrade Kit',
    description: 'Bright, energy-efficient LED headlight kit that improves visibility while consuming less power from your battery. Simple plug-and-play installation.',
    price: '₹1,499',
    priceValue: 1499,
    image: '/images/accessories/led-kit.jpg',
    compatibleModels: ['E-Rickshaw Standard', 'E-Rickshaw Deluxe', 'E-Rickshaw Premium', 'E-Cart Mini', 'E-Cart Standard', 'E-Loader 250', 'E-Loader 450'],
    category: 'Electronics',
    rating: 4.7,
    featured: true,
    inStock: true
  },
  {
    id: 'suspension-upgrade',
    name: 'Enhanced Suspension Kit',
    description: 'Upgraded suspension system for a smoother ride and better handling, particularly on rough roads. Includes shock absorbers and installation hardware.',
    price: '₹5,999',
    priceValue: 5999,
    image: '/images/accessories/suspension-kit.jpg',
    compatibleModels: ['E-Rickshaw Standard', 'E-Rickshaw Premium', 'E-Loader 250', 'E-Loader 450'],
    category: 'Performance Parts',
    rating: 4.4,
    inStock: false
  },
  {
    id: 'custom-seat-covers',
    name: 'Premium Leatherette Seat Covers',
    description: 'Durable, water-resistant premium leatherette seat covers that enhance comfort and appearance while protecting the original seats.',
    price: '₹1,999',
    priceValue: 1999,
    image: '/images/accessories/seat-covers.jpg',
    compatibleModels: ['E-Rickshaw Standard', 'E-Rickshaw Deluxe', 'E-Rickshaw Premium'],
    category: 'Comfort Accessories',
    rating: 4.2,
    inStock: true
  },
  {
    id: 'anti-theft-alarm',
    name: 'Advanced Anti-Theft Alarm System',
    description: 'Comprehensive security system featuring motion detection, remote control, and loud siren to deter theft and unauthorized use of your vehicle.',
    price: '₹2,499',
    priceValue: 2499,
    image: '/images/accessories/alarm-system.jpg',
    compatibleModels: ['E-Rickshaw Standard', 'E-Rickshaw Deluxe', 'E-Rickshaw Premium', 'E-Cart Standard', 'E-Loader 450'],
    category: 'Safety & Security',
    rating: 4.5,
    inStock: true
  },
  {
    id: 'solar-charging-panel',
    name: 'Auxiliary Solar Charging Panel',
    description: 'Supplementary solar panel that helps extend range by trickle-charging your vehicle battery when parked in sunlight or during operation.',
    price: '₹7,999',
    priceValue: 7999,
    image: '/images/accessories/solar-panel.jpg',
    compatibleModels: ['E-Rickshaw Deluxe', 'E-Rickshaw Premium', 'E-Cart Standard'],
    category: 'Performance Parts',
    rating: 4.0,
    featured: true,
    inStock: true
  },
  {
    id: 'waterproof-cover',
    name: 'All-Weather Vehicle Cover',
    description: 'Heavy-duty, waterproof cover providing complete protection for your vehicle when not in use. Prevents dust, rain damage, and UV degradation.',
    price: '₹1,799',
    priceValue: 1799,
    image: '/images/accessories/vehicle-cover.jpg',
    compatibleModels: ['E-Rickshaw Standard', 'E-Rickshaw Deluxe', 'E-Rickshaw Premium', 'E-Cart Mini', 'E-Cart Standard', 'E-Loader 250', 'E-Loader 450'],
    category: 'Comfort Accessories',
    rating: 4.3,
    inStock: true
  },
  {
    id: 'bluetooth-audio',
    name: 'Bluetooth Audio System',
    description: 'Waterproof Bluetooth speaker system with USB charging, allowing drivers to play music or take phone calls while on the move.',
    price: '₹2,299',
    priceValue: 2299,
    image: '/images/accessories/bluetooth-audio.jpg',
    compatibleModels: ['E-Rickshaw Deluxe', 'E-Rickshaw Premium'],
    category: 'Electronics',
    rating: 4.1,
    inStock: true
  },
  {
    id: 'cargo-rack',
    name: 'Heavy-Duty Cargo Rack',
    description: 'Reinforced cargo rack designed to securely transport additional luggage or goods, increasing the carrying capacity of your vehicle.',
    price: '₹3,299',
    priceValue: 3299,
    image: '/images/accessories/cargo-rack.jpg',
    compatibleModels: ['E-Cart Mini', 'E-Cart Standard', 'E-Loader 250', 'E-Loader 450'],
    category: 'Performance Parts',
    rating: 4.6,
    inStock: true
  }
];
