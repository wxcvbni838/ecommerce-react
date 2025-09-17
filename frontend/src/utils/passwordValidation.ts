export interface PasswordValidationResult {
  isValid: boolean;
  strength: number;
  level: string;
  errors: string[];
  warnings: string[];
}

export interface PasswordPolicy {
  minLength: number;
  maxLength: number;
  requireUppercase: boolean;
  requireLowercase: boolean;
  requireNumbers: boolean;
  requireSpecial: boolean;
  forbiddenWords: string[];
}

export const DEFAULT_PASSWORD_POLICY: PasswordPolicy = {
  minLength: 8,
  maxLength: 128,
  requireUppercase: true,
  requireLowercase: true,
  requireNumbers: true,
  requireSpecial: true,
  forbiddenWords: ['password', '123456', 'qwerty', 'admin', 'user', 'test'],
};

export const validatePasswordClient = (password: string): PasswordValidationResult => {
  const policy = DEFAULT_PASSWORD_POLICY;
  const errors: string[] = [];
  const warnings: string[] = [];

  if (password.length < policy.minLength) {
    errors.push(`Password must be at least ${policy.minLength} characters long`);
  }

  if (password.length > policy.maxLength) {
    errors.push(`Password must be no more than ${policy.maxLength} characters long`);
  }

  if (policy.requireUppercase && !/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }

  if (policy.requireLowercase && !/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }

  if (policy.requireNumbers && !/\d/.test(password)) {
    errors.push('Password must contain at least one number');
  }

  if (policy.requireSpecial && !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/.test(password)) {
    errors.push('Password must contain at least one special character');
  }

  const lowerPassword = password.toLowerCase();
  for (const word of policy.forbiddenWords) {
    if (lowerPassword.includes(word.toLowerCase())) {
      errors.push(`Password cannot contain common words like '${word}'`);
    }
  }

  if (hasCommonPatterns(password)) {
    warnings.push('Password contains common patterns that may be easy to guess');
  }

  if (hasRepeatedCharacters(password)) {
    warnings.push('Password contains repeated characters which may weaken security');
  }

  const strength = calculatePasswordStrength(password);
  const level = getPasswordStrengthText(strength);

  return {
    isValid: errors.length === 0,
    strength,
    level,
    errors,
    warnings,
  };
};

const hasCommonPatterns = (password: string): boolean => {
  const sequentialPatterns = [
    'abc', 'bcd', 'cde', 'def', 'efg', 'fgh', 'ghi', 'hij', 'ijk', 'jkl', 'klm', 'lmn', 'mno', 'nop', 'opq', 'pqr', 'qrs', 'rst', 'stu', 'tuv', 'uvw', 'vwx', 'wxy', 'xyz',
    '123', '234', '345', '456', '567', '678', '789', '890',
    'qwe', 'wer', 'ert', 'rty', 'tyu', 'yui', 'uio', 'iop',
  ];

  const lowerPassword = password.toLowerCase();
  return sequentialPatterns.some(pattern => lowerPassword.includes(pattern));
};

const hasRepeatedCharacters = (password: string): boolean => {
  if (password.length < 3) return false;

  for (let i = 0; i < password.length - 2; i++) {
    if (password[i] === password[i + 1] && password[i] === password[i + 2]) {
      return true;
    }
  }
  return false;
};

const calculatePasswordStrength = (password: string): number => {
  let strength = 0;

  if (password.length >= 8) strength += 20;
  if (password.length >= 12) strength += 10;
  if (password.length >= 16) strength += 10;

  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/.test(password);

  if (hasUpper) strength += 15;
  if (hasLower) strength += 15;
  if (hasNumber) strength += 15;
  if (hasSpecial) strength += 15;

  if (hasCommonPatterns(password)) strength -= 20;
  if (hasRepeatedCharacters(password)) strength -= 10;

  return Math.max(0, Math.min(100, strength));
};

const getPasswordStrengthText = (strength: number): string => {
  if (strength < 20) return 'Very Weak';
  if (strength < 40) return 'Weak';
  if (strength < 60) return 'Fair';
  if (strength < 80) return 'Good';
  if (strength < 90) return 'Strong';
  return 'Very Strong';
};

export const getPasswordStrengthColor = (strength: number): string => {
  if (strength < 20) return 'bg-red-500';
  if (strength < 40) return 'bg-orange-500';
  if (strength < 60) return 'bg-yellow-500';
  if (strength < 80) return 'bg-blue-500';
  if (strength < 90) return 'bg-green-500';
  return 'bg-emerald-600';
};
