const urlParms = new URLSearchParams(window.location.search);
console.log(urlParms);
const blogId = urlParms.get("id");
console.log(blogId);

const blogData = {
  c4ca4238a0b923820dcc509a6f75849b: `
            <div class="col-md-8 col-sm-7"> 
              <!-- single-blog start -->
              <article class="blog-post-wrapper">
                <div class="blog-banner"> <a href="javascript:void(0)" class="blog-images"> <img src="./images/blogs/blog1.jpg" alt=""> </a>
                  <div class="blog-content">
                    <div class="blog-meta"> <span class="date-type"> 20 Dec 2023 </span> <span class="comments-type"> <i class="fa fa-comment-o"></i> 0 </span> </div>
                    <a href="javascript:void(0)">
                    <h4>Evolution of Brushless DC Motor</h4>
                    </a>
                    <p>Advantages of Brushless DC Motor Brushless motors are more efficient as its velocity is determined by the frequency at which current is supplied, not the voltage.  </p>
                    <p>As brushes are absent, the mechanical energy loss due to friction is less which enhanced efficiency. BLDC motor can operate at high-speed under any condition. </p>
                    <p>There is no sparking and much less noise during operation. </p>
                    <p>More electromagnets could be used on the stator for more precise control. BLDC motors accelerate and decelerate easily as they are having low rotor inertia. </p>
                    <p>It is high performance motor that provides large torque per cubic inch over a vast sped rang. BLDC motors do not have brushes which make it more reliable, high life expectancies, and maintenance free operation. </p>
                    <p>There is no ionizing sparks from the commutator, and electromagnetic interference is also get reduced. Such motors cooled by conduction and no air flow are required for inside cooling</p>
                    <p>Speed control of DC Motors The basic principle of the DC motor is a device which converts DC energy into mechanical energy. When the current carrying armature is connected to the supply end though commentator segment, brushes are placed within the North South Poles of permanent or electromagnets. By using these electromagnets operating principle is depends on the Fleming’s left hand rule to determine the direction of the force acting on the armature conductors of the DC motor. </p>
                    <blockquote>
                      <p>Methods: Speed of a DC motor can be varied by varying flux, armature resistance or applied voltage. Different speed control methods for different DC shunt and series methods are there. </p>
                    </blockquote>
                    <p>Speed Control of Shunt Motors </p>
                    <ul>
                      <li>Flux control method </li>
                      <li>Armature and Rheostatic control method </li>
                      <p><b>Voltage control method</b></p>
                      <ul>
                        <li>1. Multiple voltage control</li>
                        <li>2. Ward Leonard system Speed Control of Series Motors</li>
                      </ul>
                      <p><b>Flux control method</b></p>
                      <ul>
                        <li>1. Field diverter</li>
                        <li>2. Armature diverter</li>
                        <li>3. Trapped field control</li>
                        <li>4. Paralleling field coils</li>
                      </ul>
                      <li>Variable Resistance in series with motor </li>
                      <li>Series -parallel control method</li>
                    </ul>
                    <p>Flux Control Method In this flux control method, speed of the motor is inversely proportional to the flux. Thus, by decreasing flux and speed can be increased vice versa. To control the flux, the rheostat is added in series with the field winding will increase the speed (N), because of this flux will decrease. So, the field current is relatively small and hence I2R loss is decreased. This method is quite efficient. </p>
                  </div>
                </div>
              </article>
              <div class="clear"></div>
              <!-- single-blog end --> 
            </div>
  `,
  c81e728d9d4c2f636f067f89cc14862c: `
  <div class="col-md-8 col-sm-7">
  <!-- single-blog start -->
  <article class="blog-post-wrapper">
    <div class="blog-banner"> <a href="javascript:void(0)" class="blog-images"> <img
          src="./images/blogs/blog2.jpg" alt=""> </a>
      <div class="blog-content">
        <div class="blog-meta"> <span class="date-type"> 20 Dec 2023 </span> <span class="comments-type"> <i
              class="fa fa-comment-o"></i> 0 </span> </div>
        <a href="javascript:void(0)">
          <h4>Selection of Motor Power Rating</h4>
        </a>
        <ul>
          <li>
            <p>⦿ Selection of power rating is important to achieve economy with reliability.</p>
          </li>
          <li>
           <p>⦿ Improper selection of motor power rating results extra initial cost and extra loss of energy due
            to the operation below rated power makes the choice uneconomical.</p>
          </li>
          <li>
            <p>⦿ Furthermore, induction and synchronous motors operate at a low power factor when operating below
              the rated power.</p>
          </li>
          <li>
           <p>⦿ During operation of the machine, heat is produced due to losses and temperature rises. An amount
            of developed heat is dissipated into the atmosphere. When the dissipation of heat is equal to
            the developed heat, then it is said to be equilibrium condition. "Motor temperature then reaches
            a steady state value.</p>
          </li>
          <li>
            <p>⦿ Steady state temperature depends on power loss, which in turn depends on the output power of the
              machine. Since temperature rise has a direct relation with the output power, it is termed
              thermal loading on the machine.</p>
          </li>
          <li>
            <p>⦿ Steady state temperature varies in different parts of the machine. It is usually high ii the
              windings because loss density in conductors is high and dissipation is slow; and the conductors
              which are wrapped in insulating material are partly embedded in slots and thus are not directly
              exposed to the cooling air</p>
          </li>
          <li>
            <blockquote>
              <p>"Motor rating should be selected in such a way that the insulation temperature never
                exceeds the prescribed limit; otherwise it loses its thermal stability. </p>
            </blockquote>
          </li>
          <li>
           <p>⦿ It is simple to calculate the motor power rating of the motor which operate at a constant power
            and speed. But most loads operate at variable power and speed at different applications, then
            exact Motor rating calculation becomes difficult.</p>
          </li>
        </ul>
      </div>
    </div>
  </article>
  <div class="clear"></div>
  <!-- single-blog end -->
</div>
  `,
  eccbc87e4b5ce2fe28308fd9f2a7baf3: `<div class="col-md-8 col-sm-7"> 
  <!-- single-blog start -->
  <article class="blog-post-wrapper">
    <div class="blog-banner">
      <div class="blog-content">
        <blockquote>
          <p>This Blog is currently not available : Blog 3</p>
        </blockquote>
      </div>
    </div>
  </article>
  <div class="clear"></div>
  <!-- single-blog end --> 
</div>`,
  a87ff679a2f3e71d9181a67b7542122c: '4'
};

const blogElement = document.getElementById('blogDetail')
if (blogData[blogId]) {
  blogElement.innerHTML = blogData[blogId]
} else {
  blogElement.innerHTML = `<div class="col-md-8 col-sm-7"> 
    <!-- single-blog start -->
    <article class="blog-post-wrapper">
      <div class="blog-banner">
        <div class="blog-content">
          <blockquote>
            <p>This Blog is currently not available</p>
          </blockquote>
        </div>
      </div>
    </article>
    <div class="clear"></div>
    <!-- single-blog end --> 
  </div>`;
}