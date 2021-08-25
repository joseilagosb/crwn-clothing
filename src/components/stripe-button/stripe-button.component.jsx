import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';

const StripeButton = ( {price} ) => {
  const priceInCents = price * 100;
  const publishableKey = "pk_test_51JSOEVDIea2yWHiXheK2IiFHtqXhy87s9xydeqdufmZBocAAHDMyZqJZiUoPtgjP5B1CfG7nolXURWoGAcwPesGs00rf7upPln";

  const onToken = token => {
    alert("Pago realizado con exito");
  }

  return (
    <StripeCheckout
      label="Pagar con 💳"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Tu total es $${price}`}
      amount={priceInCents}
      panelLabel="Pagar ahora"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeButton;