const pageTransition = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: '0.15',
    },
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut',
      duration: '0.15',
    },
  },
}

const clickAnimation = {
  rest: { scale: 1 },
  pressed: { scale: 0.9 },
}

export { pageTransition, clickAnimation }
