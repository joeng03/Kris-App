import React, { useState } from "react";
import SignatureCanvas from 'react-signature-canvas'
import "./styles/TermsAndConditions.css";

const TermsAndConditions = () => {


    const [trimmedDataURL, setTrimmedDataURL] = useState();
    let sigPad = {}
    const clear = () => {
        sigPad.clear()
    }
    const trim = () => {
        setTrimmedDataURL(sigPad.getTrimmedCanvas().toDataURL('image/png'))
    }
    return (
        <div className="container">
            <h2 className="title">Terms and Conditions</h2>

            <h3>1. Eligibility:</h3>
            <p>1.1 You must be a legally registered business entity eligible to conduct business in your respective jurisdiction.</p>
            <p>1.2 You must have a valid and operational merchant account capable of accepting payments from customers.</p>

            <h3>2. Application Process:</h3>
            <p>2.1 To sign up for the Program, you must complete the merchant application form provided by Singapore Airlines, which includes providing accurate and up-to-date information about your business.</p>
            <p>2.2 Singapore Airlines reserves the right to approve or reject any application at its sole discretion, without the need for providing any reasons.</p>
            <p>2.3 Upon approval, you will be issued a unique merchant identification number ("Merchant ID").</p>

            <h3>3. Program Participation:</h3>
            <p>3.1 As a participating merchant, you agree to accept Singapore Airlines KrisFlyer miles ("Miles") as a form of payment for goods or services purchased by KrisFlyer members.</p>
            <p>3.2 You must display the Singapore Airlines Kris logo and indicate acceptance of KrisFlyer miles prominently at your point of sale or on your e-commerce platform.</p>
            <p>3.3 You will be solely responsible for the accuracy and validity of all transactions made using KrisFlyer miles.</p>
            <p>3.4 Singapore Airlines reserves the right to update or modify the Program rules, including the mileage conversion rates, at any time, with or without notice.</p>

            <h3>4. Settlement and Accounting:</h3>
            <p>4.1 Singapore Airlines will provide a monthly statement detailing the number of KrisFlyer miles redeemed by your customers.</p>
            <p>4.2 The conversion rate for KrisFlyer miles to monetary value will be determined by Singapore Airlines and communicated to you.</p>
            <p>4.3 Payments will be made to you within a reasonable timeframe following the end of each calendar month.</p>
            <p>4.4 You are responsible for any fees associated with the conversion of KrisFlyer miles into monetary value, including but not limited to transaction fees or bank charges.</p>

            <h3>9. Governing Law and Jurisdiction:</h3>
            <p>9.1 This Agreement shall be governed by and construed in accordance with the laws of Singapore.</p>
            <p>9.2 Any disputes arising out of or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts of Singapore.</p>

            <h3>By signing below, you acknowledge that you have read, understood, and agreed to the terms and conditions outlined in this Agreement.</h3>

            <p>Merchant's Name: _______________________</p>
            <p>Merchant's Signature: _______________________</p>
            <p>Date: _______________________</p>

            <div className="sigContainer">
                <SignatureCanvas canvasProps={{ className: 'sigCanvas' }} ref={(ref) => { sigPad = ref }} />
            </div>

            <button onClick={clear}>
                Clear
            </button>
            <button onClick={trim}>
                Trim
            </button>
            {
                trimmedDataURL
                    ? <img
                        src={trimmedDataURL} />
                    : null
            }

        </div>


    );
}

export default TermsAndConditions