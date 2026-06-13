import { StyleSheet, Text, View } from 'react-native';

import { loyalty } from '../data/booking-demo-data';

export function CustomerHeader() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.kicker}>Carivo Customer</Text>
        <Text style={styles.title}>Dat lich rua xe</Text>
        <Text style={styles.subtitle}>Xin chao, Nguyen Minh Anh</Text>
      </View>
      <View style={styles.badge}>
        <Text style={styles.badgeTitle}>{loyalty.tier}</Text>
        <Text style={styles.badgeText}>{loyalty.points} diem</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#07111f',
    borderRadius: 24,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 16,
  },
  kicker: {
    color: '#5ef2dc',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0.9,
    textTransform: 'uppercase',
  },
  title: {
    color: '#ffffff',
    marginTop: 10,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '900',
  },
  subtitle: {
    color: '#b7c2d4',
    marginTop: 8,
    fontSize: 14,
  },
  badge: {
    backgroundColor: '#08a997',
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 12,
    alignItems: 'center',
    minWidth: 86,
  },
  badgeTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '900',
  },
  badgeText: {
    color: '#e6fffb',
    marginTop: 2,
    fontSize: 12,
    fontWeight: '800',
  },
});
