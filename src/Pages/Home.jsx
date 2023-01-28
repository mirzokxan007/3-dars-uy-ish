import React from "react";
// import left from "../../public/Text.png"
import right from "../../public/mobile.png"
import left_book from "../../public/smartphone.png"
import "../Components/css/home.css"
import tele from "../../public/App.png"
import left_icon from "../../public/left-icon.png"
import right_icon from "../../public/right-icon.png"
import screenshot from "../../public/appscreen.png"
import slider from "../../public/Slider.png"
import phones from "../../public/phones.png"
import dawnloadstorage from "../../public/downloadstorage.png"
import video from "../../public/Video.png"
import carla from "../../public/carla.png"
import gouse from "../../public/gouse.png"
import septimus from "../../public/septimus.png"
import review from "../../public/Review.png"
import apple from "../../public/aple.png"
import image from "../../public/image.png"
import image1 from "../../public/image1.png"
import contact from "../../public/contact.png"



function Home() {
    return (
        <>
        <div className=" her0_part">
            <div className="container d-flex">
            <div className="left">
        <img className="left-img" width={600} height={500} src="/Text.png" alt="" />   
        </div>
        <div className="right">
        <img className="right-img" width={500} src={right} alt="" /> 
        </div>
        </div>
        </div>
        <div className="container app">
            <h1 className="d-flex justify-content-center my-5">About Our App</h1>
            <p className="d-flex pg  w-50 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Viverra nunc ante velit vitae. Est tellus vitae, nullam
             lobortis enim. Faucibus amet etiam tincidunt rhoncus, 
             ullamcorper velit. Ullamcorper risus tempor, ac nunc 
             libero urna, feugiat.</p>
            <div className=" container book d-flex justify-content-around">
                <div className=" w-50 left_book">
                    <img className="" src={left_book} alt="" />
                </div>
                <div className="w-50 right_book"><i class="fa-solid icon fa-circle-check"></i>
                    <div className="cards ">
                    <h2 className="h5 h2_first">CREATIVE DESIGN</h2>
                        <p className="p_first">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Viverra nunc ante velit vitae. Est tellus vitae, nullam 
                            lobortis enim. Faucibus amet etiam tincidunt rhoncus, 
                            ullamcorper velit.</p>
                    </div><i class="fa-solid icon fa-circle-check"></i>
                    <div className="cards ">
                    <h2 className="h5 h2_first">EASY TO USE</h2>
                        <p className="p_first">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Viverra nunc ante velit vitae. Est tellus vitae, nullam 
                            lobortis enim. Faucibus amet etiam tincidunt rhoncus, 
                            ullamcorper velit.</p>
                    </div>
                    <i class="fa-solid icon fa-circle-check"></i>
                    <div className="cards ">
                    <h2 className="h5 h2_first">BEST USER EXPERIENCE</h2>
                        <p className="p_first">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Viverra nunc ante velit vitae. Est tellus vitae, nullam 
                            lobortis enim. Faucibus amet etiam tincidunt rhoncus, 
                            ullamcorper velit.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="features">
            <div className="container">
        <img className="tele" src={tele} alt="" />

        <h1 className="d-flex justify-content-center  h1_features my-5">App features</h1>
            <p className="d-flex pg p_features w-50 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Viverra nunc ante velit vitae. Est tellus vitae, nullam
             lobortis enim. Faucibus amet etiam tincidunt rhoncus, 
             ullamcorper velit. Ullamcorper risus tempor, ac nunc 
             libero urna, feugiat.</p>
             <h1 className="d-flex justify-content-center  i_features my-5"><i class="fa-solid fa-2x fa-comment-dots"></i></h1>
             <h2 className="d-flex justify-content-center h2_features  my-5">FULL FREE CHAT</h2>
            <p className="d-flex pg1 p_features w-25 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="nav_1 d-flex justify-content-between container">
                <div className="left_nav">
                <i class="fa-solid gift_icon fa-3x my-3 fa-gift"></i>
                <h1 className="h4 my-3 gifts text-align-left">UNLIMITER FEATURES</h1>
                <p className="my-3 gifts ">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
                </div>
                <div className="right-nav">
                <i class="fa-solid fa-3x my-3 fa-mobile-screen-button"></i>
                <h1 className="h4 my-3 uni text-align-left">ISO & ANDROID VERSION</h1>
                <p className="my-3 uni">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
                </div>
            </div>
            <div className="nav_2 d-flex  justify-content-between container">
                <div className="left_nav">
                <i class="fa-solid gift_icon fa-3x my-3 fa-pen-nib"></i>
                <h1 className="h4 my-3 gifts text-align-left">UNLIMITER FEATURES</h1>
                <p className="my-3 gifts ">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
                </div>
                <div className="right-nav">
                <i class="fa-solid fa-3x my-3 fa-arrows-to-eye"></i>
                <h1 className="h4 my-3 uni text-align-left">ISO & ANDROID VERSION</h1>
                <p className="my-3 uni">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
                </div>
            </div>
            <div className=" container w-25  nav_3">
            <i class="fa-solid fa-3x py3 fa-headset"></i>
            <h1 className="h4 py-3">24/7 support by real pepole</h1>
            <p className="text-align-center py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            </div>
        </div>

        <div className="container screen">
            <h3 className="d-flex justify-content-center  h3_screen my-5">Checkout Our App Interface Look</h3>
            <p className="d-flex pg pg2 w-50 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Viverra nunc ante velit vitae. Est tellus vitae, nullam 
                lobortis enim. Faucibus amet etiam tincidunt rhoncus, 
                ullamcorper velit. Ullamcorper risus tempor, ac nunc 
                libero urna, feugiat.</p>
            <div className="screenshotlar my-5">
                <img src={left_icon} alt="" />
                <img src={screenshot} alt="" />
                <img src={right_icon} alt="" />
            </div>
            <img className="slider " src={slider} alt="" />
        </div>
        <div className="container   d-flex dawnload">
            <div className="left_dawnload">
                <h5 className="h3">Download App Now</h5>
                <p className="w-75">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Viverra nunc ante velit vitae. Est tellus vitae, nullam 
                    lobortis enim. Faucibus amet etiam tincidunt rhoncus, 
                    ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
                    <img src={dawnloadstorage} alt="" />
                <div className="cardca d-flex">
                    <div className="cardd w-25">
                    <i class="fa-solid fa-2x fa-download"></i>
                    <h4 className=" uni my-3">59865</h4>
                    <h4 className="uni">Download</h4>
                    </div>
                    <div className="cardd w-25">
                    <i class="fa-solid fa-2x fa-thumbs-up"></i>
                    <h4 className="uni my-3">29852</h4>
                    <h4 className="uni">LIke</h4>
                    </div>
                    <div className="cardd w-25">
                    <i class="fa-sharp fa-2x fa-solid fa-star"></i>
                    <h4 className=" uni my-3">1500</h4>
                    <h4 className="uni">5 star rating</h4>
                    </div>
                </div>
            </div>
            <div className="right_dawnload">
                <img src={phones} alt="" />
            </div>
        </div>
        <div className="how_use">
            <div className="container">
                <img className="video" src={video} alt="" />
                <h2 className="how_h2 uni d-flex justify-content-center">how to use the app perfectly</h2>
                <p className="d-flex pg p_features w-50 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. 
                    Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper 
                    velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
            </div>
        </div>
        <div className="reative container">
        <h3 className="d-flex justify-content-center  h3_screen my-5">Our reative team</h3>
            <p className="d-flex pg pg2 w-50 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Viverra nunc ante velit vitae. Est tellus vitae, nullam 
                lobortis enim. Faucibus amet etiam tincidunt rhoncus, 
                ullamcorper velit. Ullamcorper risus tempor, ac nunc 
                libero urna, feugiat.</p>


            <div className="reative_cards container">
                <div className="reative_card w-25">
                    <img src={carla} alt="" />
                    <h3 className="reative_h3 my-3">Carla Press</h3>
                    <span>App Developer</span>
                    <p className="eee my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.</p>
                    <div className="icon_section d-flex">
                        <i class="fa-brands black fa-facebook-f"></i><span>|</span>
                        <i class="fa-brands black fa-instagram"></i><span>|</span>
                        <i class="fa-brands black fa-twitter"></i><span>|</span>
                        <i class="fa-brands black fa-youtube"></i><span>|</span>
                    </div>
                </div>
                <div className="reative_card w-25">
                    <img src={gouse} alt="" />
                    <h3 className="reative_h3 my-3">Craig Gouse</h3>
                    <span>UI/UX Designer</span>
                    <p className="eee my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.</p>
                    <div className="icon_section d-flex">
                        <i class="fa-brands black fa-facebook-f"></i><span>|</span>
                        <i class="fa-brands black fa-instagram"></i><span>|</span>
                        <i class="fa-brands black fa-twitter"></i><span>|</span>
                        <i class="fa-brands black fa-youtube"></i><span>|</span>
                    </div>
                </div>
                <div className="reative_card w-25">
                    <img src={septimus} alt="" />
                    <h3 className="reative_h3 my-3">Jocelyn Septimus</h3>
                    <span>Website developer</span>
                    <p className="eee my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.</p>
                    <div className="icon_section d-flex">
                        <i class="fa-brands black fa-facebook-f"></i><span>|</span>
                        <i class="fa-brands black fa-instagram"></i><span>|</span>
                        <i class="fa-brands black fa-twitter"></i><span>|</span>
                        <i class="fa-brands black fa-youtube"></i><span>|</span>
                    </div>
                </div>
            </div>


        </div>
        <div className="happy">
            <div className="container">
            <h2 className="how_h2 uni d-flex justify-content-center">Our Happy Customers</h2>
                <p className="d-flex pg p_features w-50 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. 
                    Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper 
                    velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.</p>
                    <img src={review} alt="" />
                    <div className="d-flex justify-content-center">
                    <i class="fa-solid my-3 mx-1 fa-circle"></i>
                    <i class="fa-solid my-3 mx-1 fa-circle"></i>
                    <i class="fa-solid my-3 mx-1 fa-circle"></i>
                    <i class="fa-solid my-3 mx-1 fa-circle"></i>
                    <i class="fa-solid my-3 mx-1 fa-circle"></i>   
                    </div>
            </div>
        </div>
        <div className="reative1 container">
        <h3 className="d-flex justify-content-center  h3_screen my-5">Our recent blog</h3>
            <p className="d-flex pg pg2 w-50 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Viverra nunc ante velit vitae. Est tellus vitae, nullam 
                lobortis enim. Faucibus amet etiam tincidunt rhoncus, 
                ullamcorper velit. Ullamcorper risus tempor, ac nunc 
                libero urna, feugiat.</p>


            <div className="reative_cards container">


                <div className="reative_card1 w-30 ">
                    <img src={apple} alt="" />
                        <h5 className="px-5 my-3 ">The Snap Pixel: How It Works and How to Install </h5>
                        <p className="px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.</p>
                        <a className="a_second" href="">READ MORE...</a>
                </div>


                <div className="reative_card1 ">
                    <img src={image} alt="" />
                    <h5 className="px-5 my-3 ">Global Partner Solutions: A Partnership of Innovation </h5>
                        <p className="px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.</p>
                        <a className="a_second" href="">READ MORE...</a>
                </div>


                <div className="reative_card1 ">
                    <img src={image1} alt="" />
                    <h5 className="px-5 my-3 ">2021: An opportunity for Snapchatters to start fresh</h5>
                        <p className="px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.</p>
                        <a  className="a_second" href="">READ MORE...</a>
                </div>

            </div>


        </div>
        <div className="container">
        <div className="imgf ">
        <img className=" " src={contact} alt="" />
        </div>
        </div>
        <footer className="futer">
            
            <div className="container with d-flex justify-content-between">
                <div className="logo_footer w-25">
                    <h1 className="bold">LOGO</h1>
                    <p className="uni py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.</p>
                    <div className="icon_section d-flex">
                        <i class="fa-brands uni fa-facebook-f"></i><span  className="uni" >|</span>
                        <i class="fa-brands uni fa-instagram"></i><span className="uni" >|</span>
                        <i class="fa-brands uni fa-twitter"></i><span className="uni" >|</span>
                        <i class="fa-brands uni fa-youtube"></i>
                    </div>
                </div>

                <div className="link_footer w-25">
                    <h1 className="uniw">QUICK LINK</h1>
                    <li className="uni py-2 listr">About</li>
                    <li className="uni py-2 listr">Features</li>
                    <li className="uni py-2 listr">Blog</li>
                    <li className="uni py-2 listr">Screenshots</li>
                </div>

                <div className="news_footer w-25">
                    <h1 className="uniw">NEWS LATTER</h1>
                    <p className="uni py-3">Subscribe our newsletter to get our latest
                    update & news</p>
                    <i class="fa-solid inputs_icon fa-2x fa-paper-plane"></i>
                    <input className="my-3 py-1 w-100" type="text" placeholder="Your email address" />
                </div>


            </div>
            <div className="container bot d-flex justify-content-center"><i class="fa-regular py-3 mx-4 fa-copyright"></i><p className="uni py-3">Copyright 2021 .Ojjomedia. All Right Reserved.</p></div>
        </footer>
        </>
    );
}
export default Home;