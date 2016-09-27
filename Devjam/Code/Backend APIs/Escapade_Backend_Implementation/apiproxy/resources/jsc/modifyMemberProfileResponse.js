var appRequest = JSON.parse(context.getVariable("memberProfilesResponse.content")).entities[0];
context.setVariable("appRequest",JSON.stringify(appRequest));
