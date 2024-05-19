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
      <div className="background bg01" style={parallaxStyle}></div>

      {/* CONTENT */}
      <main>
        <h1>BLUSH 2024</h1>
        <h3 className=" font-cinzel text-palette-4 font-bold">
          Savonlinnan Kulttuurikellarilla 21.9.2024
        </h3>
        <h2> AVARUUSHALTIOITA & QUEER-AKTIVISMIA</h2>
        <i>
          "Kun jokaisen kasvot on maalattu sateenkaaren värein, ei poliisi voi
          tietää, kenen posket punoittavat luonnostaan."{' '}
        </i>
        <p>
          Blush on queer-teemainen, scifimaailmaan sijoittuva baarilarppi
          yhteisöllisyydestä, queer-kokemuksesta, identiteetistä, taiteesta ja
          antikapitalistisesta aktivismista. Pelin tarina sijoittuu pieneen
          baariin, Club Nebuloveen, jonne paikallinen queer-yhteisö kokoontuu
          juhlimaan. Blushin hahmot ovat kaikki jollain tapaa in- tai offgame
          vähemmistöä: mukana on laajasti erilaisia identiteettejä, sukupuolia,
          seksuaalisuuksia ja perhemalleja, sekä myös scifimaailman omaa
          alistettua vähemmistöä, laittomia tietoisia tekoälyjä.
        </p>
        <p>
          Pelin aikana on luvassa musiikkia ja juhlintaa, mutta aikaa on myös
          monenlaiseen ihmissuhdedraamaan sekä queer- & scifiteemojen
          pohdintaan. Pelin puolessa välissä käynnistyy vajaan tunnin mittainen
          in-game lavashow, jossa nähdään mm. dragia.
        </p>
        <h2>Perustiedot</h2>
        <p>
          Blush 2024 järjestetään lauantaina 21.9.2024 Savonlinnan
          Kulttuurikellarilla.
        </p>
        <p>
          Peli on k17/k18. Pelaajahahmoja pelissä on 35, jonka lisäksi mukana on
          NPCitä sekä mahdollisesti muutamia viime vuoden hahmoja. Pelimaksu on
          25e-40e. Peli sopii hyvin myös aloittelijoille ja ensikertalaisille!
        </p>
        <p>
          Peli ei ole varsinainen jatko-osa, eikä se ole uudelleenpelautus: voit
          siis hakea mukaan vaikka et olisi pelannut ensimmäisessä Blushissa!
          Vaikka edellisen pelin hahmoja saattaa olla mukana, on kyseessä
          itsenäinen tapahtuma, ja suurin osa hahmoista on uusia.
        </p>
        <h2>Onko tämä peli minulle?</h2>
        <p>
          Blush tuo pelaajat osaksi futuristisen queer-yhteisön iloja, suruja ja
          taisteluja, mutta erityisesti sen suurta juhlaa. Jokainen hahmo on
          kokenut elämässään syrjintää, irrallisuutta tai vaikeutta sopeutua,
          mutta juuri siksi tämä yhteinen juhla tuntuu kaiken raskaudenkin
          keskellä niin syvällä tavalla merkityksekkäältä. Hahmot ovat
          juhlimassa Blush-festivaalia baarissa, jonne moni on saapunut
          erilaisista mielenosoituksista ja marsseista.
        </p>
        <p>
          Peli on toiveikasta draamaa, jossa paino on hahmosuhteiden
          pelaamisella, aktivismiteemojen pohtimisella, scifimaailmaan
          syventymisellä, queer-yhteisön osana olemisella ja tietysti
          juhlimisella. Mukana on paljon hahmojen välisiä romansseja ja
          seksuaalisia suhteita. Suurta juonta ei ole. Isossa osassa on myös
          pelin keskivaiheilla pidettävä liveshow, jonka hahmot pääsevät
          katsomaan. Pelin lopussa musiikki laitetaan kovemmalle ja aikaa on
          tanssiin ja biletykseen. Pelin hahmot ovat noin 4-7 sivun mittaisia.
          Lisäksi infotekstiä tulee luettavaksi pelin maailmasta ja planeetasta,
          jolla hahmot asuvat. Viime vuoden hahmoilla jatkavat pelaajat tekevät
          kontaktoinnin hahmoilleen itse, mutta kaikki 35 uutta hahmoa on
          valmiiksi kirjoitettu.
        </p>
        <p>
          Sisältövaroitukset: Vaikka pelin sävy on positiivinen ja teemana
          bileet, on mukana myös queer-kokemuksen vaikeita puolia. Kaikkien
          hahmojen taustoissa esiintyy erilaisia vaikeita teemoja, esim
          homofobia, transfobia, queerfobia, seksismi, mielenterveyden ongelmat,
          köyhyys, poliisiväkivalta, ihmisoikeuksien kieltäminen (erityisesti
          tekoälyhahmoilla), dystopinen kapitalismi, hankalat ihmissuhteet,
          kuolema yms. Ikävissä teemoissa ei kuitenkaan ole tarkoitus rypeä.
          Voimme antaa pelaajalle tämän toiveiden mukaan hahmon, jolla ei ole
          tiettyä teemaa omassa taustassaan, mutta emme voi taata, että teemoja
          ei kohtaisi pelin aikana.
        </p>
        <h2>Queer-teemojen pelaaminen</h2>
        <p>
          Jokainen pelaaja saa tulla peliin omana itsenään. Omaa identiteettiään
          ei ole pakko kertoa missään vaiheessa, eikä peliä ole rajattu
          esimerkiksi vain queer-pelaajille. Pelaajan identiteetti ja hahmon
          identiteetti voivat olla täysin eri. Emme kysy pelaajalta hänen
          sukupuoltaan tai seksuaalisuuttaan ilmoittautuessa, mutta
          preferenssejä hahmoon liittyen voi antaa. Pelin suunnittelussa on
          kiinnitetty erityistä huomiota erilaisten queer- ja vähemmistöteemojen
          kunnioittavaan esittämiseen. Tiimissä on perehdytty aiheeseen monelta
          eri kantilta, ja olemme tietoisesti tehneet sen valinnan, että kuka
          tahansa voi pelata mitä tahansa pelin hahmoa.
        </p>
        <p>
          Itsestä poikkeavien identiteettien pelaamisessa on aina haasteensa ja
          riskinsä: haluamme painottaa pelaajille sitä, että pelin teemoihin
          tulee suhtautua kunnioittavasti. Vaikka toisenlaista identiteettiä
          pelaamalla voi avata omaa ajatteluaan, on riskinä se, että peli
          vahvistaa olemassaolevia stereotypioita. Siksi peliä edeltävä
          workshoppaus, pelin jälkeiset debriefit, sekä aktiivinen pelaajien
          kanssa kommunikointi ovat tärkeitä elementtejä pelin järjestämisessä.
          Pelissä on lupa (ja jopa suositeltavaa!) tutkia omia ajatuksia
          sukupuolesta, seksuaalisuudesta ja yhteiskunnan normeista - mutta
          tärkeää on muistaa, että kyseessä on peli, joka ei vastaa meidän
          maailmamme todellisuutta.
        </p>
        <p>
          Queer-teemat eivät ole pelin ainoita aktiivisia teemoja, sillä myös
          erilaiset scifi-teemat ovat isossa osassa pelikokemusta. Osalle
          hahmoista queer-identiteetti saattaa siis olla todella keskeinen
          pohdinnan aihe, kun taas toisille se on vain taustapiirre muiden
          joukossa. Pelissä käytetään pronomini-koodattuja nimilappuja
          hahmoille. Hahmojen ja pelaajien sukupuoli ei välttämättä ole sama -
          ethän siis tee oletuksia pelaajan sukupuolesta tämän ulkonäön tai
          hahmon perusteella.
        </p>
        <h2>Seksuaalisuus, romantiikka ja seksi pelissä</h2>
        <p>
          Pelissä on runsaasti romanttisia, seksuaalisia ja muunlaisia intiimejä
          suhteita. Pyrimme jakamaan hahmot niin, että pelaajien välille ei
          synny todella suurta ikäeroa. Erityistä huolta noudatamme alaikäisten
          pelaajien hahmojaossa.
        </p>
        <p>
          Pelissä EI ole metatekniikkaa seksin mallinnukselle, eikä seksin
          pelaaminen varsinaisesti kuulu peliin. Sen sijaan flirttailua,
          läheisyyttä, suutelua, hierontaa yms intiimiä sisältöä tulee olemaan
          osalla hahmoista paljonkin. Kaikki fyysinen läheisyys tapahtuu pelin
          metatekniikoiden puitteissa, eikä kenenkään tarvitse oikeasti vaikkapa
          suudella toista pelaajaa. Suunnitteluperiaattena on, että kaikki
          fyysinen kosketus tulee tapahtua niin, että kumpikin pelaaja on asian
          kanssa ok.s
        </p>
        <p>
          Improvisoidut, hahmoon kirjoittamattomat romanttiset ja seksuaaliset
          suhteet tulee aloittaa vastapelaajan kanssa hitaasti ja yhteisesti
          kommunikoiden. Näissä on erityisen tärkeää muistaa huomioida se, että
          paikalla on paljon nuoria, aloittelevia pelaajia. Parasta olisi
          varmistaa vielä pelinjohdon kautta, että kuvio on ok, jotta kukaan ei
          tule vahingossa painostetuksi sellaiseen intiimiin pelaamiseen, jota
          ei halua.
        </p>
      </main>
    </div>
  );
}
