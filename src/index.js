import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import  get  from 'lodash/get';
import  size  from 'lodash/size';
import forEach from 'lodash/forEach';
import  isEmpty  from 'lodash/isEmpty';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import * as serviceWorker from './serviceWorker';
import { KeyObject } from 'crypto';

export class Covid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			covidData: {}
    };
	}

	getTableBody() {
		let tableData = [];
		forEach(this.state.covidData, (data, key) => {
			tableData.push(
				<tr>
					<td>{key+1}</td>
					<td>{data.country}</td>
					<td>{data.cases}</td>
					<td>{data.deaths}</td>
					<td>{data.recovered}</td>
				</tr>
			);
	});
		return tableData;
	}
	
	getHeader() {
		return(
			<div>
				<Container fluid="md">
					<Row>
						<Col>CoronaVirus Tracker</Col>
					</Row>
				</Container>
				<div className = "covid__table">
				<Table striped bordered hover >
				 <thead>
					<tr>
						<th>#</th>
						<th>Country</th>
						<th>Total Cases</th>
						<th>Recoverd</th>
						<th>Deaths</th>
					</tr>
				 </thead>
				 <tbody>
					 {this.getTableBody()}
				 </tbody>
				</Table>
				</div>
			</div>
		);
	}
  
  render(){
		
		/*let options = [];
		if (!isEmpty(covid)) {
			forEach(covid, (data, value) => {
					console.log(data, value);
					console.log("jell");
			});
		}*/
		
	  return (
			<div className="covid__body">
				{this.getHeader()}
				
			</div>
    );
	}
	componentDidMount(){
		document.title = "Covid Update";
		/*fetch('https://pomber.github.io/covid19/timeseries.json')
		.then(results => {
				return results.json();
		}).then(data => {
			this.setState({
				covidData: data
			});
		});*/

		fetch('https://coronavirus-19-api.herokuapp.com/countries')
		.then(results => {
				return results.json();
		}).then(data => {
			this.setState({
				covidData: data
			});
			console.log(data);
		});
  }
}

ReactDOM.render(
  <Covid />,
  document.getElementById('root')
);

serviceWorker.unregister();
