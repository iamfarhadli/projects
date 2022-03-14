// const head = document.getElementById("head");
// const h1 = document.createElement("h1");
// h1.textContent = "Projects";
// head.append(h1);
// const design = document.getElementById("design");
const contact = [
  "WEB DESIGN", "CHAT BOTS", "GAME DESIGN", "TEXT ANALYSIS", "JAVA SCRIPT"," DATA PRIVACY",
];
const design = document.getElementById("design");
let html = "";
contact.map((m) => {
  html += "<div>" + m + "</div>"
   
});
design.innerHTML = html;





// "<section class='design'>" +
// "<div>" +
//  +
// "</div>" +

// "<div>" +
// "CHAT BOTS" +
// "</div>" +
// "<div>" +
// "GAME DESIGN" +
// "</div>" +
// "<div>" +
// "TEXT ANALYSIS" +
// "</div>" +
// "<div>" +
// "JAVA SCRIPT" +
// "</div>" +
// "<div>" +
// "DATA PRIVACY" +
// "</div>" +
// "</section>";