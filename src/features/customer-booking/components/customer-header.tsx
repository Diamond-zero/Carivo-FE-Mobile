import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import { heroVisual, loyalty } from '../data/booking-demo-data';

export function CustomerHeader() {
  return (
    <ImageBackground
      source={{ uri: heroVisual.imageUrl }}
      imageStyle={styles.heroImage}
      style={styles.header}>
      <View style={styles.overlay} />
      <View style={styles.copy}>
        <Text style={styles.kicker}>{heroVisual.eyebrow}</Text>
        <Text style={styles.title}>{heroVisual.title}</Text>
        <Text style={styles.subtitle}>{heroVisual.subtitle}</Text>
      </View>
      <View style={styles.badge}>
        <Text style={styles.badgeTitle}>{loyalty.tier}</Text>
        <Text style={styles.badgeText}>{loyalty.points} pts</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    minHeight: 260,
    overflow: 'hidden',
    borderRadius: 24,
    padding: 20,
    justifyContent: 'space-between',
    backgroundColor: '#07111f',
  },
  heroImage: {
    borderRadius: 24,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(7, 17, 31, 0.64)',
  },
  copy: {
    maxWidth: 310,
    zIndex: 1,
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
    fontSize: 32,
    lineHeight: 38,
    fontWeight: '900',
  },
  subtitle: {
    color: '#d8e2f1',
    marginTop: 10,
    fontSize: 14,
    lineHeight: 21,
  },
  badge: {
    zIndex: 1,
    alignSelf: 'flex-start',
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
