import React from 'react';
import { AiOutlineLike, AiOutlineSolution } from 'react-icons/ai';

import { Container } from './styles';

function Post() {
  return (
    <>
      <Container>
        <header>
          <img
            src='https://api.adorable.io/avatars/285/abotadorable'
            alt='Profile'
          />
          <div>
            <h4>Elon Musk</h4>
            <span>8:15, yesterday</span>
          </div>
        </header>
        <main>
          <section>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia
            </p>
          </section>

          <div></div>
        </main>
        <footer>
          <button>
            <AiOutlineLike size={30} />
            200K
          </button>
          <button>
            <AiOutlineSolution size={30} />
            200
          </button>
        </footer>
      </Container>

      <Container>
        <header>
          <img
            src='https://api.adorable.io/avatars/285/abotadorable'
            alt='Profile'
          />
          <div>
            <h4>Elon Musk</h4>
            <span>8:15, yesterday</span>
          </div>
        </header>
        <main>
          <section>
            <p>
              Our Falcon’ 1st step successfully returned from its’ 9th mission.
              Gonna try it out next week one more time. Why not?
            </p>
          </section>

          <img
            src='https://st3.depositphotos.com/2249091/13323/i/450/depositphotos_133236630-stock-photo-toy-rocket-in-space-bedroom.jpg'
            alt=''
          />
        </main>
        <footer>
          <button>
            <AiOutlineLike size={30} />
            200K
          </button>
          <button>
            <AiOutlineSolution size={30} />
            200
          </button>
        </footer>
      </Container>
      <Container>
        <header>
          <img
            src='https://api.adorable.io/avatars/285/abotadorable'
            alt='Profile'
          />
          <div>
            <h4>Elon Musk</h4>
            <span>8:15, yesterday</span>
          </div>
        </header>
        <main>
          <section>
            <p>
              Our Falcon’ 1st step successfully returned from its’ 9th mission.
              Gonna try it out next week one more time. Why not?
            </p>
          </section>

          <img
            src='https://wallpaperplay.com/walls/full/c/5/3/34778.jpg'
            alt=''
          />
        </main>
        <footer>
          <button>
            <AiOutlineLike size={30} />
            200K
          </button>
          <button>
            <AiOutlineSolution size={30} />
            200
          </button>
        </footer>
      </Container>
    </>
  );
}

export default Post;
