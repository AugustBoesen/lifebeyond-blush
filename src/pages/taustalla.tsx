/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import ParallaxEffect from '@/components/Parallax';

export default function Materials() {
  const { parallaxStyle } = ParallaxEffect();
  return (
    <div>
      <Head>
        <title>Materials | Life Beyond</title>
      </Head>
      {/* BACKGROUND IMAGE */}
      <div className="background bg05" style={parallaxStyle}></div>

      {/* CONTENT */}
      <main>
        <h1>Taustalla</h1>
        <p>
          BLUSH lähti suurissa määrin halusta järjestää rento, mutta
          kantaaottava peli, joka toimisi vastalauseena Savonlinnassa ääntä
          saaneelle sateenkaarivihalle. Osittain se kumpusi myös halusta tehdä
          larppi, jossa ei tarvitsisi miettiä, kuinka monen queer-hahmon
          kirjoittaminen on “realistista” tai “teemaan sopivaa”. Ja tietty
          rakkaudesta scifiin, queer-haltioihin, Savonlinnalaiseen
          Pride-kulttuuriin ja homobaarien historiaan.
        </p>
        <h2>Mitä tarkoittaa queer?</h2>
        <p>
          Queerness on sukupuolen ja seksuaalisuuden moninaisuutta, mutta myös
          kokemuksia, jotka eivät tarkasti mahdu näiden kategorioiden alle. Se
          on pysähtyneiden, rajoittavien ja sortavien normien
          kyseenalaistamista. Se on toiseutetussa asemassa elämistä, sekä oman
          identiteetin rajojen tuskallisenkin jatkuvaa ajattelemista. Queerness
          on tarkkojen kategorioiden väistämistä ja samalla oman kokemuksen
          nimeämistä tavoilla, jotka eivät aina mahdu julkiseen keskusteluun. Se
          voi olla anarkistista irrottautumista siitä, mikä nähdään normaalina,
          tai olemassaolevien kategorioiden uudelleenmuotoilua.
          Queer-identiteettejä on loputtomia. Queer on poliittista, se on
          aktivismia, se on henkilökohtaista. Ei ole yhtä kiveen kirjoitettua
          teoriaa siitä, miksi ja millaisia ihmisten identiteetit ovat:
          kunnioitetaan siis toisiamme silloinkin, kun toisen kokemus tai olemus
          on meille vaikeasti ymmärrettävä.
        </p>
        <h2>Apurahat ja mihin ne käytetään</h2>
        <p>
          Vuonna 2022 Savonlinnan kaupunki myönsi Mirka Oinoselle 500e apurahan
          ensimmäisen pelin järjestämiseen. Tämä raha kului kokonaisuudessaan
          pelin vuokraan ja muihin käytännön kuluihin. Vuonna 2023 SKRn
          Etelä-Savon rahasto myönsi 9000e apurahan pelin toisen osan
          kirjoittamiseen ja järjestämiseen Jaakko Rinteelle ja Mirka Oinoselle.
          Tästä rahasta 8000e on myönnetty järjestäjien työskentelyyn: voimme
          siis maksaa kaikille järjestäjille palkkaa tai palkkiota pelin eteen
          tehdystä työstä! Jäljelle jäävä 1000e kuluapuraha sekä pelimaksut
          käytetään mm. KuKen vuokraan ja baarin
          yksityistilaisuus-kustannuksiin, ruokaan, pelin lavastukseen ja
          logistiikkaan. Jos tapahtuma jää voitolle, lahjoitetaan kaikki
          ylijääneet pelimaksut hyväntekeväisyyteen, esimerkiksi Savonlinnan
          Priden toimintaan.
        </p>
        <h2>Järjestystiimi</h2>
        <p>
          Pelin pääkäsikirjoittajana ja tuottajana toimii Mirka Oinonen. Toisena
          pääjärjestäjänä ja hahmovastaavana toimii Jaakko Rinne, jonka käsialaa
          on myös Avalonin maailma.
        </p>
        <p>
          <b>Muu järjestystiimi satunnaisessa järjestyksessä:</b>
        </p>
        <ul>
          <li>Severi Boesen (liveshow, tekniikka, nettisivut)</li>
          <li>Vattu Korhonen (käytäntö, hahmonkirjoitus, lavastus)</li>
          <li>Sara Taskila (hahmonkirjoitus)</li>
          <li>Mikael Puustjärvi (hahmonkirjoitus)</li>
          <li>Eelis Simonen (hahmonkirjoitus)</li>
          <li>Chride Lassheikki (hahmonkirjoitus)</li>
          <li>Elsiina Tiikkainen (hahmonkirjoitus)</li>
          <li>Tuomas Puikkonen (pelin valokuvaaja)</li>
        </ul>
        <h2>Yhteistyökumppanit ja sponsorit</h2>
        <p>Tapahtuma järjestetään Suomen Kulttuurirahaston tuella.</p>
        <p>
          Savonlinnan Kulttuurikellari toimii pelin tapahtumapaikkana. Mukana
          yhteistyössä myös KuKen baari, Kulttuurihanat.
        </p>
        <p>
          Roolipeliyhdistys Perkunas toimii tapahtuman taustajärjestönä, jonka
          kautta esimerkiksi rahaliikenne kulkee.
        </p>
        <p>Tapahtuma järjestetään yhteistyössä Muhasaaren Teatterin kanssa.</p>
        <p>
          Edullisempaa majoitusta osallistujille tarjoaa Savonlinnan
          Kansanopiston Hotelli.
        </p>
        <p>Haluatko sponsoroida meitä? Ota yhteyttä mirka.muratti@gmail.com</p>
      </main>
    </div>
  );
}
