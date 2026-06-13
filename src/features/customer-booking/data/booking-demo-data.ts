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
};

export type TimeSlot = {
  id: string;
  time: string;
  range: string;
  status: SlotStatus;
  note: string;
};

export const garages: Garage[] = [
  {
    id: 'tan-phu',
    name: 'Carivo Tan Phu',
    address: '87 Bo Bao Tan Thang, Tan Phu',
    distance: '2.4 km',
    hours: '07:00 - 19:00',
    bays: 5,
  },
  {
    id: 'thu-duc',
    name: 'Carivo Thu Duc',
    address: '77 Do Xuan Hop, Thu Duc',
    distance: '6.8 km',
    hours: '08:00 - 18:00',
    bays: 4,
  },
  {
    id: 'phu-nhuan',
    name: 'Carivo Phu Nhuan',
    address: '84 Cu Lao, Phu Nhuan',
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
    detail: 'Sedan, xang, mau trang',
    isDefault: true,
  },
  {
    id: 'vision',
    name: 'Honda Vision',
    plate: '29X1-333.44',
    type: 'MOTORBIKE',
    detail: 'Xe may duoi 175cc, mau do',
  },
];

export const servicePackages: ServicePackage[] = [
  {
    id: 'car-basic',
    name: 'Rua oto tieu chuan',
    description: 'Rua than xe, kinh, banh xe, lau kho va kiem tra nhanh ngoai that.',
    vehicleType: 'CAR',
    price: 150000,
    durationMinutes: 45,
    washBayMinutes: 30,
    points: 30,
    requiresWashBay: true,
    tag: 'Pho bien',
  },
  {
    id: 'car-basic-clean',
    name: 'Basic Clean oto',
    description: 'Rua cao cap, hut bui noi that, tay o kinh va duong nhua co ban.',
    vehicleType: 'CAR',
    price: 280000,
    durationMinutes: 90,
    washBayMinutes: 30,
    points: 55,
    requiresWashBay: true,
    tag: 'Combo',
  },
  {
    id: 'car-ceramic',
    name: 'Phu bao ve son',
    description: 'Danh bong nhe va phu lop bao ve be mat son sau khi rua sach.',
    vehicleType: 'CAR',
    price: 900000,
    durationMinutes: 180,
    washBayMinutes: 0,
    points: 120,
    requiresWashBay: false,
    tag: 'Detailing',
  },
  {
    id: 'bike-basic',
    name: 'Rua xe may tieu chuan',
    description: 'Lam sach vo xe, mam, gam, kinh chieu hau va lau kho.',
    vehicleType: 'MOTORBIKE',
    price: 50000,
    durationMinutes: 20,
    washBayMinutes: 20,
    points: 12,
    requiresWashBay: true,
    tag: 'Nhanh',
  },
  {
    id: 'bike-premium',
    name: 'Rua xe may cao cap',
    description: 'Rua ky, ve sinh chi tiet, duong nhua nham va danh bong nhanh.',
    vehicleType: 'MOTORBIKE',
    price: 80000,
    durationMinutes: 30,
    washBayMinutes: 30,
    points: 18,
    requiresWashBay: true,
    tag: 'Premium',
  },
];

export const timeSlots: TimeSlot[] = [
  {
    id: '0700',
    time: '07:00',
    range: '07:00 - 07:45',
    status: 'AVAILABLE',
    note: 'Con 3 buong phu hop',
  },
  {
    id: '0830',
    time: '08:30',
    range: '08:30 - 09:15',
    status: 'AVAILABLE',
    note: 'Khuyen nghi',
  },
  {
    id: '1000',
    time: '10:00',
    range: '10:00 - 10:45',
    status: 'LIMITED',
    note: 'Con 1 slot',
  },
  {
    id: '1300',
    time: '13:00',
    range: '13:00 - 13:45',
    status: 'AVAILABLE',
    note: 'Con nhieu slot',
  },
  {
    id: '1530',
    time: '15:30',
    range: '15:30 - 16:15',
    status: 'WAITLIST',
    note: 'Co the vao waitlist',
  },
  {
    id: '1700',
    time: '17:00',
    range: '17:00 - 17:45',
    status: 'AVAILABLE',
    note: 'Cuoi ngay',
  },
];

export const loyalty = {
  tier: 'Gold',
  points: 350,
  bookingWindow: '12 ngay',
  maxUpcoming: 2,
  multiplier: 'x1.35',
  promotionCode: 'SILVER20',
  promotionDiscount: 20000,
};

export const upcomingBookings = [
  {
    id: '#A102',
    service: 'Basic Clean oto',
    garage: 'Carivo Tan Phu',
    vehicle: '30A-555.44',
    time: '08:30, 15/06/2026',
    status: 'Da xac nhan',
  },
  {
    id: '#A098',
    service: 'Rua xe may cao cap',
    garage: 'Carivo Phu Nhuan',
    vehicle: '29X1-333.44',
    time: '17:00, 22/06/2026',
    status: 'Cho thanh toan',
  },
];
