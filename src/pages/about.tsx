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
      <div className='background bg02' style={parallaxStyle}></div>

      {/* CONTENT */}
      <main>
        <h1>About</h1>
        <h2>Life Beyond Team</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at
          ligula a ipsum elementum malesuada pulvinar sed tellus. Donec
          elementum in erat in vestibulum. Curabitur id semper dui. Phasellus
          neque lectus, dignissim ac eleifend id, porttitor non ante. Donec
          feugiat, orci non varius molestie, tellus dui tempor orci, nec
          interdum nunc mauris non metus. Donec consectetur fermentum ornare.
          Donec dictum euismod laoreet.{' '}
        </p>
        <h2>Site contributors</h2>
        <p>
          Vestibulum efficitur sapien nec massa scelerisque, a cursus est
          aliquam. Ut ullamcorper tortor gravida, lobortis lacus nec, placerat
          neque. Pellentesque id lobortis purus. Etiam nec volutpat augue, eu
          fermentum arcu. Praesent rutrum, risus a pharetra volutpat, nunc lacus
          placerat mi, tristique finibus felis metus vel risus. Ut euismod
          fermentum nulla, ac auctor lorem sodales vel. Aenean cursus eget metus
          nec suscipit. Quisque accumsan nisi quis neque suscipit ultricies.
          Nulla facilisi. Pellentesque lobortis tortor sem, et condimentum magna
          tempus vel. Maecenas tempus metus non mi faucibus malesuada.{' '}
        </p>
        <h2>Join our efforts</h2>
        <p>
          In convallis eleifend urna, ac commodo dolor dapibus in. Suspendisse
          eget lacinia magna. Cras vitae sem non urna posuere accumsan.
          Phasellus vehicula lectus ac massa tempus fermentum. In pharetra sem
          fermentum lacinia ultrices. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Nulla non eleifend
          ipsum.{' '}
        </p>
      </main>
    </div>
  );
}
