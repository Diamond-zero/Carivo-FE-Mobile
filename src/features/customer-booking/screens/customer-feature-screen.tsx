import { Link, type Href } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  customerDashboardLinks,
  customerFeatureScreens,
  type CustomerRouteKey,
} from '../data/customer-role-data';

type CustomerFeatureScreenProps = {
  routeKey: CustomerRouteKey;
};

export function CustomerFeatureScreen({ routeKey }: CustomerFeatureScreenProps) {
  const config = customerFeatureScreens[routeKey];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Text style={styles.eyebrow}>{config.eyebrow}</Text>
          <Text style={styles.title}>{config.title}</Text>
          <Text style={styles.description}>{config.description}</Text>
          {config.primaryAction ? (
            <Pressable style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}>
              <Text style={styles.primaryButtonText}>{config.primaryAction}</Text>
            </Pressable>
          ) : null}
        </View>

        {routeKey === 'home' ? <DashboardLinks /> : null}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Demo data</Text>
          <View style={styles.list}>
            {config.items.map((item) => (
              <View key={`${item.title}-${item.meta ?? item.status ?? ''}`} style={styles.card}>
                <View style={styles.cardHeader}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  {item.status ? <Text style={styles.statusPill}>{item.status}</Text> : null}
                </View>
                <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
                {item.meta ? <Text style={styles.cardMeta}>{item.meta}</Text> : null}
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>API coverage</Text>
          <View style={styles.apiList}>
            {config.apiList.map((api) => (
              <Text key={api} style={styles.apiText}>
                {api}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function DashboardLinks() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Customer screens</Text>
      <View style={styles.linkGrid}>
        {customerDashboardLinks.map((item) => (
          <Link key={item.href} href={item.href as Href} asChild>
            <Pressable style={({ pressed }) => [styles.linkCard, pressed && styles.pressed]}>
              <Text style={styles.linkLabel}>{item.label}</Text>
              <Text style={styles.linkMeta}>Open screen</Text>
            </Pressable>
          </Link>
        ))}
      </View>
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
  hero: {
    borderRadius: 24,
    backgroundColor: '#07111f',
    padding: 20,
    gap: 10,
  },
  eyebrow: {
    color: '#5ef2dc',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0.9,
    textTransform: 'uppercase',
  },
  title: {
    color: '#ffffff',
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '900',
  },
  description: {
    color: '#d8e2f1',
    fontSize: 14,
    lineHeight: 21,
  },
  primaryButton: {
    alignSelf: 'flex-start',
    minHeight: 44,
    borderRadius: 14,
    backgroundColor: '#08a997',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '900',
  },
  section: {
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#dfe5ef',
    backgroundColor: '#ffffff',
    padding: 16,
    gap: 14,
  },
  sectionTitle: {
    color: '#07111f',
    fontSize: 20,
    fontWeight: '900',
  },
  list: {
    gap: 10,
  },
  card: {
    borderRadius: 16,
    backgroundColor: '#f7f9fc',
    padding: 14,
    gap: 6,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 10,
  },
  cardTitle: {
    flex: 1,
    color: '#07111f',
    fontSize: 16,
    fontWeight: '900',
  },
  cardSubtitle: {
    color: '#5e6a7d',
    fontSize: 13,
    lineHeight: 19,
  },
  cardMeta: {
    color: '#047f73',
    fontSize: 12,
    fontWeight: '800',
  },
  statusPill: {
    color: '#047f73',
    backgroundColor: '#dffbf5',
    overflow: 'hidden',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontSize: 11,
    fontWeight: '900',
  },
  apiList: {
    gap: 8,
  },
  apiText: {
    color: '#334155',
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    overflow: 'hidden',
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 12,
    fontWeight: '800',
  },
  linkGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  linkCard: {
    width: '47.8%',
    minHeight: 86,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#dfe5ef',
    backgroundColor: '#ffffff',
    padding: 12,
    justifyContent: 'space-between',
  },
  linkLabel: {
    color: '#07111f',
    fontSize: 14,
    fontWeight: '900',
  },
  linkMeta: {
    color: '#047f73',
    fontSize: 12,
    fontWeight: '800',
  },
  pressed: {
    opacity: 0.72,
  },
});
