 const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');
  const modalBody = document.getElementById('modal-body');

  const contentData = [
`
    <h3>Why Choose Us</h3>
    <p>Bright Box Homes, <strong>North America's <em>only</em>&nbsp; authorized dealer</strong> for three of the world’s largest container home ODM's (Original Design Manufacturers). 
    We deliver affordable, customizable, high-quality container homes with modern features included as standard. 
    Our homes are ready-to-move-in, and with each sale, we contribute <strong>$1,500</strong> to affordable housing programs.</p>
    <img src="https://cdn.shopify.com/s/files/1/0808/4910/9276/files/Adobe_Express_-_file_1.png?v=1748610203" alt="Option 1" style="width:100%; height:auto;">
    `,
    
    `
    <h3>Us Vs Them</h3>
    <video controls width="100%" style="border-radius: 8px; margin-top: 20px;">
        <source src="https://cdn.shopify.com/videos/c/o/v/76c1e8433f954dc8be7fb99675d36943.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    `,
    
    `
    <h3>⭐ Find Land ⭐</h3>
    <div class="find-land-container">
        <img src="https://cdn.shopify.com/s/files/1/0808/4910/9276/files/DJI_20240501192139_0087_D_1.jpg?v=1748618102" 
             alt="Land Image" class="land-banner" style="max-width: 1000px; height: 200px;">
        <div class="find-land-content">
            <p><strong>Find Your Perfect Land Today!</strong></p>
            <p>Looking for the ideal spot for your expandable container home, Space Capsule Home, or Apple Cabin? 
               Unrestricted land outside city limits is your best bet—just like mobile homes, some municipalities restrict tiny home placements.</p>
            <p>The good news? Your peaceful, private oasis is within reach! Whether you're in South Texas, the East Coast, or beyond, we’ve got you covered. 
               We’ve teamed up with top Zillow agent Chris Cabiya, who’s connected to a nationwide network of land brokers. 
               Ready to find your dream land? Call Chris today and start building your future!</p>
            <div class="agent-info">
                <img src="https://cdn.shopify.com/s/files/1/0808/4910/9276/files/Untitled_design_2.jpg?v=1748617794" 
                     alt="Agent Card" class="agent-card" style="max-width: 600px; padding-top: 15px;">
                <h3>Contact: 1-830-613-8574</h3>
                <div class="button-group">
                    <a href="https://blinq.me/Xx2gvnoAvzK9?bs=db" target="_blank" class="button-link">Contact Info</a>
                    <a href="http://www.cabiyarealtygroup.com/" target="_blank" class="button-link">Website</a>
                    <a href="https://calendly.com/chriscabiya" target="_blank" class="button-link">Book a Meeting</a>
                </div>
            </div>
        </div>
    </div>
    `,
    
    `
    <h3>Product Details</h3>
    <p>Our completely customized, expandable shipping container homes come turnkey, with more than $10,000 in upgrades. Here's what's included:</p>
            <div class="features-list">
                <div class="feature-item2">• Commercial quality 24 gauge corrugated sheet metal roofing (with choice of metal colors) and gabled truss supports</div>
                <div class="feature-item2">• 20x10 ft Covered front porch / terrace with railing and decking. Choice of colors for decking material and railing</div>
                <div class="feature-item2">• Choice of exterior colors, and trim colors</div>
                <div class="feature-item2">• 24,000 BTU inverter 20 seer heat pump mini split AC system</div>
                <div class="feature-item2">• Upper and lower u-shaped kitchen cabinets, upgraded black trim</div>
                <div class="feature-item2">• Double induction burner stove built into kitchen cabinet top, with digital, vented range hood</div>
                <div class="feature-item2">• 1/2 horsepower garbage disposal with outlet</div>
                <div class="feature-item2">• Extra large bathroom to accommodate washer dryer location</div>
                <div class="feature-item2">• Choice of 16 customized vanities in bathroom</div>
                <div class="feature-item2">• Walk-in shower with designer shower head</div>
                <div class="feature-item2">• On demand hot water heater</div>
                <div class="feature-item2">• Four 240 vac outlets; one for induction burner stove, two for choice of locations for washer dryer (bathroom, or adjoining bedroom), and one on the exterior rear for solar power connection whole house control</div>
                <div class="feature-item2">• Left rear sliding door</div>
                <div class="feature-item2">• 100 mm thick EPS rockwool panels; more than twice the insulated protection of standard insulated sandwich panels</div>
                <div class="feature-item2">• Upgraded 125 amp electrical panel</div>
                <div class="feature-item2">• Faux wood mini blinds, with choice of 10 colors</div>
                <div class="feature-item2">• Five low profile ceiling mounted air movement fans; one in each bedroom, two in living area</div>
                <div class="feature-item2">• Wall mount TV bracket with RG6 cable and 110 outlet to hide power cords</div>
                <div class="feature-item2">• Smoke detector</div>
                <div class="feature-item2">• High quality, low-E, double pane, broken bridge aluminum windows (8)</div>
                <div class="feature-item2">• Three external roughed-in electrical wiring outlets for adding porch lights; 2 in the front on either side of entry door, one outside back sliding door</div>
                <div class="feature-item2">• 33-110 vac outlets, 7 GFCI 110 outlets (three in kitchen, one in bathroom, and three outdoors with protective covers), 4-240 vac outlets, 8 light switches, four dimmer switches, five separate ceiling mounted air movement fan switches</div> 
    `,
    
    `
    <div style="display: flex; align-items: flex-start;">
    <div style="flex: 1; padding-right: 20px;">
        <h3>Buyer Beware</h3>
        <p>Some competitors on Amazon or Alibaba offer low prices but exclude essentials like electricity (you have to install your own), kitchens, bathrooms, and customization, 
           with shipping costs up to $15,000. On Facebook Marketplace, many scammers & unauthorized dealers abound. We are the one and only Bright Box Homes! 
           So check websites, phone numbers and BBB credentials. Additionally, why spend $20,000+ on post-delivery upgrades when Brightbox Homes offers a fully turn-key solution? 
           We include air conditioning, a stove, pitched heavy gauge roof, railed terrace, 10 customizable color palettes and much more—what others call "upgrades" is standard with us. 
           Visit our "US vs. Them" section to see the real value we provide.</p>
    </div>
    <div style="flex: 1; text-align: right;">
        <img src="https://cdn.shopify.com/s/files/1/0808/4910/9276/files/Screenshot_20250530_181858_Samsung_Internet.png?v=1748618362" 
             alt="Buyer Beware" style="width: 90%; height: auto; margin-top: 5%;">
    </div>
</div>

<br><br>

<p>The Truth About $10,000 Tiny Homes: Buyer Beware</p>
<p>Social media has popularized claims of $10,000 modular homes, but these are often misleading. Boxabl’s “Casita,” widely promoted as a $10,000 home, actually starts around $60,000—excluding land, site prep, shipping, and other costs. 
   Paid influencers spread these low-price claims, setting unrealistic expectations and creating confusion. Despite rumors, Elon Musk is not affiliated with Boxabl.</p>

<br><br>

<p>Before investing, do your research: check official websites for real pricing, read unbiased reviews, and ask about hidden costs like delivery and post-purchase upgrades. 
   Boxabl, for instance, has over 100,000 backorders and hasn't yet fulfilled them.</p>

<br><br>

<p>At Bright Box Homes, we are the authorized factory dealer for three of the world's largest container home manufacturers. 
   We offer a fully transparent, turn-key solution. Our homes come complete with all amenities, including customization, so you won't face unexpected costs after purchase. 
   We make affordable homeownership a reality—without the bait and switch.</p>
    
`
  ];


    function openModal(index) {
    modal.style.display = "flex";
    modalBody.innerHTML = contentData[index];
    setTimeout(() => {
      modal.classList.remove("hide");
    }, 10);
  }

  function closeModal() {
    modal.classList.add("hide");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  }

  // Close modal when clicking outside the modal content
  modal.addEventListener("click", function(event) {
    if (!modalContent.contains(event.target)) {
      closeModal();
    }
  });

  // Prevent clicks *inside* the modal content from closing it
  modalContent.addEventListener("click", function(event) {
    event.stopPropagation();
  });
