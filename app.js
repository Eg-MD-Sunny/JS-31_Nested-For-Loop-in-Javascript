//Example # 01
for(i=0; i<3; i++){
    document.write("<h2> Outer Loop </h2>");
    document.write(i);
    document.write("<br>");

    for(j=0; j<5; j++){
        document.write("<strong> Inner Loop </strong>");
        document.write(j);
        document.write("<br>");
    }
}
document.write("<br> <strong> Rest of the Code </strong>.");