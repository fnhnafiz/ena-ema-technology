// animations/variants.js - Enhanced with scroll support

// Container animations for staggered children
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// Scroll-optimized variants
export const scrollContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Logo animations
export const logoVariants = {
  hidden: {
    opacity: 0,
    y: -30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
};

// Button animations
export const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    y: -2,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
};

// Text animations
export const headingVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
};

export const paragraphVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// CTA animations
export const ctaVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Background effects
export const glowVariants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.15, 0.2, 0.15],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Card animations with scroll support
export const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    y: -6,
    scale: 1.02,
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Scroll-specific animations
export const scrollFadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const scrollFadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const scrollSlideLeft = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const scrollSlideRight = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const scrollScale = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
};

// Staggered list animations for scroll
export const scrollListContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const scrollListItem = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// Image scroll animations
export const scrollImageVariants = {
  hidden: {
    opacity: 0,
    scale: 1.1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Viewport configuration presets
export const viewportConfig = {
  // Standard config - triggers when 30% visible
  default: {
    once: false,
    amount: 0.3,
  },

  // Sensitive - triggers when 10% visible
  sensitive: {
    once: false,
    amount: 0.1,
  },

  // Strict - triggers when 50% visible
  strict: {
    once: false,
    amount: 0.5,
  },

  // One time only - won't repeat on scroll
  once: {
    once: true,
    amount: 0.3,
  },

  // Margin-based trigger
  margin: {
    once: false,
    margin: "-100px",
  },
};

// Utility function to create scroll-triggered motion components
export const createScrollMotion = (
  variants: any,
  viewport = viewportConfig.default
) => ({
  variants,
  initial: "hidden",
  whileInView: "visible",
  viewport,
});

// Pre-configured scroll motion props
export const scrollMotionProps = {
  fadeUp: createScrollMotion(scrollFadeUp),
  fadeIn: createScrollMotion(scrollFadeIn),
  slideLeft: createScrollMotion(scrollSlideLeft),
  slideRight: createScrollMotion(scrollSlideRight),
  scale: createScrollMotion(scrollScale),
  card: createScrollMotion(cardVariants),
};

// Trust Section specific animations
export const trustSectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const trustHeaderVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
};

export const trustSubtitleVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

export const trustGridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const trustCardVariants = {
  hidden: {
    opacity: 0,
    y: 80, // ⬅️ CHANGED: Increased from 40 to 80 for more dramatic effect
    scale: 0.8, // ⬅️ CHANGED: More dramatic scale from 0.95 to 0.8
    rotateX: 15, // ⬅️ NEW: 3D rotation effect
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0, // ⬅️ NEW: Reset rotation
    transition: {
      duration: 0.8, // ⬅️ CHANGED: Longer duration from 0.6 to 0.8
      ease: [0.25, 0.46, 0.45, 0.94], // ⬅️ CHANGED: More bouncy easing
    },
  },
  hover: {
    scale: 1.05,
    y: -8, // ⬅️ NEW: Lift effect
    rotateY: 2, // ⬅️ NEW: Subtle 3D tilt
    boxShadow: "0 25px 50px rgba(31, 255, 165, 0.15)", // ⬅️ NEW: Green glow shadow
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const trustIconVariants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
    rotate: -45,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.68, -0.55, 0.265, 1.55],
      delay: 0.2,
    },
  },
  hover: {
    scale: 1.2,
    rotate: 10,
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const trustTitleVariants = {
  hidden: {
    opacity: 0,
    x: -30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.4,
    },
  },
};

export const trustDescriptionVariants = {
  hidden: {
    opacity: 0,
    y: 25,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.6,
    },
  },
};

// Viewport configurations for Trust Section
export const trustViewportConfig = {
  section: { once: false, amount: 0.2 },
  header: { once: false, amount: 0.5 },
  grid: { once: false, amount: 0.1 },
  card: { once: false, amount: 0.3 },
};

// Case Studies Section specific animations
export const caseStudiesSectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // ⬅️ CHANGED: Faster stagger
      delayChildren: 0.0, // ⬅️ CHANGED: No delay
    },
  },
};

export const caseStudiesHeaderVariants = {
  hidden: {
    opacity: 0,
    y: 20, // ⬅️ CHANGED: Less movement (40 → 20)
    // scale: 0.95,            // ⬅️ REMOVED: No scale for simplicity
  },
  visible: {
    opacity: 1,
    y: 0,
    // scale: 1,
    transition: {
      duration: 0.5, // ⬅️ CHANGED: Faster (0.7 → 0.5)
      ease: "easeOut", // ⬅️ CHANGED: Simple easing
    },
  },
};

export const caseStudiesSubtitleVariants = {
  hidden: {
    opacity: 0,
    y: 15, // ⬅️ CHANGED: Less movement (25 → 15)
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4, // ⬅️ CHANGED: Faster (0.6 → 0.4)
      ease: "easeOut",
      delay: 0.1, // ⬅️ CHANGED: Less delay (0.2 → 0.1)
    },
  },
};

export const caseStudiesGridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // ⬅️ CHANGED: Faster stagger (0.15 → 0.08)
      delayChildren: 0.1, // ⬅️ CHANGED: Less delay (0.3 → 0.1)
    },
  },
};

export const caseStudiesCardVariants = {
  hidden: {
    opacity: 0,
    y: 30, // ⬅️ CHANGED: Less movement (60 → 30)
    // scale: 0.9,             // ⬅️ REMOVED: No scale
    // rotateY: -15,           // ⬅️ REMOVED: No 3D rotation
  },
  visible: {
    opacity: 1,
    y: 0,
    // scale: 1,
    // rotateY: 0,
    transition: {
      duration: 0.5, // ⬅️ CHANGED: Faster (0.8 → 0.5)
      ease: "easeOut", // ⬅️ CHANGED: Simple easing
    },
  },
  hover: {
    y: -5, // ⬅️ CHANGED: Less lift (-10 → -5)
    scale: 1.02, // ⬅️ CHANGED: Subtle scale (1.03 → 1.02)
    // rotateY: 2,             // ⬅️ REMOVED: No 3D rotation
    boxShadow: "0 10px 25px rgba(31, 255, 165, 0.08)", // ⬅️ CHANGED: Subtle shadow
    // borderColor: "rgba(31, 255, 165, 0.3)", // ⬅️ REMOVED
    transition: {
      duration: 0.2, // ⬅️ CHANGED: Faster hover (0.3 → 0.2)
      ease: "easeOut",
    },
  },
};

export const caseStudiesImageVariants = {
  hidden: {
    opacity: 0,
    scale: 1.05, // ⬅️ CHANGED: Less scale (1.2 → 1.05)
    // rotateX: 10,            // ⬅️ REMOVED: No 3D rotation
  },
  visible: {
    opacity: 1,
    scale: 1,
    // rotateX: 0,
    transition: {
      duration: 0.6, // ⬅️ CHANGED: Faster (0.8 → 0.6)
      ease: "easeOut",
      delay: 0.05, // ⬅️ CHANGED: Less delay (0.1 → 0.05)
    },
  },
  hover: {
    scale: 1.02, // ⬅️ CHANGED: Subtle hover (1.05 → 1.02)
    transition: {
      duration: 0.2, // ⬅️ CHANGED: Faster (0.3 → 0.2)
      ease: "easeOut",
    },
  },
};

export const caseStudiesTitleVariants = {
  hidden: {
    opacity: 0,
    x: -15, // ⬅️ CHANGED: Less movement (-30 → -15)
    // scale: 0.9,             // ⬅️ REMOVED: No scale
  },
  visible: {
    opacity: 1,
    x: 0,
    // scale: 1,
    transition: {
      duration: 0.4, // ⬅️ CHANGED: Faster (0.6 → 0.4)
      ease: "easeOut",
      delay: 0.1, // ⬅️ CHANGED: Less delay (0.3 → 0.1)
    },
  },
};

export const caseStudiesBadgeVariants = {
  hidden: {
    opacity: 0,
    // scale: 0.8,             // ⬅️ REMOVED: No scale
    x: -10, // ⬅️ CHANGED: Less movement (-20 → -10)
  },
  visible: {
    opacity: 1,
    // scale: 1,
    x: 0,
    transition: {
      duration: 0.3, // ⬅️ CHANGED: Faster (0.5 → 0.3)
      ease: "easeOut", // ⬅️ CHANGED: Simple easing
      delay: 0.05, // ⬅️ CHANGED: Less delay (0.1 → 0.05)
    },
  },
};

export const caseStudiesBadgeContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // ⬅️ CHANGED: Faster stagger (0.1 → 0.05)
      delayChildren: 0.2, // ⬅️ CHANGED: Less delay (0.4 → 0.2)
    },
  },
};

export const caseStudiesButtonVariants = {
  hidden: {
    opacity: 0,
    y: 25, // ⬅️ CHANGED: Less movement (40 → 25)
    // scale: 0.9,             // ⬅️ REMOVED: No scale
  },
  visible: {
    opacity: 1,
    y: 0,
    // scale: 1,
    transition: {
      duration: 0.5, // ⬅️ CHANGED: Faster (0.7 → 0.5)
      ease: "easeOut", // ⬅️ CHANGED: Simple easing
    },
  },
  hover: {
    scale: 1.02, // ⬅️ CHANGED: Subtle scale (1.05 → 1.02)
    y: -2, // ⬅️ CHANGED: Less lift (-3 → -2)
    boxShadow: "0px 12px 35px rgba(31, 255, 165, 0.35)", // ⬅️ CHANGED: Slightly reduced shadow
    transition: {
      duration: 0.2, // ⬅️ CHANGED: Faster (0.3 → 0.2)
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
};

// Viewport configurations for Case Studies - UPDATED
export const caseStudiesViewportConfig = {
  section: { once: false, amount: 0.05 }, // ⬅️ CHANGED: More sensitive (0.1 → 0.05)
  header: { once: false, amount: 0.4 }, // ⬅️ CHANGED: Less strict (0.6 → 0.4)
  grid: { once: false, amount: 0.1 }, // ⬅️ CHANGED: More sensitive (0.2 → 0.1)
  card: { once: false, amount: 0.2 }, // ⬅️ CHANGED: More sensitive (0.3 → 0.2)
  button: { once: false, amount: 0.3 }, // ⬅️ CHANGED: More sensitive (0.5 → 0.3)
};
