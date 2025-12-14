import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-custom-purple-bg p-6">
          <div className="max-w-md text-center bg-white dark:bg-custom-purple-surface rounded-2xl shadow-xl p-8 border border-zinc-100 dark:border-custom-purple-border">
            <div className="mb-6">
              <svg className="w-20 h-20 mx-auto text-custom-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-custom-purple mb-4">Oops!</h1>
            <p className="text-zinc-600 dark:text-zinc-300 mb-6">
              Terjadi kesalahan pada aplikasi. Silakan refresh halaman atau hubungi kami via WhatsApp untuk bantuan.
            </p>
            {this.state.error && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-sm text-zinc-500 dark:text-zinc-400 hover:text-custom-purple">
                  Detail Error
                </summary>
                <pre className="mt-2 p-3 bg-zinc-100 dark:bg-zinc-800 rounded text-xs overflow-auto text-red-600 dark:text-red-400">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
            <button
              onClick={() => window.location.reload()}
              className="bg-custom-purple text-white px-8 py-3 rounded-lg font-semibold hover:bg-custom-purple-hover transition-all shadow-md hover:shadow-lg"
            >
              Refresh Halaman
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
