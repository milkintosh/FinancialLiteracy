import React from 'react';


import homeImg from '../home2.jpg'
import resourceImg from '../resources.jpg';
import webinarsImg from '../webinars.jpg';
import modulesImg from '../Modules.jpg';
import partnersImg from '../partners.jpg';
import budgetImg from '../budget.jpg';
import accountImg from '../account.jpg';
import blogImg from '../blog.jpg';
import liveImg from '../live_stream.jpg';
import bookImg from '../book_club.jpg';
import rewardsImg from '../rewards.jpg';
import Header from './Header';
import Footer from './Footer';

function RenderImage(props) {
      return (<div className="image"><img src={props.url} alt="picture"/>
      </div>);
}

function Header1(props) {
  return (
    <div className="title"><h1>{props.name}</h1></div>
  )
}

function Link(props) {
  return (
    <div className="links"><a href="#url/props.name??">{props.name}</a></div>
  )
}

const home = () => {
    return (
      <div>
        <Header/>
        <RenderImage class = "homeImg" url={homeImg}/>
        <br></br>
        <Header1 name = "Let’s lift our knowledge up-RIGHT"/>
        <p>“An investment in knowledge, pays the best interest” – Benjamin Franklin"</p>
        <br></br>
        <div>
          <table class = "HomeTable">
            <tr class = "modules">
                 <td><img src = {modulesImg} ></img></td>
                  <td><a href = "/modules"><h1>modules</h1><br></br>
                   Our modules page contains a variety of valuable topics including financial 
                  institutions, loans, investing and retirement. Once you find a topic of interest, 
                  just click and access the subject that you would like to explore. We cannot wait 
                  to share the information created in our up-RIGHT lab.</a></td>
                </tr>
                <tr class = "webinars">
                  <td><a href = "/webinars"><h1>webinars</h1><br></br>
                  Don’t let the stress of planning your financial future make your stomach turn. 
                  Engage in our online presentations at your own convenience. Let us show you what, 
                  how, and when to plan for your financial security. Our charismatic presenter will 
                  instill confidence as you move towards your own financial success.
                 </a></td>
                 <td><img src = {webinarsImg} ></img></td>
                </tr>
                <tr class = "budget">
                <td><img src = {budgetImg} ></img></td>
                  <td><a href = "/budget"><h1>your budget</h1><br></br>
                  Our various budgeting tools will accommodate all stages of your life, 
                  lifestyle, and finances. Once you create your budget based on your needs 
                  and wants,  you can upload it and receive tips from our financial team!</a></td>
                </tr>
              <tr class = "resources">
                <td style = {{"width":"50%"}}><a href = "/resources"><h1>resources</h1><br></br>
                Our resource page is filled with many tips and tools to help you chart the 
                course to your financial success. Explore the tools on this page including 
                great reads, websites, assessments and online calculators to help you in your 
                journey. All tools have been tested and used by the up-RIGHT family and will 
                provide insight on many essential financial topics.</a></td>
                <td><img src = {resourceImg} ></img></td>
               </tr>
                <tr class = "partners">
                  <td><img src = {partnersImg} ></img></td>
                  <td><a href = "/partners"><h1>partners</h1><br></br>
                  Our Partner Programs give you an opportunity to learn more about the businesses 
                  that align with our core values and think would benefit you. Just click on their 
                  icon, take a look for yourself and let us know what you think.</a></td>
                </tr>
                <tr class = "live">
                  <td><a href = "/live"><h1>live stream - chat</h1><br></br>
                  Although we can’t be there in person to answer your questions and collaborate on ideas,
                   we want you to be able to have real conversations with us! Our live stream/chat sessions
                    allow for real time streaming where we can see, talk, share, and experience the power 
                    of reaching into our up-RIGHT community.</a></td>
                    <td><img src = {liveImg} ></img></td>
                </tr>
                <tr class = "book">
                  <td><img src = {bookImg} ></img></td>
                  <td><a href = "/book"><h1>book club</h1>
                  Bell Hooks once said, “For some people, what is so painful about reading, is that you 
                  read something, and you don’t have anyone to share it with.” Not only does our book club 
                  offer great reading suggestions, it also includes a book of the month with a question and
                   answer forum. Confused about something? Leave your questions and receive responses so 
                   everyone can see. You can also log on to our live-chat question and answer sessions for 
                   a more in-depth conversation with our up-RIGHT community!</a></td>
                </tr>
                <tr class = "blog">
                  <td><a href = "/blog"><h1>blog</h1><br></br>
                  Up-RIGHT is a finance site created by F. Xavier Glasper that covers many of the
                   relevant topics and skills needed to achieve financial success. Jump in anytime 
                   to see what is trending in our financial literacy space. We welcome your perspective 
                   and appreciate you sharing your experiences with our up-RIGHT community.</a></td>
                   <td><img src = {blogImg} ></img></td>
                </tr>
                <tr class = "rewards">
                  <td><img src = {rewardsImg} ></img></td>
                  <td><a href = "/rewards"><h1>your rewards</h1><br></br>
                  By participating in our programs and utilizing our tools, you will automatically be 
                  enrolled in and earn points within our up-RIGHT rewards program. </a></td>
                </tr>
                <tr class = "account">
                  <td><a href = "/account"><h1>your account</h1><br></br>
                  No need to panic! By creating and updating your profile, you can customize 
                  your experience on our site to meet your needs. When you manage your account, 
                  you can change your profile, settings, update your passwords, and even get 
                  individualized support! Up-RIGHT is about you, for you! </a></td>
                  <td><img src = {accountImg} ></img></td>
                </tr>
          </table>
        </div>
        <Footer/>
      </div>
    );
} 

export default home;