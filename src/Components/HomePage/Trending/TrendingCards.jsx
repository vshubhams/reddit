import React from 'react'
import TrendingData from './TrendingData';
import styles from './TrendingCards.module.css';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";


const StyledDiv = styled.div`
 background: ${(props) => (props.isLight ? "#dae0e6" : "rgb(3,3,3)")};
 `

const TrendingCards = () => {
    const { isLight } = useSelector((state) => state.color);
    return (
        <>
        <StyledDiv isLight={isLight}>
        <div className={styles.main_outer}>
         <p className={styles.trndg_p}>Trending Today</p>
         <div className={styles.main}>
        
            {TrendingData.map((e, index) => {
                return (
                   
                    <div className={styles.card} key={index+1}>
                      <div className={styles.card_body}>
                          <h2>{e.title}</h2>
                          <div id={styles.card_body_subtitle}>{e.subtitle}</div>
                          <div id={styles.card_body_footer}>
                              <img src={e.logo} alt="card_logo"/>
                              <span>{e.footerLine}</span>
                          </div>
                      </div>
                    </div>
                   
                )
            })}
            </div>
            </div>
            </StyledDiv>
        </>
    )
}

export default TrendingCards
