import React, { Component } from 'react';
import './scss/main.scss';
// import LandingMain from './components/LandingMain';
import Cards from './components/Cards';
import DefaultImg from './components/DefaultImg';

/*<LandingMain />*/


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
		formObject : {
      palette : 1, 
      FullName : '',
			job : '',
			phone : '',
			mail : '',
			linkedin : '',
			github : '',
      namePalette : ''
		}, 
		defaultInput : {
			name: 'Nombre y apellidos',
			job: 'Front-end developer',
			image: DefaultImg
    },
    cid:'c01'

	}
    this.onKeyUpListener = this.onKeyUpListener.bind(this);
    this.onClickPalette = this.onClickPalette.bind(this);
    this.handleCollasible=this.handleCollasible.bind(this);

  }

  onKeyUpListener(event) {
    const name = event.currentTarget.value;
    const id = event.currentTarget.id;
    this.setState((prevState) =>({
	  formObject : {
		  ...prevState.formObject,
		  [id] : name
	}
    }));
  }

  onClickPalette(event) {
    const palette = parseInt(event.currentTarget.value);
    let namePalette = '';
    if(palette === 1){
      namePalette = 'green';
    }else if(palette === 2){
      namePalette = 'red';
    }else{
      namePalette = 'yellow';
    }
    this.setState((prevState) =>({
		formObject : {
			...prevState.formObject,
			palette : palette, 
			namePalette : namePalette
	  }
	  }));

    return namePalette;
  }

  handleCollasible(event){
    const newCid = event.currentTarget.getAttribute('data-id');
    this.setState(prevState => {
        if (newCid === prevState.cid) {
          return {
            cid: null
          }
        }else {
          return{
            cid: newCid
          }
        }
    });
  }

  render() {
    return (
    //   <LandingMain />
      <Cards
        defaultInput={this.state.defaultInput}
        formObject={this.state.formObject}
        onKeyUpListener={this.onKeyUpListener}
        onClickPalette={this.onClickPalette}
        cid={this.state.cid}
        handleCollasible={this.handleCollasible}

      />
    );
  }
}

export default App;

