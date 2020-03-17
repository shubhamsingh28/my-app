import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'C:/Users/SG0304986/node_modules/sabre-spark/dist/css/spark.light.min.css'
import 'C:/Users/SG0304986/node_modules/sabre-spark/dist/js/spark.min.js'
import logo from './logo.png';
import * as serviceWorker from './serviceWorker';

var sub =0;
var name="";
var email = "";
var phone = "";
var gen = "";

class Game extends React.Component {
	componentDidMount(){
    document.title = "Spark"
  }
  render() {
	  console.log("hi "+sub)
	  if(sub == 1){
		return(
		<div>
		<Header />
		<Body2 />
		</ div>
		);
	  }
    return (
	<div>
		<Header />
		<Body />
		  </div>
    );
  }
}

function Button(props) {
  return (
    <button className="spark-btn spark-btn--sm" onClick={props.onClick}  >
      <span>Submit</span>
    </button>
  );
}

class Sc extends React.Component {
	render(){
		return(
		<script>
		var el = document.querySelectorAll('.spark-input');
		var i;
		var inputInstance = new Spark.TextInput(el[0]);
		</script>
		);
	}
	
}

class Header extends React.Component {
	render() {
    return (
  <header class="spark-header">
  <nav class="spark-header__nav" role="navigation">
    <span class="spark-header__logo"><i class="spark-logo spark-logo--sabre spark-logo--sm">Sabre</i></span>
    <a href="#" class="spark-header__title">Product™</a>
    
  </nav>
</header>	);
	}
}


class Body2 extends React.Component {
	render() {
		return(
		<div class="center" width="50%">
		<strong> FOLLOWING DETAILS WERE SUBMITTED : </strong> <br /> <br />
		Your name is : {name}<br />
		Your email is : {email}<br />
		Your phone no. : {phone}
		</div>
		);
	}
}

class Body extends React.Component {
	
	handleClick(){
		var c = check();
		if (c== "n"){
			alert("Enter Name");
		}
		else if (c== "e"){
			alert("Enter Email");
		}
		else if (c== "p"){
			alert("Enter Password");
		}
		else if (c== "r"){
			alert("Select Gender");
		}
		else if( c == "ph"){
			alert("Select Phone");
		}
		else{
			sub = 1;
			console.log(1);
			name  = document.getElementById('name').value;
			phone  = document.getElementById('phone').value;
			email  = document.getElementById('email').value;
			ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
		}
	}
	
	
	renderButton(){
		return (
		  <Button
			onClick={() => this.handleClick()}
		  />
		);
	}
	render() {
    return (
		<div class="center" width="50%">
	<label class="spark-input">
 
  <input class="spark-input__field" width='50%' name="name" id="name" placeholder="Enter Full Name..." role="textbox" />
  <span class="spark-label">What is your name?</span>
  
</label>
<label class="spark-input">
 
  <input type="password" class="spark-input__field" name="pw" id="pw" placeholder="Enter Password..." role="textbox" />
  <span class="spark-label">Password</span>
  
</label>
<label class="spark-input">
 
  <input type="email" class="spark-input__field" name="email" id="email" placeholder="Enter Email Id..." role="textbox" />
  <span class="spark-label">Email Id</span>
  
</label>
<span class="spark-label">Gender</span>
<fieldset class="row spark-radio-group">
  <label class="col-xs-12 spark-radio">
    <input class="spark-radio__input" type="radio" name="test-radio-2" id="r1" /> 
    <span class="spark-radio__box"></span>
    <span class="spark-label">Male</span>
  </label>
  <label class="col-xs-12 spark-radio">
    <input class="spark-radio__input" type="radio" name="test-radio-2"id="r2" />
    <span class="spark-radio__box"></span>
    <span class="spark-label">Female</span>
  </label>
</fieldset>
<div class="rb">
<label class="spark-select">
    <select class="spark-select__input" > 
      <option>India (+91)</option>
      <option>Australia (+67)</option>
      <option>United Ghana (+89)</option>
    </select>
    <span class="spark-label"></span>
  </label>
  </div>
  <div class="pb">
<label class="spark-input">
  
  <input type="number" class="spark-input__field" name="example1" id="phone" placeholder="Enter Phone.." role="textbox" />
  <span class="spark-label">Phone Number</span>
  
</label>
</div>
<div class="cb"></div>
<label class="centerb">
{this.renderButton()}
</label>


</div>

  
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function check(){
	var n = document.getElementById("name").value;
	if(n == ""){
		return "n";
	}
	var p = document.getElementById("pw").value;
	if(p == ""){
		return "p";
	}
	var e = document.getElementById("email").value;
	if(e == ""){
		return "e";
	}
	if (!document.getElementById('r1').checked && !document.getElementById('r2').checked) {
		return "r";
	}
	var ph = document.getElementById("phone").value;
	if(ph == ""){
		return "ph";
	}
	return "f";
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
