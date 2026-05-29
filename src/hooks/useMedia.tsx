import { useEffect, useState } from 'react';

export default function useMedia(media: string) {
  const [matches, setMatches] = useState<boolean>(() => {
    const matches = window.matchMedia(media).matches;
    return matches;
  });

  function handleResize() {
    const { matches } = window.matchMedia(media);
    setMatches(matches);
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [matches]);

  return matches
}
