import React from "react";
import ReactDOM from "react-dom";
import style from "./index.css";

var dest0 = document.querySelector("#index0");


class Buttonfiy extends React.Component{
	render(){
		return(
			<button type={this.props.behavior}>{this.props.behavior}</button>
			)
	}
}

ReactDOM.render(

	<div>
		<Buttonfiy behavior="submit">Send Data</Buttonfiy>
	</div>,
	dest0
);




var dest1 = document.querySelector("#index1");

class Letter extends React.Component {
	render(){
		var letterStyle ={
			padding: 10,
	  		margin:10,
	  		textAlign: "center",
	  		backgroundColor: this.props.color,
	  		color: "#333",
	  		display: "inline-block",
	  		fontSize: 32,
	  		fontFamily: 'monospace'

		}
		return(
			<div style={letterStyle}>
			{this.props.children}
			</div>
		); 
	}

}


ReactDOM.render(
	<div>
		<Letter color="#58b3FF">A</Letter>
		<Letter color="#ff605f">E</Letter>
		<Letter color="#ffd52e">I</Letter>
		<Letter color="#49dd8e">O</Letter>
		<Letter color="#ae99ff">U</Letter>
	</div>,
	dest1
	)

var dest2 = document.querySelector("#index2");

class Card extends React.Component {
	render(){
		var cardStyle = {
			height: "200px",
			width: "150px",
			padding: 0,
			backgroundColor: "#fff",
			WebkitFilter: "drop-shadow(0px 0px 5px #666)",
			filter: "drop-shadow(0px 0px 5px #666)",
			marginLeft: "46%"
		};
		return(
			<div style={cardStyle}>
				<Square color = {this.props.color}/>
				<Label color = {this.props.color}/>
			</div>
		); 
	}

}

class Square extends React.Component {
	render(){
		var squareStyle = {
			height: "150px",
			backgroundColor: this.props.color
		}

		return(
			<div style = {squareStyle}>
			</div>
		); 
	}

}

class Label extends React.Component {
	render(){
		var labelStyle = {
			fontFamily: "sans-serif",
			fontWeight: "bold",
			padding: "12px",
			margin:0,
			fontSize: "23px"
		}
		return(
			<p style={labelStyle}>{this.props.color}</p>
		); 
	}

}


ReactDOM.render(
<div>
	<Card color = "#ff033d"/>

</div>,
dest2
);




// class Stuff extends React.Component {
// 	render(){
// 		var oneElement = {
// 			backgroundColor: this.props.color,
// 			textAlign: "center"
// 		}
// 		return(
// 			<React.Fragment>
// 				<p style={oneElement}>I am</p>
// 				<p>returning a list</p>
// 				<p>of things</p>
// 			</React.Fragment>
// 		);
// 	}
// };


// ReactDOM.render(
// 	<div>
// 		<Stuff color = "green"/>
// 	</div>,
// 	dest
// 	);

var dest3 = document.querySelector("#index3");


class LightningCounter extends React.Component {
	constructor(props, context){
		super(props, context);
		this.state = {
			strikes: 0
		};
		this.timerTick = this.timerTick.bind(this);
	}

	componentDidMount(){
		setInterval(this.timerTick, 1000);
	}

	timerTick(){
		this.setState((prevState) => {
			return {
				strikes: prevState.strikes + 100
			}
			
		});
	}

      render() {
        return (
          <h1>{this.state.strikes}</h1>
        );
      }
    }
 
    class LightningCounterDisplay extends React.Component {
      render() {
        var divStyle = {
          width: 250,
          textAlign: "center",
          backgroundColor: "black",
          padding: 40,
          fontFamily: "sans-serif",
          color: "#999",
          borderRadius: 10,
          marginLeft: "38.4%"

        };
 
        return (
          <div style={divStyle}>
            <LightningCounter/>
          </div>
        );
      }
    }
 
    ReactDOM.render(
      <LightningCounterDisplay/>,
      dest3
    );



var dest4 = document.querySelector("#index4");

class Circle extends React.Component {
      render() {
        var circleStyle = {
          padding: 10,
          margin: 20,
          display: "inline-block",
          backgroundColor: this.props.color,
          borderRadius: "50%",
          width: 100,
          height: 100
        };
 
        return (
          <div style={circleStyle}>
          </div>
        );
      }
    }

    var theCircle = <Circle color="#F9C240" />

    var allCircles = [];
    var colors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];

    for(var i=0; i<6;i++){
    	var randColor = Math.floor(Math.random() * colors.length);
    	allCircles.push(<Circle key={i + colors[randColor]} color={colors[randColor]}/>)
    }

 
    ReactDOM.render(
      <div>
        {allCircles}
      </div>,
      dest4
    );


   var dest5 = document.querySelector("#index5");


class Colorizer extends React.Component {
      constructor(props, context) {
      super(props, context);
 
        this.state = {
          color: "",
          bgColor: "white"
        };
 
        this.colorValue = this.colorValue.bind(this);
        this.setNewColor = this.setNewColor.bind(this);
      }
 
      colorValue(e) {
        this.setState({ 
          color: e.target.value 
        });
      }
 
      setNewColor(e) {
        this.setState({
          bgColor: this.state.color
        });

        this._input.focus();
        this._input.value = "";
 
        e.preventDefault();
      }
 
      render() {
        var squareStyle = {
          backgroundColor: this.state.bgColor
        };
 
        return (
          <div className="colorArea">
            <div style={squareStyle} className="colorSquare"></div>
 
            <form onSubmit={this.setNewColor}>
              <input onChange={this.colorValue}
              ref ={
                (el)=>this._input = el
              }
                placeholder="Enter a color value"></input>
              
              <button type="submit">go</button>
            </form>
            <ColorLabel color={this.state.bgColor}/>
          </div>
        );
      }
    }

class ColorLabel extends React.Component {
    render() {
      return ReactDOM.createPortal(
          ": " + this.props.color,
          document.querySelector("#colorHeading")
          );
    }
}



 
    ReactDOM.render(
      <div>
        <Colorizer />
      </div>,
      dest5
    );



var dest6 = document.querySelector("#index6");

class Counter extends React.Component {
    render() {
      var textStyle = {
        fontSize: 72,
        fontFamily: "sans-serif",
        color: "#333",
        fontWeight: "bold"
      };

      return (
        <div style={textStyle}>
          {this.props.display}
        </div>
      );
    }
  }

  class CounterParent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0
      };
      this.increase = this.increase.bind(this)
    }

    increase(e){
      this.setState({
          count: this.state.count + 1 
        });
    }
    


    render() {
      var backgroundStyle = {
        padding: 50,
        backgroundColor: "#FFC53A",
        width: 250,
        height: 100,
        borderRadius: 10,
        textAlign: "center",
        marginLeft: "39%"
      };

      var buttonStyle = {
        fontSize: "1em",
        width: 30,
        height: 30,
        fontFamily: "sans-serif",
        color: "#333",
        fontWeight: "bold",
        lineHeight: "3px"
      };

      return (
        <div style={backgroundStyle}>
          <Counter display={this.state.count} />
          <button onClick={this.increase} style={buttonStyle}>+</button>
        </div>
      );
    }
  }

  ReactDOM.render(
    <div>
      <CounterParent />
    </div>,
    dest6
  );









