import { Link } from 'expo-router';
import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { garages, heroVisual, servicePackages } from '../data/booking-demo-data';
import { formatCurrency, formatDuration } from '../utils/booking-format';

export function PublicHomeScreen() {
  const publicServices = servicePackages.slice(0, 3);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <ImageBackground source={{ uri: heroVisual.imageUrl }} resizeMode="cover" style={styles.hero}>
          <View style={styles.heroOverlay}>
            <View style={styles.topRow}>
              <View>
                <Text style={styles.brand}>Carivo</Text>
                <Text style={styles.brandSub}>Wash booking</Text>
              </View>
              <Link href="/auth" asChild>
                <Pressable style={({ pressed }) => [styles.loginButton, pressed && styles.pressed]}>
                  <Text style={styles.loginText}>Login</Text>
                </Pressable>
              </Link>
            </View>

            <View style={styles.heroCopy}>
              <Text style={styles.eyebrow}>Premium wash booking</Text>
              <Text style={styles.title}>Book a cleaner ride in minutes</Text>
              <Text style={styles.subtitle}>
                Browse services and nearby garages before signing in to book, track progress, and
                redeem rewards.
              </Text>
              <View style={styles.heroActions}>
                <Link href="/services" asChild>
                  <Pressable style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}>
                    <Text style={styles.primaryText}>View services</Text>
                  </Pressable>
                </Link>
                <Link href="/garages" asChild>
                  <Pressable style={({ pressed }) => [styles.secondaryButton, pressed && styles.pressed]}>
                    <Text style={styles.secondaryText}>Find garage</Text>
                  </Pressable>
                </Link>
              </View>
            </View>
          </View>
        </ImageBackground>

        <View style={styles.section}>
          <View>
            <Text style={styles.sectionKicker}>Available before login</Text>
            <Text style={styles.sectionTitle}>Explore Carivo</Text>
          </View>
          <View style={styles.publicGrid}>
            <InfoCard title="Service packages" subtitle="Compare wash and detailing options." />
            <InfoCard title="Garage locations" subtitle="Check branches, distance, and opening hours." />
            <InfoCard title="Pricing preview" subtitle="Review base prices and expected duration." />
          </View>
        </View>

        <View style={styles.section}>
          <View>
            <Text style={styles.sectionKicker}>After login</Text>
            <Text style={styles.sectionTitle}>Unlock booking features</Text>
          </View>
          <View style={styles.privateCard}>
            <Text style={styles.privateTitle}>Customer account required</Text>
            <Text style={styles.privateText}>
              Sign in to manage vehicles, choose time slots, create bookings, follow service status,
              apply loyalty points, and receive notifications.
            </Text>
            <Link href="/auth" asChild>
              <Pressable style={({ pressed }) => [styles.privateButton, pressed && styles.pressed]}>
                <Text style={styles.privateButtonText}>Login / Register</Text>
              </Pressable>
            </Link>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular services</Text>
          {publicServices.map((servicePackage) => (
            <View key={servicePackage.id} style={styles.serviceRow}>
              <View style={styles.serviceIcon}>
                <Text style={styles.serviceIconText}>{servicePackage.name.slice(0, 1)}</Text>
              </View>
              <View style={styles.serviceBody}>
                <Text style={styles.serviceTitle}>{servicePackage.name}</Text>
                <Text style={styles.serviceMeta}>
                  {formatCurrency(servicePackage.price)} - {formatDuration(servicePackage.durationMinutes)}
                </Text>
              </View>
              <Text style={styles.serviceTag}>{servicePackage.tag}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nearby garages</Text>
          {garages.slice(0, 2).map((garage) => (
            <View key={garage.id} style={styles.garageRow}>
              <Text style={styles.garageName}>{garage.name}</Text>
              <Text style={styles.garageMeta}>
                {garage.distance} - {garage.hours} - {garage.bays} bays
              </Text>
              <Text style={styles.garageAddress}>{garage.address}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function InfoCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <View style={styles.infoCard}>
      <Text style={styles.infoTitle}>{title}</Text>
      <Text style={styles.infoSubtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f7fb',
  },
  content: {
    paddingBottom: 112,
    gap: 16,
  },
  hero: {
    minHeight: 560,
  },
  heroOverlay: {
    flex: 1,
    backgroundColor: 'rgba(4, 10, 24, 0.72)',
    padding: 20,
    justifyContent: 'space-between',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },
  brand: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '900',
  },
  brandSub: {
    color: '#5ef2dc',
    marginTop: 2,
    fontSize: 13,
    fontWeight: '800',
  },
  loginButton: {
    minHeight: 42,
    borderRadius: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.14)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.28)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
  },
  loginText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '900',
  },
  heroCopy: {
    gap: 14,
  },
  eyebrow: {
    alignSelf: 'flex-start',
    color: '#bafff4',
    borderWidth: 1,
    borderColor: 'rgba(94, 242, 220, 0.45)',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 7,
    fontSize: 12,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  title: {
    color: '#ffffff',
    fontSize: 44,
    lineHeight: 50,
    fontWeight: '900',
  },
  subtitle: {
    color: '#d8e2f1',
    fontSize: 16,
    lineHeight: 24,
  },
  heroActions: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
    paddingTop: 4,
  },
  primaryButton: {
    minHeight: 50,
    borderRadius: 16,
    backgroundColor: '#08a997',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
  },
  primaryText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '900',
  },
  secondaryButton: {
    minHeight: 50,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.25)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
  },
  secondaryText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '900',
  },
  section: {
    marginHorizontal: 18,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#dfe5ef',
    backgroundColor: '#ffffff',
    padding: 16,
    gap: 14,
  },
  sectionKicker: {
    color: '#047f73',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
  sectionTitle: {
    color: '#07111f',
    marginTop: 4,
    fontSize: 22,
    fontWeight: '900',
  },
  publicGrid: {
    gap: 10,
  },
  infoCard: {
    borderRadius: 16,
    backgroundColor: '#f7f9fc',
    padding: 14,
  },
  infoTitle: {
    color: '#07111f',
    fontSize: 15,
    fontWeight: '900',
  },
  infoSubtitle: {
    color: '#5e6a7d',
    marginTop: 5,
    fontSize: 13,
    lineHeight: 19,
  },
  privateCard: {
    borderRadius: 18,
    backgroundColor: '#07111f',
    padding: 16,
    gap: 10,
  },
  privateTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '900',
  },
  privateText: {
    color: '#cbd5e1',
    fontSize: 13,
    lineHeight: 20,
  },
  privateButton: {
    alignSelf: 'flex-start',
    minHeight: 44,
    borderRadius: 14,
    backgroundColor: '#08a997',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  privateButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '900',
  },
  serviceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderTopWidth: 1,
    borderTopColor: '#edf1f7',
    paddingTop: 12,
  },
  serviceIcon: {
    width: 42,
    height: 42,
    borderRadius: 15,
    backgroundColor: '#e9fffb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceIconText: {
    color: '#047f73',
    fontSize: 18,
    fontWeight: '900',
  },
  serviceBody: {
    flex: 1,
  },
  serviceTitle: {
    color: '#07111f',
    fontSize: 15,
    fontWeight: '900',
  },
  serviceMeta: {
    color: '#5e6a7d',
    marginTop: 4,
    fontSize: 12,
  },
  serviceTag: {
    color: '#047f73',
    backgroundColor: '#dffbf5',
    overflow: 'hidden',
    borderRadius: 999,
    paddingHorizontal: 9,
    paddingVertical: 5,
    fontSize: 11,
    fontWeight: '900',
  },
  garageRow: {
    borderTopWidth: 1,
    borderTopColor: '#edf1f7',
    paddingTop: 12,
    gap: 4,
  },
  garageName: {
    color: '#07111f',
    fontSize: 16,
    fontWeight: '900',
  },
  garageMeta: {
    color: '#047f73',
    fontSize: 12,
    fontWeight: '800',
  },
  garageAddress: {
    color: '#5e6a7d',
    fontSize: 13,
  },
  pressed: {
    opacity: 0.72,
  },
});
