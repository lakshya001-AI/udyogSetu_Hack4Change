import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import Style from "../App.module.css";
import GoogleTranslate from '../Components/googleTranslate';

function FinancePage() {
    const navigate = useNavigate();

    function logoutUser(){
        navigate("/");
    }

    return (
        <>
            <div className={Style.mainPageDiv}>
                <div className={Style.navBarDiv}>
                    <div className={Style.logoDiv}>
                        {/* logo div */}
                        <p className={Style.logoPara}>udyog<span className={Style.setuSpan}>Setu</span></p>
                    </div>
                    <div className={Style.navigationBtnDiv}>
                        {/* navigation Div */}
                        <Link className={Style.navigationLinks} to="/mainPage">Home</Link>
                        <Link className={Style.navigationLinks} to="/productPage">Products</Link>
                        <Link className={Style.navigationLinks} to="/mentorsPage">Mentors</Link>
                        <Link className={Style.navigationLinks} to="/financePage">Finance</Link>
                        <Link className={Style.navigationLinks} to="/buyersPage">Buyers</Link>
                    </div>
                    <div className={Style.registerAndLoginDiv}>
                        {/* login and logout buttons */}
                        <GoogleTranslate/>
                        <Link className={Style.registerLink} to="/registerPage">Register</Link>
                        <button className={Style.logoutBtn} onClick={logoutUser}>logout</button>
                    </div>
                </div>

              

                <div className={Style.mainFinanceDiv}>

                  <div className={Style.financeHeading}>
                  <h1>Finance <span className={Style.setuSpan}>Groups</span></h1>
                  </div>
                  <div className={Style.financeHeading}>
                    <p>Empowering Growth: Financial Solutions Tailored for Nano and Micro-Entrepreneurs</p>
                  </div>
                  
                  <div className={Style.financelistingDiv}>

                    <div className={Style.financeGroupDiv}>
                      <img src="https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2021/10/28/164173-avantifinancein.jpg?itok=scZ9B7rn" alt="" className={Style.financeCImg}/>
                      <p>Avanti Finance is a financial group that aims to make financial services affordable and accessible in India and help nano/micro Entrepreneurs</p>

                      <Link className={Style.financeLink} to="https://www.avantifinance.in/">Enquiry Now</Link>

                    </div>

                    <div className={Style.financeGroupDiv}>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUx4u9QCOd1dZCBnfavCWm1yf0KGE9GshY1LattyVALOo0rat4zCISjuPikv48vxKc9p0&usqp=CAU" alt="" className={Style.financeCImg}/>
                      <p>Michael and susan dell foundation deliver a range of credit and savings options designed for low-income households and help Entrepreneurs</p>

                      <Link className={Style.financeLink} to="https://www.dell.org/">Enquiry Now</Link>

                    </div>

                    <div className={Style.financeGroupDiv}>
                      <img src="https://content.jdmagicbox.com/v2/comp/baramati/n6/9999p2112.2112.240221205439.d2n6/catalogue/arthan-finance-baramati-branch-anand-nagar-colony-baramati-financial-institutions-iyc6o43l6e.jpg" alt="" className={Style.financeCImg}/>
                      <p>Arthan Finance's supported numerous trailing businesses, shop owners and burgeoning entrepreneurs by providing them with the required working capital</p>

                      <Link className={Style.financeLink} to="https://arthan.finance/">Enquiry Now</Link>

                    </div>

                  </div>

                </div>


            </div>
        </>
    );
}

export default FinancePage;
