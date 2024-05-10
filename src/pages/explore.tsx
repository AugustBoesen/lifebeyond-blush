/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import ParallaxEffect from '@/components/Parallax';

export default function Explore() {
  const { parallaxStyle } = ParallaxEffect();
  return (
    <div>
      <Head>
        <title>Explore | Life Beyond</title>
      </Head>
      {/* BACKGROUND IMAGE */}
      <div className='background bg03' style={parallaxStyle}></div>

      {/* CONTENT */}
      <main>
        <h1>Explore</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at
          ligula a ipsum elementum malesuada pulvinar sed tellus. Donec
          elementum in erat in vestibulum. Curabitur id semper dui. Phasellus
          neque lectus, dignissim ac eleifend id, porttitor non ante.
        </p>
        <h2>World overview</h2>
        <p>
          Donec feugiat, orci non varius molestie, tellus dui tempor orci, nec
          interdum nunc mauris non metus. Donec consectetur fermentum ornare.
          Donec dictum euismod laoreet. Vestibulum efficitur sapien nec massa
          scelerisque, a cursus est aliquam. Ut ullamcorper tortor gravida,
          lobortis lacus nec, placerat neque. Pellentesque id lobortis purus.
          Etiam nec volutpat augue, eu fermentum arcu.
        </p>
        <h3>The scientific approach (haituvateoria)</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at
          ligula a ipsum elementum malesuada pulvinar sed tellus. Donec
          elementum in erat in vestibulum. Curabitur id semper dui. Phasellus
          neque lectus, dignissim ac eleifend id, porttitor non ante.
        </p>
        <h2>Magical entities</h2>
        <p>
          In convallis eleifend urna, ac commodo dolor dapibus in. Suspendisse
          eget lacinia magna. Cras vitae sem non urna posuere accumsan.
          Phasellus vehicula lectus ac massa tempus fermentum. In pharetra sem
          fermentum lacinia ultrices. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Nulla non eleifend
          ipsum.
        </p>
        <h3>Umbrites</h3>
        <p>
          Sed cursus placerat elit et convallis. Vivamus eu sem neque. Quisque
          bibendum tempus libero nec dictum. Vivamus turpis nunc, malesuada id
          maximus et, tempus vel magna. Pellentesque egestas dolor sem, in
          scelerisque leo convallis quis. Suspendisse non mauris nisi. Fusce in
          vehicula mauris. Proin ut nisi nec enim gravida imperdiet vitae
          bibendum justo. In ac tellus metus.{' '}
        </p>
        <h3>Pseudomagics</h3>
        <p>
          Vestibulum condimentum, neque sed scelerisque finibus, purus erat
          venenatis eros, in dictum ipsum augue vitae est. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. In molestie congue nisi, vitae rutrum ex sollicitudin a.
          Proin sit amet orci eget diam tincidunt dapibus. Donec mollis vehicula
          maximus.{' '}
        </p>
        <h3>Gods & greater beings</h3>
        <p>
          In hac habitasse platea dictumst. Nunc eros ante, porta non semper sit
          amet, imperdiet id neque. Phasellus fringilla mi in augue
          sollicitudin, sit amet vehicula ante consectetur.{' '}
        </p>
        <h2>The exite society</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at
          ligula a ipsum elementum malesuada pulvinar sed tellus. Donec
          elementum in erat in vestibulum. Curabitur id semper dui. Phasellus
          neque lectus, dignissim ac eleifend id, porttitor non ante. Donec
          feugiat, orci non varius molestie, tellus dui tempor orci, nec
          interdum nunc mauris non metus. Donec consectetur fermentum ornare.
          Donec dictum euismod laoreet.{' '}
        </p>
        <h3>The Enlightened</h3>
        <p>
          Vestibulum efficitur sapien nec massa scelerisque, a cursus est
          aliquam. Ut ullamcorper tortor gravida, lobortis lacus nec, placerat
          neque. Pellentesque id lobortis purus. Etiam nec volutpat augue, eu
          fermentum arcu. Praesent rutrum, risus a pharetra volutpat, nunc lacus
          placerat mi, tristique finibus felis metus vel risus.
        </p>
        <h3>Separatist axis</h3>
        <p>
          Ut euismod fermentum nulla, ac auctor lorem sodales vel. Aenean cursus
          eget metus nec suscipit. Quisque accumsan nisi quis neque suscipit
          ultricies. Nulla facilisi. Pellentesque lobortis tortor sem, et
          condimentum magna tempus vel. Maecenas tempus metus non mi faucibus
          malesuada.
        </p>
        <h3>Mages Guild</h3>
        <p>
          In convallis eleifend urna, ac commodo dolor dapibus in. Suspendisse
          eget lacinia magna. Cras vitae sem non urna posuere accumsan.
          Phasellus vehicula lectus ac massa tempus fermentum. In pharetra sem
          fermentum lacinia ultrices. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Nulla non eleifend
          ipsum.
        </p>
      </main>
    </div>
  );
}
