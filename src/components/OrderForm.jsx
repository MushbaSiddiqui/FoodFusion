import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StepIndicator from './StepIndicator';

const OrderForm = ({ cartItems, totalAmount, onSubmit }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        instructions: '',
        paymentMethod: 'card',
        couponCode: ''
    });

    const [errors, setErrors] = useState({});
    const [showThankYouPage, setShowThankYouPage] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        // Clear error when field is modified
        if (errors[name]) {
            setErrors(prevState => ({
                ...prevState,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        // Name validation
        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Name is required';
        } else if (formData.fullName.length < 3) {
            newErrors.fullName = 'Name must be at least 3 characters';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        // Phone validation
        const phoneRegex = /^\d{10,}$/;
        if (!formData.phone) {
            newErrors.phone = 'Phone number is required';
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = 'Invalid phone number (min 10 digits)';
        }

        // Address validation
        if (!formData.address.trim()) {
            newErrors.address = 'Address is required';
        }

        // City validation
        if (!formData.city.trim()) {
            newErrors.city = 'City is required';
        }

        // Postal code validation
        const postalRegex = /^\d{5,6}$/;
        if (!formData.postalCode) {
            newErrors.postalCode = 'Postal code is required';
        } else if (!postalRegex.test(formData.postalCode)) {
            newErrors.postalCode = 'Invalid postal code (5-6 digits)';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();

        if (Object.keys(newErrors).length === 0) {
            const orderData = {
                ...formData,
                totalAmount,
                items: cartItems,
                orderDate: new Date().toISOString()
            };
            
            // First call parent's onSubmit
            onSubmit(orderData);
            
            // Then navigate to thank you page with order data
            navigate('/thank-you', { 
                state: { 
                    orderDetails: orderData,
                    deliveryTime: 30,
                    totalAmount 
                }
            });
        } else {
            setErrors(newErrors);
        }
    };

    // Add error message component
    const ErrorMessage = ({ error }) => (
        error ? <p className="mt-1 text-sm text-red-500 error-message">{error}</p> : null
    );

    return (
        <div className="min-h-screen max-w-5xl bg-gray-50 py-12">
            <div className="max-w-[1940px] mx-auto px-4 sm:px-6 lg:px-8">
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full">
                    <h2 className="text-2xl font-bold mb-4">Order Details</h2>
                    {/* Full Name */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className={`w-full px-5 py-4 text-lg border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                                errors.fullName ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        <ErrorMessage error={errors.fullName} />
                    </div>
                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            className={`w-full px-5 py-4 text-lg border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                                errors.email ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        <ErrorMessage error={errors.email} />
                    </div>
                    {/* Phone */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className={`w-full px-5 py-4 text-lg border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                                errors.phone ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        <ErrorMessage error={errors.phone} />
                    </div>
                    {/* Address */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Shipping Address"
                            className={`w-full px-5 py-4 text-lg border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                                errors.address ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        <ErrorMessage error={errors.address} />
                    </div>
                    {/* City */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">City</label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="City"
                            className={`w-full px-5 py-4 text-lg border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                                errors.city ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        <ErrorMessage error={errors.city} />
                    </div>
                    {/* Postal Code */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Postal Code</label>
                        <input
                            type="text"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            placeholder="Postal Code"
                            className={`w-full px-5 py-4 text-lg border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                                errors.postalCode ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        <ErrorMessage error={errors.postalCode} />
                    </div>
                    {/* Instructions */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Instructions</label>
                        <textarea
                            name="instructions"
                            value={formData.instructions}
                            onChange={handleChange}
                            placeholder="Delivery Instructions (Optional)"
                            className="w-full p-3 border rounded-lg"
                            rows="3"
                        />
                    </div>
                    {/* Payment Method */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Payment Method</label>
                        <select
                            name="paymentMethod"
                            value={formData.paymentMethod}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="card">Credit/Debit Card</option>
                            <option value="cod">Cash on Delivery</option>
                            <option value="bank">Bank Transfer</option>
                        </select>
                    </div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-200 w-full"
                    >
                        Place Order
                    </button>
                </form>
            </div>
        </div>
    );
};

export default OrderForm;
