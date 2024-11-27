import { Deal } from '../types/deal';

export const deals: Deal[] = [
  {
    id: 'ams-bcn',
    from: 'Amsterdam',
    to: 'Barcelona',
    price: 49,
    date: 'Mar 15 - Mar 22',
    imageUrl: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&q=80&w=800',
    airline: 'Vueling',
    departureTime: '10:25',
    arrivalTime: '12:45',
    duration: '2h 20m',
    bookingUrl: 'https://www.vueling.com',
    description: 'Escape to the vibrant city of Barcelona! Experience the stunning architecture of Gaudi, enjoy tapas in Gothic Quarter, and relax on Mediterranean beaches.',
    highlights: [
      'Direct flight',
      'Carry-on included',
      'Free seat selection',
      'Flexible booking'
    ],
    stops: 'direct'
  },
  {
    id: 'ber-rom',
    from: 'Berlin',
    to: 'Rome',
    price: 59,
    date: 'Apr 5 - Apr 12',
    imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=800',
    airline: 'Ryanair',
    departureTime: '07:15',
    arrivalTime: '09:30',
    duration: '2h 15m',
    bookingUrl: 'https://www.ryanair.com',
    description: 'Discover the eternal city of Rome! Visit the Colosseum, throw a coin in the Trevi Fountain, and indulge in authentic Italian cuisine.',
    highlights: [
      'Direct flight',
      'Priority boarding available',
      'Central airports',
      'Multiple daily flights'
    ],
    stops: 'direct'
  },
  {
    id: 'par-prg',
    from: 'Paris',
    to: 'Prague',
    price: 45,
    date: 'Mar 20 - Mar 27',
    imageUrl: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&q=80&w=800',
    airline: 'EasyJet',
    departureTime: '14:30',
    arrivalTime: '16:15',
    duration: '1h 45m',
    bookingUrl: 'https://www.easyjet.com',
    description: 'Experience the magic of Prague! Walk across Charles Bridge, explore Prague Castle, and enjoy world-famous Czech beer.',
    highlights: [
      'Direct flight',
      'Flexible booking options',
      'Evening flight available',
      'Great value'
    ],
    stops: '1 stop'
  },
  {
    id: 'lon-lis',
    from: 'London',
    to: 'Lisbon',
    price: 69,
    date: 'Apr 10 - Apr 17',
    imageUrl: 'https://images.unsplash.com/photo-1588535684923-900727736ac0?auto=format&fit=crop&q=80&w=800',
    airline: 'TAP Air Portugal',
    departureTime: '11:45',
    arrivalTime: '14:30',
    duration: '2h 45m',
    bookingUrl: 'https://www.flytap.com',
    description: 'Fall in love with Lisbon! Explore historic Alfama, ride the iconic trams, and enjoy fresh seafood by the Atlantic.',
    highlights: [
      'Full-service airline',
      'Meals included',
      'Free stopover option',
      'Extra legroom'
    ],
    stops: 'direct'
  }
];