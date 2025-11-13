import React from 'react';

const Location: React.FC = () => {
    return (
        <section id="location" className="py-20 bg-white dark:bg-custom-purple-surface">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100">Kunjungi Kami</h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-300 mt-4 max-w-2xl mx-auto">Kami tunggu kedatangan Anda di workshop kami. Atau hubungi kami untuk layanan antar-jemput!</p>
                </div>
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl dark:shadow-none dark:ring-1 dark:ring-custom-purple-border">
                    <iframe
                        className="dark:filter dark:grayscale-100 dark:brightness-75 dark:contrast-125 dark:hue-rotate-[220deg]"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.836597387659!2d108.5394668!3d-7.3722043999999975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f631688e9419b%3A0xba735a6324e54a4e!2sEmak%20Laundry!5e0!3m2!1sid!2sid!4v1762945617128!5m2!1sid!2sid"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Peta Lokasi Emak Laundry"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Location;