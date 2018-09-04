
        // for (i=1; i<=9; i++){
        //     for (k=1; k<=9; k++){
        //         document.write(i*k +'<br>');
        //     }
        // }
        document.write('<table><tr>');
            for (i=1; i<=9; i++){
                document.write('<td>');
                for (k=1; k<=9; k++){
                    document.write(i+'*'+k+'='+i*k +'<br>');
                }
                document.write('</td>');
            }
        document.write('</tr></table>');
