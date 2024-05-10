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
          in-game lavashow, jossa nähdään mm. dragia. Pelin aikana on lyhyt
          kohtaus, jossa paikalle saapuu poliisi, mutta kohtauksen tarkoituksena
          on antaa hahmoille mahdollisuus huutaa virkavalta ulos bileistään.
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
      </main>
    </div>
  );
}
