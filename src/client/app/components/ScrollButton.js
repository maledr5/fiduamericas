import React from 'react';

class ScrollButton extends React.Component {
  constructor() {
    super();

    this.state = {
        intervalId: 0
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }

  render () {
        return (
            <div className="flex-center scroll-button">
                <button title="Back to top" className="scroll"
                    onClick={ () => { this.scrollToTop(); }}>
                <i className="material-icons md-light md-36">expand_less</i>
                </button>
            </div>
        );
   }
}

export default ScrollButton;
