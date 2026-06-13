import { Link } from 'expo-router';
import { ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { heroVisual } from '../data/booking-demo-data';

export function LoginScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={{ uri: heroVisual.imageUrl }} resizeMode="cover" style={styles.background}>
        <View style={styles.overlay}>
          <View style={styles.brandRow}>
            <Link href="/" asChild>
              <Pressable style={({ pressed }) => [styles.backButton, pressed && styles.pressed]}>
                <Text style={styles.backText}>Back</Text>
              </Pressable>
            </Link>
            <View>
              <Text style={styles.brand}>Carivo</Text>
              <Text style={styles.brandSub}>Customer account</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.eyebrow}>Login required</Text>
            <Text style={styles.title}>Welcome back</Text>
            <Text style={styles.subtitle}>
              Sign in to book a wash, manage vehicles, track service status, and redeem rewards.
            </Text>

            <View style={styles.form}>
              <View style={styles.field}>
                <Text style={styles.label}>Phone number</Text>
                <TextInput
                  keyboardType="phone-pad"
                  placeholder="0901234567"
                  placeholderTextColor="#91a0b6"
                  style={styles.input}
                />
              </View>
              <View style={styles.field}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                  secureTextEntry
                  placeholder="Enter password"
                  placeholderTextColor="#91a0b6"
                  style={styles.input}
                />
              </View>
            </View>

            <Link href="/booking" asChild>
              <Pressable style={({ pressed }) => [styles.loginButton, pressed && styles.pressed]}>
                <Text style={styles.loginText}>Login</Text>
              </Pressable>
            </Link>

            <View style={styles.registerRow}>
              <Text style={styles.registerText}>New to Carivo?</Text>
              <Text style={styles.registerLink}> Create account</Text>
            </View>
          </View>

          <View style={styles.accessPanel}>
            <Text style={styles.accessTitle}>What changes after login?</Text>
            <AccessLine text="Save and manage your vehicles" />
            <AccessLine text="Choose available appointment slots" />
            <AccessLine text="Track booking and service progress" />
            <AccessLine text="Use loyalty points and receive notifications" />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

function AccessLine({ text }: { text: string }) {
  return (
    <View style={styles.accessLine}>
      <View style={styles.dot} />
      <Text style={styles.accessText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#07111f',
  },
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(4, 10, 24, 0.72)',
    padding: 20,
    justifyContent: 'space-between',
    gap: 18,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  backButton: {
    minHeight: 40,
    borderRadius: 13,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.24)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
  },
  backText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '900',
  },
  brand: {
    color: '#ffffff',
    textAlign: 'right',
    fontSize: 22,
    fontWeight: '900',
  },
  brandSub: {
    color: '#5ef2dc',
    textAlign: 'right',
    fontSize: 12,
    fontWeight: '800',
  },
  card: {
    borderRadius: 24,
    backgroundColor: '#ffffff',
    padding: 20,
    gap: 16,
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
    gap: 12,
  },
  field: {
    gap: 7,
  },
  label: {
    color: '#334155',
    fontSize: 13,
    fontWeight: '900',
  },
  input: {
    minHeight: 52,
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
    minHeight: 54,
    borderRadius: 17,
    backgroundColor: '#08a997',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '900',
  },
  registerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerText: {
    color: '#5e6a7d',
    fontSize: 13,
    fontWeight: '700',
  },
  registerLink: {
    color: '#047f73',
    fontSize: 13,
    fontWeight: '900',
  },
  accessPanel: {
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.11)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.18)',
    padding: 16,
    gap: 10,
  },
  accessTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '900',
  },
  accessLine: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#5ef2dc',
  },
  accessText: {
    flex: 1,
    color: '#d8e2f1',
    fontSize: 13,
    lineHeight: 19,
  },
  pressed: {
    opacity: 0.72,
  },
});
