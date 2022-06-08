import { useEffect, useState } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import RechargeStripeForm from './stripe/RechargeStripeForm';

const PUBLIC_KEY = `${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`
const stripeTestPromise = loadStripe(PUBLIC_KEY)

export const CreateBillingStripe: React.FC = () => {

  return (
    <>
      <Elements stripe={stripeTestPromise}>
        <RechargeStripeForm />
      </Elements>

    </>
  )
}
