package com.almamistica.portal.payment;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;

public record CheckoutRequest(
        @NotBlank String serviceId,
        @NotBlank String serviceName,
        @Positive double amount,
        @NotBlank String currency,
        @Email String customerEmail,
        @NotBlank String successUrl,
        @NotBlank String cancelUrl) {}
