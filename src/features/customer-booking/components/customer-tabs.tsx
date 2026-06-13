import { Pressable, StyleSheet, Text, View } from 'react-native';

export type CustomerTab = 'booking' | 'schedule' | 'loyalty';

const tabs: { id: CustomerTab; label: string }[] = [
  { id: 'booking', label: 'Dat lich' },
  { id: 'schedule', label: 'Lich cua toi' },
  { id: 'loyalty', label: 'Loyalty' },
];

type CustomerTabsProps = {
  activeTab: CustomerTab;
  onChange: (tab: CustomerTab) => void;
};

export function CustomerTabs({ activeTab, onChange }: CustomerTabsProps) {
  return (
    <View style={styles.wrap}>
      {tabs.map((tab) => {
        const selected = activeTab === tab.id;

        return (
          <Pressable
            key={tab.id}
            onPress={() => onChange(tab.id)}
            style={({ pressed }) => [
              styles.tab,
              selected && styles.tabSelected,
              pressed && styles.pressed,
            ]}>
            <Text style={[styles.label, selected && styles.labelSelected]}>{tab.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    backgroundColor: '#e8edf5',
    borderRadius: 18,
    padding: 5,
    gap: 5,
  },
  tab: {
    flex: 1,
    borderRadius: 14,
    minHeight: 44,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  tabSelected: {
    backgroundColor: '#ffffff',
    shadowColor: '#07111f',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  pressed: {
    opacity: 0.75,
  },
  label: {
    color: '#5e6a7d',
    fontSize: 13,
    fontWeight: '900',
  },
  labelSelected: {
    color: '#07111f',
  },
});
