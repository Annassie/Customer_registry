import React, {Component} from 'react';
import axios from 'axios';

class Customers extends Component {
    constructor() {
        super();
        this.state = { customers: [], loading: true};
    }

    componentDidMount() {
        this.getCustomers();
    }

    getCustomers() {
        axios.get(`http://localhost:8889/api/customers`).then(customers => {
            this.setState({ customers: customers.data, loading: false})
        })
    }

    render() {
        const loading = this.state.loading;
        return(
            <div>
                <section className="row-section">
                    <div className="container">
                        <div className={'row'}>
                            {this.state.companies.props(company =>
                                <div>
                                    <h1 className="text-center" key={company.id}><span>{company.name}</span></h1>
                                    <h2 className="text-center"><span>List of customers</span></h2>
                                </div>
                                )}
                        </div>
                        {loading ? (
                            <div className={'row text-center'}>
                                <span className="fa fa-spin fa-spinner fa-4x"/>
                            </div>
                        ) : (
                            <div className={'row'}>
                                { this.state.customers.map(customer =>
                                    <div className="col-md-10 offset-md-1 row-block" key={customer.id}>
                                        <ul id="sortable">
                                            <li>
                                                <div className="media">
                                                    <div className="media-body">
                                                        <p>{customer.firstName}</p>
                                                        <p>{customer.lastName}</p>
                                                        <p>{customer.address}</p>
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