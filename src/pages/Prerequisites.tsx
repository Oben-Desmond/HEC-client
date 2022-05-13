import { IonBreadcrumb, IonCardContent, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonPage, IonRow, IonToolbar } from '@ionic/react'
import React from 'react'
import Header from '../components/Header'

const Prerequisites: React.FC = () => {
  return (
    <IonPage>
      <Header></Header>
      <IonContent>

        <IonGrid>
          <IonRow>
            <IonCol></IonCol>
            <IonCol size="12" sizeMd='8'>

              <h2>Registration Prerequisites</h2>
              <Data></Data>
              <div style={{ height: '20px' }}></div>
              <IonItem routerLink='/register' color="none" lines='none' className='text-center ion-margin'>
                <button className="btn btn-warning">
                  Register Now
                </button>
              </IonItem>
            </IonCol>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Prerequisites



var Data = function () {
  const date = new Date()
  date.setFullYear(2022, 3, 23)
  console.log()
  return (
    <div>
      <IonLabel color="warning">
        <h1>{Math.floor((date.getTime() - Date.now()) / (1000 * 60 * 60 * 24))} Days Left</h1>
      </IonLabel>
      <br />
      <br />
       <p style={{}}>
        <div style={{ fontSize: '14pt' }} ><b>Challenge Scope</b></div></p>

      <p style={{}}><div style={{ fontSize: '12pt' }} >The
        goal of the Hustler engineering community is to harness and showcase
        engineering talent. We know there are a lot of engineers within the
        community who are looking for ways to be inspired and seen and we are
        creating a means by which this is can be done. The <b>Design Competition
        </b><span style={{ fontWeight: 'normal' }}>is all about showcasing
          Graphic designers in the community and beyond. People who are able to
          convert an idea or concept to colors and themes that can be better
          communicated to an audience or customers. Graphic designers are very
          important in our community especially in the marketing and sales
          department of many startups and businesses. We are
          creating an opportunity for Graphic designers in the silicon mountain
          to showcase their talents in a positively competitive and inspiring
          way.</span></div></p>
      <p style={{}}><br />
      </p>

      <p style={{}}><div style={{ fontSize: '14pt' }} ><b>Eligibility</b></div></p>

      <p style={{ fontWeight: 'normal', }}>
        <div style={{ fontSize: '12pt' }} >The competition is open for
          anyone who is capable of designing and has a creative mind enough to
          convert a problem statement or idea into design which is easily
          understood by an audience.</div></p>
      <p style={{ fontWeight: 'normal', }}>
        <br />
      </p>
      <p style={{ fontWeight: 'normal', }}>
        <div style={{ fontSize: '12pt' }} >This is a singles competition
          and so only one person will compete as a participant ( no teams ).</div></p>
      <p style={{ fontWeight: 'normal', }}>
        <br />
      </p>
      <p style={{ fontWeight: 'normal', }}>
        <br />
      </p>
      <p style={{}}><div style={{ fontSize: '14pt' }} ><b>Rewards</b></div></p>

      <ul>
        <li><p style={{ marginBottom: '0in' }}>Certificates of participation from
          Hustler engineering Community and partners to all winning
          participants in the top 10.</p>
        </li><li><p style={{ marginBottom: '0in' }}>Exposure to major companies in the
          silicon mountain providing graphic design opportunities.</p>
        </li><li><p>Cash Prize awards</p>
        </li></ul>
      <p style={{ fontWeight: 'normal', }}>
        <br />
      </p>
      <p style={{ fontWeight: 'normal', }}>
        <br />
      </p>
      <p style={{}}><div style={{ fontSize: '14pt' }} ><b>How
        to register</b></div></p>
      <p style={{}}>
      </p>
      <p style={{}}><div style={{ fontSize: '12pt' }} ><span style={{ fontWeight: 'normal' }}>In
        order to register, head over to <a href="http://hustlerengineer.web.app/register"> hustlerengineer.web.app/register </a>
        and fill in the information about yourself and pay a registration fee
        of <b>2000FCFA.
        </b>  </span></div><div style={{ fontSize: '12pt' }} ><span style={{ fontWeight: 'normal' }}>Once
          that is done your name will appear in the list of  participants on a
          page on which you will be redirected to. This will confirm </span></div><div style={{ fontSize: '12pt' }} ><span style={{ fontWeight: 'normal' }}>your
            registration.</span></div></p>
      <p style={{}}><br />
      </p>
      <p style={{}}><br />
      </p>
      <p style={{}}><div style={{ fontSize: '14pt' }} ><b>What
        will be tested</b></div></p>
      <ul>
        <li><p style={{ fontWeight: 'normal', }}>
          <div style={{ fontSize: '12pt' }} ><b>Creativity: </b>Your
            ability to use any graphic designing tool of your choice to convert
            a problem statement/idea to a design that can be easily understood</div></p>
        </li><li><p style={{ fontWeight: 'normal', }}>
          <div style={{ fontSize: '12pt' }} ><b>Appeal : </b>Your ability
            to wow the audience with your design </div>
        </p>
        </li><li><p style={{}}><div style={{ fontSize: '12pt' }} ><b>Problem
          solving: </b><span style={{ fontWeight: 'normal' }}>Your ability to take
            an objective and create a design that effectively meets that
            objective</span></div></p>
        </li><li><p style={{}}><div style={{ fontSize: '12pt' }} ><b>Timeliness
          : </b><span style={{ fontWeight: 'normal' }}>Your ability to work under
            time pressure. Creating a beautiful design in a limited amount of
            time</span></div></p>
        </li><li><p style={{}}><div style={{ fontSize: '12pt' }} ><b>Design
          Characteristics</b><span style={{ fontWeight: 'normal' }}>: Fonts, Font
            size, Color choice and combination, animations etc</span></div></p>
        </li></ul>
      <p style={{ fontWeight: 'normal', }}>
        <br />
      </p>
      <p style={{ fontWeight: 'normal', }}>
      </p>
      <p style={{}}><div style={{ fontSize: '14pt' }} ><b>Tools</b></div></p>
      <p style={{ fontWeight: 'normal', }}>
        <div style={{ fontSize: '12pt' }} >You are allowed to use any
          tool of your choice </div>
        NB: Bring along your laptops and anyother tool ( softwares included) you will need in competing
      </p>
      <p style={{ fontWeight: 'normal', }}>
        <br />
      </p>
      <p style={{}}><br />
      </p>
      <p style={{}}><div style={{ fontSize: '12pt' }} ><b>Timeline</b></div></p>
      <ul>
        <li><p style={{}}><div style={{ fontSize: '12pt' }} ><span style={{ fontWeight: 'normal' }}>Closing
          of Registration 1:00am 23  of April </span></div>
        </p>
        </li><li><p style={{}}><div style={{ fontSize: '12pt' }} ><span style={{ fontWeight: 'normal' }}>Competition
          battle 9:00am Saturday 23 of
          April</span></div></p>
        </li><li><p style={{}}><div style={{ fontSize: '12pt' }} ><span style={{ fontWeight: 'normal' }}>Declaration
          of winners Saturday 23 of
          April</span></div></p>
        </li></ul>
      <p style={{}}><br />
      </p>
      <p style={{}}><br />
      </p>
      <p style={{}}><div style={{ fontSize: '12pt' }} ><b>Location</b></div></p>
      <p style={{ fontWeight: 'normal', }}>
        <div style={{ fontSize: '12pt' }} >Location will be at Jongohub
          at bongosquare Buea</div></p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7958.6789457565865!2d9.245596994114573!3d4.153487690806878!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa1cb2a3f1dbb164f!2sJongo%20Hub!5e0!3m2!1sen!2scm!4v1649583764813!5m2!1sen!2scm" style={{ maxWidth: "100%", width: 600, height: 450 }} loading="lazy" ></iframe>

      <p style={{ fontWeight: 'normal', }}>
        <br />
      </p>
      <p style={{}}><div style={{ fontSize: '12pt' }} ><b>Time
        and Date</b></div></p>
      <p style={{}}><div style={{ fontSize: '12pt' }} ><span style={{ fontWeight: 'normal' }}>9:00am
        Saturday 23</span><sup></sup><span style={{ fontWeight: 'normal' }}>
        </span><sup><span style={{ fontWeight: 'normal' }}></span></sup><span style={{ fontWeight: 'normal' }}>of
          April</span></div></p>
      <p style={{}}><br />
      </p>
      <p style={{}}><br />
      </p>
      <p style={{}}><div style={{ fontSize: '12pt' }} ><b>Disqualification</b></div></p>
      <p style={{}}><div style={{ fontSize: '12pt' }} >
        We will not condone with cheating or inappropriate behavior of any form such as
        <ul>
          <li>using premade templates</li>
          <li>Competiting for someone or letting someone compete for you</li>
          <li>copying a design from a fellow competitor</li>
          <li>Violence of any form</li>
          <li>disrespect of the social values of others</li>
          <li>use of illegal substances during the competition</li>
          <li>Continue to compete after the time provided has ellapsed</li>
        </ul>
        <p>
          NB: You are allowed to use your design tools to compete within the time provided. you can use the internet to get inspiration and resources like pictures (not a video), but you are not allowed to copy a design from the internet.
        </p>
        <p>Going against the rules and any other competitively ethical principles will warrant you to be disqualified and striped off of all benefits</p>
      </div></p>
      <p style={{}}><br />
      </p>
      <p style={{}}><br />
      </p>
      <p style={{}}> <div style={{ fontSize: '12pt' }} ><span style={{ fontWeight: 'normal' }}>For
        more information you can call or message us using the number </span><b>+237
          6 50 58 98 93</b></div></p>
      <div className="ion-margin  card">
        <IonCardContent>
          <p style={{}}> <div style={{ fontSize: '12pt' }} >
            This an <b>opportunity</b> to showcase your talent infront of <b>thousands</b> of people and company representatives. Meeting other graphic Designers from around the silicon Mountain and competing in a very fun and educative way. An opportunity, you don't get to have very often.
          </div>
            <h2>{ }</h2></p>
        </IonCardContent>

      </div>
    </div>
  );
}
