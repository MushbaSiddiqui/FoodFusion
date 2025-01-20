import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaUser, FaEnvelope, FaMapMarkerAlt, FaPhone, FaTag, FaCreditCard, FaTruck } from 'react-icons/fa';

// const OrderForm = ({ cartItems, totalAmount, onSubmit, onBack }) => {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         fullName: '',
//         email: '',
//         phone: '',
//         address: '',
//         city: '',
//         postalCode: '',
//         instructions: '',
//         paymentMethod: 'card',
//         couponCode: ''
//     });

//     const [errors, setErrors] = useState({});

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//         // Clear error when field is modified
//         if (errors[name]) {
//             setErrors(prevState => ({
//                 ...prevState,
//                 [name]: ''
//             }));
//         }
//     };

//     const validateForm = () => {
//         const newErrors = {};
        
//         // Name validation
//         if (!formData.fullName.trim()) {
//             newErrors.fullName = 'Name is required';
//         } else if (formData.fullName.length < 3) {
//             newErrors.fullName = 'Name must be at least 3 characters';
//         }

//         // Email validation
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!formData.email) {
//             newErrors.email = 'Email is required';
//         } else if (!emailRegex.test(formData.email)) {
//             newErrors.email = 'Invalid email format';
//         }

//         // Phone validation
//         const phoneRegex = /^\d{10,}$/;
//         if (!formData.phone) {
//             newErrors.phone = 'Phone number is required';
//         } else if (!phoneRegex.test(formData.phone)) {
//             newErrors.phone = 'Invalid phone number (min 10 digits)';
//         }

//         // Address validation
//         if (!formData.address.trim()) {
//             newErrors.address = 'Address is required';
//         }

//         // City validation
//         if (!formData.city.trim()) {
//             newErrors.city = 'City is required';
//         }

//         // Postal code validation
//         const postalRegex = /^\d{5,6}$/;
//         if (!formData.postalCode) {
//             newErrors.postalCode = 'Postal code is required';
//         } else if (!postalRegex.test(formData.postalCode)) {
//             newErrors.postalCode = 'Invalid postal code (5-6 digits)';
//         }

//         return newErrors;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newErrors = validateForm();

//         if (Object.keys(newErrors).length === 0) {
//             const orderData = {
//                 ...formData,
//                 totalAmount,
//                 items: cartItems,
//                 orderDate: new Date().toISOString()
//             };

//             onSubmit(orderData);

//             navigate('/thank-you', {
//                 state: {
//                     orderDetails: orderData,
//                     deliveryTime: 30,
//                     totalAmount
//                 }
//             });
//         } else {
//             setErrors(newErrors);
//             // Scroll to first error
//             const firstError = document.querySelector('.error-message');
//             firstError?.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     // Error message component
//     const ErrorMessage = ({ error }) => (
//         error ? <p className="mt-1 text-sm text-red-500 error-message">{error}</p> : null
//     );

//     const paymentMethods = [
//         { id: 'card', label: 'Credit/Debit Card' },
//         { id: 'cod', label: 'Cash on Delivery' },
//         { id: 'bank', label: 'Bank Transfer' }
//     ];

//     const calculateTotal = () => {
//         return cartItems?.reduce((total, item) => {
//             const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
//             return total + (price * item.quantity);
//         }, 0);
//     };

//     return (
//         <div className="min-h-screen max-w-5xl bg-gray-50 py-12">
//             <div className="max-w-[1940px] mx-auto px-4 sm:px-6 lg:px-8">
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                     <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//                         {/* Form Section */}
//                         <div className="lg:col-span-8 space-y-8">
//                             {/* Personal Details */}
//                             <section className="bg-white backdrop-blur-sm w-[35rem] p-8 rounded-xl shadow-lg">
//                                 <h2 className="text-2xl font-bold mb-6">Personal Details</h2>
//                                 <div className="space-y-6">
//                                     {/* Existing personal detail fields */}
//                                     <div className="relative">
//                                         <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                                             <FaUser className="text-gray-400" />
//                                         </div>
//                                         <input
//                                             type="text"
//                                             name="fullName"
//                                             value={formData.fullName}
//                                             onChange={handleChange}
//                                             placeholder="Full Name"
//                                             className={`w-full px-5 py-4 text-lg border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pl-12 ${
//                                                 errors.fullName ? 'border-red-500' : 'border-gray-300'
//                                             }`}
//                                         />
//                                         <ErrorMessage error={errors.fullName} />
//                                     </div>

//                                     <div className="relative">
//                                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                             <FaEnvelope className="text-gray-400" />
//                                         </div>
//                                         <input
//                                             type="email"
//                                             name="email"
//                                             value={formData.email}
//                                             onChange={handleChange}
//                                             placeholder="Email Address"
//                                             className={`w-full px-5 py-4 text-lg border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pl-12 ${
//                                                 errors.email ? 'border-red-500' : 'border-gray-300'
//                                             }`}
//                                         />
//                                         <ErrorMessage error={errors.email} />
//                                     </div>

//                                     <div className="relative">
//                                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                             <FaPhone className="text-gray-400" />
//                                         </div>
//                                         <input
//                                             type="tel"
//                                             name="phone"
//                                             value={formData.phone}
//                                             onChange={handleChange}
//                                             placeholder="Phone Number"
//                                             className={`w-full px-5 py-4 text-lg border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pl-12 ${
//                                                 errors.phone ? 'border-red-500' : 'border-gray-300'
//                                             }`}
//                                         />
//                                         <ErrorMessage error={errors.phone} />
//                                     </div>
//                                 </div>
//                             </section>

//                             {/* Shipping Details */}
//                             <section className="bg-white w-[35rem] p-6 rounded-lg shadow">
//                                 <h2 className="text-xl font-bold mb-6">Shipping Details</h2>
//                                 <div className="space-y-4">
//                                     <div className="relative">
//                                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
//                                             <FaMapMarkerAlt className="text-gray-400" />
//                                         </div>
//                                         <input
//                                             type="text"
//                                             name="address"
//                                             value={formData.address}
//                                             onChange={handleChange}
//                                             placeholder="Shipping Address"
//                                             className={`w-full px-5 py-4 text-lg border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pl-12 ${
//                                                 errors.address ? 'border-red-500' : 'border-gray-300'
//                                             }`}
//                                         />
//                                         <ErrorMessage error={errors.address} />
//                                     </div>

//                                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                         <input
//                                             type="text"
//                                             name="city"
//                                             placeholder="City"
//                                             value={formData.city}
//                                             onChange={handleChange}
//                                             className={`w-full px-5 py-4 text-lg border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pl-12 ${
//                                                 errors.city ? 'border-red-500' : 'border-gray-300'
//                                             }`}
//                                         />
//                                         <ErrorMessage error={errors.city} />
//                                         <input
//                                             type="text"
//                                             name="postalCode"
//                                             placeholder="Postal Code"
//                                             className="p-3 border rounded-lg"
//                                             value={formData.postalCode}
//                                             onChange={handleChange}
//                                         />
//                                     </div>

//                                     <textarea
//                                         name="instructions"
//                                         placeholder="Delivery Instructions (Optional)"
//                                         className="w-full p-3 border rounded-lg"
//                                         value={formData.instructions}
//                                         onChange={handleChange}
//                                         rows="3"
//                                     />
//                                 </div>
//                             </section>

//                             {/* Payment Method */}
//                             <section className="bg-white w-[35rem] p-6 rounded-lg shadow">
//                                 <h2 className="text-xl font-bold mb-6">Payment Method</h2>
//                                 <div className="space-y-4">
//                                     {paymentMethods.map(method => (
//                                         <label key={method.id} className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
//                                             <input
//                                                 type="radio"
//                                                 name="paymentMethod"
//                                                 value={method.id}
//                                                 checked={formData.paymentMethod === method.id}
//                                                 onChange={handleChange}
//                                                 className="mr-3"
//                                             />
//                                             <span>{method.label}</span>
//                                         </label>
//                                     ))}
//                                 </div>
//                             </section>

//                             {/* Coupon Code */}
//                             <section className="bg-white w-[35rem] p-6 rounded-lg shadow">
//                                 <h2 className="text-xl font-bold mb-6">Have a Coupon?</h2>
//                                 <div className="relative">
//                                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
//                                         <FaTag className="text-gray-400" />
//                                     </div>
//                                     <input
//                                         type="text"
//                                         name="couponCode"
//                                         value={formData.couponCode}
//                                         onChange={handleChange}
//                                         placeholder="Enter Coupon Code"
//                                         className="pl-10 w-full p-3 border rounded-lg"
//                                     />
//                                 </div>
//                             </section>
//                         </div>
//                     </div>
//                     {/* Order Summary Sidebar */}
//                     <div className="lg:col-span-4">
//                         <div className="bg-white w-[35rem] p-8 rounded-xl shadow-lg sticky top-4">
//                             <h2 className="text-xl font-bold mb-6">Order Summary</h2>
//                             <div className="space-y-4">
//                                 {cartItems?.map(item => (
//                                     <div key={item.id} className="flex justify-between">
//                                         <span>{item.name} x {item.quantity}</span>
//                                         <span>{item.price}</span>
//                                     </div>
//                                 ))}
//                                 <div className="border-t pt-4 mt-4">
//                                     <div className="flex justify-between font-bold mb-6">
//                                         <span>Total Amount</span>
//                                         <span>Rs {totalAmount?.toFixed(2)}</span>
//                                     </div>
//                                     <div className="flex justify-center gap-4">
//                                         <button
//                                             type="button"
//                                             onClick={onBack}
//                                             className="w-[7rem] py-3 bg-blue-600 text-white rounded-lg hover:bg-gray-700 transition"
//                                         >
//                                             Back to Cart
//                                         </button>
//                                         <button
//                                             type="submit"
//                                             className="w-[7rem] bg-green-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
//                                         >
//                                             Place Order
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default OrderForm;