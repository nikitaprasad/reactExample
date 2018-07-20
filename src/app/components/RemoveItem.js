import React from 'react';

class RemoveItem extends React.Component {
    render() {
        return (

            <div>

                <select onChange={this.props.selectChange}>
                    
                    {this.props.data.map((value, index) => {
                       return <option key={index} value={value}>{value}</option>

                    })}
                </select>
                <input type="button" onClick={this.props.onClickRemove} value="Remove" />
            </div>
        );
    }
}


export default RemoveItem;