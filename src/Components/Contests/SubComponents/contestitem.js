import React, { Component } from 'react'

export default class ContestItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: "",
            timeleft: "",
            days: "",
            link: "",
        }
        this.interval = '';
    }

    componentDidMount() {

        let dateObj = new Date(this.props.item.startTimeSeconds * 1000);
        function formatJSDate(dt) {
            return (dt.getMonth() + 1 + '/' + dt.getDate() + '/' + (dt.getYear() + 1900) + ' ' + dt.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false }));
        }
        let unix = new Date().getTime() / 1000;
        let link = "https://codeforces.com/contest/" + this.props.item.id;
        if (this.props.item.startTimeSeconds > unix) link = "";
        this.setState({
            time: formatJSDate(dateObj),
            link: link,
        })
        console.log("Contest Item Mounted");
        if (this.props.type === 1) {

            this.interval = setInterval(() => {
                let unix = new Date().getTime() / 1000;
                let time = this.props.item.startTimeSeconds;
                let timeleft = time - unix;
                let days = Math.floor(timeleft / (3600 * 24));
                timeleft = timeleft % (3600 * 24);
                let hours = Math.floor(timeleft / 3600);
                timeleft = timeleft % 3600;
                let min = Math.floor(timeleft / 60);
                timeleft = timeleft % 60;
                let seconds = Math.floor(timeleft);
                let formattedTime = hours + "h:" + min + "m:" + seconds + "s";
                var str = "Days: " + days;
                if (!days) {
                    str = "Today"
                }
                this.setState({
                    timeleft: formattedTime,
                    days: str,
                })
            }, 1000);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {

        let isLoggedIn = this.props.type;
        const renderAuthButton = () => {
            if (isLoggedIn === 1) {
                return <td>{this.state.days} <br /> {this.state.timeleft} </td>
            }
        }

        return (
            <tr>
                <td style={{ paddingRight: "1rem", paddingLeft: "1rem" }}>{this.props.num}</td>
                <td style={{ paddingRight: "1rem", paddingLeft: "1rem" }}>{this.state.time}</td>
                <td style={{ paddingRight: "1rem", paddingLeft: "1rem" }}><a class="thumbnail" href={this.state.link}>{this.props.item.name}</a></td>
                {renderAuthButton()}
            </tr>
        )
    }
}
