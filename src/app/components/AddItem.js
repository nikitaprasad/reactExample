import React from 'react';

class AddItem extends React.Component {
  render() {
    return (

      <div>
        <div>
          <input type="text" onChange={this.props.onChange} />
          <input type="button" onClick={this.props.onClick} value="Add" />
        </div>
      </div>
    );
  }

}

export default AddItem;