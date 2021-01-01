import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import OpenNow from "../components/OpenNow";

const List: React.FC = () => {
  return (
    <IonPage>
      <OpenNow />
      <IonContent fullscreen>List!!</IonContent>
    </IonPage>
  );
};

export default List;
