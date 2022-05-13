import { IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { callOutline, logoWhatsapp, mailOpen } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import Header from '../components/Header';
import { local_images } from '../components/images/images';
import './Home.css';

const Tab1: React.FC = () => {

  return (
    <IonPage>
      <Header></Header>
      <IonContent fullscreen>
        <img  id="about" style={{ width: '100%' }} src={local_images.grouppic}></img>
        <IonGrid>
          <IonRow>
            <IonCol></IonCol>
            <IonCol size='12' sizeSm='11' sizeMd='10'  >
              <div className="ion-padding text-center">
                <IonCardTitle>  We are community of Passionate engineers not afraid to showcase our talent and develope solutions to Problems faced in our communities</IonCardTitle>
              </div>
              <div style={{ height: '50px' }}></div>
              <div className="ion-padding">
                <h2 >About</h2>
                <p>
                  The Hustler engineering community contains individuals from all other tech communities coming together to showcase their skills and create innovative products to boosts the economy.
                  The community is creating a competitive environment where engineers can learn from each other in a fun way.
                </p>
                <div style={{ height: '50px' }}></div>
                <div className="ion-padding">
                  <h3>Activities</h3>
                  <IonRow style={{ padding: 0, margin: 0 }}>
                    {activity.map((avty, index) => {
                      return (
                        <IonCol style={{ padding: 0, margin: 0 }} key={index} size='12' sizeMd='6' sizeLg='4'>
                          <IonCard style={{ minHeight: '90%' }} className='card' mode='ios'>
                            <IonImg src={avty.image}></IonImg>
                            <IonCardContent mode='md'>
                              <IonCardTitle>
                                {avty.title}
                              </IonCardTitle>
                              <IonCardSubtitle>
                                {avty.desc}
                              </IonCardSubtitle>
                            </IonCardContent>
                          </IonCard>
                        </IonCol>
                      )
                    })
                    }

                  </IonRow>
                </div>
                <div id='events' style={{ height: '50px' }}></div>
                <h3 >Events</h3>
                <h4>The Hustler Engineering Student event</h4>
                <p>
                  The hustler engineering student event was a life changing super insigthful event with over 8 engineering speakers from major and diverse Tech fields speaking to over 200 students.
                  It was all about sharing experiences and strategies on how Engineering students could balance having good grades, yet gain valuable skills and earning money while in school.
                  Proudly Sponsored by companies such as <a href="http://jongohub.net">Jongohub</a>, TT&T, <a href="http://quesers.org">Quesers</a> and Chillax. it was a major success.

                </p>
                <div style={{height:"20px"}}></div>
                <h5>Speakers of the HES Event</h5>
                <IonRow style={{ padding: 0, margin: 0 }}>
                  {speakers.map((speaker, index) => {
                    return (
                      <IonCol style={{ padding: 0, margin: 0 }} key={index} size='12' sizeMd='6' sizeLg='4'>
                        <IonCard style={{ minHeight: '90%' }} className='card' mode='ios'>
                          <IonImg src={speaker.image}></IonImg>
                          <IonCardContent mode='md'>
                            <IonCardTitle>
                              {speaker.name}
                            </IonCardTitle>
                            <IonCardSubtitle>
                              {speaker.topic}
                            </IonCardSubtitle>
                          </IonCardContent>
                        </IonCard>
                      </IonCol>
                    )
                  })
                  }

                </IonRow>
                <div style={{ height: '50px' }}></div>
                <div className="ion-margin-vertical">
                  <IonRow>
                    <IonCol size='12' sizeMd='6' sizeLg='4'>
                      <IonImg src={local_images.random1}>
                      </IonImg>
                    </IonCol>
                    <IonCol size='12' sizeMd='6' sizeLg='4'>
                      <IonImg src={local_images.random2}>
                      </IonImg>
                    </IonCol>
                    <IonCol size='12' sizeMd='6' sizeLg='4'>
                      <IonImg src={local_images.audience}>
                      </IonImg>
                    </IonCol>
                  </IonRow>
                </div>
                <div style={{ height: '100px' }}></div>
                <div className="ion-padding">
                  {/* <video src=""></video> */}
                </div>
                <h2>Bootcamps</h2>
                <IonCardTitle>Hustler Engineering Digital Skills Bootcamp</IonCardTitle>
                <div className="ion-padding">
                  <img style={{ height: '50vh' }} src={local_images.bootcamp}></img>
                </div>
                <p>
                  The Digital skills bootcamp was a training bootcamp that lasted for a month during which engineers where taught how to develope and design applications.
                  The various technologies learnt where focused on mobile app development, web development, graphic designing, UI/UX development
                </p>
                <div id='upcoming' style={{ height: '100px' }}></div>
                <h3>Upcoming Events (1)</h3>
                <IonRow>
                  <IonCol size={'12'} sizeMd='6'>
                    <div className="card">
                      <img style={{ width: '100%' }} src={local_images.design}></img>
                      <IonCardContent>
                        <p className="ion-padding-vertical">
                          <h3>  Show casing the best designers in the community to compete for the winning Price</h3>
                        </p>
                        <IonButton routerLink='/prerequisites' color='dark' mode='ios'>Learn More</IonButton>
                      </IonCardContent>
                    </div>
                  </IonCol>
                </IonRow>
                <div id="team" style={{ height: '100px' }}></div>
                <h2>Team</h2>
                <IonRow>
                     {
                        team.map((member,index)=>{
                          return(
                            <IonCol  size="12" sizeSm='6'  >
                            <div className="card container  text-center ion-padding">
                              <IonAvatar style={{margin:'30px auto'}} className="team-avatar">
                                <IonImg src={member.image}></IonImg>
                              </IonAvatar>
                              <br />
                              <IonCardTitle>
                                {member.name}
                              </IonCardTitle>
                               {member.subtitle}
                            </div>
                          </IonCol>
                          )
                        })
                     }
                </IonRow>
              </div>
              <div style={{height:"50px"}}></div>
              <h3>Partners</h3>
              <IonRow>
                <IonCol size="4" sizeLg='3'>
                  <a target="_blank" href="https://jongohub.net"><IonImg  style={{height:"80px"}} src={"https://jongohub.net/wp-content/uploads/2021/08/jungo-2-300x138.jpg"}></IonImg></a>
                </IonCol>
                <IonCol size="4" sizeLg='3'>
                <a target="_blank" href="https://quesers.org"> <IonImg style={{height:"80px"}} src={"https://www.quesers.org/assets/img/logo.png"}></IonImg></a>
                </IonCol>
                <IonCol size="4" sizeLg='3'>
                <a target="_blank" href="https://findieub.web.app"> <IonImg style={{height:"80px"}} src={"https://findieub.web.app/img/logo.png"}></IonImg></a>
                </IonCol>
                <IonCol size="4" sizeLg='3'>
                <a target="_blank" href="https://www.instagram.com/chillaxpicnics6/"> <IonImg style={{height:"80px"}} src={local_images.chillax}></IonImg></a>
                </IonCol>
              </IonRow>
              <div style={{height:"50px"}}></div>

            </IonCol>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>
        <IonFooter>
          <IonToolbar color='dark'>
            <IonGrid>
              <IonRow>
                <IonCol size="11" sizeMd='4'>
                  <IonCardContent>
                    <h3>Contact Us</h3>
                    <IonItem color='none'>
                      <IonIcon slot='start' icon={mailOpen}></IonIcon>
                      <IonLabel>Engineeerhustler@gmail.com</IonLabel>
                    </IonItem>
                    <IonItem color='none'>
                      <IonIcon slot='start' icon={logoWhatsapp}></IonIcon>
                      <IonLabel>+237 678320028</IonLabel>
                    </IonItem>
                  </IonCardContent>
                </IonCol>
                <IonCol size="11" sizeMd='4'>

                </IonCol>
                <IonCol size="11" sizeMd='4'>
                  <IonImg style={{ width: "100px" }} src={local_images.logo}></IonImg>
                </IonCol>

              </IonRow>
            </IonGrid>
          </IonToolbar>
        </IonFooter>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
const activity = [
  {
    image: 'https://images.pexels.com/photos/1181370/pexels-photo-1181370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Bootcamps',
    desc: 'We organize bootcamps to train students on technical skills'
  },
  {
    image: 'https://baycodingclub.com/wp-content/uploads/2020/10/cup-podium-trophy-1615074.jpg',
    title: "Competitions",
    desc: 'Inorder to boost competitiveness we organize competitions, and to also inspire others to work harder'
  }
  ,
  {
    image: local_images.audience,
    title: "Educational Events",
    desc: 'Inorder to give back to community People share their expertise and experience in Seminars and Events we organize'
  }
]

const speakers = [
  {
    name: 'Mr Gwei Michael',
    topic: 'Leveraging the Power of Mentorship and Network',
    image: local_images.gwei
  },
  {
    name: 'Mr Terence Agbor',
    topic: 'Ways to make money in School',
    image: local_images.terence
  },
  {
    name: 'Miss Ebai Jeniline',
    topic: 'How to effectively Aquire skills',
    image: local_images.ebai
  },
  {
    name: 'Mr Robbert Yunika',
    topic: 'Being a career oriented student',
    image: local_images.robbert
  },
  {
    name: 'Mr Akwo Ashangdowa',
    topic: 'Saving the money you make',
    image: local_images.akwo
  },
  {
    name: 'Mr Ngoe Kelson',
    topic: 'Study Effectively',
    image: local_images.kelson
  },
  {
    name: 'Mr Atemkeng Beltus',
    topic: 'Becoming a better student',
    image: local_images.beltus
  },
  {
    name: 'Oben Desmond',
    topic: 'Host',
    image: local_images.desmond
  }
]




const team=[
  {
    name:"Oben Desmond",
    image:local_images.desmond2,
    subtitle: <IonCardSubtitle>
    CEO of <a href="http://Quesers.org">Quesers.org</a>
  </IonCardSubtitle>
  },
  {
    name:"Agbor Terence",
    image:local_images.terence,
    subtitle: <IonCardSubtitle>
    CEO of TT&T 
  </IonCardSubtitle>
  },
  {
    name:"Tiku Gaelle",
    image:local_images.gaelle,
    subtitle: <IonCardSubtitle>
     WTM co-ambassador
  </IonCardSubtitle>
  },
  {
    name:"Deon Achuo",
    image:local_images.deon,
    subtitle: <IonCardSubtitle>
     Software Engineer at Canza
  </IonCardSubtitle>
  }
]