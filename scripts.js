
        // Setting Date on footer START
    year = new Date();
    footer = document.querySelector("footer");
    if (footer) {
        newSpan = document.createElement("span");
        newSpanContent = document.createTextNode(", " + year.toDateString());
        newSpan.append(newSpanContent);
        footer.appendChild(newSpanContent);
        footer.setAttribute("class", "bold");
        ;
    }
    // Setting Date on footer END
