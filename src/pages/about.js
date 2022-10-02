import React from "react"
import Layout from "../components/Layout"
import myPic from "../../static/santa-cruz2.png"

function About({location}) {
    return (
        <Layout location={location}>
            
            <div className="wrapper">
                <img src={myPic} alt="" href={"https://google.com"} className="profilePicture" width="200px"/>
                
                <section className="aboutMe">
                        <h5>About Me</h5>
                        <p>Hi, my name is Alberto Alvarado.</p>
                        <p>Here is a little bit about me</p>
                        <ul>
                            <li>Self taught web developer</li>
                            <li>Attending community college, majoring in Computer Science</li>
                            <li>Worked with mainly html, css, and a bit of javascript.</li>
                            <li>Currently learning about the Javascript framework called Gatsby. This website is made using Gatsby.</li>
                        </ul>
                        <p>Some skills I have include</p>
                        <ul>
                            <li>Github</li>
                            <li>Vim</li>
                        </ul>
                        <p>Vim plugins I can not live without</p>
                        <ul>
                            <li>NERDTree</li>
                            <li>vim-prettier</li>
                            <li>Emmet</li>
                        </ul>
                        <p><a href={"./"}>My personal .vimrc file</a></p>
                </section>
            </div>
        </Layout>
    )
}
export default About
