import { IonToggle, IonItem, IonRouterLink, IonIcon } from "@ionic/react";
import React from "react";
import { mapOutline, list } from "ionicons/icons";
import { useLocation } from "react-router-dom";

const OpenNow: React.FC = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <IonItem>
      <IonToggle />
      {location.pathname === "/map" ? (
        <IonRouterLink href="/list">
          <IonIcon icon={list}></IonIcon>
        </IonRouterLink>
      ) : (
        <IonRouterLink href="/map">
          <IonIcon icon={mapOutline}></IonIcon>
        </IonRouterLink>
      )}
    </IonItem>
  );
};

export default OpenNow;
