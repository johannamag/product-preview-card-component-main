const data = {
  headline: "I am a headline",
};
function renderData(data) {
  Object.keys(data).forEach((key) => {
    var el = document.querySelectorAll('[dataName="' + key + '"]');
    for (var i = 0; i < el.length; i++) {
      el[i].innerHTML = data[key];
    }
  });
}
renderData(data);
