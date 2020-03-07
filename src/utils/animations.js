export const fadeIn = (delay, from = 0, anim) => {
  return {
    opacity: anim.interpolate({
      inputRange: [delay, Math.min(delay + 500, 3000)],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    transform: [
      {
        translateY: anim.interpolate({
          inputRange: [delay, Math.min(delay + 500, 3000)],
          outputRange: [from, 0],
          extrapolate: 'clamp',
        }),
      },
    ],
  };
};
