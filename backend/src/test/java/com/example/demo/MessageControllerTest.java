package com.example.demo;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

class MessageControllerTest {

    private final MessageController controller = new MessageController();

    @Test
    void getMessages_returnsTwoHelloWorldRecords() {
        List<String> messages = controller.getMessages();

        assertNotNull(messages);
        assertEquals(List.of("hello world1", "hello world2"), messages);
    }

    @Test
    void getMessages_returnsRecordsInExpectedOrder() {
        List<String> messages = controller.getMessages();

        assertEquals("hello world1", messages.get(0));
        assertEquals("hello world2", messages.get(1));
    }
}
