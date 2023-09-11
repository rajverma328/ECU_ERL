#include <FreeRTOS.h>
#include <task.h>

// Function to run on Core 0
void core0Task(void *pvParameters) {
  while (1) {
    Serial.println("Task running on Core 0");
  }
}

// Function to run on Core 1
void core1Task(void *pvParameters) {
  while (1) {
    Serial.println("Task running on Core 1");
  }
}

void setup() {
  Serial.begin(115200);
  // Create two tasks and pin them to specific cores
  xTaskCreatePinnedToCore(core0Task, "Core0Task", 10000, NULL, 1, NULL, 0); // Core 0
  xTaskCreatePinnedToCore(core1Task, "Core1Task", 10000, NULL, 1, NULL, 1); // Core 1
}

void loop() {
  // Your Arduino loop code here
}
