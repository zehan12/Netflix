import React from 'react'
import "../stylesheets/Main.css";
import {Link} from "react-router-dom";
import Loader from './Loader';

class Latest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : []
        }
    }

    componentDidMount() {
        let key = "AIzaSyB3IdkiPZzO4qBBQ5RcF4ZzCuDeKA2PSMs"

        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${key}&q=latestseries2021&maxResults=50`)
        .then(res => res.json())
        .then(data => this.setState({
            data : data.items
        }))
    }

   
    render() {
        let {data} = this.state;
        // console.log(data)
        if(!this.state.data.length) {
            return (
                <Loader />
            )
        }
        return (
            <>
                <header className="header_section_main">
                    <div className="main_container">
                        <div className="main_header flex between .align_center">
                            <section className="header_left_main">
                                    <img className="main_logo" src="/images/logo (1).png" alt="logo" />
                            </section>

                            <section>
                                <ul className="flex ">
                                    <li><Link to="/main" className="main_nav_a" href="#">All</Link></li>
                                    <li><Link to="/music" className="main_nav_a" href="#">Music</Link></li>
                                    <li><Link to="/hollywood" className="main_nav_a" href="#">Hollywood</Link></li>
                                    <li><Link to="/trending" className="main_nav_a" href="#">Trending</Link></li>
                                    <li><Link to="/latest"className="main_nav_a" href="#">Latest</Link></li>
                                </ul>
                            </section>

                            <section className="header_right_main">
                                <Link  to="/" className="btn btn-rounded main_btn_signout">Sign Out</Link>
                            </section>
                        </div>
                    </div>
                </header>
                <section>
                    {/* <div className="main_container flex wrap ">
                        {
                          data.map((items) => (
                              <div className="movie_card flex-20" key={items.id} >
                                    <img className="thumbnail" src={items.snippet.thumbnails.medium.url} alt="" />
                                    <Link to={`/singlevideo/${items.id.videoId}`} className="movie_title">{items.snippet.title}</Link>
                                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${items.id.videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                              </div>
                          ))
                        }
                    </div> */}
                      <div className="main_container flex wrap between">
                        {
                          data.map((items) => (
                              <div className="movie_card flex-20" key={items.id} >
                                  <Link to={`/singlevideo/${items.id.videoId}`} >
                                        <img className="thumbnail" src={items.snippet.thumbnails.medium.url} alt="" />
                                  </Link>
                                    <p className="movie_title_single">{items.snippet.title}</p>
                                    {/* <iframe width="560" height="315" src={`https://www.youtube.com/embed/${items.id.videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                              </div>
                          ))
                        }
                    </div>
                </section> 

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

export default Latest
