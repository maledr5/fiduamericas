import React from 'react';


const FaqQuestion = React.Component({

	getInitialState() {
		return { showAnswer: false };
	},

	show() {
		this.setState({ showAnswer: false });
	},

	hide() {
		this.setState({ showAnswer: true });
	},

	toggleState() {
        const currentState = this.state.showAnswer;
        this.setState({ showAnswer: !currentState });
    },

    componentDidMount() {
    	if(window.location.hash && !!this.props.id) {
			var locationId = window.location.hash.replace("#","" );
			if (this.props.id == locationId) {
				this.toggleState();
				setTimeout(function(){
					document.getElementById(locationId).scrollIntoView();
				}, 300);
			}
		}
  	},

	render() {
		return (
			<div className="faq-question">
				<a onClick={ () => this.toggleState() }>
					<h3 className="faq-question text-main">
						<span className={this.state.showAnswer ? "caret caret-up" : "caret caret-down"}></span>
						{this.props.question}
					</h3>
				</a>
				<div className={this.state.showAnswer ? "show-answer" : "hide-answer"}>
					<div className="faq-answer">{this.props.answer}</div>
					<img src={this.props.img}></img>
				</div>
			</div>
		)
	}
});

export default FaqQuestion