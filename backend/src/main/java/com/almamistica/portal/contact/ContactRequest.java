package com.almamistica.portal.contact;

import jakarta.validation.constraints.AssertTrue;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public record ContactRequest(
        @NotBlank @Size(min = 2, max = 80) String name,
        @NotBlank @Pattern(regexp = "^[0-9+\\s()-]{8,20}$") String whatsapp,
        @NotBlank @Email @Size(max = 120) String email,
        @NotBlank @Size(max = 80) String serviceId,
        @NotBlank @Size(min = 10, max = 2000) String message,
        @NotBlank @Pattern(regexp = "whatsapp|email|call") String contactPreference,
        @AssertTrue Boolean privacyAccepted,
        String website) {}
