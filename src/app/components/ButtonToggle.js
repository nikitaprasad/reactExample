import React from 'react';

class ButtonToggle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dispImage: false,

    };
    this.onClickButton1 = this.onClickButton1.bind(this);
   
   
  }

  onClickButton1() {
    this.setState({
      dispImage: !this.state.dispImage
    });
  }

  render() {
    //const { dispImage }= this.state
    const arr= ['Learn More','Play Games','Do Nothing']
    const alist= arr.map((value,index) => <li key={index} >{value}</li>)
    return (

      <div>
        <button onClick={this.onClickButton1}>
          {!this.state.dispImage? 'Show' : 'Hide'}
            </button>

        {this.state.dispImage ? <img src={ "./app/pictures/pic.jpg"} />: null}
        <ul>
          {alist}
        </ul>
      </div>
        );
      }   
    }

    export default ButtonToggle;