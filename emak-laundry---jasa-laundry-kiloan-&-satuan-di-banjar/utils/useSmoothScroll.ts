import React from 'react';

export const useSmoothScroll = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        if (!href) return;

        const targetId = href.substring(1);
        
        if (targetId === 'root') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const headerElement = document.querySelector('header');
            const headerOffset = headerElement ? headerElement.offsetHeight : 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
            window.scrollTo({
                 top: offsetPosition,
                 behavior: "smooth"
            });
        }
    };

    return handleScroll;
};
