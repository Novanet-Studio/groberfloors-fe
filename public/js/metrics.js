function loadScript(a) {
  var b = document.getElementsByTagName("head")[0],
    c = document.createElement("script");
  (c.type = "text/javascript"),
    (c.src = "https://tracker.metricool.com/resources/be.js"),
    (c.onreadystatechange = a),
    (c.onload = a),
    b.appendChild(c);
}

loadScript(function () {
  beTracker.t({ hash: "4be7c83a9daec4dae8396778f2960470" });
});
