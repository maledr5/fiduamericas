import React from 'react';
import axios from 'axios';
import Folder from '../components/Folder';

// import Model from '../models/ResolucionesModel'

class ResolucionesGoogleApi extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			resoluciones: {}
		};
		this.setResoluciones = this.setResoluciones.bind(this);

		this.getResolucionesFromServer();
	}

	getResolucionesFromServer() {
		let server = "http://fiduamericas.com/Services.php";
		// let server = "http://localhost:8888/src/server/Services.php";
		axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
		axios.post(server, {
			"resoluciones": true
		}).then( this.setResoluciones )
		.catch(function (error) {
			console.log(error); // TODO: Handle error
		});
	}

	setResoluciones(response) {
		this.setState({resoluciones:response.data})
	}

	resolucionesFiles() {
		var resoluciones = this.state.resoluciones;
		var rootFiles, folders = [];
		var key = 0;
		for(var folderName in resoluciones) {
			if(folderName.toUpperCase() === 'ROOT') {
				rootFiles = this.rootElements(resoluciones[folderName]);
			} else {
				folders.push( this.folderElement(folderName, resoluciones[folderName], key) );
			}
			key ++;
		}
		var allFiles = this.allFiles(rootFiles, folders);
		return allFiles;
	}

	allFiles(rootFiles, folders) {
		return (
			<div>
				{ rootFiles }
				{ folders }
			</div>
		);
	}

	folderElement(folderName, file, key) {
		return (
			<div key={ key } className="row">
				<Folder folderName={ folderName } folderContent={ file } />
			</div>
		)
	}

	rootElements(files) {
		var rootFiles = [];
		files.map( (file, index)=> {
			rootFiles.push(
				<div key={ index } className="row link-row file">
					<span className="col offset-s1 pdf-icon"></span>
					<a href={ file.fileURL } className="pdf-link" target="_blank">{ file.fileName }</a>
				</div>
			);
		})
		return rootFiles;
	}

	render() {
		console.log("RES: ",this.state.resoluciones);
		var allFiles = this.resolucionesFiles();
		return (
			<div>
				<div className="container text-main">
					<div className="row">
						<h1 className="col offset-s1">Resoluciones</h1>
						<div className="col offset-s1 header-division"></div>
					</div>
				</div>

				<div id="resoluciones">
					<div className="container">
						<div className="row">
							<p className="col offset-s1 second">A continuación, encontrará información y documentación relevante:</p>
						</div>
						{ allFiles }
					</div>
				</div>
			</div>
		 );
	}
}

export default ResolucionesGoogleApi;