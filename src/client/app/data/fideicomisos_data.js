import administracion from '../images/fideicomisos/administracion.svg';
import encargo from '../images/fideicomisos/encargo.svg';
import garantia from '../images/fideicomisos/garantia.svg';
import inmobiliario from '../images/fideicomisos/inmobiliario.svg';
import inversion from '../images/fideicomisos/inversion.svg';
import titularizacion from '../images/fideicomisos/titularizacion.svg';



const FideicomisosData = () => {
	return {
		"administracion": {
			"nombre": "Fideicomiso de Administración",
			"descripcion": "Es el tipo de contrato que maneja y gestiona el patrimonio de un tercero conforme sus instrucciones.",
			"descripcionLarga": "Es el tipo de contrato que maneja y gestiona el patrimonio de un tercero conforme sus instrucciones. Por ejemplo: arrendamiento, venta de inmuebles; administración de flujos para pago acreedores; custodia de bienes y valores; ejecución de obras, administración de proyectos y servicios en general.",
			"imgsrc": administracion
		},
		"inmobiliario": {
			"nombre": "Fideicomiso Inmobiliario",
			"descripcion": "Es el tipo de contrato que tiene como objetivo el desarrollo de un proyecto de construcción, manejando las relaciones con terceros.",
			"descripcionLarga": "Es el tipo de contrato que tiene como objetivo el desarrollo de un proyecto de construcción, manejando las relaciones con terceros, promoviendo de esta forma seguridad, confianza y transparencia entre las partes involucradas en el proyecto.",
			"imgsrc": inmobiliario
		},
		"inversion": {
			"nombre": "Fideicomiso de Inversión",
			"descripcion": "Es el tipo de contrato que tiene como objetivo realizar inversiones a nombre del cliente según sus instrucciones.",
			"descripcionLarga": "Es el tipo de contrato que tiene como objetivo realizar inversiones a nombre del cliente según sus instrucciones.",
			"imgsrc": inversion
		},
		"garantia": {
			"nombre": "Fideicomiso de Garantía",
			"descripcion": "Es el tipo de  contrato que tiene como objetivo que bienes del  cliente sirvan como garantía para sus obligaciones frente a terceros.",
			"descripcionLarga": "Es el tipo de contrato que tiene como objetivo que bienes del cliente sirvan como garantía para sus obligaciones frente a terceros.",
			"imgsrc": garantia
		},
		"titularizacion": {
			"nombre": "Agente de Manejo en Procesos de Titularización",
			"descripcion": "Es el tipo de contrato que tiene como objetivo que bienes del cliente sirvan para obtener el financiamiento bursátil por el lado del activo.",
			"descripcionLarga": "Es el tipo de contrato que tiene como objetivo que bienes del cliente sirvan para obtener el financiamiento bursátil por el lado del activo.",
			"imgsrc": titularizacion
		},
		"encargo": {
			"nombre": "Encargo fiduciario",
			"descripcion": "Es un mandato irrevocable es decir un poder, para cumplir instrucciones de dar, hacer o no hacer a nombre de un tercero.",
			"descripcionLarga": "Es un mandato irrevocable es decir un poder, para cumplir instrucciones de dar, hacer o no hacer a nombre de un tercero.  Este contrato se caracteriza por la entrega de bienes a la sociedad fiduciaria, sin que se transfiera la propiedad de los mismos.",
			"imgsrc": encargo
		}
	}
}

export default FideicomisosData;