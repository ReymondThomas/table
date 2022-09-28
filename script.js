function displayNumaber(Number)
{
    result.value+=Number;
}
function clearbox()
{
    result.value='';
}
//evaluate expression

function evaluateexpression()
{
    
    expression=result.value;
    output=eval(expression);
    result.value=output;
}
//delete one value

function clearfirst()
{
currentexpression=result.value;
result.value=currentexpression.slice(0,-1);
}