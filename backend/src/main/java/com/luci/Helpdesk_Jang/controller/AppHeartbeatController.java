package com.luci.Helpdesk_Jang.controller;

import org.springframework.boot.SpringApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class AppHeartbeatController {

    private static long lastHeartbeat = 0;

    private static boolean monitorStarted = false;

    private final ConfigurableApplicationContext context;

    public AppHeartbeatController(
        ConfigurableApplicationContext context
    ) {

        this.context = context;

        startMonitor();
    }

    @PostMapping("/app/heartbeat")
    public void heartbeat() {

        lastHeartbeat =
            System.currentTimeMillis();
    }

    private void startMonitor() {

        if (monitorStarted) {
            return;
        }

        monitorStarted = true;

        Thread monitorThread = new Thread(() -> {

            while (true) {

                try {
                    Thread.sleep(10000);
                }
                catch (InterruptedException exception) {
                    return;
                }

                if (lastHeartbeat == 0) {
                    continue;
                }

                long timeSinceLastHeartbeat =
                    System.currentTimeMillis() - lastHeartbeat;

                if (timeSinceLastHeartbeat > 45000) {

                    int exitCode =
                        SpringApplication.exit(context, () -> 0);

                    System.exit(exitCode);
                }
            }
        });

        monitorThread.setDaemon(false);

        monitorThread.start();
    }
}