import React from 'react';

// import Cards from './components/Cards/cards'
// import Chart from './components/Chart/chart'
// import CountryPicker from './components/CountryPicker/CountryPcker'

import {Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api' ;

// import { ReactComponent } from '*.svg';

class App extends React.Component {

    state = {
        data: {},
    }

    async componentDidMount() {
        const fetchData = await fetchData();
        this.setState({data: this.state.data})
        console.log(this.state.data);
    }

    render() {
       

            const{data} = this.state;
            return(
            <div className={styles.container}>
                <Cards data ={data} />
                <CountryPicker />
                <Chart />

                <h1>Appointify App</h1>
            </div>
        );
    }
}

export default App;
