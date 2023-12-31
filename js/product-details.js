const urlParms = new URLSearchParams(window.location.search);
console.log(urlParms);
const productID = urlParms.get("id");
console.log(productID);

const productData = {
  BLDC: `<div class="row">
  <div class="col-md-3 col-sm-4">
      <div class="widget categories">
          <ul class="category-nav">
              <li class="active"><a href="services-details.html?id=BLDC">BLDC(Brushless DC Permanent
                      Magnet Motors)</a></li>
              <li><a href="services-details.html?id=PMSM">PMSM(Permanent Magnet Synchronous Motors)</a>
              </li>
              <li><a href="services-details.html?id=Axial_Flux_Motors">Axial Flux Motors</a></li>
          </ul>
      </div>
  </div>
  <div class="col-md-9 col-sm-8">
      <div class="single-wrapper">
          <div id="single-services" class="owl-carousel">
              <div class="item"><img src="./images/Products/BLDC.jpg" alt=""> </div>
              <div class="item"><img src="./images/Products/BLDC.jpg" alt=""> </div>
              <div class="item"><img src="./images/Products/BLDC.jpg" alt=""> </div>
          </div>
          <div class="services-content">
              <h2>BLDC(Brushless DC Permanent
                Magnet Motors)</h2>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue justo
                  scelerisque mattis
                  iaculis. Maecenas vestibulum faucibus enim scelerisque egestas. Praesent facilisis,
                  tortor vel vehicula
                  imperdiet, felis massa ultrices metus, sed consectetur massa ex vitae sem. Integer eu
                  sodales augue.
                  Suspendisse eget placerat lorem. Phasellus ac hendrerit leo. Morbi quis iaculis eros.
                  Sed tincidunt
                  augue ante, sit amet vehicula odio aliquam quis. Donec at malesuada nisl. Pellentesque
                  eros lorem,
                  aliquet id hendrerit id, hendrerit ac odio. In dui mauris, auctor vel vestibulum vitae,
                  tincidunt id
                  mi.Curabitur dictum, sapien eu mattis pret.</p>
              <div class="img-right">
                  <div class="text">
                      <h4>Here is our service Title</h4>
                      <ul>
                          <li>Powerfull HTML5 Template</li>
                          <li>Quality Design and more</li>
                          <li>Smooth Design</li>
                          <li>It's ferfect for any business website</li>
                          <li>Powerfull HTML5 Template</li>
                          <li>Quality Design and more</li>
                          <li>Smooth Design</li>
                          <li>It's ferfect for any business website</li>
                      </ul>
                  </div>
                  <div class="text">
                      <h4>Here is our service Title</h4>
                      <ul>
                          <li>Powerfull HTML5 Template</li>
                          <li>Quality Design and more</li>
                          <li>Smooth Design</li>
                          <li>It's ferfect for any business website</li>
                          <li>Powerfull HTML5 Template</li>
                          <li>Quality Design and more</li>
                          <li>Smooth Design</li>
                          <li>It's ferfect for any business website</li>
                      </ul>
                  </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue justo
                  scelerisque mattis
                  iaculis. Maecenas vestibulum faucibus enim scelerisque egestas. Praesent facilisis,
                  tortor vel vehicula
                  imperdiet, felis massa ultrices metus, sed consectetur massa ex vitae sem. Integer eu
                  sodales augue.
                  Suspendisse eget placerat lorem. Phasellus ac hendrerit leo. Morbi quis iaculis eros.
                  Sed tincidunt
                  augue ante, sit amet vehicula odio aliquam quis. Donec at malesuada nisl. Pellentesque
                  eros lorem,
                  aliquet id hendrerit id, hendrerit ac odio. In dui mauris, auctor vel vestibulum vitae.
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue justo
                  scelerisque mattis
                  iaculis. Maecenas vestibulum faucibus enim scelerisque egestas.</p>
          </div>
      </div>
  </div>
</div>`,
  PMSM: `
  <div class="row">
                <div class="col-md-3 col-sm-4">
                    <div class="widget categories">
                        <ul class="category-nav">
                            <li><a href="services-details.html?id=BLDC">BLDC(Brushless DC Permanent
                                    Magnet Motors)</a></li>
                            <li class="active"><a href="services-details.html?id=PMSM">PMSM(Permanent Magnet Synchronous Motors)</a>
                            </li>
                            <li><a href="services-details.html?id=Axial_Flux_Motors">Axial Flux Motors</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-9 col-sm-8">
                    <div class="single-wrapper">
                        <div id="single-services" class="owl-carousel">
                        <div class="item"><img src="./images/Products/PMSM.jpg" alt=""> </div>
                        <div class="item"><img src="./images/Products/PMSM.jpg" alt=""> </div>
                        <div class="item"><img src="./images/Products/PMSM.jpg" alt=""> </div>
                        </div>
                        <div class="services-content">
                            <h2>PMSM(Permanent Magnet Synchronous Motors)</h2>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue justo
                                scelerisque mattis
                                iaculis. Maecenas vestibulum faucibus enim scelerisque egestas. Praesent facilisis,
                                tortor vel vehicula
                                imperdiet, felis massa ultrices metus, sed consectetur massa ex vitae sem. Integer eu
                                sodales augue.
                                Suspendisse eget placerat lorem. Phasellus ac hendrerit leo. Morbi quis iaculis eros.
                                Sed tincidunt
                                augue ante, sit amet vehicula odio aliquam quis. Donec at malesuada nisl. Pellentesque
                                eros lorem,
                                aliquet id hendrerit id, hendrerit ac odio. In dui mauris, auctor vel vestibulum vitae,
                                tincidunt id
                                mi.Curabitur dictum, sapien eu mattis pret.</p>
                            <div class="img-right">
                                <div class="text">
                                    <h4>Here is our service Title</h4>
                                    <ul>
                                        <li>Powerfull HTML5 Template</li>
                                        <li>Quality Design and more</li>
                                        <li>Smooth Design</li>
                                        <li>It's ferfect for any business website</li>
                                        <li>Powerfull HTML5 Template</li>
                                        <li>Quality Design and more</li>
                                        <li>Smooth Design</li>
                                        <li>It's ferfect for any business website</li>
                                    </ul>
                                </div>
                                <div class="text">
                                    <h4>Here is our service Title</h4>
                                    <ul>
                                        <li>Powerfull HTML5 Template</li>
                                        <li>Quality Design and more</li>
                                        <li>Smooth Design</li>
                                        <li>It's ferfect for any business website</li>
                                        <li>Powerfull HTML5 Template</li>
                                        <li>Quality Design and more</li>
                                        <li>Smooth Design</li>
                                        <li>It's ferfect for any business website</li>
                                    </ul>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue justo
                                scelerisque mattis
                                iaculis. Maecenas vestibulum faucibus enim scelerisque egestas. Praesent facilisis,
                                tortor vel vehicula
                                imperdiet, felis massa ultrices metus, sed consectetur massa ex vitae sem. Integer eu
                                sodales augue.
                                Suspendisse eget placerat lorem. Phasellus ac hendrerit leo. Morbi quis iaculis eros.
                                Sed tincidunt
                                augue ante, sit amet vehicula odio aliquam quis. Donec at malesuada nisl. Pellentesque
                                eros lorem,
                                aliquet id hendrerit id, hendrerit ac odio. In dui mauris, auctor vel vestibulum vitae.
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue justo
                                scelerisque mattis
                                iaculis. Maecenas vestibulum faucibus enim scelerisque egestas.</p>
                        </div>
                    </div>
                </div>
            </div>
  `,
  Axial_Flux_Motors: `
  <div class="row">
                <div class="col-md-3 col-sm-4">
                    <div class="widget categories">
                        <ul class="category-nav">
                            <li><a href="services-details.html?id=BLDC">BLDC(Brushless DC Permanent
                                    Magnet Motors)</a></li>
                            <li><a href="services-details.html?id=PMSM">PMSM(Permanent Magnet Synchronous Motors)</a>
                            </li>
                            <li class="active"><a href="services-details.html?id=Axial_Flux_Motors">Axial Flux Motors</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-9 col-sm-8">
                    <div class="single-wrapper">
                        <div id="single-services" class="owl-carousel">
                        <div class="item"><img src="./images/Products/AFM.jpg" alt=""> </div>
                        <div class="item"><img src="./images/Products/AFM.jpg" alt=""> </div>
                        <div class="item"><img src="./images/Products/AFM.jpg" alt=""> </div>
                        </div>
                        <div class="services-content">
                            <h2>Axial Flux Motors</h2>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue justo
                                scelerisque mattis
                                iaculis. Maecenas vestibulum faucibus enim scelerisque egestas. Praesent facilisis,
                                tortor vel vehicula
                                imperdiet, felis massa ultrices metus, sed consectetur massa ex vitae sem. Integer eu
                                sodales augue.
                                Suspendisse eget placerat lorem. Phasellus ac hendrerit leo. Morbi quis iaculis eros.
                                Sed tincidunt
                                augue ante, sit amet vehicula odio aliquam quis. Donec at malesuada nisl. Pellentesque
                                eros lorem,
                                aliquet id hendrerit id, hendrerit ac odio. In dui mauris, auctor vel vestibulum vitae,
                                tincidunt id
                                mi.Curabitur dictum, sapien eu mattis pret.</p>
                            <div class="img-right">
                                <div class="text">
                                    <h4>Here is our service Title</h4>
                                    <ul>
                                        <li>Powerfull HTML5 Template</li>
                                        <li>Quality Design and more</li>
                                        <li>Smooth Design</li>
                                        <li>It's ferfect for any business website</li>
                                        <li>Powerfull HTML5 Template</li>
                                        <li>Quality Design and more</li>
                                        <li>Smooth Design</li>
                                        <li>It's ferfect for any business website</li>
                                    </ul>
                                </div>
                                <div class="text">
                                    <h4>Here is our service Title</h4>
                                    <ul>
                                        <li>Powerfull HTML5 Template</li>
                                        <li>Quality Design and more</li>
                                        <li>Smooth Design</li>
                                        <li>It's ferfect for any business website</li>
                                        <li>Powerfull HTML5 Template</li>
                                        <li>Quality Design and more</li>
                                        <li>Smooth Design</li>
                                        <li>It's ferfect for any business website</li>
                                    </ul>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue justo
                                scelerisque mattis
                                iaculis. Maecenas vestibulum faucibus enim scelerisque egestas. Praesent facilisis,
                                tortor vel vehicula
                                imperdiet, felis massa ultrices metus, sed consectetur massa ex vitae sem. Integer eu
                                sodales augue.
                                Suspendisse eget placerat lorem. Phasellus ac hendrerit leo. Morbi quis iaculis eros.
                                Sed tincidunt
                                augue ante, sit amet vehicula odio aliquam quis. Donec at malesuada nisl. Pellentesque
                                eros lorem,
                                aliquet id hendrerit id, hendrerit ac odio. In dui mauris, auctor vel vestibulum vitae.
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue justo
                                scelerisque mattis
                                iaculis. Maecenas vestibulum faucibus enim scelerisque egestas.</p>
                        </div>
                    </div>
                </div>
            </div>
  `

};

// const productElement = document.getElementById('productDetail');
// if (productData[productID]) {
//   productElement.innerHTML = productData[productID];
// } else {
//   productElement.innerHTML = `No Product Found`;
// }

const productElement = document.getElementById('productDetail');
if (productData[productID]) {
  productElement.innerHTML = productData[productID];

  // Include the widget cta section dynamically
  const widgetCTAHTML = `
    <div class="widget cta">
      <h4>We're delighted to have you here.</h4>
      <p>If you have any questions or need assistance, feel free to reach out. We're here to help you find the perfect solution for your needs.</p>
      <a href="#" id="inquireBtn" class="btn btn-primary btn-sidebar"><span class="fa fa-calendar-o"></span> Inquire Now</a>
    </div>
  `;

  // Insert the widget cta HTML right after the widget categories
  const widgetCategories = document.querySelector('.widget.categories');
  widgetCategories.insertAdjacentHTML('afterend', widgetCTAHTML);
} else {
  productElement.innerHTML = `No Product Found`;
}

