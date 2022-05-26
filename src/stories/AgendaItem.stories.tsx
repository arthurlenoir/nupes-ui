import React from "react";
import { CalendarItem } from "../components/Calendar";
import CalendarEvent from "../components/Calendar/CalendarEvent";
import ThemeProvider from "../components/ThemeProvider";
import { NupesColors } from "../stylesheet";

const eventDescription =
  "<span>🚲 </span>La TRAVERSÉE DE LA CIRCO À VELO nous permettra de parcourir la circonscription d'Ouest en Est et du Nord au Sud à la découverte de son histoire et de ses paysages riches et variés !<br><br>👋 Toutes les personnes qui souhaitent faire la balade en entier ou en partie sont les bienvenues !<br><br>🤝<b>8h45 :</b> RDV place Charles de Gaulle - Castelnau le Lez<br>🏁 <b>9h00 </b>: départ du cortège <br>p<i>assage par Clapiers - Jacou - Teyran - Assas - Guzargues - Saint Drézéry - Beaulieu - Saus…ez - Montpellier</i><br><br>✌️<b>18h00 :</b> arrivée à Montpellier<br><br>L'intégralité du parcours est réalisable par des cyclistes aguerri·es (aller : 47km, 500m de dénivelé / retour : 33km, 200m dénivelé) mais il est possible de ne faire que l'aller, que le retour ou que le pique nique en faisant un bout de trajet en train. <br><br>🚂La Gare de Lunel est à 6mn du lieu de pique nique<br><i>départs de Mtp St Roch vers Lunel à 10h08 ou 12h07<br>départs de Lunel vers Montpellier à 14:31, 16:31 ou 17:38</i>";

const item: CalendarItem = {
  description: eventDescription,
  summary: "Tour de la circo à vélo",
  location: "",
  end: { dateTime: "2022-05-29T18:00:00+02:00", timeZone: "Europe/Paris" },
  start: { dateTime: "2022-05-29T08:00:00+02:00", timeZone: "Europe/Paris" },
  status: "",
};
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components",
  component: CalendarEvent,
};

export const AgendaStories = () => (
  <ThemeProvider primary={NupesColors.GREEN} secondary={NupesColors.PURPLE}>
    <h1>Calendar Event</h1>
    <CalendarEvent event={item} />
  </ThemeProvider>
);
