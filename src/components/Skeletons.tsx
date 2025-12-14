
import React from 'react';

const CardSkeleton: React.FC = () => (
    <div className="bg-white dark:bg-custom-purple-surface p-6 sm:p-8 rounded-xl shadow-lg h-full animate-pulse">
        <div className="w-12 h-12 bg-zinc-200 dark:bg-custom-purple-border rounded-full mx-auto mb-6"></div>
        <div className="h-6 w-3/4 bg-zinc-200 dark:bg-custom-purple-border rounded-md mx-auto mb-4"></div>
        <div className="h-4 w-full bg-zinc-200 dark:bg-custom-purple-border rounded-md mb-2"></div>
        <div className="h-4 w-5/6 bg-zinc-200 dark:bg-custom-purple-border rounded-md mx-auto"></div>
    </div>
);

export const ServicesSkeleton: React.FC = () => (
    <section className="py-10 sm:py-12 bg-zinc-50 dark:bg-custom-purple-bg">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <div className="h-10 w-1/2 bg-zinc-200 dark:bg-custom-purple-border rounded-md mx-auto mb-4 animate-pulse"></div>
                <div className="h-6 w-3/4 bg-zinc-200 dark:bg-custom-purple-border rounded-md mx-auto animate-pulse"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
            </div>
        </div>
    </section>
);

export const PricingSkeleton: React.FC = () => (
    <section className="py-10 sm:py-12 bg-zinc-50 dark:bg-custom-purple-bg">
        <div className="container mx-auto px-6">
             <div className="text-center mb-12">
                <div className="h-10 w-1/2 bg-zinc-200 dark:bg-custom-purple-border rounded-md mx-auto mb-4 animate-pulse"></div>
                <div className="h-6 w-3/4 bg-zinc-200 dark:bg-custom-purple-border rounded-md mx-auto animate-pulse"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
            </div>
        </div>
    </section>
);

export const GenericSectionSkeleton: React.FC = () => (
     <section className="py-10 sm:py-12 bg-white dark:bg-custom-purple-surface">
        <div className="container mx-auto px-6">
             <div className="text-center mb-12">
                <div className="h-10 w-1/2 bg-zinc-200 dark:bg-custom-purple-border rounded-md mx-auto mb-4 animate-pulse"></div>
                <div className="h-6 w-3/4 bg-zinc-200 dark:bg-custom-purple-border rounded-md mx-auto animate-pulse"></div>
            </div>
            <div className="h-64 bg-zinc-100 dark:bg-custom-purple-bg rounded-xl shadow-lg animate-pulse"></div>
        </div>
    </section>
);
