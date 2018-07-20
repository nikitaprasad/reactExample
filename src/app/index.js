import React from 'react';
import RenderDOM from 'react-dom';
import App from './container/App';
import { Provider } from 'react-redux';
import store from "./store";
//import TextComponent from "./components/TextComponent";
import ImageComponent from "./components/ImageComponent";
//import ListComponent from "./components/ListComponent";
//import ListObj from "./components/ListObj";
//import ButtonToggle from "./components/ButtonToggle";
import AddItem from "./components/AddItem";
import RemoveItem from './components/RemoveItem';
import "./styles/styles.css";





class Shop extends React.Component {

    arr = ['Notebook', 'Pencil'];
    constructor(props) {
        super(props);

        this.state = {
            arr: this.arr,
            newItem: "",
            removeItem: this.arr[0]
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClickRemove = this.handleClickRemove.bind(this);
        this.handleChangeRemove = this.handleChangeRemove.bind(this);
    }

    handleClick() {
        if (this.state.arr.indexOf(this.state.newItem) < 0)
            this.setState({ arr: [...this.state.arr, this.state.newItem] });
    }
    handleChange(e) {
        this.setState({ newItem: e.target.value });
    }
    handleChangeRemove(e) {
        this.setState({ removeItem: e.target.value });
    }
    handleClickRemove() {
        this.state.arr.splice(this.state.arr.indexOf(this.state.removeItem), 1);
        this.setState({ arr: this.state.arr });
    }

    render() {



        return (

            <div className="div-Style">

                <div className="center-Style">
                    <ImageComponent />



                    <h2 className="heading-Style">Items available in our store are</h2>

                    <ul>
                        {this.state.arr.map((value) => {
                            return <li key={value}>{value}</li>
                        })}
                    </ul>

                    <div className="add-Style">
                        <AddItem onClick={this.handleClick} onChange={this.handleChange} />
                        </div>
                        <div className="remove-Style">
                        <RemoveItem data={this.state.arr} selectChange={this.handleChangeRemove} onClickRemove={this.handleClickRemove} />
                    </div>
                </div>
            </div>
        );
    }
}


RenderDOM.render(<Shop />, document.getElementById('app'));
