const Information_Div = document.createElement("div")

Information_Div.classList.add("information")

Information_Div.innerHTML=`
                        
<ul>
    

<li class="border-light"><a href="index.html" class="detials">Home</a></li>


</ul>



<ul>



<li><a href="about_us.html" class="detials">About us<i class="bi bi-arrow-down-short"></i></a></li>



</ul>
    

<ul>



<li>Products<i class="bi bi-arrow-down-short"></i>



<div class="sub1">



<ul>



<li>TATA



<div class="sub2">



<ul>



<li><a href="Tata Tea Powder.html">Tea Powder</a></li>



<li><a href="Tata Tea Bag.html">Tea Bags</a></li>



<li><a href="Tata Coffee Powder.html">Coffee Powder</a></li>



<li><a href="Tata Water.html">Water</a></li>



<li><a href="Tata Jam.html">Jam</a></li>



</ul>



</div>



</li>



<li>Nestle



<div class="sub2">



<ul>



<li><a href="NESCAFE CHOCOLATES.html">Chocolate</a></li>



<li><a href="NESCAFE VENDING.html">Vending Powders</a></li>



<li><a href="NESCAFE COFFEE MACHINE.html">Coffee Machine</a></li>



</ul>



</div>



</li>


<li>ITC


<div class="sub2">


<ul>


<li><a href="ITC BISCUITS.html">Biscuits</a></li>


<li><a href="ITC BINGO.html">Bingo</a></li>



<li><a href="ITC MAD ANGLES.html">MAD ANGLES</a></li>


</ul>


</div>
    

</li>
    

<li>COCA-COLA
    

<div class="sub2">    

<ul>

<li><a href="Coca-Cola Cans.html">Cans</a></li>
    
<li><a href="COCA COLA PLASTIC BOTTLE.html">Plastic Bottle</a></li>

</ul>    

</div>


</li>    

<li>H.U.L

<div class="sub2">

<ul>

<li><a href="H.U.L BOOST.html">Boost</a></li>

<li><a href="H.U.L Horlicks.html">Horlicks</a></li>

<li><a href="H.U.L Coffee Powders.html">Coffee Powder</a></li>

<li><a href="H.U.L PACKET ITEMS.html">Packet Items</a></li>

<li><a href="H.U.L Sachets.html">Sachet Items</a></li>

<li><a href="H.U.L Tea Powders.html">Tea Powder</a></li>

</ul>

</div>

</li>

<li><a href="Whole Product.html">Whole-Products</a></li>

</ul>

</div>

</li>

</ul>`

function okkkk(){
    
    document.getElementById("information-1").appendChild(Information_Div)

    console.log("Done")

}

$(document).ready(function(){

    okkkk()

})