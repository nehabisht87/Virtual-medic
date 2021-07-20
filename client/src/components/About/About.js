import React from 'react'
import './About.css';

function About() {
    return (
        <div className="about">
            <h1 align="center"><b>One place solution for disabled people</b></h1><br></br>
            <p align="justify">Virtual Medic is an on-demand, digital primary healthcare platform which offers professional diagnostics and health check-up 
                services that can be availed from the comfort of home. Driven by the passion to provide care, impelled with an unwavering 
                focus on quality, it’s endeavour will be to make good health more accessible, reliable and hassle-free to all and proper 
                assistance to visually impaired or disabled person. 
            </p>
            {/* <br></br> */}
            {/* <br></br> */}
            <section className="disabled-person">
                <div> 
                    {/* <img src = "http://www.clipartbest.com/cliparts/LiK/EBd/LiKEBdeia.jpeg" alt= ""></img> */}
                </div>
                <div>
                    {/* <img src = "https://thumbs.dreamstime.com/b/blind-woman-walking-stick-vector-illustration-design-141475271.jpg" alt=""></img> */}
                </div>
                <div>
                    {/* <img src = "https://www.ndspro.com/media/wysiwyg/icon_homeowners.jpg" alt=""></img> */}
                </div>
                <div>
                    {/* <img src= "https://thumbs.dreamstime.com/b/young-caucasian-disabled-woman-sitting-wheelchair-happy-girl-living-disability-equal-opportunities-concept-young-caucasian-168079582.jpg" alt=""></img> */}
                </div>
            </section>

            <section className = "About">
            {/* <h1>
            To Solve the Problem of people who are visually impaired or are physically disabled, we provide you an all-in-one platform for 
            consulting doctors, booking appointments, video calling/chat/chatbot option with hands free i.e voice to chat converter 
            feature where they don’t need to type their text, they can just speak in the microphone and their voice message will be 
            converted to text messages.
            </h1> */}
            </section>
            <section className="Service">
                <div align="center">
                    <img src="https://scallywagandvagabond.com/wp-content/uploads/2019/05/US-Nursing-Shortage2.jpg" alt="" />
                </div>
            </section>
            <br></br>

            {/* <p>The Healthcare industry keeps on changing or advancing all the time to adapt new research findings and assimilate fresh treatments. 
            Yet today’s medical industry is changing like never before in new and major ways, all because of the growth of the internet and 
            predominance of devices like smartphones and tablets. Yet a particular part of our society is destitute of these facilities in spite 
            of having all the resources like internet, smartphones etc, we are discussing about the physically disabled part of our society. 
            The people who are visually impaired or have limbs like hands missing from their body find it challenging to make use of these 
            facilities like consulting doctors and accessing medical supervision online through certain healthcare apps, as there are no 
            method to use them handsfree. So in the conditions like pandemic that we are going all through even becomes stiffer for them as 
            offline doctor visits are full of risks and they are left hanging in such circumstances with no way of medical supervision for such 
            people. </p>   */}
            {/* <br></br> */}

        </div>
    )
}

export default About
