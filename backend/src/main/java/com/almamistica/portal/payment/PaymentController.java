package com.almamistica.portal.payment;

import com.almamistica.portal.config.AppProperties;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {

    private final AppProperties properties;

    public PaymentController(AppProperties properties) {
        this.properties = properties;
    }

    @PostMapping("/checkout")
    public ResponseEntity<CheckoutResponse> checkout(@Valid @RequestBody CheckoutRequest request) {
        AppProperties.Payments payments = properties.getPayments();
        if (!payments.isEnabled()
                || "none".equalsIgnoreCase(payments.getProvider())
                || payments.getSecretKey() == null
                || payments.getSecretKey().isBlank()) {
            return ResponseEntity.ok(
                    new CheckoutResponse(
                            false,
                            false,
                            payments.getProvider(),
                            null,
                            "Los pagos en línea aún no están configurados. Completa la reserva por WhatsApp."));
        }

        return ResponseEntity.ok(
                new CheckoutResponse(
                        false,
                        true,
                        payments.getProvider(),
                        null,
                        "El proveedor "
                                + payments.getProvider()
                                + " está habilitado, pero el checkout debe implementarse en el servidor usando solo claves secretas."));
    }
}
