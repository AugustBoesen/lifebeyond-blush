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
      <div className='background bg01' style={parallaxStyle}></div>

      {/* CONTENT */}
      <main>
        <h1>Welcome</h1>
        <h2>Step through the Veil...</h2>
        <p>
          Life Beyond (LiBe for short) is a fictional setting set in our modern
          world. Alongside our observable reality lies a shadow society that
          has.
        </p>
        <p>
          The shadow society of Life Beyond is comprised by individuals known as
          exites: humans exposed to the paranormal in such amounts that they,
          too, have 'faded' away, reduced to a distant memory so easily
          forgotten.
        </p>
        <h2>...And enter Life Beyond</h2>
        <p>
          The world of Life Beyond is generally used as a setting for LARPs
          (Live Action events) and TTRPGs (TableTop RolePlaying Game sessions).
          There are a variety of different subsettings used in the past,
          including gang wars, paranormal private military company life,
          world-ending magical threats, distant space operas and so many more.
        </p>
        <p>
          There are several ongoing projects in the world of Life Beyond. If
          you're interested, feel free to check out related events and
          collaborators.
        </p>
      </main>
    </div>
  );
}
