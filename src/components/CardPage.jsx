import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import OrderForm from './OrderForm';
import ThankYouPage from './ThankYouPage';
import StepIndicator from './StepIndicator';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';

const CardPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [orders, setOrders] = useState(() => {
        const savedOrders = localStorage.getItem('orders');
        return savedOrders ? JSON.parse(savedOrders) : [];
    });
    const [orderDetails, setOrderDetails] = useState(null);
    const [showOrderForm, setShowOrderForm] = useState(false);
    const [showThankYouPage, setShowThankYouPage] = useState(false);
    const deliveryTime = 30;
    const [currentStep, setCurrentStep] = useState(1);

    useEffect(() => {
        if (location.state && location.state.item) {
            const newOrder = location.state.item;
            const exists = orders.some(order => order.name === newOrder.name);
            if (!exists) {
                const updatedOrders = [...orders, { ...newOrder, quantity: 1 }];
                setOrders(updatedOrders);
                localStorage.setItem('orders', JSON.stringify(updatedOrders));
            }
        }
    }, [location.state, orders]);

    const handleUpdateQuantity = (index) => {
        const newOrders = [...orders];
        const newQuantity = prompt('Enter new quantity:', newOrders[index].quantity);
        if (newQuantity && !isNaN(newQuantity) && newQuantity > 0) {
            newOrders[index].quantity = parseInt(newQuantity);
            setOrders(newOrders);
        }
    };

    const handleDeleteItem = (index) => {
        if (window.confirm('Are you sure you want to remove this item?')) {
            const newOrders = orders.filter((_, idx) => idx !== index);
            setOrders(newOrders);
            localStorage.setItem('orders', JSON.stringify(newOrders));
            
            if (newOrders.length === 0) {
                localStorage.removeItem('orders');
                setShowOrderForm(false);
                setCurrentStep(1);
            }
        }
    };

    const calculateTotalPrice = () => {
        return orders.reduce((total, order) => {
            const priceNumber = parseFloat(order.price.replace(/[^0-9.]/g, ''));
            return total + (priceNumber * order.quantity);
        }, 0);
    };

    const handleCheckout = () => {
        setShowOrderForm(true);
        setCurrentStep(2);
    };

    const handleOrderSubmit = (orderData) => {
        setOrderDetails(orderData);
        setOrders([]);
        localStorage.removeItem('orders');
        
        navigate('/thank-you', { 
            state: { 
                orderDetails: orderData,
                deliveryTime: 30,
                totalAmount: calculateTotalPrice() 
            }
        });
    };

    const handleBackToCart = () => {
        setShowOrderForm(false);
        setCurrentStep(1);
    };

    const clearCart = () => {
        setOrders([]);
        localStorage.removeItem('orders');
    };

    return (
        <div className="min-h-screen mt-[6rem] bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="w-full flex justify-center py-8 mb-6">
                <div className="max-w-3xl w-full">
                    <StepIndicator currentStep={currentStep} />
                </div>
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center">
                    <div className="max-w-2xl w-full">
                        {showThankYouPage ? (
                            <ThankYouPage 
                                deliveryTime={deliveryTime}
                                orderDetails={orderDetails}
                                totalAmount={calculateTotalPrice()}
                                clearCart={clearCart}
                            />
                        ) : !showOrderForm ? (
                            <>
                                <div className="border-b border-gray-200 pb-4 mb-6">
                                    <h1 className="text-2xl font-bold text-gray-800">Shopping Cart</h1>
                                    <p className="text-sm text-gray-500 mt-1">{orders.length} items in cart</p>
                                </div>
                                <div className="space-y-4 mb-6">
                                    {orders.map((order, index) => (
                                        <div key={index} className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                                            <div className="flex items-center gap-4">
                                                <img 
                                                    src={order.image} 
                                                    alt={order.name}
                                                    className="w-16 h-16 object-cover rounded-lg shadow-sm"
                                                />
                                                <div>
                                                    <h3 className="font-semibold text-gray-800">{order.name}</h3>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <span className="text-sm text-gray-500">Qty: {order.quantity}</span>
                                                        <span className="text-sm font-medium text-blue-600">{order.price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 ">
                                                <button 
                                                    onClick={() => handleUpdateQuantity(index)}
                                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                                                >
                                                    <FaEdit className="w-4 h-4" />
                                                </button>
                                                <button 
                                                    onClick={() => handleDeleteItem(index)}
                                                    className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                                                >
                                                    <FaTrash className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="border-t border-gray-200 pt-4 mt-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-gray-600">Total</span>
                                        <span className="text-2xl font-bold text-gray-800">
                                            Rs {calculateTotalPrice()}
                                        </span>
                                    </div>
                                    <div className="flex justify-center mt-[4rem] gap-3">
                                        <Link 
                                            to="/menu"
                                            className="w-[7rem] py-2 pl-1 bg-blue-600 text-white text-center rounded-lg hover:bg-green-700 transition-colors font-normal shadow-sm hover:shadow-md"
                                        >
                                            Add Items
                                        </Link>
                                        <button
                                            onClick={handleCheckout}
                                            className="w-[6rem] py-2 pl-1 bg-green-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-normal shadow-sm hover:shadow-md"
                                        >
                                            Checkout
                                        </button>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <OrderForm 
                                onSubmit={handleOrderSubmit}
                                totalAmount={calculateTotalPrice()}
                                cartItems={orders}
                                onBack={handleBackToCart}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardPage;