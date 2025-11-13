
import React, { useState, useEffect, useRef, forwardRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import FAQ from './components/FAQ';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Terms from './components/Terms';

// Custom Hook for Intersection Observer
const useIntersectionObserver = (options: IntersectionObserverInit) => {
    const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
    const [node, setNode] = useState<HTMLElement | null>(null);

    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (observer.current) {
            observer.current.disconnect();
        }

        observer.current = new window.IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setEntry(entry);
                if (node && observer.current) {
                    observer.current.unobserve(node);
                }
            }
        }, options);

        const { current: currentObserver } = observer;

        if (node) {
            currentObserver.observe(node);
        }

        return () => {
            if (currentObserver) {
                currentObserver.disconnect();
            }
        };
    }, [node, options]);

    return [setNode, entry?.isIntersecting] as const;
};


// HOC to wrap components with the observer
const withFadeIn = <P extends object>(Component: React.ComponentType<P>) => {
    const WrappedComponent = forwardRef<HTMLDivElement, P>((props, ref) => {
        const [setNode, isVisible] = useIntersectionObserver({ threshold: 0.1 });

        return (
            <div ref={setNode} className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}>
                <Component {...props} />
            </div>
        );
    });
    WrappedComponent.displayName = `withFadeIn(${Component.displayName || Component.name})`;
    return WrappedComponent;
};


const FadedServices = withFadeIn(Services);
const FadedPricing = withFadeIn(Pricing);
const FadedTestimonials = withFadeIn(Testimonials);
const FadedPartners = withFadeIn(Partners);
const FadedFAQ = withFadeIn(FAQ);
const FadedLocation = withFadeIn(Location);


const App: React.FC = () => {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'light';
        }
        return 'light';
    });
    
    const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

    // Show terms modal on first visit
    useEffect(() => {
        const hasAcceptedTerms = localStorage.getItem('hasAcceptedTerms');
        if (!hasAcceptedTerms) {
            setIsTermsModalOpen(true);
        }
    }, []);

    useEffect(() => {
        if (theme === 'purple') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'purple');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'purple' : 'light'));
    };

    const handleCloseTerms = () => {
        setIsTermsModalOpen(false);
        localStorage.setItem('hasAcceptedTerms', 'true');
    };

    return (
        <div className="text-zinc-800 dark:text-zinc-200">
            <Header theme={theme} toggleTheme={toggleTheme}/>
            <main>
                <Hero />
                <FadedServices />
                <FadedPricing />
                <FadedTestimonials />
                <FadedPartners />
                <FadedFAQ />
                <FadedLocation />
            </main>
            <Footer onTermsClick={() => setIsTermsModalOpen(true)} />
            <WhatsAppButton />
            <Terms isOpen={isTermsModalOpen} onClose={handleCloseTerms} />
        </div>
    );
};

export default App;