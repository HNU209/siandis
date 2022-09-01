import React from 'react';
import '../css/portfolio-item.css';

export default function PortfolioItem(props) {
    const title = props.title;
    const subTitle = props.subTitle;
    const src = props.src;

    return (
        <div className='portfolio-item'>
            <div className='portfolio-img'>
                <a className="portfolio-link" href='#portfolioModal1'>
                    <div className='portfolio-hover'>
                        <svg className="portfolio-svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                            <path fill="currentColor" d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"></path>
                        </svg>
                    </div>
                    <img className='img-fluid' src={src}></img>
                </a>
            </div>
            <div className="portfolio-caption">
                <div className='portfolio-caption-heading'>
                    {title}
                </div>
                <div className='portfolio-caption-subheading'>
                    {subTitle}
                </div>
            </div>
        </div>
    )
}