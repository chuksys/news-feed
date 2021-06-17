import React from "react"

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    //log to error monitoring/reporting service  
    console.error("An Error Occured!", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
          <div>
                <h1>
                    Opps! Something went wrong. We'll fix this asap!
                </h1>
          </div>
      )
    }

    return this.props.children; 
  }
}

export default ErrorBoundary