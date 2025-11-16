import { motion } from "framer-motion";

export function VoiceWave({ isActive = true }: { isActive?: boolean }) {
  const bars = Array.from({ length: 5 }, (_, i) => i);
  
  return (
    <div className="flex items-center justify-center gap-1.5 h-20" data-testid="voice-wave">
      {bars.map((i) => (
        <motion.div
          key={i}
          className="w-2 bg-gradient-to-t from-holobiz-blue to-holobiz-purple rounded-full"
          animate={
            isActive
              ? {
                  scaleY: [0.4, 1, 0.4],
                  opacity: [0.7, 1, 0.7],
                }
              : { scaleY: 0.4, opacity: 0.5 }
          }
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.15,
          }}
          style={{
            height: "100%",
            transformOrigin: "center",
          }}
        />
      ))}
    </div>
  );
}
