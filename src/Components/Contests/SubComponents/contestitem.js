import React, { Component } from 'react'

export default class ContestItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: "",
            timeleft: "",
            days: "",
        }
        this.interval = '';
    }

    componentDidMount() {

        let dateObj = new Date(this.props.item.startTimeSeconds * 1000);

        let formattedTime = dateObj.toString();
        this.setState({
            time: formattedTime,
        })
        if(this.props.type === 1)
        {
        this.interval = setInterval(() => {
            let time = this.props.item.startTimeSeconds;
            let unix = new Date().getTime() / 1000;
            let timeleft = time - unix;
            let days = Math.floor(timeleft / (3600 * 24));
            timeleft = timeleft % (3600 * 24);
            let hours = Math.floor(timeleft / 3600);
            timeleft = timeleft % 3600;
            let min = Math.floor(timeleft / 60);
            timeleft = timeleft % 60;
            let seconds = Math.floor(timeleft);
            let formattedTime = hours + "h:" + min + "m:" +seconds + "s";
            this.setState({
                timeleft: formattedTime,
                days: "Days:" + days,
            })
        },1000);
    }
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {

        let isLoggedIn = this.props.type;
        const renderAuthButton = ()=> {
        if(isLoggedIn === 1){
            return <td>{this.state.days} <br/> {this.state.timeleft} </td>
          }
        }
        
        return (
                <tr>
                    <td>{this.props.num}</td>
                    <td>{this.state.time}</td>
                    <td><a href={"https://codeforces.com/contest/"+this.props.item.id}>{ this.props.item.name}</a></td>
                    {renderAuthButton()}
                </tr>
        )
    }
}
