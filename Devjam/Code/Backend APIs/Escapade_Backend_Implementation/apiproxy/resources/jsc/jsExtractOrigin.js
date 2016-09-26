 origin = context.getVariable("request.header.Origin");
context.setVariable('origin',origin);
var reqHeaders = context.getVariable("request.header.Access-Control-Request-Headers");
method =  context.getVariable("request.header.Access-Control-Request-Method");
var expHeaders = context.getVariable("request.header.Access-Control-Expose-Headers");


if (origin != null)
{
domain = origin.split("//");
context.setVariable('origin',domain[1]);
}
else
{
context.setVariable('status','failed');
}
if (method != null)
{
context.setVariable('method',method)
}
else
{
 context.setVariable('status','failed');
}

if (context.getVariable("request.header.Access-Control-Request-Headers.values.count") > 0)
{
var headersCollectionStr = context.getVariable("request.header.Access-Control-Request-Headers.values")+'';

// comes back as "[header1, header2, header3]", so need to strip square brackets
context.setVariable("reqHeaders", headersCollectionStr.substring(1, headersCollectionStr.length-1));
}
else if (context.getVariable("request.header.Access-Control-Expose-Headers.values.count") > 0){
var headersCollectionStr2 = context.getVariable("request.header.Access-Control-Expose-Headers.values")+'';

context.setVariable("expHeaders", headersCollectionStr2.substring(1, headersCollectionStr2.length-1));
}
else
{
 context.setVariable('status','failed');
}





allowMethods = ["GET","POST","PUT","DELETE"]

if (allowMethods.indexOf(method) < 0)
 {

 context.setVariable('status','failed');

 }