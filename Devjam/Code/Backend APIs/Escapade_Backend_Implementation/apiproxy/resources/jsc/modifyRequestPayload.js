 var payload = JSON.parse(context.getVariable("request.content"));
var value;
var LineItemListIndex = 0;
var links = [];
payload.preferences.forEach(function(val){
    for(var key in val){
        value = val[key];
        var link = "https://api.usergrid.com/escapade/sandbox/pictures/" + value;
        links.push(link);
    }
});

payload.links = links;
context.setVariable("linksArray",JSON.stringify(links));
context.setVariable("request.content",JSON.stringify(payload));