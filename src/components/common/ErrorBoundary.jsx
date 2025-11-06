import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  // componentDidCatch(error, info) {
  //   // You could send error logs to an external service here
  // }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container mx-auto px-4 py-16">
          <div className="p-6 rounded-lg border border-red-200 bg-red-50">
            <h2 className="text-xl font-semibold text-red-700">Aduh, terjadi kesalahan.</h2>
            <p className="mt-2 text-red-700">Silakan muat ulang halaman. Jika berlanjut, hubungi kami via WhatsApp.</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
