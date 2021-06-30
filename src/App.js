import React, { Component } from 'react';


export default class App extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="text-center">Animals</h1>
                <div className="row">
                    <div className="col-3">
                        <div className="border border-info p-2">
                            <h3>Lion</h3>
                            <h4>Panthero Lio</h4>
                            <h4>140kg</h4>
                            <h5>meat</h5>
                            <button className="btn btn-warning">More info</button>

                        </div>
                    </div>
                    <div className="col-3 offset-1 ">
                        <div className="border border-info p-2">
                            <h3>Gotilla</h3>
                            <h4>Gorilla Beringei</h4>
                            <h4>170kg</h4>
                            <h5>plants</h5>
                            <button className="btn btn-warning">More info</button>

                        </div>
                    </div>
                    <div className="col-3 offset-1">
                        <div className="border border-info p-2">
                            <h3>Zebra</h3>
                            <h4>Equeas quanga</h4>
                            <h4>160kg</h4>
                            <h5>plants</h5>
                            <button className="btn btn-warning">More info</button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
