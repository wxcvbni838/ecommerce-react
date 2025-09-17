package dto

import (
	"mime/multipart"
)

type SignUpRequest struct {
	Email    string                `form:"email" binding:"required,email"`
	Name     string                `form:"name" binding:"required,min=2,max=50"`
	Avatar   *multipart.FileHeader `form:"avatar"`
	Role     string                `form:"role" binding:"required,oneof=admin customer"`
	Password string                `form:"password" binding:"required,min=8,max=128"`
}

type SignUpResponse struct {
	AccessToken  string `json:"accessToken" validate:"required"`
	RefreshToken string `json:"refreshToken" validate:"required"`
	User         *User  `json:"user" validate:"required"`
}
