import React from 'react';

export interface Service {
    icon: React.ReactElement;
    title: string;
    description: string;
}

export interface PricingPlan {
    name: string;
    price: string;
    priceUnit: string;
    features: string[];
    isPopular: boolean;
}

export interface Testimonial {
    quote: string;
    name: string;
    role: string;
    avatar: string;
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface LaundryStatus {
    id: string;
    invoiceCode: string; // Tambahan kode invoice pendek
    customerName: string;
    createdAt: string; // ISO String
    estimatedCompletionDate: string; // ISO String
    orderStatus: string;
    paymentStatus: string;
    total: number;
    amountPaid: number;
}