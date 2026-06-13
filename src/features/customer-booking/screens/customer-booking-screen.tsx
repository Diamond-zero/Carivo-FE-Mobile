import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ChoiceCard } from '../components/choice-card';
import { CustomerHeader } from '../components/customer-header';
import { CustomerTabs, type CustomerTab } from '../components/customer-tabs';
import { SectionTitle } from '../components/section-title';
import {
  garages,
  loyalty,
  servicePackages,
  timeSlots,
  upcomingBookings,
  vehicles,
  type Garage,
  type ServicePackage,
  type TimeSlot,
  type Vehicle,
} from '../data/booking-demo-data';
import { clampRedeemPoints, formatCurrency, formatDuration } from '../utils/booking-format';

export function CustomerBookingScreen() {
  const [activeTab, setActiveTab] = useState<CustomerTab>('booking');
  const [selectedGarage, setSelectedGarage] = useState<Garage>(garages[0]);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle>(vehicles[0]);
  const [selectedPackage, setSelectedPackage] = useState<ServicePackage>(servicePackages[0]);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot>(timeSlots[1]);
  const [usedPoints, setUsedPoints] = useState(50);

  const availablePackages = useMemo(
    () => servicePackages.filter((item) => item.vehicleType === selectedVehicle.type),
    [selectedVehicle.type],
  );

  const finalPrice = Math.max(
    0,
    selectedPackage.price - loyalty.promotionDiscount - usedPoints * 1000,
  );
  const earnedPoints =
    finalPrice === 0
      ? 0
      : Math.floor(selectedPackage.points * 1.35 * (finalPrice / selectedPackage.price));

  function handleVehicleChange(vehicle: Vehicle) {
    setSelectedVehicle(vehicle);
    const nextPackage = servicePackages.find((item) => item.vehicleType === vehicle.type);
    if (nextPackage) {
      setSelectedPackage(nextPackage);
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <CustomerHeader />
        <CustomerTabs activeTab={activeTab} onChange={setActiveTab} />

        {activeTab === 'booking' ? (
          <View style={styles.stack}>
            <BookingIntro />

            <View style={styles.panel}>
              <SectionTitle
                eyebrow="Step 1"
                title="Choose a garage"
                description="The system will check active wash bay capacity by garage and vehicle type."
              />
              <HorizontalChoices>
                {garages.map((garage) => (
                  <ChoiceCard
                    key={garage.id}
                    title={garage.name}
                    subtitle={garage.address}
                    meta={`${garage.distance} - ${garage.bays} wash bay - ${garage.hours}`}
                    selected={selectedGarage.id === garage.id}
                    onPress={() => setSelectedGarage(garage)}
                  />
                ))}
              </HorizontalChoices>
            </View>

            <View style={styles.panel}>
              <SectionTitle
                eyebrow="Step 2"
                title="Choose your vehicle"
                description="The backend will normalize license plates and validate ownership later."
              />
              <HorizontalChoices>
                {vehicles.map((vehicle) => (
                  <ChoiceCard
                    key={vehicle.id}
                    title={vehicle.name}
                    subtitle={vehicle.plate}
                    meta={vehicle.detail}
                    tag={vehicle.isDefault ? 'Default' : vehicle.type}
                    selected={selectedVehicle.id === vehicle.id}
                    onPress={() => handleVehicleChange(vehicle)}
                  />
                ))}
              </HorizontalChoices>
            </View>

            <View style={styles.panel}>
              <SectionTitle
                eyebrow="Step 3"
                title="Pick a service package"
                description="Each ServicePackage has its own duration and wash bay occupancy time."
              />
              <View style={styles.cardGrid}>
                {availablePackages.map((servicePackage) => (
                  <ChoiceCard
                    key={servicePackage.id}
                    title={servicePackage.name}
                    subtitle={servicePackage.description}
                    meta={`${formatCurrency(servicePackage.price)} - ${formatDuration(
                      servicePackage.durationMinutes,
                    )}`}
                    tag={servicePackage.tag}
                    imageUrl={servicePackage.imageUrl}
                    selected={selectedPackage.id === servicePackage.id}
                    onPress={() => setSelectedPackage(servicePackage)}
                  />
                ))}
              </View>
            </View>

            <View style={styles.panel}>
              <SectionTitle
                eyebrow="Step 4"
                title="Choose a time slot"
                description="Full slots can move into a waitlist using membership priority."
              />
              <View style={styles.slotGrid}>
                {timeSlots.map((slot) => (
                  <Pressable
                    key={slot.id}
                    onPress={() => setSelectedSlot(slot)}
                    style={({ pressed }) => [
                      styles.slot,
                      selectedSlot.id === slot.id && styles.slotSelected,
                      pressed && styles.pressed,
                    ]}>
                    <Text style={styles.slotTime}>{slot.time}</Text>
                    <Text style={styles.slotRange}>{slot.range}</Text>
                    <Text style={styles.slotNote}>{slot.note}</Text>
                  </Pressable>
                ))}
              </View>
            </View>

            <View style={styles.panel}>
              <SectionTitle
                eyebrow="Step 5"
                title="Apply rewards"
                description="Demo rule: 1 point = 1,000 VND, redeemable in 10-point steps."
              />
              <View style={styles.promoCard}>
                <Text style={styles.promoCode}>{loyalty.promotionCode}</Text>
                <Text style={styles.promoTitle}>{loyalty.tier} member offer</Text>
                <Text style={styles.promoText}>
                  Save {formatCurrency(loyalty.promotionDiscount)} on this booking.
                </Text>
              </View>
              <View style={styles.pointsRow}>
                <View style={styles.pointsCopy}>
                  <Text style={styles.pointsLabel}>Points to redeem</Text>
                  <Text style={styles.pointsHint}>Available: {loyalty.points} points</Text>
                </View>
                <TextInput
                  keyboardType="number-pad"
                  value={String(usedPoints)}
                  onChangeText={(value) => setUsedPoints(clampRedeemPoints(Number(value || 0)))}
                  style={styles.pointsInput}
                />
              </View>
            </View>

            <BookingSummary
              garage={selectedGarage}
              vehicle={selectedVehicle}
              servicePackage={selectedPackage}
              slot={selectedSlot}
              finalPrice={finalPrice}
              usedPoints={usedPoints}
              earnedPoints={earnedPoints}
            />
          </View>
        ) : null}

        {activeTab === 'schedule' ? <ScheduleTab /> : null}
        {activeTab === 'loyalty' ? <LoyaltyTab /> : null}
      </ScrollView>
    </SafeAreaView>
  );
}

function BookingIntro() {
  return (
    <View style={styles.introPanel}>
      <Text style={styles.introTitle}>Customer booking app</Text>
      <Text style={styles.introText}>
        Demo flow from the project docs: choose a garage, vehicle, service package, slot,
        promotion, loyalty points, then confirm the booking. Data is hard-coded for UI review.
      </Text>
    </View>
  );
}

function HorizontalChoices({ children }: { children: React.ReactNode }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.horizontalList}>
      {children}
    </ScrollView>
  );
}

function BookingSummary({
  garage,
  vehicle,
  servicePackage,
  slot,
  finalPrice,
  usedPoints,
  earnedPoints,
}: {
  garage: Garage;
  vehicle: Vehicle;
  servicePackage: ServicePackage;
  slot: TimeSlot;
  finalPrice: number;
  usedPoints: number;
  earnedPoints: number;
}) {
  return (
    <View style={styles.summary}>
      <SectionTitle
        eyebrow="Summary"
        title="Confirm booking"
        description="When the API is ready, this action will create a CONFIRMED or PENDING booking."
      />
      <View style={styles.summaryBox}>
        <SummaryLine label="Garage" value={garage.name} />
        <SummaryLine label="Vehicle" value={`${vehicle.name} - ${vehicle.plate}`} />
        <SummaryLine label="Service" value={servicePackage.name} />
        <SummaryLine label="Time" value={`${slot.range}, 15/06/2026`} />
        <SummaryLine label="Base price" value={formatCurrency(servicePackage.price)} />
        <SummaryLine label="Promotion" value={`-${formatCurrency(loyalty.promotionDiscount)}`} />
        <SummaryLine label="Redeemed points" value={`-${formatCurrency(usedPoints * 1000)}`} />
        <View style={styles.divider} />
        <SummaryLine label="Pay at garage" value={formatCurrency(finalPrice)} strong />
      </View>
      <View style={styles.earnedBox}>
        <Text style={styles.earnedTitle}>Estimated reward: {earnedPoints} points</Text>
        <Text style={styles.earnedText}>Points are added after COMPLETED + PAID.</Text>
      </View>
      <Pressable style={({ pressed }) => [styles.confirmButton, pressed && styles.pressed]}>
        <Text style={styles.confirmText}>Confirm booking</Text>
      </Pressable>
    </View>
  );
}

function SummaryLine({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <View style={styles.summaryLine}>
      <Text style={styles.summaryLabel}>{label}</Text>
      <Text style={[styles.summaryValue, strong && styles.summaryStrong]}>{value}</Text>
    </View>
  );
}

function ScheduleTab() {
  return (
    <View style={styles.panel}>
      <SectionTitle
        eyebrow="My schedule"
        title="Upcoming bookings"
        description="Customers can track booking status and service progress after staff check-in."
      />
      <View style={styles.bookingList}>
        {upcomingBookings.map((booking) => (
          <View key={booking.id} style={styles.bookingItem}>
            <Text style={styles.bookingId}>{booking.id}</Text>
            <Text style={styles.bookingService}>{booking.service}</Text>
            <Text style={styles.bookingMeta}>
              {booking.garage} - {booking.vehicle}
            </Text>
            <Text style={styles.bookingMeta}>{booking.time}</Text>
            <Text style={styles.bookingStatus}>{booking.status}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function LoyaltyTab() {
  return (
    <View style={styles.stack}>
      <View style={styles.panel}>
        <SectionTitle
          eyebrow="Loyalty"
          title={`${loyalty.tier} tier`}
          description="Points are added only after a booking is completed and paid."
        />
        <View style={styles.metricGrid}>
          <Metric label="Available points" value={`${loyalty.points}`} detail="= 350,000 VND demo" />
          <Metric label="Booking window" value={loyalty.bookingWindow} detail="Current tier" />
          <Metric label="Points multiplier" value={loyalty.multiplier} detail="After payment" />
          <Metric label="Booking limit" value={`${loyalty.maxUpcoming}`} detail="Upcoming" />
        </View>
      </View>
      <View style={styles.darkPanel}>
        <Text style={styles.darkTitle}>Gold benefits</Text>
        <Text style={styles.darkText}>Book up to 12 days in advance.</Text>
        <Text style={styles.darkText}>Hold up to 2 upcoming bookings.</Text>
        <Text style={styles.darkText}>Priority level 3 in the waitlist.</Text>
        <Text style={styles.darkText}>Earn points with a x1.35 multiplier.</Text>
      </View>
    </View>
  );
}

function Metric({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <View style={styles.metric}>
      <Text style={styles.metricLabel}>{label}</Text>
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricDetail}>{detail}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f7fb',
  },
  scroll: {
    flex: 1,
  },
  content: {
    padding: 18,
    paddingBottom: 110,
    gap: 16,
  },
  stack: {
    gap: 16,
  },
  panel: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dfe5ef',
    borderRadius: 22,
    padding: 16,
    gap: 16,
  },
  introPanel: {
    backgroundColor: '#e9fffb',
    borderColor: '#b7f4e7',
    borderWidth: 1,
    borderRadius: 22,
    padding: 16,
  },
  introTitle: {
    color: '#07111f',
    fontSize: 20,
    fontWeight: '900',
  },
  introText: {
    color: '#4e5d72',
    marginTop: 8,
    fontSize: 14,
    lineHeight: 21,
  },
  horizontalList: {
    gap: 12,
    paddingRight: 4,
  },
  cardGrid: {
    gap: 12,
  },
  slotGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  slot: {
    width: '47.8%',
    borderWidth: 1,
    borderColor: '#dfe5ef',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 12,
    gap: 4,
  },
  slotSelected: {
    borderColor: '#08a997',
    backgroundColor: '#edfffb',
  },
  slotTime: {
    color: '#07111f',
    fontSize: 18,
    fontWeight: '900',
  },
  slotRange: {
    color: '#5e6a7d',
    fontSize: 12,
    fontWeight: '700',
  },
  slotNote: {
    color: '#047f73',
    fontSize: 12,
    fontWeight: '800',
  },
  promoCard: {
    borderRadius: 16,
    backgroundColor: '#fff8e8',
    borderWidth: 1,
    borderColor: '#ffe3a3',
    padding: 14,
  },
  promoCode: {
    color: '#a45b00',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0.8,
  },
  promoTitle: {
    color: '#07111f',
    marginTop: 6,
    fontSize: 16,
    fontWeight: '900',
  },
  promoText: {
    color: '#72511b',
    marginTop: 6,
    fontSize: 13,
    lineHeight: 19,
  },
  pointsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  pointsCopy: {
    flex: 1,
  },
  pointsLabel: {
    color: '#07111f',
    fontWeight: '900',
  },
  pointsHint: {
    color: '#5e6a7d',
    marginTop: 4,
    fontSize: 12,
  },
  pointsInput: {
    width: 96,
    height: 46,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#dfe5ef',
    backgroundColor: '#ffffff',
    color: '#07111f',
    paddingHorizontal: 12,
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'center',
  },
  summary: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dfe5ef',
    borderRadius: 22,
    padding: 16,
    gap: 16,
  },
  summaryBox: {
    backgroundColor: '#f7f9fc',
    borderRadius: 18,
    padding: 14,
    gap: 10,
  },
  summaryLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  summaryLabel: {
    flex: 1,
    color: '#5e6a7d',
    fontSize: 13,
  },
  summaryValue: {
    flex: 1.15,
    color: '#07111f',
    fontSize: 13,
    fontWeight: '900',
    textAlign: 'right',
  },
  summaryStrong: {
    color: '#047f73',
    fontSize: 17,
  },
  divider: {
    height: 1,
    backgroundColor: '#dfe5ef',
  },
  earnedBox: {
    borderRadius: 16,
    backgroundColor: '#ecfdf5',
    padding: 14,
  },
  earnedTitle: {
    color: '#047857',
    fontWeight: '900',
  },
  earnedText: {
    color: '#047857',
    marginTop: 4,
    fontSize: 12,
  },
  confirmButton: {
    minHeight: 52,
    borderRadius: 17,
    backgroundColor: '#08a997',
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '900',
  },
  pressed: {
    opacity: 0.72,
  },
  bookingList: {
    gap: 12,
  },
  bookingItem: {
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#dfe5ef',
    padding: 14,
    backgroundColor: '#ffffff',
  },
  bookingId: {
    color: '#047f73',
    fontSize: 13,
    fontWeight: '900',
  },
  bookingService: {
    color: '#07111f',
    marginTop: 6,
    fontSize: 17,
    fontWeight: '900',
  },
  bookingMeta: {
    color: '#5e6a7d',
    marginTop: 5,
    fontSize: 13,
  },
  bookingStatus: {
    alignSelf: 'flex-start',
    color: '#047f73',
    backgroundColor: '#dffbf5',
    overflow: 'hidden',
    marginTop: 10,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 12,
    fontWeight: '900',
  },
  metricGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  metric: {
    width: '47.8%',
    borderWidth: 1,
    borderColor: '#dfe5ef',
    borderRadius: 16,
    padding: 12,
  },
  metricLabel: {
    color: '#5e6a7d',
    fontSize: 12,
    fontWeight: '800',
  },
  metricValue: {
    color: '#07111f',
    marginTop: 8,
    fontSize: 22,
    fontWeight: '900',
  },
  metricDetail: {
    color: '#5e6a7d',
    marginTop: 4,
    fontSize: 12,
  },
  darkPanel: {
    backgroundColor: '#07111f',
    borderRadius: 22,
    padding: 18,
    gap: 8,
  },
  darkTitle: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '900',
  },
  darkText: {
    color: '#cbd5e1',
    fontSize: 14,
    lineHeight: 21,
  },
});
