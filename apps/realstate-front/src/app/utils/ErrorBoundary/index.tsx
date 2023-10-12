import React from 'react';

type ErrorBoundaryProps = {
  children: JSX.Element;
};

type ErrorBoundaryState = {
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
};

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({
      error,
      errorInfo,
    });
  }

  render(): JSX.Element {
    if (this.state.errorInfo) {
      return (
        <div>
          <h1>Something went wrong!</h1>
          <p>{this.state.error?.toString()}</p>
          <button onClick={() => window.location.reload()}>Reload</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
