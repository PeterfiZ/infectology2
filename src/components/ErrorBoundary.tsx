import React, { ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  declare props: Props;
  declare state: State;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in ErrorBoundary:', error, errorInfo);
  }

  private handleReload = () => {
    try {
      localStorage.removeItem('infecto_active_category');
      localStorage.removeItem('infecto_active_disease');
    } catch (e) {
      console.warn(e);
    }
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-2xl text-center space-y-6">
            <div className="w-16 h-16 bg-red-500/10 text-red-400 rounded-full flex items-center justify-center mx-auto border border-red-500/20">
              <AlertCircle className="w-8 h-8 text-red-400" />
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl font-bold tracking-tight text-white">
                Alkalmazási Hiba Lépett Fel
              </h1>
              <p className="text-sm text-slate-400 leading-relaxed">
                A klinikai tananyag betöltése közben váratlan hiba történt. Az alábbi gombbal újraindíthatja az alkalmazást.
              </p>
            </div>

            {this.state.error && (
              <div className="bg-slate-950 p-3 rounded-lg text-xs font-mono text-red-300 text-left overflow-auto max-h-32 border border-slate-800">
                {this.state.error.message || 'Ismeretlen hiba'}
              </div>
            )}

            <button
              onClick={this.handleReload}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-medium shadow-lg shadow-teal-900/30 transition-all cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              Alkalmazás Újratöltése
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
