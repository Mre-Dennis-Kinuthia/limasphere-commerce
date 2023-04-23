import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

const CheckoutPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        country: '',
        postalCode: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        // Here you can add your logic to submit the form data to the backend or to a payment gateway
        console.log(formData)
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData(prevState => ({ ...prevState, [name]: value }))
    }

    return (
        <>
            <Head>
                <title>Checkout - My Ecommerce Store</title>
            </Head>
            <div className="checkout-container">
                <h1>Checkout</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />

                    <label htmlFor="city">City:</label>
                    <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />

                    <label htmlFor="country">Country:</label>
                    <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} required />

                    <label htmlFor="postalCode">Postal Code:</label>
                    <input type="text" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange} required />

                    <button type="submit">Place Order</button>
                </form>
            </div>
            <style jsx>{`
        .checkout-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 40px 20px;
        }
        h1 {
          font-size: 2rem;
          margin-bottom: 20px;
        }
        form {
          display: flex;
          flex-direction: column;
        }
        label {
          margin-top: 20px;
        }
        input {
          height: 40px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        button {
          margin-top: 20px;
          height: 40px;
          border: none;
          border-radius: 4px;
          background-color: #f00;
          color: #fff;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        button:hover {
          background-color: #d00;
        }
      `}</style>
        </>
    )
}

export default CheckoutPage
