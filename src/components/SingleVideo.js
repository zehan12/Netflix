import React from 'react'
import Loader from './Loader';
import "../stylesheets/Main.css";
import {Link} from "react-router-dom";

class SingleVideo extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           video : []
       }
   }

   componentDidMount() {
       //my Api key :- AIzaSyDOg0GBBE8yS7XIpAshoICgJR6nVUwIFNw
       let {id} = this.props.match.params;
       let key = "AIzaSyB3IdkiPZzO4qBBQ5RcF4ZzCuDeKA2PSMs"

       fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${key}`)
       .then(res => res.json())
       .then(video => this.setState({
           video : video.items
       }))
   }

   render() {
    //    console.log(this.props.match.params.id)
    // console.log(this.state.video)
    let {video} = this.state;
    if(!this.state.video) {
        return <Loader />
    }
    return (

       <>
         <header className="header_section_main">
            <div className="main_container">
                <div className="main_header flex between">
                    <section className="header_left_main">
                            <img className="main_logo" src="/images/logo (1).png" alt="logo" />
                    </section>
                    <section className="header_right_main">
                        <Link  to="/main" className="btn btn-rounded main_btn_signout">Back</Link>
                    </section>
                </div>
            </div>
         </header>
        <div className="main_container">
            {
                video.map((video) => (
                    // console.log(video.id)
                    <div className="single_card">
                        <h2 className="watch_heading">Your Now Watching ...</h2>
                        <h1 className="single_title">{video.snippet.title}</h1>
                        <iframe width="100%" height="615" src={`https://www.youtube.com/embed/${video.id}?rel=0&controls=1&modestbranding=1&fs=0`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        {/* <iframe width="550" height="314" src={`https://www.youtube.com/embed/${video.id}?modestbranding=1&showinfo=0&showsearch=0&rel=1&iv_load_policy=3&cc_load_policy=1&autoplay=1&loop=1&fs=1 `} frameborder="0" allowfullscreen></iframe> */}


                    </div>
                ))
            }
        </div>


        <footer className="footer">
            <p>Questions? Call 1-866-579-7172</p>
            <div className="footer-cols">
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Investor Relations</a></li>
                    <li><a href="#">Ways To Watch</a></li>
                    <li><a href="#">Corporate Information</a></li>
                    <li><a href="#">Netflix Originals</a></li>
                </ul>
                <ul>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Terms Of Use</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <ul>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Redeem Gift Cards</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Speed Test</a></li>
                </ul>
                <ul>
                    <li><a href="#">Media Center</a></li>
                    <li><a href="#">Buy Gift Cards</a></li>
                    <li><a href="#">Cookie Preferences</a></li>
                    <li><a href="#">Legal Notices</a></li>
                </ul>
            </div>

    </footer>
 
            
       </>
    )
   }
}

export default SingleVideo;
