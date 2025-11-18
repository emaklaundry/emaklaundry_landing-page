import React, { useState, useEffect, useRef, forwardRef, lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import { ThemeProvider } from './context/ThemeContext';
import { ServicesSkeleton, PricingSkeleton, GenericSectionSkeleton } from './components/Skeletons';

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

// Lazy load components that are below the fold
const Pricing = lazy(() => import('./components/Pricing'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Partners = lazy(() => import('./components/Partners'));
const FAQ = lazy(() => import('./components/FAQ'));
const Location = lazy(() => import('./components/Location'));
const Footer = lazy(() => import('./components/Footer'));
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'));
const Terms = lazy(() => import('./components/Terms'));
const BackToTopButton = lazy(() => import('./components/BackToTopButton'));
const TrackLaundry = lazy(() => import('./components/TrackLaundry'));


const FadedPricing = withFadeIn(Pricing);
const FadedTestimonials = withFadeIn(Testimonials);
const FadedPartners = withFadeIn(Partners);
const FadedFAQ = withFadeIn(FAQ);
const FadedLocation = withFadeIn(Location);
const FadedTrackLaundry = withFadeIn(TrackLaundry);


const App: React.FC = () => {
    const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

    // Show terms modal on first visit
    useEffect(() => {
        const hasAcceptedTerms = localStorage.getItem('hasAcceptedTerms');
        if (!hasAcceptedTerms) {
            setIsTermsModalOpen(true);
        }
    }, []);

    const handleCloseTerms = () => {
        setIsTermsModalOpen(false);
        localStorage.setItem('hasAcceptedTerms', 'true');
    };

    return (
        <ThemeProvider>
            <div className="text-zinc-800 dark:text-zinc-200">
                <Header />
                <main>
                    <Hero />
                    {/* --- TrackLaundry Section --- */}
                    <Suspense fallback={<GenericSectionSkeleton />}>
                        <FadedTrackLaundry />
                    </Suspense>
                    {/* ---------------------------- */}
                    <Suspense fallback={<PricingSkeleton />}>
                        <FadedPricing />
                    </Suspense>
                    <Suspense fallback={<GenericSectionSkeleton />}>
                        <FadedTestimonials />
                    </Suspense>
                    <Suspense fallback={<GenericSectionSkeleton />}>
                        <FadedPartners />
                    </Suspense>
                     <Suspense fallback={<GenericSectionSkeleton />}>
                        <FadedFAQ />
                    </Suspense>
                    <Suspense fallback={<GenericSectionSkeleton />}>
                        <FadedLocation />
                    </Suspense>
                </main>
                <Suspense fallback={null}>
                    <Footer onTermsClick={() => setIsTermsModalOpen(true)} />
                    <WhatsAppButton />
                    <Terms isOpen={isTermsModalOpen} onClose={handleCloseTerms} />
                    <BackToTopButton />
                </Suspense>
            </div>
        </ThemeProvider>
    );
};

export default App;