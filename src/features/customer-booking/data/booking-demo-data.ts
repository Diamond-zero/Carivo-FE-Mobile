export type VehicleType = 'CAR' | 'MOTORBIKE';
export type SlotStatus = 'AVAILABLE' | 'LIMITED' | 'WAITLIST';

export type Garage = {
  id: string;
  name: string;
  address: string;
  distance: string;
  hours: string;
  bays: number;
};

export type Vehicle = {
  id: string;
  name: string;
  plate: string;
  type: VehicleType;
  detail: string;
  isDefault?: boolean;
};

export type ServicePackage = {
  id: string;
  name: string;
  description: string;
  vehicleType: VehicleType;
  price: number;
  durationMinutes: number;
  washBayMinutes: number;
  points: number;
  requiresWashBay: boolean;
  tag: string;
  imageUrl: string;
};

export type TimeSlot = {
  id: string;
  time: string;
  range: string;
  status: SlotStatus;
  note: string;
};

export const heroVisual = {
  imageUrl:
    'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=85',
  eyebrow: 'Premium wash booking',
  title: 'Book a cleaner ride in minutes',
  subtitle: 'Choose your garage, vehicle, service package, time slot, rewards, and confirm.',
};

export const garages: Garage[] = [
  {
    id: 'tan-phu',
    name: 'Carivo Tan Phu',
    address: '87 Bo Bao Tan Thang, Tan Phu District',
    distance: '2.4 km',
    hours: '07:00 - 19:00',
    bays: 5,
  },
  {
    id: 'thu-duc',
    name: 'Carivo Thu Duc',
    address: '77 Do Xuan Hop, Thu Duc City',
    distance: '6.8 km',
    hours: '08:00 - 18:00',
    bays: 4,
  },
  {
    id: 'phu-nhuan',
    name: 'Carivo Phu Nhuan',
    address: '84 Cu Lao, Phu Nhuan District',
    distance: '4.1 km',
    hours: '07:30 - 18:30',
    bays: 3,
  },
];

export const vehicles: Vehicle[] = [
  {
    id: 'camry',
    name: 'Toyota Camry',
    plate: '30A-555.44',
    type: 'CAR',
    detail: 'White gasoline sedan',
    isDefault: true,
  },
  {
    id: 'vision',
    name: 'Honda Vision',
    plate: '29X1-333.44',
    type: 'MOTORBIKE',
    detail: 'Red motorbike under 175cc',
  },
];

export const servicePackages: ServicePackage[] = [
  {
    id: 'car-basic',
    name: 'Standard car wash',
    description: 'Exterior foam wash, glass cleaning, wheel care, drying, and quick inspection.',
    vehicleType: 'CAR',
    price: 150000,
    durationMinutes: 45,
    washBayMinutes: 30,
    points: 30,
    requiresWashBay: true,
    tag: 'Popular',
    imageUrl:
      'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'car-basic-clean',
    name: 'Basic clean package',
    description: 'Premium wash, interior vacuum, glass spot removal, and basic trim care.',
    vehicleType: 'CAR',
    price: 280000,
    durationMinutes: 90,
    washBayMinutes: 30,
    points: 55,
    requiresWashBay: true,
    tag: 'Combo',
    imageUrl:
      'https://images.unsplash.com/photo-1608506375591-b90e1f955e4b?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'car-ceramic',
    name: 'Paint protection detail',
    description: 'Light polishing and protective coating after a full surface preparation.',
    vehicleType: 'CAR',
    price: 900000,
    durationMinutes: 180,
    washBayMinutes: 0,
    points: 120,
    requiresWashBay: false,
    tag: 'Detailing',
    imageUrl:
      'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'bike-basic',
    name: 'Standard motorbike wash',
    description: 'Body, wheel, undercarriage, mirror cleaning, and hand drying.',
    vehicleType: 'MOTORBIKE',
    price: 50000,
    durationMinutes: 20,
    washBayMinutes: 20,
    points: 12,
    requiresWashBay: true,
    tag: 'Express',
    imageUrl:
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'bike-premium',
    name: 'Premium motorbike wash',
    description: 'Detailed cleaning, matte plastic care, and fast finish polishing.',
    vehicleType: 'MOTORBIKE',
    price: 80000,
    durationMinutes: 30,
    washBayMinutes: 30,
    points: 18,
    requiresWashBay: true,
    tag: 'Premium',
    imageUrl:
      'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=900&q=80',
  },
];

export const timeSlots: TimeSlot[] = [
  {
    id: '0700',
    time: '07:00',
    range: '07:00 - 07:45',
    status: 'AVAILABLE',
    note: '3 matching bays left',
  },
  {
    id: '0830',
    time: '08:30',
    range: '08:30 - 09:15',
    status: 'AVAILABLE',
    note: 'Recommended',
  },
  {
    id: '1000',
    time: '10:00',
    range: '10:00 - 10:45',
    status: 'LIMITED',
    note: '1 slot left',
  },
  {
    id: '1300',
    time: '13:00',
    range: '13:00 - 13:45',
    status: 'AVAILABLE',
    note: 'Plenty of capacity',
  },
  {
    id: '1530',
    time: '15:30',
    range: '15:30 - 16:15',
    status: 'WAITLIST',
    note: 'Join waitlist',
  },
  {
    id: '1700',
    time: '17:00',
    range: '17:00 - 17:45',
    status: 'AVAILABLE',
    note: 'Late afternoon',
  },
];

export const loyalty = {
  tier: 'Gold',
  points: 350,
  bookingWindow: '12 days',
  maxUpcoming: 2,
  multiplier: 'x1.35',
  promotionCode: 'SILVER20',
  promotionDiscount: 20000,
};

export const upcomingBookings = [
  {
    id: '#A102',
    service: 'Basic clean package',
    garage: 'Carivo Tan Phu',
    vehicle: '30A-555.44',
    time: '08:30, 15/06/2026',
    status: 'Confirmed',
  },
  {
    id: '#A098',
    service: 'Premium motorbike wash',
    garage: 'Carivo Phu Nhuan',
    vehicle: '29X1-333.44',
    time: '17:00, 22/06/2026',
    status: 'Awaiting payment',
  },
];
