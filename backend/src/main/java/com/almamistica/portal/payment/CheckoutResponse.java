package com.almamistica.portal.payment;

public record CheckoutResponse(
        boolean ok, boolean configured, String provider, String url, String message) {}
