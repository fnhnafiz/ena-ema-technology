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
      ease: "easeOut" as const,
    },
  },
  hover: {
    scale: 1.05,
    y: -2,
    transition: {
      duration: 0.2,
      ease: "easeInOut" as const,
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
      ease: "easeOut" as const,
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
      ease: "easeOut" as const,
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
      ease: "easeInOut" as const,
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
      ease: "easeOut" as const,
    },
  },
  hover: {
    y: -6,
    scale: 1.02,
    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
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
      ease: "easeOut" as const,
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
      ease: "easeOut" as const,
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
      ease: "easeOut" as const,
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
      ease: "easeOut" as const,
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
      ease: "easeOut" as const,
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
      ease: "easeOut" as const,
    },
  },
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
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
      ease: "easeOut" as const,
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
      ease: "easeOut" as const,
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
      ease: "easeOut" as const,
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
      ease: "easeOut" as const,
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
      ease: "easeOut" as const,
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
      ease: "easeOut" as const, // ⬅️ CHANGED: Simple easing
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
      ease: "easeOut" as const,
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
      ease: "easeOut" as const, // ⬅️ CHANGED: Simple easing
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
      ease: "easeOut" as const,
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
      ease: "easeOut" as const,
      delay: 0.05, // ⬅️ CHANGED: Less delay (0.1 → 0.05)
    },
  },
  hover: {
    scale: 1.02, // ⬅️ CHANGED: Subtle hover (1.05 → 1.02)
    transition: {
      duration: 0.2, // ⬅️ CHANGED: Faster (0.3 → 0.2)
      ease: "easeOut" as const,
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
      ease: "easeOut" as const,
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
      ease: "easeOut" as const, // ⬅️ CHANGED: Simple easing
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
      ease: "easeOut" as const, // ⬅️ CHANGED: Simple easing
    },
  },
  hover: {
    scale: 1.02, // ⬅️ CHANGED: Subtle scale (1.05 → 1.02)
    y: -2, // ⬅️ CHANGED: Less lift (-3 → -2)
    boxShadow: "0px 12px 35px rgba(31, 255, 165, 0.35)", // ⬅️ CHANGED: Slightly reduced shadow
    transition: {
      duration: 0.2, // ⬅️ CHANGED: Faster (0.3 → 0.2)
      ease: "easeOut" as const,
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

// Pricing Section specific animations/////////
export const pricingSectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.0,
    },
  },
};

export const pricingHeaderVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export const pricingSubtitleVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
      delay: 0.1,
    },
  },
};

export const pricingGridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const pricingCardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

export const pricingPopularBadgeVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.68, -0.55, 0.265, 1.55],
      delay: 0.3,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
};

export const pricingPlanNameVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
      delay: 0.1,
    },
  },
};

export const pricingDescriptionVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
      delay: 0.15,
    },
  },
};

export const pricingPriceVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.05, 0.01, 0.9],
      delay: 0.2,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
};

export const pricingFeaturesContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.3,
    },
  },
};

export const pricingFeatureVariants = {
  hidden: {
    opacity: 0,
    x: -15,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

export const pricingFeatureDotVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.68, -0.55, 0.265, 1.55],
      delay: 0.1,
    },
  },
};

export const pricingButtonVariants = {
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
      ease: "easeOut" as const,
      delay: 0.4,
    },
  },
  hover: {
    scale: 1.02,
    y: -2,
    transition: {
      duration: 0.2,
      ease: "easeOut" as const,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
};

export const pricingArrowVariants = {
  hover: {
    x: 4,
    transition: {
      duration: 0.2,
      ease: "easeOut" as const,
    },
  },
};

// Viewport configurations for Pricing Section
export const pricingViewportConfig = {
  section: { once: false, amount: 0.05 },
  header: { once: false, amount: 0.3 },
  grid: { once: false, amount: 0.1 },
  card: { once: false, amount: 0.2 },
};
// ////////////

// Special Offer Section specific animations
export const specialOfferSectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.0,
    },
  },
};

export const specialOfferLimitedAvailabilityVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const specialOfferIconVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotate: -45,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: [0.68, -0.55, 0.265, 1.55],
    },
  },
  hover: {
    scale: 1.1,
    rotate: 10,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

export const specialOfferLimitedTitleVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      delay: 0.1,
    },
  },
};

export const specialOfferLimitedDescriptionVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
      delay: 0.2,
    },
  },
};

export const specialOfferContainerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.2,
    },
  },
  hover: {
    y: -5,
    scale: 1.01,
    boxShadow: "0 25px 50px rgba(31, 255, 165, 0.15)",
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

export const specialOfferMainHeadingVariants = {
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
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.9],
      delay: 0.1,
    },
  },
};

export const specialOfferMobileHeadingVariants = {
  hidden: {
    opacity: 0,
    y: 25,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.9],
      delay: 0.1,
    },
  },
};

export const specialOfferSubtitleVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      delay: 0.3,
    },
  },
};

export const specialOfferButtonVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.9],
      delay: 0.5,
    },
  },
  hover: {
    scale: 1.05,
    y: -3,
    boxShadow: "0px 15px 40px rgba(31, 255, 165, 0.4)",
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },
};

export const specialOfferArrowVariants = {
  hover: {
    x: 4,
    transition: {
      duration: 0.2,
      ease: "easeOut" as const,
    },
  },
};

// Pulsing animation for urgency
export const specialOfferPulseVariants = {
  animate: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

// Glow effect for the container
export const specialOfferGlowVariants = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(31, 255, 165, 0.1)",
      "0 0 30px rgba(31, 255, 165, 0.2)",
      "0 0 20px rgba(31, 255, 165, 0.1)",
    ],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

// Text shimmer effect for the special offer text
export const specialOfferShimmerVariants = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

// Viewport configurations for Special Offer Section
export const specialOfferViewportConfig = {
  section: { once: false, amount: 0.1 },
  limitedAvailability: { once: false, amount: 0.4 },
  container: { once: false, amount: 0.3 },
  elements: { once: false, amount: 0.2 },
};

// /////////////
// Process Timeline Section specific animations
export const processTimelineSectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.0,
    },
  },
};

export const processTimelineBackgroundBlurVariants = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.05, 0.08, 0.05],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

export const processTimelineHeaderVariants = {
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

export const processTimelineSubtitleVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      delay: 0.2,
    },
  },
};

export const processTimelineGridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

export const processTimelineStepVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

export const processTimelineCardVariants = {
  hidden: {
    opacity: 0,
    rotateY: -15,
  },
  visible: {
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
  hover: {
    rotateY: 2,
    boxShadow: "0 20px 40px rgba(31, 255, 165, 0.1)",
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

export const processTimelineStepBadgeVariants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    y: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.68, -0.55, 0.265, 1.55],
      delay: 0.1,
    },
  },
  hover: {
    scale: 1.1,
    borderColor: "rgba(31, 255, 165, 1)",
    transition: {
      duration: 0.2,
    },
  },
};

export const processTimelineIconContainerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
    rotate: -45,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.7,
      ease: [0.68, -0.55, 0.265, 1.55],
      delay: 0.2,
    },
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    backgroundColor: "rgba(0, 61, 37, 0.4)",
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

export const processTimelineIconVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      delay: 0.3,
    },
  },
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.2,
    },
  },
};

export const processTimelineTitleVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      delay: 0.4,
    },
  },
};

export const processTimelineDescriptionVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
      delay: 0.5,
    },
  },
};

export const processTimelineConnectorVariants = {
  hidden: {
    opacity: 0,
    scaleY: 0,
  },
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
      delay: 0.6,
    },
  },
};

// Pulse animation for step numbers
export const processTimelinePulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    borderColor: [
      "rgba(31, 255, 165, 0.5)",
      "rgba(31, 255, 165, 0.8)",
      "rgba(31, 255, 165, 0.5)",
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

// Floating animation for icons
export const processTimelineFloatVariants = {
  animate: {
    y: [0, -5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

// Viewport configurations for Process Timeline
export const processTimelineViewportConfig = {
  section: { once: false, amount: 0.1 },
  header: { once: false, amount: 0.4 },
  grid: { once: false, amount: 0.2 },
  step: { once: false, amount: 0.3 },
  connector: { once: false, amount: 0.8 },
};
// ////-------------==========
// Clients Reviews Section specific animations
export const clientsReviewsSectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const clientsReviewsHeaderContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.0,
    },
  },
};

export const clientsReviewsMainHeadingVariants = {
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
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
};

export const clientsReviewsHighlightVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    x: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.68, -0.55, 0.265, 1.55],
      delay: 0.3,
    },
  },
  hover: {
    scale: 1.05,
    textShadow: "0 0 15px rgba(31, 255, 165, 0.4)",
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

export const clientsReviewsSubtitleVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      delay: 0.2,
    },
  },
};

export const clientsReviewsMarqueeContainerVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.3,
    },
  },
};

// Subtle pulse animation for the heading
export const clientsReviewsPulseVariants = {
  animate: {
    scale: [1, 1.01, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

// Shimmer effect for "About Us" text
export const clientsReviewsShimmerVariants = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

// Floating animation for subtle movement
export const clientsReviewsFloatVariants = {
  animate: {
    y: [0, -3, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

// Viewport configurations for Clients Reviews
export const clientsReviewsViewportConfig = {
  section: { once: false, amount: 0.1 },
  header: { once: false, amount: 0.4 },
  marquee: { once: false, amount: 0.3 },
};
// =========================== //

// FAQ Section specific animations
export const faqSectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.0,
    },
  },
};

export const faqHeaderVariants = {
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
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
};

export const faqHighlightVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotate: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: [0.68, -0.55, 0.265, 1.55],
      delay: 0.3,
    },
  },
  hover: {
    scale: 1.1,
    textShadow: "0 0 15px rgba(31, 255, 165, 0.5)",
    transition: {
      duration: 0.2,
    },
  },
};

export const faqContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, // Cards appear one by one
      delayChildren: 0.3,
    },
  },
};

export const faqCardVariants = {
  hidden: {
    opacity: 0,
    y: 50, // Slide up from bottom
    scale: 0.95, // Slight scale effect
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94], // Smooth easing
    },
  },
  hover: {
    y: -5,
    scale: 1.01,
    boxShadow: "0 15px 30px rgba(31, 255, 165, 0.08)",
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

export const faqCardContentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger internal elements
      delayChildren: 0.1,
    },
  },
};

export const faqGreenDotVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotate: -180,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: [0.68, -0.55, 0.265, 1.55], // Bouncy spring
    },
  },
  hover: {
    scale: 1.3,
    boxShadow: "0 0 15px rgba(31, 255, 165, 0.6)",
    transition: {
      duration: 0.2,
    },
  },
};

export const faqQuestionVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      delay: 0.1,
    },
  },
};

export const faqAnswerVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
      delay: 0.2,
    },
  },
};

// Pulse animation for question mark
export const faqPulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

// Floating animation for green dots
export const faqFloatVariants = {
  animate: {
    y: [0, -3, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

// Shimmer effect for the question mark
export const faqShimmerVariants = {
  animate: {
    textShadow: [
      "0 0 10px rgba(31, 255, 165, 0.3)",
      "0 0 20px rgba(31, 255, 165, 0.6)",
      "0 0 10px rgba(31, 255, 165, 0.3)",
    ],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

// Viewport configurations for FAQ Section
export const faqViewportConfig = {
  section: { once: false, amount: 0.1 },
  header: { once: false, amount: 0.5 },
  container: { once: false, amount: 0.1 },
  card: { once: false, amount: 0.2 },
};
// ========================
// Add these new variants to your existing variants.ts file

// Real Customer Section specific animations (Final CTA Section)
export const realCustomerSectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const realCustomerBackgroundBlurLeftVariants = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.04, 0.06, 0.04],
    x: [0, 10, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

export const realCustomerBackgroundBlurRightVariants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.03, 0.05, 0.03],
    x: [0, -15, 0],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay: 2,
    },
  },
};

export const realCustomerContentContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

export const realCustomerMainHeadingVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
};

export const realCustomerHighlightVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    x: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.68, -0.55, 0.265, 1.55],
      delay: 0.4,
    },
  },
  hover: {
    scale: 1.05,
    textShadow: "0 0 20px rgba(31, 255, 165, 0.6)",
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

export const realCustomerSubtitleVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      delay: 0.3,
    },
  },
};

export const realCustomerCTAVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, 0.01, 0.9],
      delay: 0.5,
    },
  },
};

// Urgency pulse animation for the entire section
export const realCustomerUrgencyPulseVariants = {
  animate: {
    scale: [1, 1.01, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

// Shimmer effect for "Real Customers" text
export const realCustomerShimmerVariants = {
  animate: {
    textShadow: [
      "0 0 15px rgba(31, 255, 165, 0.4)",
      "0 0 25px rgba(31, 255, 165, 0.7)",
      "0 0 15px rgba(31, 255, 165, 0.4)",
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

// Floating animation for the main heading
export const realCustomerFloatVariants = {
  animate: {
    y: [0, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

// Magnetic hover effect for the highlight text
export const realCustomerMagneticVariants = {
  hover: {
    scale: 1.08,
    textShadow: "0 0 30px rgba(31, 255, 165, 0.8)",
    filter: "brightness(1.2)",
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

// Viewport configurations for Real Customer Section
export const realCustomerViewportConfig = {
  section: { once: false, amount: 0.1 },
  content: { once: false, amount: 0.3 },
  cta: { once: false, amount: 0.5 },
};

// ===========
// LoginPage Section specific animations
export const loginPageSectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const loginFormContainerVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  hover: {
    y: -5,
    boxShadow: "0px 25px 70px rgba(31, 255, 165, 0.15)",
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

export const loginFormGridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const loginInputFieldVariants = {
  hidden: {
    opacity: 0,
    x: -30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
  focus: {
    scale: 1.02,
    borderColor: "#1FFFA5",
    boxShadow: "0 0 0 3px rgba(31, 255, 165, 0.1)",
    transition: {
      duration: 0.2,
    },
  },
};

export const loginIconVariants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
    rotate: -45,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: [0.68, -0.55, 0.265, 1.55],
      delay: 0.1,
    },
  },
  hover: {
    scale: 1.2,
    rotate: 10,
    transition: {
      duration: 0.2,
    },
  },
};

export const loginSubmitButtonVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, 0.05, 0.01, 0.9],
      delay: 0.4,
    },
  },
  hover: {
    scale: 1.02,
    y: -3,
    boxShadow: "0px 15px 40px rgba(31, 255, 165, 0.4)",
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
};

export const loginArrowVariants = {
  animate: {
    x: [0, 5, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
  hover: {
    x: 8,
    transition: {
      duration: 0.2,
    },
  },
};

export const loginTrustIndicatorsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};

export const loginTrustItemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
  hover: {
    scale: 1.05,
    color: "#1FFFA5",
    transition: {
      duration: 0.2,
    },
  },
};

export const loginTrustIconVariants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.68, -0.55, 0.265, 1.55],
      delay: 0.05,
    },
  },
  hover: {
    scale: 1.2,
    color: "#1FFFA5",
    transition: {
      duration: 0.2,
    },
  },
};

// Pulse animation for form container (urgency)
export const loginFormPulseVariants = {
  animate: {
    boxShadow: [
      "0px 20px 60px rgba(31, 255, 165, 0.1)",
      "0px 25px 70px rgba(31, 255, 165, 0.15)",
      "0px 20px 60px rgba(31, 255, 165, 0.1)",
    ],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

// Shimmer effect for submit button
export const loginButtonShimmerVariants = {
  animate: {
    boxShadow: [
      "0px 10px 30px rgba(31, 255, 165, 0.3)",
      "0px 15px 40px rgba(31, 255, 165, 0.4)",
      "0px 10px 30px rgba(31, 255, 165, 0.3)",
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

// Input focus ripple effect
export const loginInputRippleVariants = {
  focus: {
    scale: [1, 1.02, 1],
    borderColor: ["#3a4a5c", "#1FFFA5", "#1FFFA5"],
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

// Viewport configurations for LoginPage
export const loginPageViewportConfig = {
  section: { once: false, amount: 0.2 },
  form: { once: false, amount: 0.3 },
  trust: { once: false, amount: 0.8 },
};

// ==========
// Footer Section specific animations
export const footerSectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const footerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const footerLogoVariants = {
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
      ease: "easeOut" as const,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

export const footerCopyrightVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      delay: 0.2,
    },
  },
};

export const footerSocialContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const footerSocialIconVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.68, -0.55, 0.265, 1.55], // Bouncy easing
    },
  },
  hover: {
    scale: 1.2,
    y: -3,
    transition: {
      duration: 0.2,
      ease: "easeOut" as const,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },
};

export const footerMobileContentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const footerMobileCopyrightVariants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export const footerMobileSocialVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// Viewport configurations for Footer
export const footerViewportConfig = {
  section: { once: false, amount: 0.2 },
  container: { once: false, amount: 0.3 },
  logo: { once: false, amount: 0.5 },
  social: { once: false, amount: 0.4 },
};
