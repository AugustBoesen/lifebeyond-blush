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
      <div className="background bg03" style={parallaxStyle}></div>

      {/* CONTENT */}
      <main>
        <h1>Käytäntö</h1>
        <h2>Aikataulu ja pelipaikka</h2>
        <p>
          Peli järjestetään lauantaina 21.9.2024 Savonlinnan
          Kulttuurikellarilla. KuKen nettisivut:{' '}
          <a
            className="text-pink-600 hover:text-slate-200 transition-all"
            href="https://www.kulttuurikellari.com/"
          >
            https://www.kulttuurikellari.com/
          </a>{' '}
        </p>
        <p>
          Koko baari ja sen alakerta on varattu meille yksityiskäyttöön.
          Paikalla ei siis ole ulkopuolisia, baarin henkilökuntaa
          lukuunottamatta.
        </p>
        <p>
          Päivän tarkempi aikataulu varmistuu vielä lähempänä, mutta kannattaa
          varautua saapumaan paikalle lauantai-aamuna, viimeistään klo 10
          maissa. Esiintyjien toivotaan saapuvan jo klo 8 ja 9 välillä. Peli
          tapahtuu kokonaisuudessaan lauantain aikana. In-game aikaa on noin
          4-6h, jonka lisäksi päivään sisältyy workshoppaus ennen peliä sekä
          alku- ja loppubriefit. Pelipaikalta poistutaan viimeistään klo 23,
          jonka jälkeen täysi-ikäisten on mahdollista siirtyä afteroimaan
          yhdessä jonnekkin paikalliseen yöelämään.
        </p>
        <p>
          <b> Pelimaksuun sisältyy</b> yksi lämmin ruoka, yksi drinkkilippu
          baariin sekä pientä naposteltavaa pelin aikana.
        </p>
        <p>
          <b>Majoitus</b> ei sisälly pelimaksuun.
        </p>
        <h2>Pelimaksu</h2>
        <ul>
          <li>Perus pelimaksu on 35e. Näitä lippuja peliin on 25 kpl. </li>
          <li>
            Tuetun osallistumisen pelimaksu on 25e. Näitä lippuja peliin on 10
            kpl.
          </li>
          <li>
            Vanhalla hahmolla osallistuvan pelimaksu on 25e (vanhoille hahmoille
            ei kirjoiteta uutta sisältöä peliä varten). Näitä otetaan max 10
            kpl. Huom! Peli järjestyy vain, jos saamme tarpeeksi pelaajia uusiin
            hahmoihin.
          </li>
        </ul>
        <p>
          Ilmoita hakiessasi, haetko peliin ehdottomasti uudella hahmolla,
          ehdottomasti vanhalla hahmolla, vai onko kumpi vain ok. Pelimaksun voi
          tarvittaessa maksaa parissa erässä. Pelimaksun deadline tarkentuu
          vielä, mutta tulee olemaan noin kuukauden sisään peliin hyväksymisestä
          (oletettavasti kesä-heinäkuun aikana). Pelimaksut maksetaan
          Roolipeliyhdistys Perkunaksen tilille.
        </p>
        <p>
          Halutessasi voit maksaa myös enemmän kuin tavallisen pelimaksun.
          Ylimääräinen raha menee budjetin puskuriosuuteen yllättäviä kuluja
          varten, ja jos rahaa jää yli tapahtuman jälkeen, lahjoitetaan kaikki
          ylijäämä hyväntekeväisyyteen, esimerkiksi Savonlinnan Pridelle.
        </p>
        <p>
          Pelimaksu voidaan palauttaa, jos peruminen tehdään ennen maksujen
          deadlinea. Jos peruminen tapahtuu sen jälkeen, ei maksuja
          todennäköisesti voida palauttaa. Jos pelimaksua ei kykene maksamaan
          ajoissa, saattaa pelinjohto antaa hahmosi eteenpäin jollekkin muulle -
          maksuaika on kuitenkin neuvoteltavissa tilanteen mukaan.
        </p>
        <h2>Ikäraja</h2>
        <p>
          Pelin ikäraja on k18/17. Tämä toimii niin, että 17-vuotiaat voivat
          päästä peliin pelinjohdon harkinnan mukaan:
        </p>
        <ul>
          <li>
            Haluamme mahdollistaa turvallisen queer-pelaamisen paikalliselle
            nuorisolle mahdollisuuksien mukaan. Siksi ikäraja ei ole tiukka k18
          </li>
          <li>
            Peli pelataan baarissa. Meidän vastuullamme on valvoa, että yksikään
            alaikäinen ei hae baarista alkoholillisia juomia, ja siksi
            alaikäisiä ei oteta peliin kovin paljon
          </li>
          <li>
            Romanttiset ja seksuaaliset suhteet ovat pelissä isossa osassa, ja
            otamme pelaajien iän huomioon hahmojaossa. Pyrimme välttämään
            todella suuria ikäeroja, mutta aina se ei ole mahdollista
          </li>
          <li>
            Alaikäiseltä pelaajalta vaaditaan huoltajan lupalappu, josta ilmenee
            huoltajan nimi, puhelinnumero ja se, että huoltaja tietää mihin
            tapahtumaan nuori on osallistumassa.
          </li>
        </ul>
        <h2>Viestintä </h2>
        <p>
          Pelin viestintä tapahtuu pääasiassa sähköpostin ja pelin
          Discord-kanavan kautta. Discordiin liittyminen ei ole pakollista,
          mutta se on suositeltua erityisesti kanssapelaajien välisen
          kommunikoinnin helpottamiseksi. Discord on pelaajien käytössä myös
          pelin jälkeiseen keskusteluun ja fiilistelyyn. Oleellinen info pelistä
          löytyy myös nettisivuilta.
        </p>
        <p>
          Pelin pääjärjestäjän saa kiinni sähköpostitse mirka.muratti@gmail.com
          tai Discordissa @darayka. Pelin virallinen sähköposti kulkee
          osoitteesta enterlifebeyond@gmail.com
        </p>
        <h2>Turvallisuus</h2>
        <p>
          Pelipaikalla on perus ea-tarpeet pelinjohdon puolesta, sekä vähintään
          yksi ensiaputaitoinen pelinjohtaja. Ensiaputaitoiset käydään läpi
          pelin alussa.
        </p>
        <p>
          Facebookissa järjestäjille ei lähtökohtaisesti kannata lähettää
          viestiä sillä ne eivät välttämättä tule lainkaan läpi.
        </p>
        <p>
          Ota mukaan omat kipulääkkeet ja allergialääkkeet yms, niitä meillä ei
          välttämättä ole tarjota kaikille. Suosittelemme myös korvatulppia
          etenkin myöhempää iltaa varten!
        </p>
        <p>
          Pelissä tulee olemaan halihenkilö / häirintäyhdyshenkilö, joka ei
          pelaa mitään hahmoa. Hän on aina käytettävissä, jos pelaajalle ilmenee
          jokin huoli. Myös muuta pelinjohtoa on pelissä tavoitettavissa, vaikka
          he saattavat olla pelissä mukana NPC-roolissa.
        </p>
        <p>
          Pelissä käytetään turvamekaniikkoja, joista tiedotetaan tarkemmin
          lähempänä. Käytössä on ainakin turvasana, sekä mahdollisesti esim.
          liikennevalot.
        </p>
        <p>
          <b>Tapahtumassa noudatetaan turvallisemman tilan periaatteita. </b>
        </p>
        <p>
          Off-game seksismi, rasismi, transfobia, misogynia ja kaikenlainen
          muita alentava puhe on tapahtumassa kielletty. Jos nämä teemat tulevat
          esiin in-game, on niitä pelattava muita pelaajia kunnioittaen.
          Turvallisemman tilan säännöt:
        </p>
        <ul>
          <li>Älä oleta, äläkä yleistä omaa kokemustasi kaikkia koskevaksi.</li>
          <li>Ole kunnioittava.</li>
          <li>Anna tilaa jokaiselle.</li>
          <li>
            Älä häiritse ketään sanallisesti, koskemalla tai tuijottamalla.{' '}
          </li>
          <li>Älä käytä hyökkääviä puheenvuoroja toisia ihmisiä kohtaan</li>
          <li>Oleta hyvää toisesta.</li>
          <li>Jos kaipaat ongelmatilanteisiin apua tai tukea, pyydä sitä. </li>
        </ul>
        <p>
          Pelinjohto on koko pelin ajan käytettävissä, oli huoli sitten kuinka
          pieni tai suuri tahansa!
        </p>
        <h2>Saavutettavuus</h2>
        Jos sinulla on kysyttävää pelin saavutettavuudesta, ole ihmeessä
        yhteydessä pelinjohtoon! Autamme pelaajia parhaamme mukaan. Pelipaikalla
        on runsaasti portaita. Pääoven portaissa on ramppi ja sisätilan isoissa
        portaissa pyörätuolihissi, mutta paikalla voi olla yksittäisiä portaita
        ja kynnyksiä, jotka eivät ole kuljettavissa pyörätuolilla. Pelissä
        saatetaan käyttää savu- ja/tai usva-koneita. Pelitilat on valaistu
        osittain hämärästi. Pelissä on paljon kirkkaita, värikkäitä ja
        mahdollisesti vilkkuvia valoja. Pelin aikana soitetaan välillä
        kovaäänistä musiikkia. Pelissä on hyvin pieni (ja kokemuksen mukaan
        pahan hajuinen) offgame huone. Hiljaisia tiloja ei ikävä kyllä ole
        tarjolla. Pelissä on käytössä sukupuolittamaton wc-tila sekä inva-wc.
        Peli pelataan suomeksi, mutta osallistuminen englannin kielellä on myös
        järjestettävissä tarpeen mukaan. Pelipaikka on yhteydessä baariin, jossa
        on tarjolla alkoholia.
        <h2>Pelipaikan baari ja alkoholin käyttö pelissä</h2>
        <p>
          Pelin juomatarjoilut (sekä ruokailun) hoitaa Kulttuurihanojen baari.
          Tarjolla on paljon alkoholittomia juomia ja baari valmistaa meille
          myös oman, pelin teemaan sopivan mocktail-menun. Baari varataan meille
          yksityistilaisuuskäyttöön, ja pelaajat voivat hakea baarin puolelta
          juomia sekä pelata siellä vapaasti. Kaikki pelaajat saavat yhden
          juomalipun, jonka voi käyttää baarissa pelipäivän aikana, mutta muuten
          juomien tilaaminen baarin puolelta tapahtuu omakustanteisesti.
          Tarjolla on myös ilmaiseksi kahvia/teetä, mehua ja vettä.
        </p>
        <p>
          <b>Pelissä ei ole luvallista olla oikeasti humalassa</b>, joten
          kannattaa suosia alkoholittomia juomia! Jos jonkun huomataan pelin
          aikana olevan oikeasti humalassa, poistetaan tämä välittömästi
          pelistä. Alaikäisille alkoholin käyttö tapahtuman aikana on
          ehdottomasti kielletty.{' '}
        </p>
        <p>
          Hahmo voi olla humalassa, vaikka et joisi oikeasti yhtään alkoholia,
          mutta tarkoitus ei ole pelata känniörvellystä.
        </p>
        <p>
          Jos haluat tuoda omia eväitä peliin, on se sallittua, kunhan niitä ei
          juoda/syödä itse baarin tiloissa. Jääkaappitilaa ei käytännössä ole,
          joten suosi eväitä, jotka säilyvät lämpimässä. Älä tuo omia
          alkoholijuomia peliin!
        </p>
        <h2>Majoitus ja ruokailu</h2>
        <p>
          Pelimaksuun sisältyy yksi lämmin ruoka tapahtuman aikana. Ruokailu
          järjestetään buffet-tyylisesti ja ruuan tarjoilee
          Kulttuurihanat-baari. Ruoka on lähtökohtaisesti vegaanista, allergiat
          ja erityisruokavaliot otetaan huomioon siinä määrin kuin ravintola
          siihen pystyy. Pelissä on tarjolla myös jonkinlaisia pieniä snackseja,
          kahvia ja teetä, ja jokainen pelaaja saa baariin yhden drinkkilipun.
        </p>
        <p>
          Pelin hintaan ei sisälly majoitusta. Yöpaikan hankkiminen on jokaisen
          sitä tarvitsevan omalla vastuulla.
        </p>
        <p>
          Mahdollisia majoituspaikkoja etäisyyksineen pelipaikalle ovat esim:
        </p>
        <ul>
          <li>
            Savonlinnan Kansanopiston hotelli Wanha Pappila (15min ajomatka){' '}
          </li>
          <li>Wanhan Aseman Majatalo (1,5km)</li>
          <li>Hotelli Hospitz ja Sokos Hotel Savonlinna (200m)</li>
        </ul>
        <p>
          Majoitusta voi kysellä mahdollisuuksien mukaan myös kanssapelaajilta.
          Savonlinnassa on myös muita hotelleja ja hostelleja, joissa voi
          majoittua. Emme suosittele AirBnb:n majoitusta niin pitkään, kun se on
          BDS boikottilistalla.
        </p>
        <h2>Peliin saapuminen</h2>
        <p>
          Kulttuurikellari on aivan Savonlinnan keskustassa. Kävelymatkaa
          juna-asemalta on vajaa parisataa metriä, bussiasemalta vajaa
          kilometri. Parkkipaikkoja keskustassa on syksyisin yleensä hyvin
          tarjolla. Yhteiskyytien organisointia tehdään Discordin ja Google
          driveen tehtävän kyytilistan avulla.
        </p>
        <p>
          Wanha Pappila tarjoaa Blushin osallistujille tarjoushintaisen
          majoituksen: kahden yön paketti yhden hengen huoneessa 75e ja kahden
          hengen huoneessa 60 e (eli siis hinta sisältää kaksi yötä). Hintaan
          sisältyy myös aamiaiset.{' '}
        </p>
        <p>
          Pelipaikalla tulee olla paikalla ajoissa lauantai-aamuna. Emme voi
          odottaa yksittäisiä pelaajia, jos myöhästymisiä tapahtuu.
        </p>
        <h2>Valokuvaaminen</h2>
        <p>
          Valokuvaamisesta ja kuvien jakamisesta ilmoitetaan tarkemmin
          lähempänä. Pelissä on valokuvaaja ainakin osan aikaa. Peliä tulee
          kuvaamaan Tuomas Puikkonen.
        </p>
        <h2>Proppausohjeet</h2>
        <ul>
          <li>
            Tyyliä kuvaavia sanoja: värikäs, punk, omalaatuinen, kokeileva,
            reivit, taiteellinen, scifi, hassu, lennokas, glittery,
            poskipunaöverit, pride (ideoita voit halutessasi hakea tästä
            Pinterest boardista{' '}
            <a>https://fi.pinterest.com/darayka/blush-2024/</a> )
          </li>
          <li>
            Vaatetus on vapaa mutta pakollinen. Proppautumisesta ei kannata
            ottaa liikaa stressiä: mukava pelikokemus on aina kaikista
            tärkeintä! Mikäli tarvitset apua tai vaikkapa lainaproppeja, on
            Discord hyvä paikka neuvojen hakemiseen ❤️{' '}
          </li>
          <li>
            Kannustamme kaikkia ekologiseen proppautumiseen: kierrätä, lainaa ja
            tuunaa jo olemassaolevia tavaroita, ja osta vain sellaista tavaraa,
            jolle on käyttöä pelin jälkeenkin
          </li>
          <li>
            Suurimmalla osalla haltioista on suipot korvat. On täysin ok, jos et
            halua käyttää suippoja korvia, mutta keksi asialle jokin loreen
            sopiva selitys (vaikkapa hahmon kauneusleikkaus)
          </li>
          <li>
            Käytä huomaavaisuutta kulttuurisen omimisen suhteen
            proppautumisessa, äläkä esim. muuta ihonväriäsi hahmoa varten. Kysy
            apua, jos olet jonkun asian suhteen epävarma!
          </li>
          <li>
            Ota huomioon pelipaikka sekä pelin kesto. Älä käytä proppeja, jotka
            sotkevat kalusteita tai aiheuttavat vaaraa muille/muiden propeille!
            (huomioi myös, että proppautumiseen pelipaikalla ei ole paljon
            aikaa, ja esimerkiksi peilillisiä WC-tiloja on rajallinen määrä)
          </li>
          <li>
            Sisällä saa käyttää ulkokenkiä. Ulkona ei olla, mutta ulos on
            mahdollista mennä esim. tupakalle.
          </li>
          <li>Varaudu siihen, että voit tanssia ja bilettää propeissasi!</li>
        </ul>
      </main>
    </div>
  );
}
