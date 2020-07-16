import React, {Component} from 'react';
import Landingpage from '../Landingpage/Landingpage';
import img1 from '../../assets/fb1.jpg';
import img2 from '../../assets/fb2.jpg';
import img3 from '../../assets/fb3.jpg';
class Cards extends Component {
    render(){
        return(
          <div className="container-fluid d-flex justify-content-center">
              <div className="row">
                  <div className="col-md-4">
                    <Landingpage imgsrc={img1} title="Signup/Login" text="Something that makes me wana sign in Something that makes me wana sign in Something that makes me wana sign in Something that makes me wana sign in"/>
                  </div>
                  <div className="col-md-4">
                    <Landingpage imgsrc={img2} title="Vote Your Favorite" text="Something that makes me wana vote Something that makes me wana vote Something that makes me wana vote Something that makes me wana vote"/>
                  </div>
                  <div className="col-md-4">
                    <Landingpage imgsrc={img3} title="Auditions" text="Something that makes me wana sign up Something that makes me wana sign up Something that makes me wana sign up Something that makes me wana sign up"/>
                  </div>
              </div>
          </div>  
        );
    }
}

export default Cards;