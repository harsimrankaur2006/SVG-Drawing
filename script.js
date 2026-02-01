let svg = document.getElementById("box");
let drawing = false;
let line;

// mouse down -> start drawing
svg.addEventListener("mousedown", function(e) {
    drawing = true;
    line = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    line.setAttribute("stroke", "black");
    line.setAttribute("stroke-width", "2");
    line.setAttribute("fill", "none");
    line.setAttribute("points", e.offsetX + "," + e.offsetY);
    svg.appendChild(line);
});

// mouse move -> draw
svg.addEventListener("mousemove", function(e) {
    if (!drawing) return;
    let old = line.getAttribute("points");
    line.setAttribute("points", old + " " + e.offsetX + "," + e.offsetY);
});

// mouse up -> stop
svg.addEventListener("mouseup", function() {
    drawing = false;
});

// clear button
function clearAll() {
    svg.innerHTML = "";
}
