package dto

type PasswordValidationRequest struct {
	Password string `json:"password" binding:"required"`
}

type PasswordValidationResponse struct {
	IsValid  bool     `json:"isValid"`
	Strength int      `json:"strength"`
	Level    string   `json:"level"`
	Errors   []string `json:"errors,omitempty"`
	Warnings []string `json:"warnings,omitempty"`
}
