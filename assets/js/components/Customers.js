// ./assets/js/components/Customers.js

import React, {Component} from 'react';
import axios from 'axios';

class Customers extends Component {
    constructor() {
        super(1);
        this.state = { customers: [], loading: true};
    }

    componentDidMount() {
        this.getCustomers();
    }

    getCustomers() {
        axios.get(`http://127.0.0.1:8000/api/customers`).then(customers => {
            this.setState({ customer: customers.data, loading: false})
        })
    }

    render() {
        const loading = this.state.loading;
        return(
            <div>
                <section className="row-section">
                    <div className="container">
                        <div className="row">
                            <h2 className="text-center"><span>List of customers</span>Created with
                                <i className="fa fa-heart"></i> by yemiwebby</h2>
                        </div>
                        {loading ? (
                            <div className={'row text-center'}>
                                <span className="fa fa-spin fa-spinner fa-4x"></span>
                            </div>
                        ) : (
                            <div className={'row'}>
                                { this.state.customers.map(customer =>
                                    <div className="col-md-10 offset-md-1 row-block" key={customer.id}>
                                        <ul id="sortable">
                                            <li>
                                                <div className="media">
                                                    <div className="media-left align-self-center">
                                                        <img alt="" className="rounded-circle"
                                                             src={customer.imageURL}/>
                                                    </div>
                                                    <div className="media-body">
                                                        <h4>{customer.name}</h4>
                                                        <p>{customer.description}</p>
                                                    </div>
                                                    <div className="media-right align-self-center">
                                                        <a href="#" className="btn btn-default">Contact Now</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </section>
            </div>
        )
    }
}
export default Customers;