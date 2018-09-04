window.onload = function() {

    create(2010, 2020, "year");
    create(1, 12, "month");
    create(1, 31, "day");

    document.getElementById("year").addEventListener("change", chg);
    document.getElementById("month").addEventListener("change", chg);
    document.getElementById("day").addEventListener("change", chg);
    document.getElementById("info").innerHTML = 
            "您選擇的日期是 "+2010+" 年"+1+" 月"+1+" 日";

    function create(start, end, id) {
        for (i=start;i<=end;i++) {
            var opt = document.createElement("option");
            opt.value = i;
            opt.innerHTML = i;
            document.getElementById(id).appendChild(opt);
        }
    }

    function chg() {
        var year = document.getElementById("year").value;
        var month = document.getElementById("month").value;
        var day = document.getElementById("day");

        if (this.id=="year" || this.id=="month") {
            var date = new Date(year, month, 0);
            var days = date.getDate();
            var currentDay = day.value;
            day.innerHTML = "";
            create(1, days, "day");
            if (currentDay <= days) {
                day.value = currentDay;
            }
        }        

        document.getElementById("info").innerHTML = 
            "您選擇的日期是 "+year+" 年 "+month+" 月 "+day.value+" 日";
    }
}