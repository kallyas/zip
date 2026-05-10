import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

import { palette } from '@/game/colors';

interface TutorialModalProps {
  readonly visible: boolean;
  readonly onClose: () => void;
}

export function TutorialModal({ visible, onClose }: TutorialModalProps) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.backdrop}>
        <View style={styles.card}>
          <Text style={styles.kicker}>How It Works</Text>
          <Text style={styles.title}>One path. Every cell.</Text>

          <View style={styles.demo}>
            <View style={styles.demoGrid}>
              <View style={styles.dotOne}>
                <Text style={styles.dotText}>1</Text>
              </View>
              <View style={styles.pathBarHorizontal} />
              <View style={styles.pathBarVertical} />
              <View style={styles.pathTurn} />
              <View style={styles.dotTwo}>
                <Text style={styles.dotText}>2</Text>
              </View>
            </View>
          </View>

          <View style={styles.steps}>
            <Text style={styles.step}>Start by pressing on `1`, then drag through adjacent cells.</Text>
            <Text style={styles.step}>Hit numbered checkpoints in order: `1 → 2 → 3 ...`.</Text>
            <Text style={styles.step}>Dragging back onto your path counts as a backtrack and trims the route.</Text>
            <Text style={styles.step}>`Reset` clears the board, but your timer keeps running for the same attempt.</Text>
          </View>

          <Pressable
            onPress={onClose}
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
          >
            <Text style={styles.buttonText}>Start playing</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.58)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: palette.surface,
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: palette.border,
  },
  kicker: {
    color: palette.accent,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  title: {
    color: palette.text,
    fontSize: 28,
    fontWeight: '800',
    marginTop: 6,
  },
  demo: {
    marginTop: 18,
    borderRadius: 16,
    backgroundColor: palette.background,
    borderWidth: 1,
    borderColor: palette.border,
    padding: 18,
    alignItems: 'center',
  },
  demoGrid: {
    width: 170,
    height: 120,
    borderRadius: 14,
    backgroundColor: palette.surface,
    borderWidth: 1,
    borderColor: palette.border,
  },
  dotOne: {
    position: 'absolute',
    left: 18,
    top: 18,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: palette.checkpointFill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotTwo: {
    position: 'absolute',
    right: 18,
    bottom: 18,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: palette.checkpointFill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotText: {
    color: palette.checkpointText,
    fontSize: 14,
    fontWeight: '800',
  },
  pathBarHorizontal: {
    position: 'absolute',
    left: 34,
    top: 28,
    width: 70,
    height: 10,
    borderRadius: 999,
    backgroundColor: palette.accent,
  },
  pathBarVertical: {
    position: 'absolute',
    left: 94,
    top: 28,
    width: 10,
    height: 55,
    borderRadius: 999,
    backgroundColor: palette.accent,
  },
  pathTurn: {
    position: 'absolute',
    left: 94,
    top: 73,
    width: 45,
    height: 10,
    borderRadius: 999,
    backgroundColor: palette.accent,
  },
  steps: {
    gap: 10,
    marginTop: 18,
  },
  step: {
    color: palette.textMuted,
    fontSize: 14,
    lineHeight: 20,
  },
  button: {
    marginTop: 22,
    backgroundColor: palette.accent,
    borderRadius: 999,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.85,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
