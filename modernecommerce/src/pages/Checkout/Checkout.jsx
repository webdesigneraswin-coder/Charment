import React from 'react'
import Prodisplay from '../../components/Productdisplay/Prodisplay'
import Signature from '../../components/Signaturecollections/Signature'
import Clients from '../../components/Clients/Clients'
import Newsletter from '../../components/Newsletter/NewsLetter'

const Checkout = () => {
  return (
  <>
  <Prodisplay/>
      <Signature/>
    <Clients/>
    <Newsletter/>
  </>
  )
}

export default Checkout