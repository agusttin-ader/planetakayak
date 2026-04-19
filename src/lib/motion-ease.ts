export const easeOutExpo = [0.22, 1, 0.36, 1] as const;
export const easeHero = [0.25, 0.46, 0.45, 0.94] as const;

export const drawerPanelSpring = {
  type: "spring" as const,
  damping: 38,
  stiffness: 520,
  mass: 0.58,
  restDelta: 0.001,
  restSpeed: 0.001,
};
