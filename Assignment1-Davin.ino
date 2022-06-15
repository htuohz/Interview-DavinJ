const byte ledPin = 13;
const byte interruptPin = 3;
int color = 0;
const byte lightPin = A0;

#include "WiFiEsp.h"
#include "RL_RGBLED.h" // include RGBLED module library
RGBLED rgbLed; // create an RGBLED object

//const byte lightPin = A0;         //declaring the LDR pin

char ssid[] = "KIT317_417_LTN";    // your network SSID (name)
char pass[] = "k!t417&317_";       // your network password
int status = WL_IDLE_STATUS;     // the Wifi radio's status

unsigned long previousMillis = 0;        // will store last time LED was updated

// constants won't change:
const long interval = 100000;           // interval at which to blink (milliseconds)


unsigned long lastConnectionTime = 0;  
char server[] = "api.thingspeak.com";
char url[2000];

//int fieldID = 3;        // field number 1-8

char tempString[100];
int counter = 0;
float valuetoField1 = 0.0; // to store the value into Thingspeak
float valuetoField2 = 0.0; // to store the value into Thingspeak

// Initialize the Ethernet client object
WiFiEspClient client;

void myFunc();

void setup()
{ 
  
 // pinMode(lightPin, INPUT);                     // initializing the sensor as an input

  pinMode(ledPin, OUTPUT);
  pinMode(interruptPin, INPUT);
  attachInterrupt(digitalPinToInterrupt(interruptPin), myFunc, RISING);
  pinMode(lightPin, INPUT);


  Serial.println("This line mey never print");

 rgbLed.begin(); // initialise the RGBLED module
 

  // initialize serial for debugging
  Serial.begin(57600);
  // initialize serial for ESP module
  Serial3.begin(57600);
  // initialize ESP module
  WiFi.init(&Serial3);

  // check for the presence of the shield
  if (WiFi.status() == WL_NO_SHIELD) {
    Serial.println("WiFi shield not present");
    // don't continue
    while (true);
  }

  // attempt to connect to WiFi network
  while ( status != WL_CONNECTED) {
    Serial.print("Attempting to connect to WPA SSID: ");
    Serial.println(ssid);
    // Connect to WPA/WPA2 network
    status = WiFi.begin(ssid, pass);
  }

  // you're connected now, so print out the data
  Serial.println("You're connected to the network");
  
  Serial.println();
  Serial.println("Starting connection to server...");
  // if you get a connection, report back via serial
  if (client.connectSSL(server, 443)) {
    Serial.println("Connected to server");
    lastConnectionTime = millis();
  }
}


void loop()
{
  // if there are incoming bytes available
  // from the server, read them and print them
  
  if(client.find("\r\n\r\n"))  {      // IGNORE THE HEADERS AND GET TO THE ACTUAL CONTENT
        
    memset(tempString, '\0', 100);    // reset tempString to empty
    counter = 0;                      // reset counter to 0
    
    while (client.available()) {     // if any character is avaiable then             
      char c = client.read();        // read each character
      tempString[counter] = c;       // collect each charatcer in tempString
      counter = counter + 1;         // increment for taking the next character
    }

    Serial.print("Entry ID: ");
    Serial.println(tempString);       // show the string in tempString
  }


  test();

   

  if (millis() - lastConnectionTime > 15000UL) { // wait for 15 secs

//    valuetoField = (float) ((random(10000, 20000) * 1.0 / 1000.0));   // create a random number to upload
//                                                        // this can be replaced by a sensor value
    valuetoField1 =  color;     //read the value
    valuetoField2 =  1024 - analogRead(lightPin);     //read the value

    
    httpRequest();
  }
  
}

void test()
{
   if (millis() - previousMillis > interval) { 
    
   rgbLed.OnRgb(0,0,0);
  
   // save the last time you blinked the LED
  previousMillis = millis();
  
  Serial.println(previousMillis);
  }

   
   digitalWrite(ledPin, color);
}


// this method makes a HTTP connection to the server
void httpRequest()
{
  Serial.println();
    
  // close any connection before send a new request
  // this will free the socket on the WiFi shield
  client.stop();

  // if there's a successful connection
  if (client.connectSSL(server, 443)) {
    Serial.println("Connected to server");
    // Make a HTTP request

    memset(url, '\0', 2000);
    // create the url to uplaod the data in fieldID with a float value. api_key can be fixed directly in this string ...
    sprintf(url, "GET /update?api_key=S94H7WT1W2OH0S32&field3=%d.%02d&field4=%d HTTP/1.1",(int) valuetoField1, (int) (valuetoField1 * 100) % 100, (int) valuetoField2);
    Serial.println(url);  // show the URL
    
    delay(10);
    
    client.println(url);
    client.println("Host: api.thingspeak.com"); 
    client.println("Connection: close");
    client.println();

    // note that you can only uplaod a new value every 15 secs
    lastConnectionTime = millis(); // record time to give time gap of 15 secs
  }
  else {
    // if you couldn't make a connection
    Serial.println("Connection failed");
  }
}

void myFunc() {
  color = 255 - color;
  Serial.println("The program has been Interrupted");
//   rgbLed.OnRgb(color,0,0); // Set the RGBLED so Red=255 Green=0 Blue=0
    int lightValue = 1024 - analogRead(lightPin); // read the light value
    Serial.println(lightValue);
 if(lightValue > 800) // print a msg if light value too high
 {
     rgbLed.OnRgb(0,0,0); // Set the RGBLED so Red=255 Green=0 Blue=0
 }
 else
 if (lightValue >450 && lightValue <=800 ) // print a msg if light value is good
 {
  rgbLed.OnRgb(0,color*0.1,0); // Set the RGBLED so Red=0 Green=255*0.1 Blue=0
 }
 else
 {
   rgbLed.OnRgb(color,0,0); // Set the RGBLED so Red=255 Green=0 Blue=0
 }
}
