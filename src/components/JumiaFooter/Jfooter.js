import React from 'react'

import './footer.css'
import { FiInstagram, FiTwitter, FiLinkedin, FiFacebook } from 'react-icons/fi';
const Footer = () => {
  const partners= [
    {
      id:1,
      image: 'https://image.kilimall.com/kenya/PcImages/static/logo_visa.png.webp'
    },
    {
      id:2,
      image: 'https://image.kilimall.com/kenya/PcImages/static/logo_mastercard.png.webp'
    },
    {
      id:3,
      image: 'https://image.kilimall.com/kenya/PcImages/static/logo_mpesa.png.webp'
    },
    {
      id:4,
      image: 'https://image.kilimall.com/kenya/PcImages/static/logo_Ecobank.png.webp'
    },
    {
      id:5,
      image: 'https://image.kilimall.com/kenya/PcImages/static/logo_lipapay.png.webp'
    },
  ]
  return (
    <footer>
        <div className='row footer-row'>
            <div className='contact-us'>
                <h3>CONTACT US</h3>
                <ul>
                    <li>ELP CHAPTER DeKUT   </li> 

                    <li><a href="tel:+254 791849836">+254 794183313</a></li>

                    <li className="footer-space"><a
                            href="elcdekutchapter@gmail.com">eddiea@gmail.com</a></li>

</ul>
            </div>
            <div className='our-work'>
                <h3>MAKE MONEY WITH JUMIA</h3>
                <ul>

                    <li>Sell on Jumia</li>

                    <li>Become a Logistics Service Partner</li>

                    <li>Become a Sales Consultant</li>

                    <li>Entrepreneurship  &
                            Financial Education</li>

                    <li>Jumia City Partner Program</li>

                </ul>
            </div>
            <div className='links'>
                 <h3>QUICK LINKS</h3>
                 <ul>

                    <li><a href="#">About Eddiea</a></li>

                    <li><a href="#">Impact Stories</a></li>

                    <li><a href="#">Reports</a></li>

                    <li><a href="#">Partners</a></li>

                    <li><a href="#">Get involved</a></li>

                </ul>
            </div>
            <div className='social-media'>
              <h3>SOCIAL MEDIA</h3>
             <ul className="social-icons">
                    <li><FiFacebook /></li>
                    <li><FiTwitter /></li>
                    <li><FiLinkedin /></li>
                    <li><FiInstagram /></li>
                </ul>

                <ul className="policy-ul">
                    <li><a href="/privacy-policy/">Privacy Policy | </a></li>
                    <li><a href="/terms-and-conditions/"> T&Cs</a></li>
                </ul>
              


            </div>
        </div>

        <div className='partners'>
            <h1>Partnered with</h1>
            <div className='partners-logos'>
              {partners.map((partner) => {
                  return (
                      <div className='partner' key={partner.id}>
                          <img src={partner.image} alt='partner' />
                      </div>
                  )
              } )}
            </div>
          </div>
          <a className="copyright">© EDDIEA 2022</a>
    </footer>
  )
}

export default Footer