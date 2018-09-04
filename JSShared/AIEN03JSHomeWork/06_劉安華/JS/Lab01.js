document.write("<table><tr>")
for (i = 2;i < 10; i++)
{    
    document.write("<td>")
    for (j = 1;j < 10; j++)
    {
   document.write(i+"*"+j+"="+ i * j+" "+"<br>"); 
    }
    document.write("</td>")
    document.write("<br>");     
}
document.write("</tr></table>")

