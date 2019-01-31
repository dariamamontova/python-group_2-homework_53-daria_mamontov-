import React, {Component} from 'react';
import './App.css';
import Numbers from './Numbers/Numbers'

class App extends Component {
    state = {
        numbers: [
            {name: '1'},
            {name: '2'},
            {name: '3'},
            {name: '4'},
            {name: '5'}
        ]
    };


    changeName = (name) => {
        console.log('Кнопка нажата, имя меняется');
        let newState = {...this.state};
        name = function randomInteger(min, max) {
            var rand = min + Math.random() * (max + 1 - min);
            rand = Math.floor(rand);
            return rand;
        };
        newState.numbers[0].name = name(5, 36);
        newState.numbers[1].name = name(5, 36);
        newState.numbers[2].name = name(5, 36);
        newState.numbers[3].name = name(5, 36);
        newState.numbers[4].name = name(5, 36);

        newState.numbers.sort(function(a, b){
            return a.name - b.name
            })
        this.setState(newState);
    };

    render() {
        return (
            <div className="App mt-5 container">
                <button className="btn btn-dark" onClick={() => this.changeName(5, 36)}>New numbers</button>
                <div className="row mt-5">
                    <Numbers name={this.state.numbers[0].name}/>
                    <Numbers name={this.state.numbers[1].name}/>
                    <Numbers name={this.state.numbers[2].name}/>
                    <Numbers name={this.state.numbers[3].name}/>
                    <Numbers name={this.state.numbers[4].name}/>
                </div>
            </div>
        );
    }
}

export default App;