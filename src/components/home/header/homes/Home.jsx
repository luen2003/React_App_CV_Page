import React, { useState, useEffect } from 'react';
import headerImg from '../../../../assets/main.png';
import introBackground from '../../../../assets/IntroBackground.mp4';
import { Link } from 'react-router-dom';

export const Home = ({ className }) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Programmer", "Web Developer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <>
      <div className="container mx-auto position-relative ">
        <div className="swiper mySwiper h-100 w-100">
          <div className="swiper-wrapper">
            <div className="swiper-slide swiper-slide-active w-100" style={{ height: '700px' }}>
              <div className="embed-responsive embed-responsive-16by9">
                <video
                  className="embed-responsive-item"
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                  muted
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%'
                  }}
                >
                  <source src={introBackground} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
      <section className={`home ${className}`}>

        <div className="container flex" style={{ marginTop: '200px' }}>
          <div className="left">
            <div className="img">
              <img src={headerImg} alt="" style={{ marginTop: '120px' }} />
            </div>
          </div>
          <div className="right topMargin">
            <h1> I AM A <br />
              {text}|
            </h1>

            <div className="socialIcon">
              <Link to={{ pathname: 'https://www.facebook.com/dluongta' }} target="_blank"><i className="fab fa-facebook-f facebook"></i></Link>
              <Link to={{ pathname: 'https://www.instagram.com/dluongta/' }} target="_blank"> <i className="fab fa-instagram instagram"></i></Link>
              <Link to={{ pathname: 'https://www.linkedin.com/in/dinh-luong-ta-940ba2286/' }} target="_blank"> <i className="fab fa-brands fa-linkedin likedin"></i></Link>
              <Link to={{ pathname: 'https://www.youtube.com/@dinhluongta' }} target="_blank"> <i className="fab fa-youtube youtube"></i></Link>
              <Link to={{ pathname: 'https://www.tiktok.com/@dluongta2003' }} target="_blank"> <i className="fab fa-brands fa-tiktok tiktok"></i></Link>
              <Link to={{ pathname: 'https://github.com/dluongta' }} target="_blank"> <i className="fab fa-brands fa-github github"></i></Link>
            </div>
            <p>I am Dinh Luong Ta. I am a programmer who skilled at Web Developer, Android Developer. I also learning about Artificial Intelligence And Hardware. My favorite subjects are Math, Physics And Informatics.</p>
            <p>My CV: <Link to={{ pathname: 'https://www.topcv.vn/xem-cv/VlNRBgdQUwcHUAZUVQMOAQUCAlsCCwMHAwNXUA38ec' }} target="_blank" className="blue">CV Viewer Page</Link>
            </p>
            <button className="primary-btn">Contact Me</button>
          </div>
        </div>
      </section>
    </>
  );
}
