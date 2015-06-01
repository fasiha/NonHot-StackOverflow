// First, get rid of "Hot Network Questions".
document.getElementById("hot-network-questions").style.visibility = "hidden";

// Then get rid of "Featured on Meta" and "Hot Meta Posts".
var classNodes = document.getElementsByClassName("community-bulletin");
for (k = 0; k < classNodes.length; k++) {
  classNodes[k].parentNode.removeChild(classNodes[k]);
}
