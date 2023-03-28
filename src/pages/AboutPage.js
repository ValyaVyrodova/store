import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about'/>
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>Occaecat proident cillum ea ex fugiat pariatur velit aute et consectetur veniam esse. Aliqua occaecat in cillum ex velit voluptate eu enim sunt in eu tempor officia laboris. Qui laboris consectetur incididunt minim consequat nisi et duis irure sit consequat quis. Enim commodo officia in culpa esse irure eu ex ut labore ex culpa aliquip. Eu aute in fugiat ut nisi labore enim veniam eiusmod excepteur amet. Est in ut Lorem anim laboris. Nulla voluptate laborum enim voluptate occaecat.</p>
        </article>

      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
