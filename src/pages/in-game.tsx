/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import ParallaxEffect from '@/components/Parallax';

export default function About() {
  const { parallaxStyle } = ParallaxEffect();
  return (
    <div>
      <Head>
        <title>About | Life Beyond</title>
      </Head>
      {/* BACKGROUND IMAGE */}
      <div className="background bg02" style={parallaxStyle}></div>

      {/* CONTENT */}
      <main>
        <h1>In-Game</h1>
        <p>
          Peli sijoittuu Jaakko Rinteen suunnittelemaan ja kirjoittamaan Birds
          of Avalon-scifimaailmaan.
        </p>
        <p>
          Avalonin asukkaat ovat haltioita, ihmismäisiä mutta teräväkorvaisia
          olentoja, jotka ovat asuttaneet avaruutta kymmeniätuhansia vuosia,
          valloittaneet satoja planeettoja ja rakentaneet sivilisaationsa
          massiivisten superyhtiöiden, räikeän kapitalismin ja
          tähtijärjestelmien välisen monenkirjavan kulttuurikirjon varaan.
          Haltioiden kansoittamassa avaruudessa voit olla mitä vain, mikäli
          taitosi vain riittävät - ja mikäli sinulla on tarpeeksi rahaa,
          mainetta ja suhteita oikeisiin haltioihin. Jos taas synnyt onnettomien
          tähtien alla, voit joutua viettämään koko elämäsi raskaassa ja
          vaarallisessa työssä, loputtomia velkoja maksamalla, elinkelvottomalle
          planeetalle hylättynä tai mielivaltaisia poliisivoimia pakenemalla.
          Avaruutta hallinnoivia hyperkorporaatioita hallitsee virallisesti
          Keisarillinen Valtapiiri (tai "Haltioiden Toisen Taivaan
          Tähtienvälinen Keisarillinen Valtapiiri"). Tämä valta kuitenkin jää
          usein vain nimelliseksi. Keisarillinen tuomioistuin kuitenkin päättää
          yhteiset lait ja jokainen, joka lakeja rikkoo, voi saada palkkasoturit
          tai jopa kokonaiset armeijat peräänsä.
        </p>
        <p>
          Haltioita muistuttavat androidit ja itsetietoiset tekoälyt ovat
          keisarillisella lailla kiellettyjä. Reilu sata vuotta sitten eräs
          entinen hyperkorporaatio, Galatea Technologies, jäi kiinni vakavista
          rikkeistä liittyen tekoälyjen kehittämistä rajoittavaan lakiin.
          Galatea tuhottiin massiivisessa sodassa, mutta moni tekoäly pakeni
          massamurhaa. Yhä edelleen näitä koneellisesti tuotettuja haltioita
          asuu ympäri tunnettua avaruutta, haltiaa esittäen ja väkivallan uhkaa
          peläten.
        </p>
        <p>
          Tekoälyjen oikeudet ovat jatkuvasti politiikan keskiössä ja
          kansalaisten puheenaiheina. Jotkut haluavat tuhota jokaisen Galatean
          ajalta jääneen tekoälyn, huolimatta sen tehokkuudesta tai
          vaarallisuudesta. Toiset taas aktiivisesti puolustavat tietoisten
          tekoälyjen oikeutta elämään, vaarantaen oman maineensa tai jopa
          henkensä suojellakseen laittomia androideja poliisilta ja armeijalta.
          Tekoälyillä itsellään ei juurikaan ole sanottavaa tässä keskustelussa,
          ja tulevaisuus on monelle suuri kysymysmerkki.
        </p>
        <h2>BLUSH festivaali ja Club Nebulove</h2>
        <p>
          Peli sijoittuu Club Nebuloveen, joka on pieni underground-queer -baari
          entisellä Galatealaisella planeetalla. Baari taistelee jatkuvasti
          oikeudestaan olla olemassa, ja tarjoaa turvapaikan monien
          vainottujenkin vähemmistöjen jäsenille.
        </p>
        <p>
          BLUSH on vuosittainen juhla, joka juhlii oikeutta elämään, oikeutta
          rakkauteen ja oikeutta omaan identiteettiin. Se on juhla haltijoille,
          mutta erityisesti tietoisille tekoälyille, jotka ovat jo vuosikymmeniä
          joutuneet piilottamaan oman olemassaolonsa. Haltioiden asuttamassa
          avaruudessa, suuressa Avalonin keisarikunnassa, nähdään intiimiys,
          taide ja ihmissuhteet usein turhana, tuottamattomana typeryytenä.
          Mutta intiimiyttäkin suurempi tabu ovat tietoiset tekoälyt.
        </p>
        <p>
          BLUSH on protesti, mutta se on myös juhla, festivaali ja yhteisö, joka
          uskoo parempaan huomiseen. Festivaalin tunnusomainen piirre on
          voimakas meikkaaminen, ja erityisesti poskipunan suurieleinen
          liioittelu. Tämän kerrotaan lähteneen protestina siihen, kun poliisit
          sodan jälkeen alkoivat tarkkailemaan, kenen posket punoittavat
          luonnostaan ja vangitsemaan niitä, joiden meikki vaikutti peittävän
          kasvojen muotoja liian paljon.
        </p>
        <h2>Sukupuoli ja seksuaalisuus Avalonissa</h2>
        <p>
          Fyysinen läheisyys, rakkaus ja intiimit suhteet nähdään Avalonin
          kulttuurissa ajanhukkana, sillä ne eivät tuota pääomaa. Avioliittojen
          kaltaiset suhteet ovat monesti enemmän bisnesjärjestelyjä joissa
          tärkeää on, että yksilön suhteet eivät vaikuta osapuolten
          henkilöbrändiin negatiivisesti. Erityisen vahvana tämä normi on
          aatelisten ja menestyneiden yrittäjien keskuudessa.
        </p>
        <p>
          Sukupuolen moninaisuus on monin paikoin normaalia ja hyväksyttyä,
          mutta moni kohtaa silti vaikeuksia tulla kohdelluksi omana itsenään
          tai haluamillaan sanoilla. Eri väestöluokilla on hyvin erilaiset
          mahdollisuudet päästä vaikkapa sukupuolenkorjaus-hoitoihin, sillä
          mitään yleistä tai ilmaista terveydenhuoltoa ei ole. Paikallisen
          queer-yhteisön jäsenet pitävät kuitenkin toistensa puolia parhaansa
          mukaan eivätkä salakuljetetut lääkkeet tai pimeänä tehdyt hoidot ole
          lainkaan ennenkuulumattomia. Seksuaalisuuden kirjo on paremmin
          hyväksytty, kuin meidän maailmassamme, mutta hallitsevan luokan
          asenteissa ollaan yleisesti kriittisempiä sellaisia intiimejä suhteita
          kohtaan, jotka eivät pyri lisääntymiseen tai muuhun hyötyyn.
        </p>
        <p>
          Tekoälyjen sukupuoli, seksuaalisuus ja romanttisuus on asia, jota
          tekoäly-yhteisö vielä pohtii. Mielipiteet asiasta vaihtelevat paljon
          ja muuttuvat aktiivisesti, kun yhteisö hakee sanoja kokemuksilleen.
          Tekoälyt ovat erittäin kiellettyjä: niiden olemassaoloa sensuroidaan
          sekä kriminalisoidaan jatkuvasti rankemmin, ja siksi jopa monelle
          muuten queer-tietoiselle haltialle niiden käyttämät termit ovat täysin
          vieraita.
        </p>
        <p className="font-bold">Haltioiden trinäärinen sukupuolikäsitys</p>
        <p>
          Avalonin haltioiden sukupuolikäsitys on lukuisien kulttuurien takia
          hyvin moninainen, mutta perinteisin sukupuolikäsitys, joka on yhä
          valloillaan aateliston ja vanhimpien sukujen piireissä, on
          trinäärinen. Trinäärisessä järjestelmässä on kolme sukupuolta, jotka
          liitetään erityisesti yksilön rooliin yhteiskunnassa. Tässä larpissa
          sukupuolista käytetyt sanat ja niiden haltiakieliset vastineet ovat
          nainen (quenna), mies (arawn) ja 3. sukupuoli/muunsukupuolinen
          (élhme). Vaikkei “muunsukupuolinen” sanana ei varsinaisesti tarkoita
          kolmatta sukupuolta, käytämme sitä tässä yhteydessä synonyyminä
          kolmannelle sukupuolelle. Trinäärin ulkopuolisista haltioista puhutaan
          sukupuolettomina.
        </p>
        <p>
          Sukupuoli määritellään perinteisesti noin kymmenen vuoden iässä
          juhlassa tai riitissä, jossa lapsi valitsee itselleen yhden kolmesta
          sukupuolesta. Käytännössä valinta on kuitenkin usein ennalta määrätty;
          lapsia kasvatetaan usein hyvin tavoitteellisesti tiettyihin
          sukupuoliin ja lapsi voi saada osakseen vahvaakin paheksuntaa, jos
          “valitsee väärin”. Sukupuolen vaihtaminen riitin jälkeen on myös
          paheksuttavaa ja usein laillisesti mahdotonta, vaikka valinta olisi
          tapahtunut painostuksesta. Transsukupuolisuudella viitataan tässä
          pelissä siihen, että haltia ei koe kuuluvansa siihen sukupuoleen, joka
          hänelle on valittu.
        </p>
        <p>
          Perinteiset sukupuoliroolit nähdään Avalonissakin jokseenkin
          tunkkaisina, mutta niiden vaikutus kultuurillisissa asenteissa on
          silti voimakas. Seuraavat kuvaukset ovat esimerkkejä perinteisistä
          sukupuoliin liitetyistä mielikuvista:
        </p>
        <p>
          Quenna [kwɛnːɑ]: Quennojen ajatellaan olevan luontaisia johtajia,
          poliitikkoja ja strategeja. Heitä pidetään ylväänä ja jalona
          sukupuolena. Jotkut yhteiskunnat pitävät vain quennoja kykenevinä
          johtamaan ja usein esimerkiksi aatelislinjat periytyvät quennojen
          kautta. Quennoihin liitettään usein turkoosi, jota pidetään myös
          keisarillisena värinä. Musiikki on perinteisesti quennoille sopiva
          taiteen muoto. Tässä pelissä quennoista käytetään myös sanaa nainen.
        </p>
        <p>
          Arawn [ɑrɑwn]: Arawneja pidetään luontaisina sotilaina ja työläisinä.
          Arawnit mielletään myös tunteellisemmiksi ja kuumaverisemmiksi, kuin
          muut sukupuolet. Rohkeus, päättäväisyys ja herkkyys ovat
          stereotyyppisiä arawn-piirteitä. Negatiivisia stereotypioita on
          arawnien epäluotettavuus päätöksneteossa: heitä pidetään liian
          ailahtelevina ja tunteellisina sellaiseen vastuuseen. Arawnien väri on
          oranssi ja heille mielletään sopivaksi kaikenlainen esittävä taide.
          Tässä pelissä arawneista käytetään myös sanaa mies.
        </p>
        <p>
          Élhme [ɛːɫmɛ]: Élhmet ovat perinteisesti haltiayhteiskunnan hoito- ja
          hoivahenkilöitä, avustajia ja neuvonantajia. Élhmejä pidettiin
          muinaisessa haltiakulttuurissa uusien innovaatioiden keksijöinä,
          unelmoitsijoina ja profeettoina, mutta myös liian eksentrisinä ja
          idealistisina todelliseen päätöksentekoon. Siksi élhmet olivat pitkään
          yhteiskunnan mielestä sopimattomina sotaan tai politiikkaan ja heidän
          osakseen jäi avustajien, hoivaajien, kasvattajien ja muun näkymättömän
          työn tekijöiden roolit. Élhmejen värinä pidetään violettia ja
          erityisesti visuaalinen kulttuuri ja käsityöt mielletään élhmejen
          taidemuodoiksi. Tässä pelissä élhmeihin viitataan myös 3. sukupuolena
          tai muunsukupuolisina.
        </p>
      </main>
    </div>
  );
}
