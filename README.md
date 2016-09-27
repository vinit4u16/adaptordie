# adaptordie
This repo contains technical assets of devjam and other API implementations around the use cases relevant to the movie 

# Steps

* Login to https://enterprise.apigee.com using your credentials

*** Create new API proxy using the below Open API spec: ***
  * Copy http://playground.apistudio.io/b50a8b64-b5ef-48a8-a0b2-1ed87e84e07f/spec
  * Update the Existing API to http://escapade-prod.apigee.net/adventures

* Make Reservation
  
  Payload (POST):
 
  Header:
  Content-Type: application/json
  
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

Copy the response 

To access Adapt or Die developer portal - click http://dev-adaptordie.devportal.apigee.com/
