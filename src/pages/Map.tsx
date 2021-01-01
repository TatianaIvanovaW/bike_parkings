import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import OpenNow from "../components/OpenNow";

const BikeMap: React.FC = () => {
  return (
    <IonPage>
      <OpenNow />
      <IonContent fullscreen></IonContent>
    </IonPage>
  );
};

export default BikeMap;
