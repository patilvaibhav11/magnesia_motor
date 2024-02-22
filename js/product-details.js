const urlParms = new URLSearchParams(window.location.search);
console.log(urlParms);
const productID = urlParms.get("id");
console.log(productID);

const productData = {
    BLDC: `
    <div class="row">
        <div class="col-md-3 col-sm-4">
            <div class="widget categories">
                <ul class="category-nav">
                    <li class="active"><a href="services-details.html?id=BLDC" style="background-color: #bcff00;">BLDC(Brushless DC Permanent
                            Magnet Motors)</a></li>
                    <li><a href="services-details.html?id=Air_Cooler_Motor">-Air Cooler Motor</a></li>
                    <li><a href="services-details.html?id=Hub_Motor">-Hub Motor</a></li>
                    <li><a href="services-details.html?id=Product_Three">-Product Three</a></li>
                    <li><a href="services-details.html?id=PMSM" style="background-color: #bcff00;">PMSM(Permanent Magnet Synchronous Motors)</a>
                    </li>
                    <li><a href="services-details.html?id=Axial_Flux_Motors" style="background-color: #bcff00;">Axial Flux Motors</a></li>
                </ul>
            </div>
        </div>
        <div class="col-md-9 col-sm-8">
        <div class="single-wrapper">
        <h2>BLDC(Brushless DC Permanent
            Magnet Motors)</h2>
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
                    <li><a href="services-details.html?id=BLDC" style="background-color: #bcff00;">BLDC(Brushless DC Permanent
                            Magnet Motors)</a></li>
                    <li class="active"><a href="services-details.html?id=PMSM" style="background-color: #bcff00;">PMSM(Permanent Magnet Synchronous Motors)</a>
                    </li>
                    <li><a href="services-details.html?id=Product_Four">-Product Four</a></li>
                    <li><a href="services-details.html?id=Product_Five">-Product Fve</a></li>
                    <li><a href="services-details.html?id=Product_Six">-Product Six</a></li>
                    <li><a href="services-details.html?id=Axial_Flux_Motors" style="background-color: #bcff00;">Axial Flux Motors</a></li>
                </ul>
            </div>
        </div>
        <div class="col-md-9 col-sm-8">
            <div class="single-wrapper">
            <h2>PMSM(Permanent Magnet Synchronous Motors)</h2>
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
                    <li><a href="services-details.html?id=BLDC" style="background-color: #bcff00;">BLDC(Brushless DC Permanent
                            Magnet Motors)</a></li>
                    <li><a href="services-details.html?id=PMSM" style="background-color: #bcff00;">PMSM(Permanent Magnet Synchronous Motors)</a>
                    </li>
                    <li class="active"><a href="services-details.html?id=Axial_Flux_Motors" style="background-color: #bcff00;">Axial Flux Motors</a></li>
                    <li><a href="services-details.html?id=Product_Seven">-Product Seven</a></li>
                    <li><a href="services-details.html?id=Product_Eight">-Product Eight</a></li>
                    <li><a href="services-details.html?id=Product_Nine">-Product Nine</a></li>
                </ul>
            </div>
        </div>
        <div class="col-md-9 col-sm-8">
            <div class="single-wrapper">
            <h2>Axial Flux Motors</h2>
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
  `,
    Air_Cooler_Motor: `
    <div class="row">
        <div class="col-md-3 col-sm-4">
            <div class="widget categories">
                <ul class="category-nav">
                    <li class="active"><a href="services-details.html?id=BLDC" style="background-color: #bcff00;">BLDC(Brushless DC Permanent
                            Magnet Motors)</a></li>
                    <li><a href="services-details.html?id=Air_Cooler_Motor" style="background-color: #f0ffc5;">-Air Cooler Motor</a></li>
                    <li><a href="services-details.html?id=Hub_Motor">-Hub Motor</a></li>
                    <li><a href="services-details.html?id=Product_Three">-Product Three</a></li>
                    <li><a href="services-details.html?id=PMSM" style="background-color: #bcff00;">PMSM(Permanent Magnet Synchronous Motors)</a>
                    </li>
                    <li><a href="services-details.html?id=Axial_Flux_Motors" style="background-color: #bcff00;">Axial Flux Motors</a></li>
                </ul>
            </div>
        </div>
        <div class="col-md-9 col-sm-8">
        <div class="single-wrapper">
        <h2>Air Cooler Motor
          <div id="single-services" class="owl-carousel">
              <div class="item"><img src="./images/Products/BLDC.jpg" alt=""> </div>
              <div class="item"><img src="./images/Products/BLDC.jpg" alt=""> </div>
              <div class="item"><img src="./images/Products/BLDC.jpg" alt=""> </div>
          </div>
          <div class="services-content">
              <h2>Air Cooler Motor
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
    </div>
    `,
    Hub_Motor: `
    <div class="row">
        <div class="col-md-3 col-sm-4">
            <div class="widget categories">
                <ul class="category-nav">
                    <li class="active"><a href="services-details.html?id=BLDC" style="background-color: #bcff00;">BLDC(Brushless DC Permanent
                            Magnet Motors)</a></li>
                    <li><a href="services-details.html?id=Air_Cooler_Motor">-Air Cooler Motor</a></li>
                    <li><a href="services-details.html?id=Hub_Motor" style="background-color: #f0ffc5;">-Hub Motor</a></li>
                    <li><a href="services-details.html?id=Product_Three">-Product Three</a></li>
                    <li><a href="services-details.html?id=PMSM" style="background-color: #bcff00;">PMSM(Permanent Magnet Synchronous Motors)</a>
                    </li>
                    <li><a href="services-details.html?id=Axial_Flux_Motors" style="background-color: #bcff00;">Axial Flux Motors</a></li>
                </ul>
            </div>
        </div>
        <div class="col-md-9 col-sm-8">
        <div class="single-wrapper">
        <h2>Hub Motor</h2>
          <div id="single-services" class="owl-carousel">
              <div class="item"><img src="./images/Products/BLDC.jpg" alt=""> </div>
              <div class="item"><img src="./images/Products/BLDC.jpg" alt=""> </div>
              <div class="item"><img src="./images/Products/BLDC.jpg" alt=""> </div>
          </div>
          <div class="services-content">
              <h2>Hub Motor</h2>
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
    Product_Three: `
    <div class="row">
        <div class="col-md-3 col-sm-4">
            <div class="widget categories">
                <ul class="category-nav">
                    <li class="active"><a href="services-details.html?id=BLDC" style="background-color: #bcff00;">BLDC(Brushless DC Permanent
                            Magnet Motors)</a></li>
                    <li><a href="services-details.html?id=Air_Cooler_Motor">-Air Cooler Motor</a></li>
                    <li><a href="services-details.html?id=Hub_Motor">-Hub Motor</a></li>
                    <li><a href="services-details.html?id=Product_Three" style="background-color: #f0ffc5;">-Product Three</a></li>
                    <li><a href="services-details.html?id=PMSM" style="background-color: #bcff00;">PMSM(Permanent Magnet Synchronous Motors)</a>
                    </li>
                    <li><a href="services-details.html?id=Axial_Flux_Motors" style="background-color: #bcff00;">Axial Flux Motors</a></li>
                </ul>
            </div>
        </div>
        <div class="col-md-9 col-sm-8">
        <div class="single-wrapper">
        <h2>Product Three</h2>
          <div id="single-services" class="owl-carousel">
              <div class="item"><img src="./images/Products/BLDC.jpg" alt=""> </div>
              <div class="item"><img src="./images/Products/BLDC.jpg" alt=""> </div>
              <div class="item"><img src="./images/Products/BLDC.jpg" alt=""> </div>
          </div>
          <div class="services-content">
              <h2>Product Three</h2>
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
    Product_Four: `
    <div class="row">
        <div class="col-md-3 col-sm-4">
            <div class="widget categories">
                <ul class="category-nav">
                    <li><a href="services-details.html?id=BLDC" style="background-color: #bcff00;">BLDC(Brushless DC Permanent
                            Magnet Motors)</a></li>
                    <li class="active"><a href="services-details.html?id=PMSM" style="background-color: #bcff00;">PMSM(Permanent Magnet Synchronous Motors)</a>
                    </li>
                    <li><a href="services-details.html?id=Product_Four" style="background-color: #f0ffc5;">-Product Four</a></li>
                    <li><a href="services-details.html?id=Product_Five">-Product Five</a></li>
                    <li><a href="services-details.html?id=Product_Six">-Product Six</a></li>
                    <li><a href="services-details.html?id=Axial_Flux_Motors" style="background-color: #bcff00;">Axial Flux Motors</a></li>
                </ul>
            </div>
        </div>
        <div class="col-md-9 col-sm-8">
            <div class="single-wrapper">
            <h2>Product Four</h2>
                <div id="single-services" class="owl-carousel">
                <div class="item"><img src="./images/Products/PMSM.jpg" alt=""> </div>
                <div class="item"><img src="./images/Products/PMSM.jpg" alt=""> </div>
                <div class="item"><img src="./images/Products/PMSM.jpg" alt=""> </div>
                </div>
                <div class="services-content">
                    <h2>Product Four</h2>
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
    Product_Five: `
    <div class="row">
        <div class="col-md-3 col-sm-4">
            <div class="widget categories">
                <ul class="category-nav">
                    <li><a href="services-details.html?id=BLDC" style="background-color: #bcff00;">BLDC(Brushless DC Permanent
                            Magnet Motors)</a></li>
                    <li class="active"><a href="services-details.html?id=PMSM" style="background-color: #bcff00;">PMSM(Permanent Magnet Synchronous Motors)</a>
                    </li>
                    <li><a href="services-details.html?id=Product_Four">-Product Four</a></li>
                    <li><a href="services-details.html?id=Product_Five" style="background-color: #f0ffc5;">-Product Five</a></li>
                    <li><a href="services-details.html?id=Product_Six">-Product Six</a></li>
                    <li><a href="services-details.html?id=Axial_Flux_Motors" style="background-color: #bcff00;">Axial Flux Motors</a></li>
                </ul>
            </div>
        </div>
        <div class="col-md-9 col-sm-8">
            <div class="single-wrapper">
            <h2>Product Five</h2>
                <div id="single-services" class="owl-carousel">
                <div class="item"><img src="./images/Products/PMSM.jpg" alt=""> </div>
                <div class="item"><img src="./images/Products/PMSM.jpg" alt=""> </div>
                <div class="item"><img src="./images/Products/PMSM.jpg" alt=""> </div>
                </div>
                <div class="services-content">
                    <h2>Product Five</h2>
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
    Product_Six: `
    <div class="row">
        <div class="col-md-3 col-sm-4">
            <div class="widget categories">
                <ul class="category-nav">
                    <li><a href="services-details.html?id=BLDC" style="background-color: #bcff00;">BLDC(Brushless DC Permanent
                            Magnet Motors)</a></li>
                    <li class="active"><a href="services-details.html?id=PMSM" style="background-color: #bcff00;">PMSM(Permanent Magnet Synchronous Motors)</a>
                    </li>
                    <li><a href="services-details.html?id=Product_Four">-Product Four</a></li>
                    <li><a href="services-details.html?id=Product_Five">-Product Five</a></li>
                    <li><a href="services-details.html?id=Product_Six" style="background-color: #f0ffc5;">-Product Six</a></li>
                    <li><a href="services-details.html?id=Axial_Flux_Motors" style="background-color: #bcff00;">Axial Flux Motors</a></li>
                </ul>
            </div>
        </div>
        <div class="col-md-9 col-sm-8">
            <div class="single-wrapper">
            <h2>Product Six</h2>
                <div id="single-services" class="owl-carousel">
                <div class="item"><img src="./images/Products/PMSM.jpg" alt=""> </div>
                <div class="item"><img src="./images/Products/PMSM.jpg" alt=""> </div>
                <div class="item"><img src="./images/Products/PMSM.jpg" alt=""> </div>
                </div>
                <div class="services-content">
                    <h2>Product Six</h2>
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
    Product_Seven: `
    <div class="row">
        <div class="col-md-3 col-sm-4">
            <div class="widget categories">
                <ul class="category-nav">
                    <li><a href="services-details.html?id=BLDC" style="background-color: #bcff00;">BLDC(Brushless DC Permanent
                            Magnet Motors)</a></li>
                    <li><a href="services-details.html?id=PMSM" style="background-color: #bcff00;">PMSM(Permanent Magnet Synchronous Motors)</a>
                    </li>
                    <li class="active"><a href="services-details.html?id=Axial_Flux_Motors" style="background-color: #bcff00;">Axial Flux Motors</a></li>
                    <li><a href="services-details.html?id=Product_Seven" style="background-color: #f0ffc5;">-Product Seven</a></li>
                    <li><a href="services-details.html?id=Product_Eight">-Product Eight</a></li>
                    <li><a href="services-details.html?id=Product_Nine">-Product Nine</a></li>
                </ul>
            </div>
        </div>
        <div class="col-md-9 col-sm-8">
            <div class="single-wrapper">
            <h2>Product Seven</h2>
                <div id="single-services" class="owl-carousel">
                <div class="item"><img src="./images/Products/AFM.jpg" alt=""> </div>
                <div class="item"><img src="./images/Products/AFM.jpg" alt=""> </div>
                <div class="item"><img src="./images/Products/AFM.jpg" alt=""> </div>
                </div>
                <div class="services-content">
                    <h2>Product Seven</h2>
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
    Product_Eight: `
    <div class="row">
        <div class="col-md-3 col-sm-4">
            <div class="widget categories">
                <ul class="category-nav">
                    <li><a href="services-details.html?id=BLDC" style="background-color: #bcff00;">BLDC(Brushless DC Permanent
                            Magnet Motors)</a></li>
                    <li><a href="services-details.html?id=PMSM" style="background-color: #bcff00;">PMSM(Permanent Magnet Synchronous Motors)</a>
                    </li>
                    <li class="active"><a href="services-details.html?id=Axial_Flux_Motors" style="background-color: #bcff00;">Axial Flux Motors</a></li>
                    <li><a href="services-details.html?id=Product_Seven">-Product Seven</a></li>
                    <li><a href="services-details.html?id=Product_Eight" style="background-color: #f0ffc5;">-Product Eight</a></li>
                    <li><a href="services-details.html?id=Product_Nine">-Product Nine</a></li>
                </ul>
            </div>
        </div>
        <div class="col-md-9 col-sm-8">
            <div class="single-wrapper">
            <h2>Product Eight</h2>
                <div id="single-services" class="owl-carousel">
                <div class="item"><img src="./images/Products/AFM.jpg" alt=""> </div>
                <div class="item"><img src="./images/Products/AFM.jpg" alt=""> </div>
                <div class="item"><img src="./images/Products/AFM.jpg" alt=""> </div>
                </div>
                <div class="services-content">
                    <h2>Product Eight</h2>
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
    Product_Nine: `
    <div class="row">
        <div class="col-md-3 col-sm-4">
            <div class="widget categories">
                <ul class="category-nav">
                    <li><a href="services-details.html?id=BLDC" style="background-color: #bcff00;">BLDC(Brushless DC Permanent
                            Magnet Motors)</a></li>
                    <li><a href="services-details.html?id=PMSM" style="background-color: #bcff00;">PMSM(Permanent Magnet Synchronous Motors)</a>
                    </li>
                    <li class="active"><a href="services-details.html?id=Axial_Flux_Motors" style="background-color: #bcff00;">Axial Flux Motors</a></li>
                    <li><a href="services-details.html?id=Product_Seven">-Product Seven</a></li>
                    <li><a href="services-details.html?id=Product_Eight">-Product Eight</a></li>
                    <li><a href="services-details.html?id=Product_Nine" style="background-color: #f0ffc5;">-Product Nine</a></li>
                </ul>
            </div>
        </div>
        <div class="col-md-9 col-sm-8">
            <div class="single-wrapper">
            <h2>Product Nine</h2>
                <div id="single-services" class="owl-carousel">
                <div class="item"><img src="./images/Products/AFM.jpg" alt=""> </div>
                <div class="item"><img src="./images/Products/AFM.jpg" alt=""> </div>
                <div class="item"><img src="./images/Products/AFM.jpg" alt=""> </div>
                </div>
                <div class="services-content">
                    <h2>Product Nine</h2>
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

