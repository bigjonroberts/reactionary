import React from 'react';

class Weather extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            temperature_F: null
        };
    }

    componentDidMount() {
        // Simple GET request using fetch
        fetch('http://api.openweathermap.org/data/2.5/weather?id=4726206&units=imperial&appid=ecd60f518a2f79763d31a1938a6d9480')
            .then(response => response.json())
            .then( data =>
                {
                    var alteredTemp = data.main.temp + 5;
                    this.setState({ temperature_F: alteredTemp });
                } 
                );
    }

    render() {
        const { temperature_F } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple GET Request</h5>
                <div className="card-body">
                    Current Temperature: {temperature_F}
                </div>
            </div>
        );
    }
}

export default Weather; 