import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function LoginScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isWide = width >= 860;
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    router.replace('/booking');
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.page} showsVerticalScrollIndicator={false}>
        <View style={[styles.shell, isWide && styles.shellWide]}>
          <View style={[styles.storyPanel, isWide && styles.storyPanelWide]}>
            <View style={styles.brandRow}>
              <View style={styles.logoMark}>
                <Text style={styles.logoText}>C</Text>
              </View>
              <View>
                <Text style={styles.brand}>Carivo</Text>
                <Text style={styles.brandSub}>Customer booking</Text>
              </View>
            </View>

            <View style={styles.storyContent}>
              <Text style={styles.storyBadge}>Smart wash platform</Text>
              <Text style={styles.storyTitle}>Your car care, booked in a few taps</Text>
              <Text style={styles.storyText}>
                Sign in to save vehicles, reserve wash slots, track service progress, and redeem
                loyalty points after each completed booking.
              </Text>
            </View>

            <View style={styles.steps}>
              <Step number="1" text="Choose your saved vehicle" />
              <Step number="2" text="Pick a garage and service package" />
              <Step number="3" text="Confirm a slot and track the booking" />
            </View>
          </View>

          <View style={[styles.formPanel, isWide && styles.formPanelWide]}>
            <View style={styles.formHeader}>
              <Text style={styles.eyebrow}>Customer login</Text>
              <Text style={styles.title}>Welcome back</Text>
              <Text style={styles.subtitle}>
                Login is required before booking, vehicle management, loyalty redemption, and
                notifications.
              </Text>
            </View>

            <View style={styles.form}>
              <View style={styles.field}>
                <Text style={styles.label}>Phone number</Text>
                <TextInput
                  keyboardType="phone-pad"
                  value={phone}
                  onChangeText={setPhone}
                  placeholder="Enter your phone number"
                  placeholderTextColor="#91a0b6"
                  style={styles.input}
                />
              </View>

              <View style={styles.field}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Enter your password"
                  placeholderTextColor="#91a0b6"
                  style={styles.input}
                />
              </View>

              <Pressable
                onPress={handleLogin}
                style={({ pressed }) => [styles.loginButton, pressed && styles.pressed]}>
                <Text style={styles.loginText}>Login</Text>
              </Pressable>
            </View>

            <View style={styles.dividerRow}>
              <View style={styles.divider} />
              <Text style={styles.dividerText}>or</Text>
              <View style={styles.divider} />
            </View>

            <Pressable style={({ pressed }) => [styles.registerButton, pressed && styles.pressed]}>
              <Text style={styles.registerText}>Create customer account</Text>
            </Pressable>

            <Link href="/" asChild>
              <Pressable style={({ pressed }) => [styles.backHome, pressed && styles.pressed]}>
                <Text style={styles.backHomeText}>Continue browsing without login</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Step({ number, text }: { number: string; text: string }) {
  return (
    <View style={styles.step}>
      <View style={styles.stepNumber}>
        <Text style={styles.stepNumberText}>{number}</Text>
      </View>
      <Text style={styles.stepText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#eef4f7',
  },
  page: {
    flexGrow: 1,
    padding: 18,
    paddingBottom: 112,
    justifyContent: 'center',
  },
  shell: {
    width: '100%',
    maxWidth: 1180,
    alignSelf: 'center',
    borderRadius: 28,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dfe5ef',
  },
  shellWide: {
    flexDirection: 'row',
  },
  storyPanel: {
    minHeight: 430,
    backgroundColor: '#07111f',
    padding: 24,
    justifyContent: 'space-between',
    gap: 28,
  },
  storyPanelWide: {
    flex: 1.05,
    minHeight: 720,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logoMark: {
    width: 52,
    height: 52,
    borderRadius: 18,
    backgroundColor: '#08a997',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '900',
  },
  brand: {
    color: '#ffffff',
    fontSize: 23,
    fontWeight: '900',
  },
  brandSub: {
    color: '#5ef2dc',
    marginTop: 2,
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  storyContent: {
    gap: 14,
  },
  storyBadge: {
    alignSelf: 'flex-start',
    color: '#bafff4',
    borderWidth: 1,
    borderColor: 'rgba(94, 242, 220, 0.44)',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 7,
    fontSize: 12,
    fontWeight: '900',
  },
  storyTitle: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 46,
    fontWeight: '900',
  },
  storyText: {
    color: '#b8c4d6',
    fontSize: 15,
    lineHeight: 23,
  },
  steps: {
    gap: 12,
  },
  step: {
    minHeight: 58,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 12,
  },
  stepNumber: {
    width: 34,
    height: 34,
    borderRadius: 12,
    backgroundColor: 'rgba(8, 169, 151, 0.28)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepNumberText: {
    color: '#5ef2dc',
    fontSize: 14,
    fontWeight: '900',
  },
  stepText: {
    flex: 1,
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '800',
    lineHeight: 20,
  },
  formPanel: {
    padding: 22,
    gap: 18,
  },
  formPanelWide: {
    flex: 0.9,
    justifyContent: 'center',
    padding: 46,
  },
  formHeader: {
    gap: 8,
  },
  eyebrow: {
    color: '#047f73',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  title: {
    color: '#07111f',
    fontSize: 32,
    lineHeight: 38,
    fontWeight: '900',
  },
  subtitle: {
    color: '#5e6a7d',
    fontSize: 14,
    lineHeight: 21,
  },
  form: {
    gap: 14,
  },
  field: {
    gap: 8,
  },
  label: {
    color: '#334155',
    fontSize: 13,
    fontWeight: '900',
  },
  input: {
    minHeight: 54,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#dfe5ef',
    backgroundColor: '#f8fafc',
    color: '#07111f',
    paddingHorizontal: 14,
    fontSize: 15,
    fontWeight: '700',
  },
  loginButton: {
    minHeight: 56,
    borderRadius: 18,
    backgroundColor: '#08a997',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#08a997',
    shadowOpacity: 0.28,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 5,
  },
  loginText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '900',
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#dfe5ef',
  },
  dividerText: {
    color: '#91a0b6',
    fontSize: 12,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  registerButton: {
    minHeight: 50,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#b7f4e7',
    backgroundColor: '#ecfffb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerText: {
    color: '#047f73',
    fontSize: 14,
    fontWeight: '900',
  },
  backHome: {
    alignItems: 'center',
  },
  backHomeText: {
    color: '#5e6a7d',
    fontSize: 13,
    fontWeight: '800',
  },
  pressed: {
    opacity: 0.72,
  },
});
