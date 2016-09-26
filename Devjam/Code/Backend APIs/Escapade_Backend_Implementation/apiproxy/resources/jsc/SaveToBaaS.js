var uuid = JSON.parse(context.getVariable("baasCalloutResponse1.content")).entities[0].uuid;
var baasURI = "https://api.usergrid.com/escapade/sandbox";
var finalTargetUrl = baasURI + "/memberProfiles/" + uuid;
var content = request.content;
context.setVariable("uuid", uuid);
context.setVariable("target.url", finalTargetUrl);
context.setVariable("target.copy.pathsuffix", false);
context.setVariable("target.verb", "PUT");