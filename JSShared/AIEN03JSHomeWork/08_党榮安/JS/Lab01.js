        document.write("<table><tr>");
        for(var i=2; i<10; i++){
            document.write("<td>");
            for(var j=1; j<10; j++){
                document.write(i+" * "+j+" = "+i*j+"<br>");
            }
            document.write("</td>");
        }
        document.write("</tr></table>");
