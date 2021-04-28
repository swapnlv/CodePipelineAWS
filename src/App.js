import React, { Component } from 'react';
import Projects from '../src/Projects'
import SocialProfiles from './Socialprofiles';
import profile from './assets/profile.png';
import Titles from './Titles';

class App extends Component{
    constructor(){
        super();
        this.state= { displayMore:false}

        this.Readmore=this.Readmore.bind(this);
        this.Readless=this.Readless.bind(this);
    }
    Readmore(){
        this.setState({ displayMore: true});
    }
    Readless(){
        this.setState({ displayMore: false});
    }
    render(){
        return(
            <div>
                <img src={profile} className="profileimg" />
                <h1>Hello World !</h1>
                <p>My name is Swapnil Vishwakarma.</p>
                <Titles />

                {
                this.state.displayMore ? (<div>
                <p>I am pretty interseted in coding, I do it every day. I am 21 years old. I am working in TCS right now.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.</p>
                <button onClick={ this.Readless }>Read Less</button>
                </div>
                    ) : (<div>
                    <button onClick={ this.Readmore }>Read more</button>
                </div>)
                }<br />
                <hr />
                <div>
                    <Projects />
                </div>
                <div>
                    <SocialProfiles />
                </div>
            </div>
        )
    }
}
export default App;