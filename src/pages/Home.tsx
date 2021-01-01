import { IonContent, IonPage, IonButton, IonRouterLink } from "@ionic/react";
import React from "react";

import Header from "../components/Header";

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonRouterLink href="/list">
          <IonButton>Continue</IonButton>
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Home;
