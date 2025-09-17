package utils

import (
	"fmt"
	"regexp"
	"strings"
	"unicode"
)

type PasswordPolicy struct {
	MinLength        int
	MaxLength        int
	RequireUppercase bool
	RequireLowercase bool
	RequireNumbers   bool
	RequireSpecial   bool
	ForbiddenWords   []string
}

func DefaultPasswordPolicy() *PasswordPolicy {
	return &PasswordPolicy{
		MinLength:        8,
		MaxLength:        128,
		RequireUppercase: true,
		RequireLowercase: true,
		RequireNumbers:   true,
		RequireSpecial:   true,
		ForbiddenWords:   []string{"password", "123456", "qwerty", "admin", "user", "test"},
	}
}

type PasswordValidationResult struct {
	IsValid  bool
	Errors   []string
	Warnings []string
}

func (p *PasswordPolicy) ValidatePassword(password string) *PasswordValidationResult {
	result := &PasswordValidationResult{
		IsValid:  true,
		Errors:   []string{},
		Warnings: []string{},
	}

	if len(password) < p.MinLength {
		result.IsValid = false
		result.Errors = append(result.Errors, fmt.Sprintf("Password must be at least %d characters long", p.MinLength))
	}

	if len(password) > p.MaxLength {
		result.IsValid = false
		result.Errors = append(result.Errors, fmt.Sprintf("Password must be no more than %d characters long", p.MaxLength))
	}

	if p.RequireUppercase {
		hasUpper := false
		for _, char := range password {
			if unicode.IsUpper(char) {
				hasUpper = true
				break
			}
		}
		if !hasUpper {
			result.IsValid = false
			result.Errors = append(result.Errors, "Password must contain at least one uppercase letter")
		}
	}

	if p.RequireLowercase {
		hasLower := false
		for _, char := range password {
			if unicode.IsLower(char) {
				hasLower = true
				break
			}
		}
		if !hasLower {
			result.IsValid = false
			result.Errors = append(result.Errors, "Password must contain at least one lowercase letter")
		}
	}

	if p.RequireNumbers {
		hasNumber := false
		for _, char := range password {
			if unicode.IsDigit(char) {
				hasNumber = true
				break
			}
		}
		if !hasNumber {
			result.IsValid = false
			result.Errors = append(result.Errors, "Password must contain at least one number")
		}
	}

	if p.RequireSpecial {
		specialCharRegex := regexp.MustCompile(`[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~` + "`" + `]`)
		if !specialCharRegex.MatchString(password) {
			result.IsValid = false
			result.Errors = append(result.Errors, "Password must contain at least one special character")
		}
	}

	lowerPassword := strings.ToLower(password)
	for _, word := range p.ForbiddenWords {
		if strings.Contains(lowerPassword, strings.ToLower(word)) {
			result.IsValid = false
			result.Errors = append(result.Errors, fmt.Sprintf("Password cannot contain common words like '%s'", word))
		}
	}

	if p.hasCommonPatterns(password) {
		result.Warnings = append(result.Warnings, "Password contains common patterns that may be easy to guess")
	}

	if p.hasRepeatedCharacters(password) {
		result.Warnings = append(result.Warnings, "Password contains repeated characters which may weaken security")
	}

	return result
}

func (p *PasswordPolicy) hasCommonPatterns(password string) bool {
	sequentialPatterns := []string{
		"abc", "bcd", "cde", "def", "efg", "fgh", "ghi", "hij", "ijk", "jkl", "klm", "lmn", "mno", "nop", "opq", "pqr", "qrs", "rst", "stu", "tuv", "uvw", "vwx", "wxy", "xyz",
		"123", "234", "345", "456", "567", "678", "789", "890",
		"qwe", "wer", "ert", "rty", "tyu", "yui", "uio", "iop",
	}

	lowerPassword := strings.ToLower(password)
	for _, pattern := range sequentialPatterns {
		if strings.Contains(lowerPassword, pattern) {
			return true
		}
	}

	return false
}

func (p *PasswordPolicy) hasRepeatedCharacters(password string) bool {
	if len(password) < 3 {
		return false
	}

	for i := 0; i < len(password)-2; i++ {
		if password[i] == password[i+1] && password[i] == password[i+2] {
			return true
		}
	}

	return false
}

func (p *PasswordPolicy) GetPasswordStrength(password string) int {
	strength := 0

	if len(password) >= 8 {
		strength += 20
	}
	if len(password) >= 12 {
		strength += 10
	}
	if len(password) >= 16 {
		strength += 10
	}

	hasUpper := regexp.MustCompile(`[A-Z]`).MatchString(password)
	hasLower := regexp.MustCompile(`[a-z]`).MatchString(password)
	hasNumber := regexp.MustCompile(`[0-9]`).MatchString(password)
	hasSpecial := regexp.MustCompile(`[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~` + "`" + `]`).MatchString(password)

	if hasUpper {
		strength += 15
	}
	if hasLower {
		strength += 15
	}
	if hasNumber {
		strength += 15
	}
	if hasSpecial {
		strength += 15
	}

	if p.hasCommonPatterns(password) {
		strength -= 20
	}
	if p.hasRepeatedCharacters(password) {
		strength -= 10
	}

	if strength < 0 {
		strength = 0
	}
	if strength > 100 {
		strength = 100
	}

	return strength
}

func (p *PasswordPolicy) GetPasswordStrengthText(strength int) string {
	switch {
	case strength < 20:
		return "Very Weak"
	case strength < 40:
		return "Weak"
	case strength < 60:
		return "Fair"
	case strength < 80:
		return "Good"
	case strength < 90:
		return "Strong"
	default:
		return "Very Strong"
	}
}
