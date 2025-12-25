// Lightweight CSS animation utilities - replaces Framer Motion
// Much faster, no JavaScript overhead

export const fadeIn = "animate-[fadeIn_0.5s_ease-in-out]";
export const slideUp = "animate-[slideUp_0.5s_ease-out]";
export const scaleIn = "animate-[scaleIn_0.3s_ease-out]";

// Add to your CSS or Tailwind config:
/*
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
*/

// Simple intersection observer hook for scroll animations
export const useInView = (ref) => {
  const [isInView, setIsInView] = React.useState(false);
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  
  return isInView;
};
