import React, { Component} from 'react';
import SOCIAL_PROFILES from './data/social_profiles';

class SocialProfile extends Component{
    render(){
        console.log(this.props.socialProfile.link);
        return(
            <div style={{display:'inline-block',width:50,margin: 5}}>
                <a href={this.props.socialProfile.link}>
                    <img src={this.props.socialProfile.image} alt="Profiles" style={{height:50,width:50}}/>
                </a>
            </div>
        )
    }
}
class SocialProfiles extends Component{
    render(){
        return(
            <div>
                <h2>Connect with Me !</h2>
                 <div>{
                    SOCIAL_PROFILES.map(SOCIAL_PROFILE =>{
                         return(
                            <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
                        );
                    })
                    }

                </div>
            </div>
        )
    }
}
export default SocialProfiles;