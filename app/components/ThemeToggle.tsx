"use client";

import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Функція для отримання куки
  const getCookie = (name: string): string | null => {
    if (typeof window !== 'undefined') {
      const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
      return match ? decodeURIComponent(match[2]) : null;
    }
    return null;
  };

  // Ініціалізуємо тему з куки або з класу на <html> при завантаженні компонента
  useEffect(() => {
    const savedTheme = getCookie('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme); // Тепер встановлюється тільки 'light' або 'dark'
      document.documentElement.classList.toggle('dark-theme', savedTheme === 'dark');
    } else {
      // Встановлюємо тему за замовчуванням
      const currentTheme = document.documentElement.classList.contains('dark-theme') ? 'dark' : 'light';
      setTheme(currentTheme);
    }
  }, []);

  // Функція для зміни теми
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark-theme', newTheme === 'dark');
    document.cookie = `theme=${newTheme}; path=/; max-age=31536000`; // Зберігаємо тему в куки на 1 рік
  };

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
    </button>
  );
};

export default ThemeToggle;
