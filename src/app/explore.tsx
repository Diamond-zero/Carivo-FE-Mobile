import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { loyalty, upcomingBookings, vehicles } from '@/features/customer-booking/data/booking-demo-data';

export default function CustomerAccountRoute() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.kicker}>Customer profile</Text>
          <Text style={styles.title}>Tai khoan cua toi</Text>
          <Text style={styles.subtitle}>Hard-code screen de giao vien xem tong quan mobile app.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Loyalty</Text>
          <View style={styles.metricRow}>
            <Metric label="Hang" value={loyalty.tier} />
            <Metric label="Diem" value={`${loyalty.points}`} />
          </View>
          <View style={styles.metricRow}>
            <Metric label="Dat truoc" value={loyalty.bookingWindow} />
            <Metric label="He so" value={loyalty.multiplier} />
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Xe da luu</Text>
          {vehicles.map((vehicle) => (
            <View key={vehicle.id} style={styles.listItem}>
              <Text style={styles.itemTitle}>{vehicle.name}</Text>
              <Text style={styles.itemMeta}>{vehicle.plate}</Text>
              <Text style={styles.itemMeta}>{vehicle.detail}</Text>
            </View>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Booking gan day</Text>
          {upcomingBookings.map((booking) => (
            <View key={booking.id} style={styles.listItem}>
              <Text style={styles.itemCode}>{booking.id}</Text>
              <Text style={styles.itemTitle}>{booking.service}</Text>
              <Text style={styles.itemMeta}>{booking.time}</Text>
              <Text style={styles.itemStatus}>{booking.status}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.metric}>
      <Text style={styles.metricLabel}>{label}</Text>
      <Text style={styles.metricValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f7fb',
  },
  content: {
    padding: 18,
    paddingBottom: 110,
    gap: 16,
  },
  header: {
    borderRadius: 24,
    backgroundColor: '#07111f',
    padding: 20,
  },
  kicker: {
    color: '#5ef2dc',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  title: {
    color: '#ffffff',
    marginTop: 10,
    fontSize: 28,
    fontWeight: '900',
  },
  subtitle: {
    color: '#b7c2d4',
    marginTop: 8,
    fontSize: 14,
    lineHeight: 21,
  },
  card: {
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#dfe5ef',
    backgroundColor: '#ffffff',
    padding: 16,
    gap: 12,
  },
  sectionTitle: {
    color: '#07111f',
    fontSize: 20,
    fontWeight: '900',
  },
  metricRow: {
    flexDirection: 'row',
    gap: 12,
  },
  metric: {
    flex: 1,
    borderRadius: 16,
    backgroundColor: '#f7f9fc',
    padding: 14,
  },
  metricLabel: {
    color: '#5e6a7d',
    fontSize: 12,
    fontWeight: '800',
  },
  metricValue: {
    color: '#047f73',
    marginTop: 6,
    fontSize: 20,
    fontWeight: '900',
  },
  listItem: {
    borderTopWidth: 1,
    borderTopColor: '#edf1f7',
    paddingTop: 12,
    gap: 4,
  },
  itemCode: {
    color: '#047f73',
    fontSize: 12,
    fontWeight: '900',
  },
  itemTitle: {
    color: '#07111f',
    fontSize: 16,
    fontWeight: '900',
  },
  itemMeta: {
    color: '#5e6a7d',
    fontSize: 13,
  },
  itemStatus: {
    alignSelf: 'flex-start',
    color: '#047f73',
    backgroundColor: '#dffbf5',
    overflow: 'hidden',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 12,
    fontWeight: '900',
  },
});
