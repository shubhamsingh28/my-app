import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import logo from './logo.png';
import * as serviceWorker from './serviceWorker';


function Square(props) {
	if (props.value === 'X'){
		return (
    <button className="square button4" onClick={props.onClick}  >
      <span>{props.value}</span>
    </button>
  );
	}
  return (
    <button className="square button5" onClick={props.onClick}  >
      <span>{props.value}</span>
    </button>
  );
}

function Rules(props){
	return (
	<div className="popup" onClick={props.onClick}  value={props.value}>
	RULES
      <span class="popuptext" id="myPopup">Two players take turns to unlock numbers hidden inside boxes. The one with maximum score after all the boxes have been opened, wins!</span>
    
	</div>
	);
}
var scoreA = 0;
var scoreB = 0;
var sb = Array(8).fill(0);
var movesleft = 8;
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? sb[i] : sb[i];
	if(this.state.xIsNext == 0){
		scoreB = (scoreB*1.0 + (sb[i]*1.0));
	}
	else{
		scoreA = ((1.0*scoreA) + (sb[i]*1.0));
	}
	movesleft = (movesleft*1.0)-1;
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
  
  handleRules(){
	  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  }

  renderSquare(i) {
	 if (sb[i]){
		 const squares = this.state.squares.slice();
		 if (squares[i]){
			 return (
		  <Square
			value={squares[i]}
			onClick={() => this.handleClick(i)}
		  />
		);
		 }
		 return (
		  <Square
			value='X'
			onClick={() => this.handleClick(i)}
		  />
		);
	 }
	const min = 1;
    const max = 100;
    const rand = min + Math.random() * (max - min);
	sb[i]=rand.toFixed(0);
	
    return (
      <Square
        value='X'
        onClick={() => this.handleClick(i)}
      />
    );
  }
  
  renderrules(winner){
	  if(winner){
		  return (
		<Rules
		onClick = {() => this.handleRules()}
		value=''
			/>
	  );
	  }
	  return (
		<Rules
		value='Rules'
		onClick = {() => this.handleRules()}
			/>
	  );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
	let gamet = "PLAY THE SABRE GAME";
	let abc = 'score A: '+scoreA + ' B: '+scoreB;;
    if (winner) {
		if(winner === 'C'){
			status = "Match is Drawn";
		}
		else{
			status = 'Result: ' + winner+' wins';
		}
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'A' : 'B');
    }
	

    return (
        
      <div class="board">
	  <header class="he">
          <img src={logo} alt="logo" />
        </header>
		<div className="gamet"> {gamet} </div>
        <div className="status">{status}</div>
		<div className="abc"> {abc} </div>
        <div className="board-row">
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<center>
			{this.renderrules(winner)}
			</center>
			
			<br />
			<br />
			<center>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
		  {this.renderSquare(3)}
			{this.renderSquare(4)}
			{this.renderSquare(5)}
			{this.renderSquare(6)}
			{this.renderSquare(7)}
			</center>
		  <br />
		  <br />
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
	componentDidMount(){
    document.title = "Sabre Game"
  }
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinner(squares) {
	if( movesleft === 0){
		if(scoreA > scoreB){
			return 'A';
		}
		else if (scoreA === scoreB){
			return 'C';
		}
		else{
			return 'B';
		}
	}
	return null;
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
