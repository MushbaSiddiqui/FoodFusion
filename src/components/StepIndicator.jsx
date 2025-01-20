import React from 'react';

const StepIndicator = ({ currentStep }) => {
    const steps = [
        { number: 1, name: 'Order Summary' },
        { number: 2, name: 'Personal details' },
        { number: 3, name: 'Confirmation' },
    ];

    return (
      <div className="flex items-center justify-between w-full max-w-5xl mx-auto px-8">
      {steps.map((step, index) => (
          <div key={step.number} className="flex items-center w-full">
              <div className="relative flex flex-col items-center z-10 group">
                  {/* Step Circle with reduced size */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center 
                      border-3 transition-all duration-300 transform hover:scale-110 ${
                      currentStep >= step.number 
                          ? 'bg-blue-600 border-blue-700 shadow-lg' 
                          : 'bg-gray-200 border-gray-300'
                  }`}>
                      <span className="text-white font-bold text-base">
                          {currentStep > step.number ? '✓' : step.number}
                      </span>
                  </div>
        
        {/* Step Name with Hover Effect */}
        <span className={`text-sm font-semibold mt-4 transition-colors duration-300 
          group-hover:text-blue-600 ${
          currentStep >= step.number ? 'text-blue-600' : 'text-gray-600'
        }`}>
          {step.name}
        </span>
      </div>

      {/* Connecting Line with Animation */}
      {index < steps.length - 1 && (
        <div className={`flex-1 h-2 mx-8 rounded-full transition-all duration-500 
          transform hover:scale-y-150 ${
          currentStep > step.number 
            ? 'bg-blue-600' 
            : 'bg-gray-200'
        }`} 
        style={{
          minWidth: '160px',
          opacity: currentStep > step.number ? '1' : '0.7'
        }}
        />
      )}
    </div>
  ))}
</div>
    );
};

export default StepIndicator; 