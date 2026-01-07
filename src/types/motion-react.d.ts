declare module "motion/react" {
  // Minimal typing to satisfy TypeScript/ESLint; motion is provided by the `motion` package.
  // If you need richer typings later, we can expand this to re-export from `framer-motion` or the motion package types.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const motion: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export function useMotionValue(initial: number): any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export function useSpring(value: any, config?: any): any;
}


