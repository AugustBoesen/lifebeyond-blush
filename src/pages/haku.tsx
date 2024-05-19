/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import ParallaxEffect from '@/components/Parallax';

export default function Index() {
  const { parallaxStyle } = ParallaxEffect();
  return (
    <div>
      <Head>
        <title>Home | Life Beyond</title>
      </Head>
      {/* BACKGROUND IMAGE */}
      <div className="background bg04" style={parallaxStyle}></div>

      {/* CONTENT */}
      <main>
        <h1>Pelaajaksi</h1>
        <p>
          Pelaajaksi haetaan täyttämällä ilmoittautumislomake. Huomaathan, että
          pelin ikäraja on 17 vuotta. Alle 18 vuotiaiden osallistuminen
          harkitaan tapauskohtaisesti.{' '}
        </p>
        <p>
          <b>
            Pelaajahaku sulkeutuu perjantaina 14.6 klo 23:59. Pelaaja- ja
            esiintyjävalinnat pyritään tekemään kesäkuun aikana. Peliin pääsystä
            ilmoitetaan kaikille henkilökohtaisesti. Ilmoitamme myös, jos et
            pääse peliin.
          </b>
        </p>
        <p>
          {' '}
          <b>Pelin ilmoittautuminen sulkeutuu 30.5 klo 23:59</b>
        </p>
        <h2>Pelaajien valinta</h2>
        <p>
          Pelaajat valitaan ilmoittautumislomakkeiden vastausten perusteella*.
          Pyrimme täyttämään pelin niin, että jokainen pelaaja saa mieluisan
          hahmon, ja jokainen hahmo saa sopivan pelaajan. Peliin voi hakea myös
          vanhalla hahmolla, mutta pelinjohto ei kirjoita niille tähän peliin
          uutta sisältöä. Nopeudella ei ole merkitystä lomakkeeseen vastatessa;
          käytä vastauksiesi miettimiseen aikaa. Ilmoitamme myös siitä, jos et
          pääse peliin.
        </p>

        <p>
          Tieto peliin pääsemisestä lähetetään heti, kun pelin hahmojako on
          saatu tehtyä. Valmiin hahmon saat sähköpostilla viimeistään elokuun
          lopussa.
        </p>
        <i>
          *Pelaajiksi hakevat, viime pelin järjestystiimin jäsenet, jotka ei
          tänä vuonna ole osa pelinjohtoa, menee suoraan jonon ohi. Lisäksi
          hahmonkirjoittajina tänä vuonna toimineet, pelaajaksi haluavat voivat
          mennä jonon ohi, jos hakijoita on paljon. Sekä viime vuoden
          pelinjohto, että hahmonkirjottajat maksavat kuitenkin täyden
          pelimaksun. Kokonaisuudessaan puhutaan noin 1-10 henkilöstä, joilla on
          jonossa etuajo-oikeus.
        </i>
        <h2>Hylättävät ilmot</h2>
        <p>
          Jos peliin on ilmoittautunut enemmän pelaajia kuin mitä peliin mahtuu,
          nämä ilmot menevät usein ensimmäisenä hylättävien pinoon:
        </p>
        <ul>
          <li>
            Kysymyksiin on vastattu vain 1-2 sanalla tai korkeintaan yhdellä
            lauseella. Tämä ei anna pelinjohtajalle oikein mitään ideaa sitä,
            millainen pelaaja on. Castaus tehdään osin anonyymisti, joten älä
            oleta pelinjohdon tietävän vastauksiasi automaattisesti.
          </li>
          <li>
            Rajoitteet tai toiveet sulkevat kaikki pelin hahmot pois / hakija
            vaikuttaa haluavan ihan eri peliä, mitä kyseinen larppi on / hakija
            vaikuttaa siltä, että ei tiedä, mihin peliin on hakenut.{' '}
          </li>
        </ul>
        <h2>Varapelaajalista</h2>
        <p>
          Jos et mahdu peliin, etkä voi tai halua pelata vanhaa hahmoa, voit
          halutessasi jäädä odottamaan pelipaikkaa varapelaajalistalle.
        </p>
        <p>
          Varapelaajalistalle jääneille pelaajille voidaan tarjota hahmoa,
          mikäli joku pelaaja peruu osallistumisensa. Jos sopivaa hahmoa ei
          vapaudu, varapelaaja ei pääse peliin.
        </p>
        <p>
          Varapelaajan pelimaksu riippuu tilanteesta. Jos varapelaajalistalla
          oleva saa peruutuspaikan jota ei ole vielä maksettu, hän maksaa
          pelistä täyden pelimaksun. Jos hahmon saa hyvin lähellä peliä, tai
          edellinen pelaaja on jo maksanut oman pelimaksunsa, maksusta
          neuvotellaan erikseen.
        </p>
        <p>
          <b>Pelaajiltamme odotamme:</b>
        </p>
        <ul>
          <li>Pelimaksun maksamista ajallaan</li>
          <li>Pelipaikalle saapumista hyvissä ajoin (katso aikataulu)</li>
          <li>
            Pelin sääntöjen lukemista ja noudattamista, sekä omaan hahmoosi
            tutustumista
          </li>
          <li>Hahmoon sopivaa proppautumista oman budjettisi rajoissa</li>
          <li>
            Tiedotuksen seuraamista ja pyydettäessä myös niiden kuittausta
          </li>
          <li>
            Omasta kyydistäsi sekä mahdollisesta majoituksestasi huolehtimista
          </li>
          <li>Pelipaikan siivoukseen osallistumista pelin jälkeen</li>
        </ul>
        <h3>
          <a href="https://forms.gle/tuQWXvWsvp14thdL6">
            Hae pelaajaksi tällä lomakkeella
          </a>
        </h3>
        <h1>ESIINTYJÄKSI</h1>
        <p>
          Pelin keskivaiheilla pidetään noin tunnin mittainen liveshow, joka on
          osa peliä. Tarkoituksena on tuoda peliin pride-juhlien tunnelmaa sekä
          kokeilla larppauksen ja esittävän taiteen yhdistämistä. Miltä tuntuu
          esiintyä fiktiiviselle yleisölle, tai millaista on nähdä taidetta
          hahmon kautta?
        </p>
        <p>
          Peliin kaivataan esiintyjiä, jotka valmistelevat noin 2-5 min
          mittaisen ohjelmanumeron ja esiintyvät liveshown aikana. Show voi olla
          esimerkiksi drag-esitys, laulua, runoutta, tanssia tai jotain muuta.
          Esityksen täytyy sopia pelin teemaan ja esiintyjät esiintyvät
          NPC-hahmoina, eivät omana itsenään. Esityksen ei tarvitse olla
          “ammattimainen”, sillä kaikki NPCt eivät ole esiintymisen
          ammattilaisia, vaan paikallisen queer-skenen jäseniä, joilla on
          intohimo jakaa kokemuksiaan taiteen kautta. Pelaajat myös ohjeistetaan
          olemaan kannustavia ja innoissaan, joten suuria suorituspaineita ei
          tarvitse ottaa!
        </p>
        <p>
          Esitysten tyyli voi vaihdella laajastikkin. Emme tarvitse viimeisen
          päälle siloteltua showta, vaan haluamme luoda lähestyttävän, aidon
          queer-yhteisön tunnelman. Esitys voi olla tunnelmaltaan melkein mitä
          vain: se voisi, esimerkiksi, kertoa hahmon raskaista
          queer-kokemuksista henkilökohtaisen runouden kautta, olla stand-up
          komiikkaa tähtienvälisen kapitalismin kauheuksista, tai tuoda
          sateenkaari-identiteetin onnellista ilosanomaa tanssin tai dragin
          kautta. Voimme auttaa sopivan esityksen valmistelussa, mutta
          tarvitsemme suurpirteisen idean jo hakuvaiheessa.{' '}
        </p>
        <p>
          Esiintyjähaku sulkeutuu perjantaina 14.6 klo 23:59. Pelaaja- ja
          esiintyjävalinnat pyritään tekemään kesäkuun aikana. Peliin pääsystä
          ilmoitetaan kaikille henkilökohtaisesti. Ilmoitamme myös, jos et pääse
          peliin.
        </p>
        <p>
          <b>Esiintyjiltä odotamme:</b>
        </p>
        <ul>
          <li>Pelipaikalle saapumista hyvissä ajoin (katso aikataulu)</li>
          <li>
            Pelin sääntöjen lukemista ja noudattamista, sekä omaan NPC-hahmoosi
            tutustumista
          </li>
          <li>Hahmoon sopivaa proppautumista oman budjettisi rajoissa</li>
          <li>
            Tiedotuksen seuraamista ja pyydettäessä myös niiden kuittausta
          </li>
          <li>Pelipaikan siivoukseen osallistumista pelin jälkeen</li>
          <li>
            Esitystä, joka on joko kirjoitettu peliä varten tai sopii pelin
            teemoihin ja in-game maailmaan. Maapallon politiikkaan viittaaminen
            ei ole sopivaa, mutta yleinen kapitalismin dissaaminen ja
            queer-teemat erittäin tervetulleita! Voimme auttaa sopivan esityksen
            valmistelussa, mutta tarvitsemme suurpirteisen idean jo
            hakuvaiheessa. Esitys voi olla esimerkiksi dragia, laulua, tanssia
            tai spoken word runoutta
          </li>
          <li>
            Sitoutumista tapahtumaan osallistumiseen ja esityksen vetämiseen
            sille sovittuna aikana
          </li>
          <li>
            Heittäytymistä siihen, että kyseessä ei ole tavallinen esiintyminen:
            larp on tapahtuman pääasia, ja liveshow on tukemassa sen tunnelmaa.
            Esiintyminen tapahtuu NPC hahmon kautta, emmekä mainosta esiintyjiä
            pelin infoissa. Pelin jälkeen itsensä mainostaminen on kuitenkin ok
            esimerkiksi Discordin kautta!
          </li>
        </ul>
        <p>
          <b>Huomioita esitykseen:</b>
        </p>
        <ul>
          <li>Show tapahtuu Kulttuurikellarin lavalla </li>
          <li>
            Älä tuo lavasteita osaksi esitystäsi. Lavaa käytetään pelialueena
            esityksen jälkeen ja mahdollisesti myös sitä ennen
          </li>
          <li>
            Tapahtumassa on valo- ja ääniteknikko, joka auttaa
            musiikin/videoiden/muun tarvittavan tekniikan kanssa
          </li>
          <li>
            Laittautumiseen on käytössä 1) lavan takana oleva pieni varastotila,
            jonne koitetaan löytää peilejä, tuoleja ja muuta tarvittavaa 2)
            pieni takahuone, joka toimii myös pelaajien off-game tilana. Isot ja
            vaikeat asuvaihdokset voivat siis olla haastavia!
          </li>
        </ul>
        <p>
          <b>Esiintyjille tarjoamme</b>
        </p>
        <ul>
          <li>Ilmaisen osallistumisen tapahtumaan </li>
          <li>
            NPC hahmon. Se aika, jota et käytä esiintymiseen tai esityksen
            valmistelemiseen, on vapaata peliaikaa! Toivomme, että esiintyjät
            osallistuisivat peliin ainakin osan ajasta.
          </li>
          <li>
            Pienen rahallisen palkkion, sekä matkakulujen ainakin osittaisen
            korvaamisen (korvattava määrä riippuu siitä, mistä kaikkialta
            esiintyjämme saapuvat. Jos kaikkien kulut ovat suuret, emme ehkä voi
            korvata kaikkea)
          </li>
          <li>Yhden ilmaisen ruuan + yhden drinkkilipun pelin aikana</li>
          <li>
            Apua majoituksen järjestelyssä (jos haluat yöpyä hotellissa, emme
            ikävä kyllä voi kattaa sen kuluja) ja mahdollisesti majoituksen
            jonkun järjestäjän kotona
          </li>
        </ul>
        <h3>
          <a href="https://forms.gle/vhYi6a29ViBiaGDQ9">
            Hae esiintyjä-NPC roolia tällä lomakkeella
          </a>
        </h3>
      </main>
    </div>
  );
}
