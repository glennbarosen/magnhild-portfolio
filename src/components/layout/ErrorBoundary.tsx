import { Component, type ReactNode, type ErrorInfo } from 'react'

interface ErrorBoundaryProps {
    children: ReactNode
    fallback?: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
    error: Error | null
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false, error: null }
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error('ErrorBoundary caught an error:', error, errorInfo)
    }

    render(): ReactNode {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback
            }

            return (
                <div className="flex min-h-screen items-center justify-center px-6">
                    <div className="max-w-md text-center">
                        <h1 className="text-primary mb-4 text-4xl font-bold">Noe gikk galt</h1>
                        <p className="text-secondary mb-6">
                            Beklager, det oppstod en feil. Prøv å laste siden på nytt.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-primary hover:bg-primary/90 inline-flex items-center justify-center px-6 py-3 font-medium text-white transition-colors"
                        >
                            Last siden på nytt
                        </button>
                    </div>
                </div>
            )
        }

        return this.props.children
    }
}
