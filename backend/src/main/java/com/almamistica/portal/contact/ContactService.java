package com.almamistica.portal.contact;

import com.almamistica.portal.config.AppProperties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    private static final Logger log = LoggerFactory.getLogger(ContactService.class);

    private final AppProperties properties;

    public ContactService(AppProperties properties) {
        this.properties = properties;
    }

    public ContactResponse submit(ContactRequest request) {
        if (hasText(request.website())) {
            log.info("Consulta descartada por honeypot");
            return new ContactResponse(true, "Consulta enviada.");
        }

        String name = sanitize(request.name());
        String email = sanitize(request.email()).toLowerCase();
        String whatsapp = sanitize(request.whatsapp());
        String message = sanitize(request.message());
        String serviceId = sanitize(request.serviceId());

        log.info(
                "Nueva consulta para {} | servicio={} | preferencia={} | email={} | whatsapp={}",
                properties.getContact().getInbox(),
                serviceId,
                request.contactPreference(),
                mask(email),
                mask(whatsapp));
        log.debug("Consulta de {} — {}", name, message);

        return new ContactResponse(true, "Recibimos tu consulta. Te contactaremos a la brevedad.");
    }

    private boolean hasText(String value) {
        return value != null && !value.isBlank();
    }

    private String sanitize(String value) {
        if (value == null) {
            return "";
        }
        return value.replaceAll("[<>]", "").replaceAll("\\s+", " ").trim();
    }

    private String mask(String value) {
        if (value == null || value.length() < 4) {
            return "***";
        }
        return value.substring(0, 2) + "***" + value.substring(value.length() - 2);
    }
}
