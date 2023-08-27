import { useEffect, useState, ReactNode } from 'react';

interface AnimatedElementProps {
  children: ReactNode;
}

const AnimatedElement1: React.FC<AnimatedElementProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.querySelector('.fade-in');
    if (!element) return;

    const top = element.getBoundingClientRect().top;
    const bottom = element.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (top < windowHeight && bottom >= 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // ตรวจสอบ isVisible ทันทีหลังจากโหลดหน้าใหม่
    handleScroll();

    // เรียก handleScroll เพื่อให้แสดงแอนิเมชันทันทีเมื่อโหลดหน้าใหม่
    window.addEventListener('load', handleScroll);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('load', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fade-in ${isVisible ? 'active' : ''}`}>
      {children}
    </div>
  );
};

export default AnimatedElement1;
