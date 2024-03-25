import React from 'react'
import styled from 'styled-components';

const Contact = () => {
  return (
    <Wrapper>
      <h1 className="common-heading">Contact</h1>

      <iframe title="Embedded Video" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3083.3385703057015!2d-77.15133842422564!3d39.393845671622344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c82d00a117868d%3A0xa5e68529c1e9287c!2s1605%20Porter%20Creek%20Ct%2C%20Mt%20Airy%2C%20MD%2021771!5e0!3m2!1sen!2sus!4v1711365726392!5m2!1sen!2sus"
        width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form action='https://formspree.io/f/xnqebelr' method='POST' className='contact-inputs'>

            <input type='text' placeholder='username' name='username' required autoComplete='off' />

            <input type='email' placeholder='Email' name='Email' required autoComplete='off' />

            <textarea name='Message' cols='30' rows='10' required autoComplete='off'></textarea>

            <input type='submit' value='send' />

          </form>
        </div>
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;


export default Contact