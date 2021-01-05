import React, { useEffect, useState } from "react";
import Modal from 'react-modal';
// Modal.setAppElement('#root')


import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const TEAM = [
  {
    id: 0,
    name: 'YouTube live com Ana Gisele',
    image: 'usr-001.jpg',
    role: 'Founder',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat nibh sem, nec laoreet mauris interdum non. Morbi suscipit dignissim blandit. Aliquam convallis arcu eros. Praesent egestas finibus nisl, eget ultricies purus sollicitudin a. Sed et dapibus elit, in dictum mauris. Duis nec velit tortor.',
    dateUK: '',
    dateBR: '',
    dateUS: '',
  },
  {
    id: 1,
    name: 'Como ler para os seus filhos',
    image: 'lisa.jpg',
    role: 'Art Director',
  },
  {
    id: 2,
    name: 'Assitindo desenhos em casa',
    image: 'ashlyn.jpg',
    role: 'Frontend Engineer',
  },
  {
    id: 3,
    name: 'Skype com meus avôs no Brasil',
    image: 'todd.jpg',
    role: 'Designer',
  },
  {
    id: 4,
    name: 'Martin White',
    image: 'martin.jpg',
    role: 'Backend Engineer',
  },
  {
    id: 5,
    name: 'Rose Leslie',
    image: 'rose.jpg',
    role: 'Marketing',
  },
];

const Events = () => {
  
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [eventId, setEventId] = React.useState('')
  const [eventName, setEventName] = React.useState('')
  const [eventDescription, setEventDescription] = React.useState('')

  const edit = (itemId, itemName, itemDescription) => {
    console.log(itemId, itemName, itemDescription)
    setEventName(itemName)
    setEventDescription(itemDescription)
    setModalIsOpen(true)
    
  }


  
  return(
      <StaticQuery
        query={graphql`
          query {
            allFile(filter: { sourceInstanceName: { eq: "team" } }) {
              edges {
                node {
                  relativePath
                  childImageSharp {
                    fluid(maxWidth: 400, maxHeight: 400) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            art_team: file(
              sourceInstanceName: { eq: "art" }
              name: { eq: "team_work" }
            ) {
              childImageSharp {
                fluid(maxWidth: 1600) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        `}
        render={data => (
          <Section id="eventos" accent="secondary">
            <Container style={{ position: 'relative' }}>
              <h1>Eventos 2021</h1>
              <TeamGrid>
                {TEAM.map(({ id, name, image, role, description }) => {
                  const img = data.allFile.edges.find(
                    ({ node }) => node.relativePath === image
                  ).node;

                  return (
                    <div key={name}>
                      <div class="list-block calendar-preview">
                          <div class="media">
                            <h3>{name}</h3>
                            <div class="media-left">
                              <div class="cal-wrapper">
                                <div class="cal-month">
                                  <span>MAR</span>
                                </div>
                                <div class="cal-day">
                                  <span>08</span>
                                </div>
                              </div>
                            </div>
                            <div class="media-body">
                              <time>BR: 08:00</time>
                              <time>US: 12:00</time>
                              <time>UK: 16:00</time>
                              <time>UE: 17:00</time>                              
                            </div>                           
                          </div>
                          <button 
                          id={id}
                          className="btn__event" 
                          type="button"
                          onClick={() => edit(id, name, description)}
                        >Detalhes</button>
                      </div>
                      


                    </div>
                  );
                })}
              </TeamGrid>

              <Modal 
                closeTimeoutMS={250} 
                isOpen={modalIsOpen} 
                shouldCloseOnOverlayClick={true} 
                onRequestClose={() => setModalIsOpen(false)}
                style={
                  {
                    overlay: {
                      backgroundColor: 'rgba(139, 216, 237, 0.5)'
                    },
                    content: {
                      color: '#000',
                      position: 'absolute',
                      top: '40px',
                      left: '40px',
                      right: '40px',
                      bottom: '40px',
                      border: '1px solid #ccc',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '4px',
                      outline: 'none',
                      padding: '20px',                      
                      margin: '0 auto',
                      width: '50%',
                      height: '50%',
                      marginTop: '10%'
                    }
                  }
                }
              >
                <h2>{eventName}</h2>
                <p>{eventDescription}</p>
                <button id="modal__close" onClick={() => setModalIsOpen(false)}>Fechar</button>
              </Modal>
              <Art>
                <Img fluid={data.art_team.childImageSharp.fluid} />
              </Art>
              <ArtMobile>
                <Img fluid={data.art_team.childImageSharp.fluid} />
              </ArtMobile>
            </Container>
          </Section>
        )}
      />
  );
}


const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-template-rows: min-content;
  grid-gap: 25px;
  justify-content: space-between;
  width: 50%;
  margin-top: 72px;

  @media (max-width: ${props => props.theme.screen.lg}) {
    justify-content: start;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (max-width: ${props => props.theme.screen.xs}) {
    grid-gap: 24px;
  }
`;

const Art = styled.figure`
  width: 800px;
  margin: -80px 0;
  position: absolute;
  top: 0;
  left: 70%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 20%;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

const ArtMobile = styled.figure`
  width: 100%;
  margin: 0;
  display: none;
  margin-top: 64px;
  margin-bottom: -60%;

  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
  }
`;





export default Events;
