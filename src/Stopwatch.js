import React from 'react';

class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timerOn: false,
            timerStart: 0,
            timerTime: 0
        };
    }

    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
        });

        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            });
        }, 10);
    }

    stopTimer = () => {
        this.setState({
            timerOn: false
        });
        alert("Time's up!")
        clearInterval(this.timer);
    }

    componentDidMount() {
        this.startTimer();
        setTimeout(() => this.stopTimer(), 30000);
    }
    

    render() {
        console.log(this.state.timerTime);
        
        const { timerTime } = this.state;
        let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

        return (
            <div className="Stopwatch">
                <div className="Stopwatch-header">
                    Time Passed
                </div>
                <div className="Stopwatch-display">
                    {hours} : {minutes} : {seconds} : {centiseconds}
                </div>

                {this.state.timerTime === 10000 && (
                    <span>Time is up!</span>
                )}
            </div>
        );
    }
}

export default Stopwatch;

