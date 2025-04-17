import {useEffect}from "react";
import "../ComponentStyle/Section1.css"
import video from "../assets/phone_video.mp4"
import gsap from "gsap";

function Section1() {

    useEffect(() => {
        gsap.fromTo(".left", {
            opacity: 0,
            y: 200
        },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out"
        })
        gsap.fromTo(".right", {
            opacity: 0,
            y: 200
        },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out"
        })
        gsap.fromTo(".sectionVideo video", {
            opacity: 0,
            y: 200
        },{
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out",
            delay: 1
        })
    }, [])
    return (
        <div className="mainSection1">
            <div className="section1Con">
                <div className="sectionText">
                    <div className="left">
                        <h1>iPhone</h1>
                    </div>
                    <div className="right">
                        <p>Didesain untuk dicintai.</p>
                    </div>
                </div>
                <div className="sectionVideo">
                    <video src={video} autoPlay loop muted />
                </div>
            </div>
        </div>
    )
}

export default Section1