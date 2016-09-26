var baasURI = "https://api.usergrid.com/escapade/sandbox";

var pathSuffix = context.getVariable("proxy.pathsuffix");
var baasURI = "https://api.usergrid.com/escapade/sandbox";
var reservationId = context.getVariable("reservationId");
var finalTargetUrl = baasURI + "/memberProfiles/" + reservationId;
context.setVariable("target.url", finalTargetUrl);
context.setVariable("target.copy.pathsuffix", false);
