import React from 'react';
import '../css/portfolio.css';
import Item from './PortfolioItem';

import img1 from '../img/header_background.png';
import img2 from '../img/replace.png';
import img3 from '../img/cctv.png';
import img4 from '../img/uam.png';

export default function Portfolio() {
    return (
        <div id='portfolio'>
            <div id="portfolio-text-center">
                <h2 id="portfolio-heading">Portfolio</h2>
                <h3 id="portfolio-subheading">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <div className="portfolio-row">
                <Item title={'디지털트위 기반의 모빌리티\n시스템 운영 알고리즘 개발'} subTitle={''} src={img1}></Item>
                <Item title={'자율주행차 운영 알고리즘 개발\n(차량 재배치)'} subTitle={''} src={img2}></Item>
                <Item title={'영상정보 기반\n교통정보 수집\n '} subTitle={''} src={img3}></Item>
                <Item title={'도심항공교통(UAM) 터미널\n입지방안 마련 연구'} subTitle={''} src={img4}></Item>
                <Item title={5} subTitle={5} src={img1}></Item>
                <Item title={6} subTitle={6} src={img1}></Item>
            </div>
        </div>
    )
}