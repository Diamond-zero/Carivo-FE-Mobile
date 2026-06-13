import { StyleSheet, Text, View } from 'react-native';

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.eyebrow}>{eyebrow}</Text>
      <Text style={styles.title}>{title}</Text>
      {description ? <Text style={styles.description}>{description}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    gap: 6,
  },
  eyebrow: {
    color: '#047f73',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  title: {
    color: '#07111f',
    fontSize: 24,
    fontWeight: '900',
    lineHeight: 30,
  },
  description: {
    color: '#5e6a7d',
    fontSize: 14,
    lineHeight: 21,
  },
});
