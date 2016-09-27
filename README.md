# adaptordie
This repo contains technical assets of devjam and other API implementations around the use cases relevant to the movie 

# Steps

* Login to https://enterprise.apigee.com using your credentials

*** Create new API proxy using the below Open API spec: ***
  * Copy http://playground.apistudio.io/b50a8b64-b5ef-48a8-a0b2-1ed87e84e07f/spec
  * Update the Existing API to http://escapade-prod.apigee.net/adventures

# 1) Make Reservation
  
  URL: http://{org}-{env}.apigee.net/adventures/reservations
 
  Method: POST
 
  Header:
  Content-Type: application/json
  
  Request:
  
```
    {
     "memberId": "your_memberId", //Provide your member ID as per your registration
     "preferences": [
       {
         "roomType": "seaView", //seaView, mountainView, cityView
         "cuisine": "indian", //indian, mexican, italian, chinese
         "outdoors": "snorkelling", //snorkelling, scuba
         "leisure": "spa" //spa, yoga
       }
     ]
    }
```

Copy the response and paste it in a text editor, for example

 Response:

```
{
  "reservationId": "****",
  "passCode": "*****",
  "status": "confirmed"
}
```

# 2) Get Reservation

URL: http://{org}-{env}.apigee.net/adventures/reservations/{reservationId}
 
  Method: GET
 
  Header:
  Content-Type: application/json

Response:
 
 ```
 {
  "memberId": "your_memberId",
  "status": "confirmed",
  "preferences": [
    {
      "roomType": "seaView",
      "cuisine": "indian",
      "outdoors": "snorkelling",
      "leisure": "spa"
    }
  ]
}
```

# 3) Check-In

  URL: http://{org}-{env}.apigee.net/adventures/reservations/{reservationId}/checkin
 
  Method: POST
 
  Header:
  Content-Type: application/json
  
  Request:
  
```
{
	"memberId":"your_memberId",
	"passCode":"****"
}
```

To access Adapt or Die developer portal - click http://dev-adaptordie.devportal.apigee.com/
