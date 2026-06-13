import { Pressable, StyleSheet, Text, View } from 'react-native';

type ChoiceCardProps = {
  title: string;
  subtitle?: string;
  meta?: string;
  tag?: string;
  selected?: boolean;
  onPress: () => void;
};

export function ChoiceCard({ title, subtitle, meta, tag, selected, onPress }: ChoiceCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        selected && styles.cardSelected,
        pressed && styles.pressed,
      ]}>
      <View style={styles.row}>
        <View style={[styles.dot, selected && styles.dotSelected]} />
        {tag ? <Text style={styles.tag}>{tag}</Text> : null}
      </View>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      {meta ? <Text style={styles.meta}>{meta}</Text> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    minWidth: 220,
    flex: 1,
    borderWidth: 1,
    borderColor: '#dfe5ef',
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 14,
    gap: 8,
  },
  cardSelected: {
    borderColor: '#08a997',
    backgroundColor: '#edfffb',
  },
  pressed: {
    opacity: 0.78,
  },
  row: {
    minHeight: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  dot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#cad3e1',
  },
  dotSelected: {
    borderColor: '#08a997',
    backgroundColor: '#08a997',
  },
  tag: {
    color: '#047f73',
    backgroundColor: '#dffbf5',
    borderRadius: 999,
    overflow: 'hidden',
    paddingHorizontal: 8,
    paddingVertical: 3,
    fontSize: 11,
    fontWeight: '900',
  },
  title: {
    color: '#07111f',
    fontSize: 16,
    fontWeight: '900',
  },
  subtitle: {
    color: '#5e6a7d',
    fontSize: 13,
    lineHeight: 19,
  },
  meta: {
    color: '#047f73',
    fontSize: 12,
    fontWeight: '800',
  },
});
