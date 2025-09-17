import { useState, useEffect } from 'react';
import { validatePasswordClient, getPasswordStrengthColor, PasswordValidationResult } from '@utils/passwordValidation';

interface PasswordStrengthMeterProps {
  password: string;
  showDetails?: boolean;
  className?: string;
}

const PasswordStrengthMeter = ({ password, showDetails = true, className = '' }: PasswordStrengthMeterProps) => {
  const [validation, setValidation] = useState<PasswordValidationResult>({
    isValid: false,
    strength: 0,
    level: 'Very Weak',
    errors: [],
    warnings: [],
  });

  useEffect(() => {
    if (password) {
      const result = validatePasswordClient(password);
      setValidation(result);
    } else {
      setValidation({
        isValid: false,
        strength: 0,
        level: 'Very Weak',
        errors: [],
        warnings: [],
      });
    }
  }, [password]);

  const strengthColor = getPasswordStrengthColor(validation.strength);

  return (
    <div className={`space-y-2 ${className}`}>
      {/* Strength Bar */}
      <div className="w-full">
        <div className="flex justify-between text-xs text-gray-600 mb-1">
          <span>Password Strength</span>
          <span className="font-medium">{validation.level}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${strengthColor}`}
            style={{ width: `${validation.strength}%` }}
          />
        </div>
      </div>

      {/* Detailed Requirements */}
      {showDetails && password && (
        <div className="space-y-1 text-xs">
          {/* Errors */}
          {validation.errors.length > 0 && (
            <div className="space-y-1">
              {validation.errors.map((error, index) => (
                <div key={index} className="flex items-center text-red-600">
                  <svg className="w-3 h-3 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  {error}
                </div>
              ))}
            </div>
          )}

          {/* Warnings */}
          {validation.warnings.length > 0 && (
            <div className="space-y-1">
              {validation.warnings.map((warning, index) => (
                <div key={index} className="flex items-center text-yellow-600">
                  <svg className="w-3 h-3 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {warning}
                </div>
              ))}
            </div>
          )}

          {/* Success message */}
          {validation.isValid && validation.strength >= 80 && (
            <div className="flex items-center text-green-600">
              <svg className="w-3 h-3 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Strong password! Good job.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PasswordStrengthMeter;
