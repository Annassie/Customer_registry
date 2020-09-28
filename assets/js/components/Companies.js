import React, {Component} from 'react';
import axios from 'axios';


class Companies extends Component {
    constructor() {
        super();

        this.state = { companies: [], loading: true}
    }

    componentDidMount() {
        this.getCompanies();
    }

    getCompanies() {
        axios.get(`http://localhost:8000/api/companies`).then(companies => {
            this.setState({ companies: companies.data, loading: false})
        })
    }

    render() {
        const loading = this.state.loading;
        return (
            <div>
                <section className="row-section">
                    <div className="container">
                        <div className="row">
                            <h2 className="text-center"><span>List of posts</span>Created with <i
                                className="fa fa-heart"></i> by yemiwebby </h2>
                        </div>

                        {loading ? (
                            <div className={'row text-center'}>
                                <span className="fa fa-spin fa-spinner fa-4x"></span>
                            </div>

                        ) : (
                            <div className={'row'}>
                                {this.state.companies.map(company =>
                                    <div className="col-md-10 offset-md-1 row-block" key={company.id}>
                                        <ul id="sortable">
                                            <li>
                                                <div className="media">
                                                    <div className="media-body">
                                                        <h4>{company.title}</h4>
                                                        <p>{company.body}</p>
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

export default Companies;