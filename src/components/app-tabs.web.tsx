import { Link } from 'expo-router';
import { Tabs, TabList, TabSlot, TabTrigger, TabTriggerSlotProps, TabListProps } from 'expo-router/ui';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

import { MaxContentWidth, Spacing } from '@/constants/theme';

export default function AppTabs() {
  return (
    <Tabs>
      <TabSlot style={{ height: '100%' }} />
      <TabList asChild>
        <CustomTabList>
          <TabTrigger name="home" href="/" asChild>
            <TabButton>Home</TabButton>
          </TabTrigger>
          <TabTrigger name="services" href="/services" asChild>
            <TabButton>Services</TabButton>
          </TabTrigger>
          <TabTrigger name="garages" href="/garages" asChild>
            <TabButton>Garages</TabButton>
          </TabTrigger>
        </CustomTabList>
      </TabList>
    </Tabs>
  );
}

export function TabButton({ children, isFocused, ...props }: TabTriggerSlotProps) {
  return (
    <Pressable {...props} style={({ pressed }) => pressed && styles.pressed}>
      <ThemedView
        type={isFocused ? 'backgroundSelected' : 'backgroundElement'}
        style={[styles.tabButtonView, isFocused && styles.activeTab]}>
        <ThemedText type="smallBold" themeColor={isFocused ? 'text' : 'textSecondary'}>
          {children}
        </ThemedText>
      </ThemedView>
    </Pressable>
  );
}

export function CustomTabList(props: TabListProps) {
  return (
    <View {...props} style={styles.tabListContainer}>
      <ThemedView type="backgroundElement" style={styles.innerContainer}>
        <View style={styles.logoMark}>
          <ThemedText type="smallBold" style={styles.logoText}>
            C
          </ThemedText>
        </View>
        <View style={styles.brandBlock}>
          <ThemedText type="smallBold" style={styles.brandText}>
            Carivo
          </ThemedText>
          <ThemedText type="small" themeColor="textSecondary" style={styles.brandSubtext}>
            Wash booking
          </ThemedText>
        </View>

        <View style={styles.tabGroup}>{props.children}</View>

        <Link href="/login" asChild>
          <Pressable style={({ pressed }) => [styles.loginButton, pressed && styles.pressed]}>
            <ThemedText type="smallBold" style={styles.loginText}>
              Login / Register
            </ThemedText>
          </Pressable>
        </Link>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  tabListContainer: {
    position: 'absolute',
    width: '100%',
    padding: Spacing.three,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  innerContainer: {
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.three,
    borderRadius: Spacing.five,
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    gap: Spacing.two,
    maxWidth: MaxContentWidth,
  },
  logoMark: {
    width: 34,
    height: 34,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#08a997',
  },
  logoText: {
    color: '#ffffff',
  },
  brandBlock: {
    marginRight: 'auto',
  },
  brandText: {
    lineHeight: 16,
  },
  brandSubtext: {
    lineHeight: 14,
  },
  tabGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
    marginLeft: 'auto',
  },
  activeTab: {
    backgroundColor: '#ffffff',
  },
  pressed: {
    opacity: 0.7,
  },
  tabButtonView: {
    paddingVertical: Spacing.one,
    paddingHorizontal: Spacing.three,
    borderRadius: Spacing.three,
  },
  loginButton: {
    minHeight: 44,
    borderRadius: Spacing.four,
    backgroundColor: '#08a997',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.four,
    shadowColor: '#08a997',
    shadowOpacity: 0.28,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
  loginText: {
    color: '#ffffff',
  },
});
