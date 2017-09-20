import React from 'react';


const FaqQuestion = React.createClass({

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

	render() {
	console.log(this.state.showAnswer);
		return (
			<div>
				<a onClick={ () => this.toggleState() }><h3 className="faq-question text-main">{this.props.question}</h3></a>
				<div className={this.state.showAnswer ? "show-answer" : "hide-answer"}>
					<div className="faq-answer">{this.props.answer}</div>
					<img src={this.props.img}></img>
				</div>
			</div>
		)
	}
});

export default FaqQuestion