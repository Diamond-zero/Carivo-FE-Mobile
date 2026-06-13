import type { ServicePackage } from './booking-demo-data';
import { garages, loyalty, servicePackages, upcomingBookings, vehicles } from './booking-demo-data';

export type CustomerRouteKey =
  | 'auth'
  | 'home'
  | 'garages'
  | 'services'
  | 'vehicles'
  | 'booking'
  | 'bookings'
  | 'loyalty'
  | 'notifications'
  | 'profile'
  | 'preferences'
  | 'inspection'
  | 'survey';

export type CustomerFeatureItem = {
  title: string;
  subtitle: string;
  meta?: string;
  status?: string;
};

export type CustomerFeatureScreenConfig = {
  key: CustomerRouteKey;
  eyebrow: string;
  title: string;
  description: string;
  primaryAction?: string;
  apiList: string[];
  items: CustomerFeatureItem[];
};

export const customerProfile = {
  name: 'Nguyen Minh Anh',
  phone: '0901 234 567',
  email: 'minh.anh@example.com',
  tier: loyalty.tier,
  points: loyalty.points,
};

export const customerNotifications = [
  {
    title: 'Booking confirmed',
    subtitle: 'Your Basic clean package is confirmed for 15/06/2026 at 08:30.',
    meta: 'Booking #A102',
    status: 'Unread',
  },
  {
    title: 'Reward points earned',
    subtitle: 'You earned 74 points from your latest completed service.',
    meta: 'Loyalty',
    status: 'Read',
  },
  {
    title: 'New promotion available',
    subtitle: 'Gold members save 20,000 VND this week.',
    meta: 'SILVER20',
    status: 'Unread',
  },
];

export const pointHistory = [
  {
    title: '+74 points',
    subtitle: 'Earned from Basic clean package',
    meta: 'Expires 01/01/2027',
    status: 'EARN',
  },
  {
    title: '-50 points',
    subtitle: 'Redeemed on booking #A102',
    meta: '15/06/2026',
    status: 'REDEEM',
  },
  {
    title: '80 points expiring soon',
    subtitle: 'Use these points before the expiry date.',
    meta: '01/01/2027',
    status: 'EXPIRING',
  },
];

export const inspectionReports = [
  {
    title: 'Before wash inspection',
    subtitle: 'Minor dust on exterior, no visible scratches. 4 photos attached.',
    meta: 'Booking #A102',
    status: 'BEFORE_WASH',
  },
  {
    title: 'After wash inspection',
    subtitle: 'Vehicle cleaned, glass checked, wheels dried. 5 photos attached.',
    meta: 'Booking #A102',
    status: 'AFTER_WASH',
  },
];

export const surveyQuestions = [
  {
    title: 'Service rating',
    subtitle: 'How satisfied are you with the latest wash service?',
    meta: '5-star scale',
    status: 'Required',
  },
  {
    title: 'Loyalty motivation',
    subtitle: 'Which benefit makes you return most often?',
    meta: 'Points, promotions, priority booking',
    status: 'Optional',
  },
  {
    title: 'Average spending',
    subtitle: 'Help the research dataset understand customer behavior.',
    meta: 'Survey data',
    status: 'Optional',
  },
];

export const emailPreferences = [
  {
    title: 'Booking email',
    subtitle: 'Receive booking confirmations and schedule reminders.',
    meta: 'users/me/notification-preferences',
    status: 'Enabled',
  },
  {
    title: 'Waitlist email',
    subtitle: 'Receive an email when a preferred slot becomes available.',
    meta: 'users/me/notification-preferences',
    status: 'Enabled',
  },
  {
    title: 'Promotion email',
    subtitle: 'Receive targeted offers based on loyalty tier.',
    meta: 'Marketing',
    status: 'Disabled',
  },
];

function serviceToItem(servicePackage: ServicePackage) {
  return {
    title: servicePackage.name,
    subtitle: servicePackage.description,
    meta: `${servicePackage.durationMinutes} min - ${servicePackage.points} pts`,
    status: servicePackage.tag,
  };
}

export const customerFeatureScreens: Record<CustomerRouteKey, CustomerFeatureScreenConfig> = {
  auth: {
    key: 'auth',
    eyebrow: 'Sprint 1',
    title: 'Authentication',
    description: 'Register, login, logout, refresh token, and update customer profile.',
    primaryAction: 'Continue',
    apiList: [
      'POST /api/v1/auth/register',
      'POST /api/v1/auth/login',
      'POST /api/v1/auth/logout',
      'GET /api/v1/users/me',
      'PATCH /api/v1/users/me',
    ],
    items: [
      {
        title: 'Login with phone number',
        subtitle: 'Customer signs in before managing vehicles and bookings.',
        meta: customerProfile.phone,
        status: 'Demo',
      },
      {
        title: 'Create account',
        subtitle: 'New users register using phone, email, and password.',
        meta: 'Secure sign-in',
        status: 'New',
      },
    ],
  },
  home: {
    key: 'home',
    eyebrow: 'Customer role',
    title: 'Mobile customer dashboard',
    description: 'A customer app overview for booking, loyalty, service tracking, and profile.',
    primaryAction: 'Start booking',
    apiList: ['GET /api/v1/users/me', 'GET /api/v1/bookings', 'GET /api/v1/loyalty/me'],
    items: [
      {
        title: `${loyalty.tier} member`,
        subtitle: `${loyalty.points} points available, ${loyalty.bookingWindow} booking window.`,
        meta: loyalty.multiplier,
        status: 'Loyalty',
      },
      {
        title: 'Next appointment',
        subtitle: upcomingBookings[0].service,
        meta: upcomingBookings[0].time,
        status: upcomingBookings[0].status,
      },
      {
        title: 'Saved vehicles',
        subtitle: vehicles.map((vehicle) => vehicle.plate).join(', '),
        meta: `${vehicles.length} vehicles`,
        status: 'Ready',
      },
    ],
  },
  garages: {
    key: 'garages',
    eyebrow: 'Sprint 1',
    title: 'Garage list and available slots',
    description: 'Customers browse garages and inspect available slot capacity.',
    primaryAction: 'View available slots',
    apiList: ['GET /api/v1/garages', 'GET /api/v1/bookings/available-slots'],
    items: garages.map((garage) => ({
      title: garage.name,
      subtitle: garage.address,
      meta: `${garage.distance} - ${garage.hours}`,
      status: `${garage.bays} bays`,
    })),
  },
  services: {
    key: 'services',
    eyebrow: 'Sprint 1',
    title: 'Service package catalog',
    description: 'Customers view packages, details, and filter by vehicle type.',
    primaryAction: 'Filter by vehicle',
    apiList: ['GET /api/v1/service-packages', 'GET /api/v1/service-packages/:id'],
    items: servicePackages.map(serviceToItem),
  },
  vehicles: {
    key: 'vehicles',
    eyebrow: 'Sprint 1',
    title: 'Vehicle management',
    description: 'Add, edit, delete, and browse vehicles linked to the customer account.',
    primaryAction: 'Add vehicle',
    apiList: [
      'GET /api/v1/vehicles',
      'POST /api/v1/vehicles',
      'PATCH /api/v1/vehicles/:id',
      'DELETE /api/v1/vehicles/:id',
    ],
    items: vehicles.map((vehicle) => ({
      title: vehicle.name,
      subtitle: vehicle.detail,
      meta: vehicle.plate,
      status: vehicle.isDefault ? 'Default' : vehicle.type,
    })),
  },
  booking: {
    key: 'booking',
    eyebrow: 'Sprint 2',
    title: 'Booking flow',
    description: 'Choose vehicle, garage, service, slot, rewards, then create a booking.',
    primaryAction: 'Create booking',
    apiList: [
      'GET /api/v1/bookings/available-slots',
      'POST /api/v1/bookings',
      'POST /api/v1/loyalty/redeem-preview',
    ],
    items: [
      { title: '1. Choose vehicle', subtitle: vehicles[0].name, meta: vehicles[0].plate },
      { title: '2. Choose garage', subtitle: garages[0].name, meta: garages[0].distance },
      { title: '3. Choose service', subtitle: servicePackages[1].name, meta: '90 min' },
      { title: '4. Confirm slot', subtitle: '08:30 - 09:15', meta: 'Recommended' },
    ],
  },
  bookings: {
    key: 'bookings',
    eyebrow: 'Sprint 2',
    title: 'Booking list and details',
    description: 'Customers track PENDING, CONFIRMED, CHECKED_IN, COMPLETED, and PAID states.',
    primaryAction: 'Open booking detail',
    apiList: [
      'GET /api/v1/bookings',
      'GET /api/v1/bookings/:id',
      'PATCH /api/v1/bookings/:id/cancel',
    ],
    items: upcomingBookings.map((booking) => ({
      title: `${booking.id} - ${booking.service}`,
      subtitle: `${booking.garage} - ${booking.vehicle}`,
      meta: booking.time,
      status: booking.status,
    })),
  },
  loyalty: {
    key: 'loyalty',
    eyebrow: 'Sprint 3',
    title: 'Loyalty points',
    description: 'Customers view tier, points, point history, and expiring points.',
    primaryAction: 'Preview redeem',
    apiList: [
      'GET /api/v1/loyalty/me',
      'GET /api/v1/loyalty/points/history',
      'POST /api/v1/loyalty/redeem-preview',
    ],
    items: pointHistory,
  },
  notifications: {
    key: 'notifications',
    eyebrow: 'Sprint 3',
    title: 'Notifications',
    description: 'Booking success, reminders, cancellation, payment, rewards, tier upgrades, and promotions.',
    primaryAction: 'Mark all as read',
    apiList: [
      'GET /api/v1/notifications',
      'PATCH /api/v1/notifications/:id/read',
      'PATCH /api/v1/notifications/mark-all-read',
      'DELETE /api/v1/notifications/:id',
    ],
    items: customerNotifications,
  },
  profile: {
    key: 'profile',
    eyebrow: 'Sprint 3',
    title: 'Customer profile',
    description: 'Customers update personal information and review account status.',
    primaryAction: 'Update profile',
    apiList: ['GET /api/v1/users/me', 'PATCH /api/v1/users/me'],
    items: [
      { title: customerProfile.name, subtitle: customerProfile.email, meta: customerProfile.phone, status: 'Active' },
      { title: 'Current tier', subtitle: loyalty.tier, meta: `${loyalty.points} points`, status: loyalty.multiplier },
    ],
  },
  preferences: {
    key: 'preferences',
    eyebrow: 'Sprint 3',
    title: 'Email preferences',
    description: 'Customers control booking, waitlist, and promotional email notifications.',
    primaryAction: 'Save preferences',
    apiList: [
      'GET /api/v1/users/me/notification-preferences',
      'PATCH /api/v1/users/me/notification-preferences',
    ],
    items: emailPreferences,
  },
  inspection: {
    key: 'inspection',
    eyebrow: 'Sprint 4',
    title: 'Vehicle inspection reports',
    description: 'Customers view before-wash and after-wash reports after staff check-in.',
    primaryAction: 'View photos',
    apiList: ['GET /api/v1/bookings/:id/inspections'],
    items: inspectionReports,
  },
  survey: {
    key: 'survey',
    eyebrow: 'Sprint 4',
    title: 'Post-service survey',
    description: 'Customers submit ratings and research feedback after completed services.',
    primaryAction: 'Submit survey',
    apiList: ['POST /api/v1/surveys/responses'],
    items: surveyQuestions,
  },
};

export const customerDashboardLinks = [
  { label: 'Login', href: '/login', key: 'auth' },
  { label: 'Garage list', href: '/garages', key: 'garages' },
  { label: 'Services', href: '/services', key: 'services' },
  { label: 'Vehicles', href: '/vehicles', key: 'vehicles' },
  { label: 'Booking flow', href: '/booking', key: 'booking' },
  { label: 'Bookings', href: '/bookings', key: 'bookings' },
  { label: 'Loyalty', href: '/loyalty', key: 'loyalty' },
  { label: 'Notifications', href: '/notifications', key: 'notifications' },
  { label: 'Profile', href: '/profile', key: 'profile' },
  { label: 'Email preferences', href: '/preferences', key: 'preferences' },
  { label: 'Inspection', href: '/inspection', key: 'inspection' },
  { label: 'Survey', href: '/survey', key: 'survey' },
];
