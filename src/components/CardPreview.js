import React  from 'react';
import Reset from './Reset';
import Card from './Card';

class CardPreview extends React.Component {
    render() {
        return(
            <section className="card-preview">
            <div className="card-preview__container">
              <Reset />
              <Card 
              defaultInput = {this.props.defaultInput}
              formField={this.props.formField}
               />
            </div>
          </section>
        )
    }
}

export default CardPreview;