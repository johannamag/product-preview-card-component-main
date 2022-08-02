const data = {
  primaryHeadline: "Gabrielle Essence Eau De Parfum",
  secondaryHeadline: "Perfume",
  desc:
    "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
  discountedPrice: "$149.99",
  originalPrice: "$169.99",
  buttonCopy: "Add to Cart",
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
