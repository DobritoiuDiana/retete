import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";
import Afis1 from "./afis1";
import Afis2 from "./afis2";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      afisez: 0,
      retete: [
        {
          id: 1,
          denumire: "Gogosi pufoase",

          imagine: "gogosi.jpg",
          ingrediente: [
            "200 ml lapte",
            "20 g drojdie proaspata/1 pliculet drojdie uscata",
            "25 ml ulei",
            "1 lingura zahar",
            "1 ou",
            "coaja rasa a unei lamai",
            "coaja rasa a unei portocale",
            "un galbeun praf sare",
            "450 g faina",
          ],
          preparare: `Topeste drojdia si zaharul in laptele cald intr-un recipient incapator.
          Adauga 1/2 din faina, sarea, uleiul, oul si coaja de citrice. 
          Omogenizeaza si completeaza cu restul de faina. Aluatul va ramane usor lipicios. 
          Da-l la crescut presarat cu faina si acoperit cu un prosop de bucatarie curat. 
          Dupa 1-2 ore, cand aluatul si-a dublat volumul, rastoarna-l pe blatul bine infainat si 
          framanta-l cu mainile presarate cu faina, aducand marginile catre interior. 
          Intinde o foaie cu o grosime de 1-2 cm folosind sucitorul, adaugand faina ori de cate ori este nevoie. 
          Taie gogosile cu o forma speciala sau cu un pahar cu gura larga. 
          Asaza gogosile pe platouri presarate cu faina si lasa-le acoperite la crescut. 
          Framanta resturile de coca ramase dupa decupare si intinde o alta foaie, procedand in acelasi mod. 
          Dupa cca 20-30 de minute, cand gogosile au crescut iar, prajeste-le la temperatura mica-medie 
          intr-o cratita cu ulei, cu partea c acoperind cu un capac imediat ce le-ai pus la prajit 
          (e foarte important sa inmagazinezi toata caldura rezultata, pentru a obtine cele mai pufoase gogosi). 
          Intoarce gogosile si nu mai pune capacul. Pentru urmatoarele transe procedeaza la fel. 
          Scurge gogosile pufoase bine de tot de ulei si presara-le cu zahar pudra.`,
        },
        {
          id: 2,
          denumire: "Chec de ciocolata",
          imagine: "checcioco.jpg",
          ingrediente: [
            "150 g ciocolata menaj",
            "3 bucati oua",
            "100 g zahar pudra",
            "60 g faina",
            "1 lingurita praf de copt",
            "80 g unt",
            "50 g faina de migdale",
            "100 g unt pentru uns tava",
            "100 g ciocolata amaruie decor",
            " 1 cana fructe",
          ],
          preparare: `Pentru aluat, se topeste ciocolata rupta bucaţi la bain-marie cu 5 linguri de apa. 
          Într-un vas, se freaca ouale cu zaharul, pâna ce amestecul se albeste. Se adauga faina, 
          praful de copt, untul topit (nu fierbinte!), faina de migdale si ciocolata. 
          Se amesteca bine. O forma de chec se unge cu puţin unt, se toarna aluatul si se coace 35 de minute. 
          Se lasa apoi în tava sa se raceasca, se scoate si se asaza pe un gratar. 
          Se topeste ciocolata de menaj si se acopera complet checul. Se lasa de pe o zi pe alta si se taie 
          cu un cuţit cald. Se serveste cu fructe alaturi.`,
        },
        {
          id: 3,
          denumire: "Negrese cu cocos",
          imagine: "negresa.jpg",
          ingrediente: [
            "150 ml lapte",
            "400 g zahăr",
            "200 g unt",
            "50 g cacao",
            "4 linguri nucă de cocos",
            "1 pachet praf de copt",
            "1/2 cana miez de nucă macinata",
            "4 linguri nucă de cocos",
            " 1 pachet praf de copt",
            "200 g făină",
            "50 g ciocolata, 2 linguri nucă de cocos",
          ],
          preparare: `Într-o crăticioară de 2-3 l se pun la foc mic laptele, zahărul, 
          cacaua cernută şi untul. Cu o lingură de lemn se amestecă până când dă în clocot şi se leagă puţin. 
          Se separă 7-8 linguri şi se păstrează pentru glazură, iar restul se lasă să se răcească. 
          Se adaugă apoi gălbenuşurile, nuca, nuca de cocos, albuşurile bătute spumă şi făina cernută cu 
          praful de copt. Se amestecă uşor şi se toarnă într-o tavă tapetată cu hârtie de copt. 
          Se pune în cuptorul bine încins şi se coace, la foc potrivit, 40-45 de minute. 
          Pentru glazură, se adaugă ciocolata rasă peste crema păstrată şi se amestecă la cald până se 
          topeşte ciocolata. Se toarnă apoi pe blatul copt şi puţin răcit şi se întinde uniform pe toată 
          suprafaţa. Se taie prăjitura când se răceşte şi se ornează cu nucă de cocos.`,
        },
        {
          id: 4,
          denumire: "Papanasi",
          imagine: "papanasi.jpg",
          ingrediente: [
            "250 g branza de vaci",
            "3 linguri faina",
            "1 bucata ou",
            "1 lingurita bicarbonat de sodiu",
            "1 ulei pentru prajit",
            "300 ml smantana",
            "1 ceasca gem dupa gust",
          ],
          preparare: `Oul se bate bine într-un castron. Adaugă peste bicarbonatul stins în prelabil 
          cu o linguriță de oțet. Adaugă brânza de vaci și amestecă bine. 
          Apoi adaugă făina treptat până se încorporează toată, amestecând cu mâna. 
          Din aluatul rezultat modelează un fel de gogoșele cu gaură la mijloc și un număr egal de biluțe 
          din aceeași cocă. Într-o tigaie adâncă și mare care nu lipește, pune ulei la încins. 
          Pune la prăjit atât gogoșelele, cât și biluțele, până se rumenesc frumos pe fiecare parte. 
          Se scot pe un șervet de hârtie să se scurgă, apoi se ornează cu smântână și gem, ca în imagine.`,
        },
        {
          id: 5,
          denumire: "Tiramisu",
          imagine: "tiramisu.jpg",
          ingrediente: [
            "200 ml cafea tare",
            "40 ml coniac",
            "4 ouă",
            "50 g zahăr",
            "500 g mascarpone",
            "150 g pişcoturi",
            "2-3 linguri cacao",
          ],
          preparare: `Se face cafeaua şi se lasă la răcit, apoi se pregătesc celelalte ingrediente. 
          Între timp, se separă gălbenuşurile de albuşuri în două vase și se pune zahărul peste gălbenuşuri. 
          Cu ajutorul unui mixer, reglat la o viteză medie, se amestecă gălbenuşurile cu zahărul. 
          Se mixează gălbenuşurile cu zahărul circa 2 minute, până ce zahărul se dizolvă complet. 
          Mascarpone se freacă până se înmoaie puţin şi se pune peste crema de gălbenuşuri. 
          Cu ajutorul mixerului, se amestecă brânza mascarpone cu crema de gălbenuşuri. 
          Amestecul se mixează 1 minut, până ce se obţine o cremă omogenă, cu aspect lucios. 
          Se mixează albuşurile circa 2 minute, până ce se obţine o spumă care se desprinde de vas. 
          Peste crema de mascarpone şi gălbenuşuri se adaugă albuşurile bătute spumă şi se amestecă. 
          Pişcoturile se înmoaie în siropul de cafea cu coniac şi se aşază într-o tavă, ca în imagine. 
          Peste pişcoturi, se pune 1/2 din crema de mascarpone. Se adaugă încă un strat de pişcoturi. 
          Se întinde restul de cremă, iar deasupra se pre¬sară cacao. Se pune la frigider cel puţin 3 ore. 
          Tiramisu este gata!`,
        },
        {
          id: 6,
          denumire: "Lava-Cake",
          imagine: "lavacake.jpg",
          ingrediente: [
            "170 g ciocolată amăruie 50%",
            "115 g unt",
            "30 g făină",
            "60 g zahăr tos",
            "1 g sare",
            "4 ouă mari",
          ],
          preparare: `Preîncălzește cuptorul la 218°C. 
          Taie ciocolata în bucăți, apoi pune-o peste unt, într-un bol rezistent la căldură. 
          Pune bolul la cuptorul cu microunde și topește amestecul, cu pauze odată la fiecare 10 secunde 
          pentru a-l amesteca. Alternativ, poți realiza amestecul de unt și ciocolată pe baie de abur. 
          Amestecă făina, zahărul și sarea într-un bol. Într-un bol separat, 
          amestecă două ouă cu două gălbenușuri. Toarnă amestecul de făină și amestecul de ouă 
          peste cel de ciocolată. Amestecă atent totul, cu ajutorul unei linguri de lemn. 
          Aluatul ar trebui să fie gros, dar fără cocoloașe. Pregătește aproximativ 5 forme termo-rezistente, 
          pe care le tapetezi cu pudră de cacao. Pune-le pe toate pe o tăviță și toarnă amestecul pregătit 
          mai devreme în forme. Pune tava cu forme în cuptor, timp de 12-15 minute. Când sunt gata, 
          ar trebui să aibă un aspect ferm pe laterale și un aspect moale în partea de sus. 
          După ce scoți tava din cuptor, așteaptă un minut pentru ca prăjiturile să se răcorească puțin. 
          Mai apoi, răstoarnă-le pe fiecare pe câte o farfurie. 
          Opțional, poți să le pudrezi cu puțin zahăr pudră. 
          Desertul se servește când încă este fierbinte, cu înghețată și fructe alături.`,
        },
      ],
    };
    this.afiPrep = this.afiPrep.bind(this);
  }
  afiPrep(ev) {
    const idn = ev.target.value;
    this.setState({ afisez: idn }); //console.log(`ID: ${idn}`);
  }
  render() {
    return (
      <div className="App container">
        <h1 className="text-center mt-5 mb-5">
          <FontAwesomeIcon icon={faBirthdayCake} />
          Retetele de prajituri ale bunicii{" "}
          <FontAwesomeIcon icon={faBirthdayCake} />
        </h1>
        {this.state.afisez == 0 && (
          <Afis1 retete={this.state.retete} afiPrep={this.afiPrep} />
        )}
        {this.state.afisez > 0 && (
          <Afis2
            retete={this.state.retete}
            id={this.state.afisez}
            afiPrep={this.afiPrep}
          />
        )}
      </div>
    );
  }
}
export default App;
