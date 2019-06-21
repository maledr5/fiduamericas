import React from 'react';

class Folder extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showAnswer: false
		};
	}

	show() {
		this.setState({ showAnswer: false });
	}

	hide() {
		this.setState({ showAnswer: true });
	}

	toggleState() {
        const currentState = this.state.showAnswer;
        this.setState({ showAnswer: !currentState });
    }

  	fileElements() {
  		var files = this.props.folderContent;
  		var fileElements = []
  		files.map( (file, index) => {
  			fileElements.push(
	  			<div key={ index } className="row link-row file">
					<span className="col pdf-icon"></span>
					<a href={ file.fileURL } className="pdf-link" target="_blank">{ file.fileName }</a>
				</div>
			)
  		});

		return fileElements;
  	}

	render() {
		console.log("PROPS: ", this.props);
		var folderName = this.props.folderName;
		var files = this.fileElements();
		return (
			<div id="folder" className="faq-question col offset-s1">
				<a onClick={ () => this.toggleState() }>
					<h3 className="faq-question text-main">
						<span className={this.state.showAnswer ? "caret caret-up" : "caret caret-down"}></span>
						<span className="folder-name">{ folderName }</span>
					</h3>
				</a>
				<div className={this.state.showAnswer ? "show-answer" : "hide-answer"}>
					{ files }
				</div>
			</div>
		)
	}
}

export default Folder