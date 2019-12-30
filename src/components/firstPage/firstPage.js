import React, { Component } from 'react';
import imag from "../../static/images/rocket.png"
import '../../styles/firstPage.scss';
import { TimelineMax } from "gsap";

class FirstPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount(){
        const tl = new TimelineMax();
        tl.to("#rocket", .5, { y: 50 }, { y: 0 },{ repeat: -1 }).repeat(-1).yoyo(true).play();
        tl.to("#starts", 1, { y: 50 }, { y: 0 },{ repeat: -1 }).repeat(-1).yoyo(true).play();
    }
    render() {
       
        return (
            <div className="first-row">
                <div className="first-row-1">
                  <img id = "rocket" src={imag}></img>
                </div>
                <div className="first-row-2">
                  <h1 id = "starts">It starts...</h1>
                </div>
                
            </div>
        );
    }
    
}

export default FirstPage;