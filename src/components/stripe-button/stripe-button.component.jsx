import React from 'react';
import './stripe-button.styles.scss';

// Stipe lib.
import StripeCheckout from 'react-stripe-checkout';


const StripButton = ({price}) => {
    // Stripe require price in cents.
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_ceJozx2Gr7w0IYc1tDixVALc009eZFyrHS';

    const onToken = token =>{
        console.log(token);
        alert('Payment Succeeded');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
         />
    )
}

export default StripButton;