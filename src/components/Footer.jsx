import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { SiIndeed } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <>
    <div className='foot'>
      <h3>Ganga Global Homes Private Limited</h3>
      <p>Ground Floor, Vatika Tower A, Sector 54, Golf Course Road, Gurugram, Haryana 122003</p>
      <p>+91-1244192301</p>
      <p>Disclaimer : All designs, specifications are illustrative and subject to change. All images are graphic depiction and purely artistic in nature.</p>
    </div>

    <div className='footer_page'>
        <div  className='foot'>
        <h1>GANGA</h1>
        <p>REALTY</p>
        </div>
        <div>
        <div class="container text-center">
        <div class="row align-items-center">
        <div className="col ">
            <h3>Company</h3>
            <a href="" className='footer-li'>Home</a>
            <br />
            <a href="" className='footer-li'>Our Story </a>
            <br />
            <a href="" className='footer-li'>Career</a>
            <br />
            <a href="" className='footer-li'>Grow With Us</a>
            <br />
            <a href="" className='footer-li'>Ganga Foundation</a>
            <br />
            <a href="" className='footer-li'>Life At Ganga</a>
            <br />
            </div>

            <div className="col ">
            <h3>Insights & News</h3>
            <a href="" className='footer-li'>Resources</a>
            <br />
            <a href="" className='footer-li'>Blog </a>
            <br />
            <a href="" className='footer-li'>Media</a>
            <br />
            <a href="" className='footer-li'>Awards</a>
            <br />
            </div>

            <div className="col ">
            <h3>Support & Policies</h3>
            <a href="" className='footer-li'>Pay Online</a>
            <br />
            <a href="" className='footer-li'>Contact us </a>
            <br />
            <a href="" className='footer-li'>Privacy Policy</a>
            <br />
            <a href="" className='footer-li'>Refund & Cancellation</a>
            <br />
            <a href="" className='footer-li'>Policy</a>
            <br />
            </div>
           </div>
            </div>

            <div class="container text-center">
            <div class="row align-items-center">
            <div className="col ">
            <h3>Reach Us</h3>
            <p>Ground Floor, Tower A, Vatika Tower, Sector 54, Golf Course Road Gurugram, Haryana 122011</p>
            <img src='https://www.gangarealty.com/images/Great-Place-to-work-Logo.svg ' className='img_one'/>
            </div>
            <div className="col ">
            <h3>Phone</h3>
            <p>+91-9990084084</p>
            <h3>Email</h3>
            <p>info@gangarealty.com</p> 
            </div>
            <div className="col ">
              <p>Ganga Global Homes Pvt. Ltd.</p>
              <p>Jai Ganga Realtech LLP</p>
              <CiFacebook /><SiIndeed /><FaInstagramSquare />
            </div>
         </div>
        </div>
        </div>
    </div>

<div className='footer_copy'>
  <p>© Copyright 2025 Ganga Realty, All Rights Reserved.</p>
</div>
    </>
  )
}
