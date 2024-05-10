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
        <h2>BLUSH festivaali ja Club Nebulove</h2>
        <p>
          Peli sijoittuu Club Nebuloveen, joka on pieni underground queer baari
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
          BLUSH on protesti. Mutta se on myös juhla, festivaali ja yhteisö, joka
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
          kulttuurissa ajanhukkana, sillä ne eivät tuota pääomaa. Suhteet ovat
          monesti enemmän bisnesjärjestelyjä, ja tärkeää on, että suhde ei
          vaikuta osapuolten henkilöbrändiin negatiivisesti. Erityisen vahva
          normi on aatelisten ja menestyneiden yrittäjien keskuudessa.
        </p>
        <p className="font-bold">Avalonissa tunnetaan kolme sukupuolta:</p>
        <p>
          Sukupuolen moninaisuus on monin paikoin normaalia ja hyväksyttyä,
          mutta moni kohtaa silti vaikeuksia tulla kohdelluksi omana itsenään
          tai haluamillaan sanoilla. Eri väestöluokilla on hyvin erilaiset
          mahdollisuudet päästä vaikkapa sukupuolenkorjaus-hoitoihin, sillä
          mitään yleistä tai ilmaista terveydenhuoltoa ei ole. Paikallinen
          queer-yhteisö kuitenkin pitää toistensa puolia parhaansa mukaan, ja
          salakuljetetut lääkkeet tai pimeänä tehdyt hoidot eivät ole lainkaan
          ennenkuulumattomia. Seksuaalisuuden kirjo on paremmin hyväksytty, kuin
          meidän maailmassamme. Siitä huolimatta galaksin politiikassa on
          noussut välillä esiin huolestuttavia mielipiteitä ja aloitteita
          esimerkiksi sellaisista suhteista. suhteisiin, jotka eivät johda tai
          pyri lisääntymiseen.
        </p>
        <p>
          Tekoälyjen sukupuoli, seksuaalisuus ja romanttisuus on asia, jota
          tekoäly-yhteisö vielä pohtii. Mielipiteet asiasta vaihtelevat paljon
          ja muuttuvat aktiivisesti, kun yhteisö hakee sanoja kokemukselleen.
          Tekoälyt ovat erittäin kiellettyjä: niiden olemassaoloa sensuroidaan
          sekä kriminalisoidaan jatkuvasti rankemmin, ja siksi jopa monelle
          muuten queer-tietoiselle haltialle niiden käyttämät termit ovat täysin
          vieraita.
        </p>
      </main>
    </div>
  );
}
