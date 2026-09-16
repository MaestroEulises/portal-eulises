package com.almamistica.portal;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
class PortalApplicationTests {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void healthIsUp() throws Exception {
        mockMvc.perform(get("/api/health"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("UP"));
    }

    @Test
    void contactRejectsInvalidPayload() throws Exception {
        mockMvc.perform(
                        post("/api/contact")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content("{}"))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.ok").value(false));
    }

    @Test
    void contactAcceptsValidPayload() throws Exception {
        mockMvc.perform(
                        post("/api/contact")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(
                                        """
                                        {
                                          "name": "Laura Gomez",
                                          "whatsapp": "+5491112345678",
                                          "email": "laura@example.com",
                                          "serviceId": "tarot-del-amor",
                                          "message": "Quisiera reservar una consulta de tarot.",
                                          "contactPreference": "whatsapp",
                                          "privacyAccepted": true
                                        }
                                        """))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.ok").value(true));
    }
}
