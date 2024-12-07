
'use client';

import { FiSun, FiMoon } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>...</div>; 
  }

  return (
    <div className="p-4 absolute">
      {resolvedTheme === 'dark' ? (
        <FiSun
          onClick={() => setTheme('light')}
          size={24}
          style={{ cursor: 'pointer' }}
        />
      ) : (
        <FiMoon
          onClick={() => setTheme('dark')}
          size={24}
          style={{ cursor: 'pointer' }}
        />
      )}
    </div>
  );
}
