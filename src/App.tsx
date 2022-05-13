import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
 

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Home from './pages/Home';
import Prerequisites from './pages/Prerequisites';
import Register from './pages/Register';
import RegisteredParticipants from './pages/RegisteredParticipants';
import Payment from './pages/Payment';
import DesignPage from './pages/DesignPage';
import ContentLogin from './pages/ContentLogin';
import { ContentTopics } from './pages/ContentTopics';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          {/* <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route> */}
          <Route exact path="/prerequisites">
            <Prerequisites></Prerequisites>
          </Route> 
          <Route exact path="/compete">
            <Prerequisites></Prerequisites>
          </Route> 
           <Route exact path="/register">
             <Register></Register>
          </Route>
          <Route exact path="/participants">
             <RegisteredParticipants></RegisteredParticipants>
          </Route>
          <Route exact path="/payment">
             <Payment></Payment>
          </Route> 
          <Route exact path="/design-problem">
             <DesignPage></DesignPage>
          </Route>
          <Route exact path="/content/login">
            <ContentLogin></ContentLogin>
          </Route>
        <Route exact path="/content/topics">
            <ContentTopics></ContentTopics>
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
