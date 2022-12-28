function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}


function tot_dep() 
{
  var DepTotal = 0;
  var D1 = document.getElementById("dep_031"); 
  var D2 = document.getElementById("dep_032"); 
  var D3 = document.getElementById("dep_033"); 
  var D4 = document.getElementById("dep_034"); 
  var D5 = document.getElementById("dep_035"); 
  var D6 = document.getElementById("dep_036"); 
  var D7 = document.getElementById("dep_037"); 
  
  var dep_031 = D1.options[D1.selectedIndex].value;
  var dep_032 = D2.options[D2.selectedIndex].value;
  var dep_033 = D3.options[D3.selectedIndex].value;
  var dep_034 = D4.options[D4.selectedIndex].value;
  var dep_035 = D5.options[D5.selectedIndex].value;
  var dep_036 = D6.options[D6.selectedIndex].value;
  var dep_037 = D7.options[D7.selectedIndex].value;
  
  
  var DepTotal = ( +dep_031 + +dep_032 + +dep_033 + +dep_034  + +dep_035 +dep_036 +dep_037 ) * 2;
  
    //display total Depression score
    var disp = document.getElementById('totalDep');
    disp.style.display='block';
    disp.innerHTML = "Total Stress Score: "+DepTotal;
    
    return DepTotal;
}

function tot_anx() 
{
  var AnxTotal = 0;
  var A1 = document.getElementById("anx_021"); 
  var A2 = document.getElementById("anx_022"); 
  var A3 = document.getElementById("anx_023"); 
  var A4 = document.getElementById("anx_024"); 
  var A5 = document.getElementById("anx_025"); 
  var A6 = document.getElementById("anx_026"); 
  var A7 = document.getElementById("anx_027"); 
  
  var anx_021 = A1.options[A1.selectedIndex].value;
  var anx_022 = A2.options[A2.selectedIndex].value;
  var anx_023 = A3.options[A3.selectedIndex].value;
  var anx_024 = A4.options[A4.selectedIndex].value;
  var anx_025 = A5.options[A5.selectedIndex].value;
  var anx_026 = A6.options[A6.selectedIndex].value;
  var anx_027 = A7.options[A7.selectedIndex].value;

  
  var AnxTotal = ( +anx_021 + +anx_022 + +anx_023 + +anx_024  + +anx_025 +anx_026 +anx_027 ) * 2;
 
   //display total primary score
    var disp = document.getElementById('totalAnx');
    disp.style.display='block';
    disp.innerHTML = "Total Stress Score: "+AnxTotal;
    
    return AnxTotal;
}

function tot_sre() 
{
  var SreTotal = 0;
  var S1 = document.getElementById("sre_011"); 
  var S2 = document.getElementById("sre_012"); 
  var S3 = document.getElementById("sre_013"); 
  var S4 = document.getElementById("sre_014"); 
  var S5 = document.getElementById("sre_015"); 
  var S6 = document.getElementById("sre_016"); 
  var S7 = document.getElementById("sre_017"); 
  
  var sre_011 = S1.options[S1.selectedIndex].value;
  var sre_012 = S2.options[S2.selectedIndex].value;
  var sre_013 = S3.options[S3.selectedIndex].value;
  var sre_014 = S4.options[S4.selectedIndex].value;
  var sre_015 = S5.options[S5.selectedIndex].value;
  var sre_016 = S6.options[S6.selectedIndex].value;
  var sre_017 = S7.options[S7.selectedIndex].value;
  
  
  var SreTotal = (+sre_011 + +sre_012 + +sre_013 + +sre_014  + +sre_015 +sre_016 +sre_017) * 2;
  
  //display total stress score
    var disp = document.getElementById('totalSre');
    disp.style.display='block';
    disp.innerHTML = "Total Stress Score: "+SreTotal;
    
    return SreTotal;
}


///////////////////// Decision ///////////////////////////////////////////

function depressed() {
  var totalPoint = 0;
  
  //  Evaluate depression severity level //
  totalPoint = tot_Dep();

  if (totalPoint >= 0 && <= 9){
    document.getElementById("strength_tm").innerHTML = "Normal" 
  }
   if (totalPoint >= 10 && <= 13){
    document.getElementById("strength_tm").innerHTML = "Mild" 
  }
   if (totalPoint >= 14 && <= 20){
    document.getElementById("strength_tm").innerHTML = "Moderate" 
  }
   if (totalPoint >= 21 && <= 27){
    document.getElementById("strength_tm").innerHTML = "Severe" 
  }
  else{
    document.getElementById("strength_tm").innerHTML = "Extremely Severe"
  }
  
}

function anxiety() {
  var totalPoint = 0;
  
  //  Evaluate anxiety severity level //
  totalPoint = tot_Anx();

  if (totalPoint >= 0 && <= 7){
    document.getElementById("strength_tm").innerHTML = "Normal" 
  }
   if (totalPoint >= 8 && <= 9){
    document.getElementById("strength_tm").innerHTML = "Mild" 
  }
   if (totalPoint >= 10 && <= 14){
    document.getElementById("strength_tm").innerHTML = "Moderate" 
  }
   if (totalPoint >= 15 && <= 19){
    document.getElementById("strength_tm").innerHTML = "Severe" 
  }
  else{
    document.getElementById("strength_tm").innerHTML = "Extremely Severe"
  }

}

function stress() {
  var totalPoint = 0;
  
  //  Evaluate stress severity level //
  totalPoint = tot_Sre();

  if (totalPoint >= 0 && <= 14){
    document.getElementById("strength_tm").innerHTML = "Normal" 
  }
   if (totalPoint >= 15 && <= 18){
    document.getElementById("strength_tm").innerHTML = "Mild" 
  }
   if (totalPoint >= 19 && <= 25){
    document.getElementById("strength_tm").innerHTML = "Moderate" 
  }
   if (totalPoint >= 26 && <= 33){
    document.getElementById("strength_tm").innerHTML = "Severe" 
  }
  else{
    document.getElementById("strength_tm").innerHTML = "Extremely Severe"
  }
  
}

function predict()
{
    let x=50;
    
    var score_isp500= tot_cs() + tot_cl() + tot_ps()  ;
    var score=[(score_isp500 + tot_p1())/200]*100;
    
        if(score <=100 && score >89)
			{
				document.getElementById("gradeisp500").innerHTML = "A+";
				document.getElementById("gpaisp500").innerHTML = 4;
				var sgpaisp500= 4*3;
			}
		
       else if (score <=89 && score>79)
			{
				document.getElementById("gradeisp500").innerHTML = "A";
				document.getElementById("gpaisp500").innerHTML = 4;
				var sgpaisp500= 4*3;
			}
			
		else if (score <=79 && score>74)
			{
				document.getElementById("gradeisp500").innerHTML = "A-";
				document.getElementById("gpaisp500").innerHTML = 3.67;
				var sgpaisp500= 3.67*3;
			}
				
        else if (score <=74 && score>69)
			{
				document.getElementById("gradeisp500").innerHTML = "B+";
				document.getElementById("gpaisp500").innerHTML = 3.33;
				var sgpaisp500= 3.33*3;
			}
            
        else if (score<=69 && score>64)
			{
				document.getElementById("gradeisp500").innerHTML = "B";
				document.getElementById("gpaisp500").innerHTML = 3;
				var sgpaisp500= 3*3;
			}
           
        else if (score <=64 && score>59)
			{
				document.getElementById("gradeisp500").innerHTML = "B-";
				document.getElementById("gpaisp500").innerHTML = 2.67;
				var sgpaisp500= 2.67*3;
			}
            
         else if (score<=59 && score>54)
			{ 
				document.getElementById("gradeisp500").innerHTML = "C+";
				document.getElementById("gpaisp500").innerHTML = 2.33;
				var sgpaisp500= 2.33*3;
			}
            
        else if (score<=54 && score>49)
			{
				document.getElementById("gradeisp500").innerHTML = "C";
				document.getElementById("gpaisp500").innerHTML = 2;
				var sgpaisp500= 2*3;
			}
            
        else if (score<=49 && score>46)
			{
				document.getElementById("gradeisp500").innerHTML = "C-";
				document.getElementById("gpaisp500").innerHTML = 1.67;
				var sgpaisp500= 1.67*3;
			}
            
        else if (score<=46 && score>43)
			{
				document.getElementById("gradeisp500").innerHTML = "D+";
				document.getElementById("gpaisp500").innerHTML = 1.33;
				var sgpaisp500= 1.33*3;
			}
            
        else if (score<=43 && score>39)
			{
				document.getElementById("gradeisp500").innerHTML = "D";
				document.getElementById("gpaisp500").innerHTML = 1;
				var sgpaisp500= 1*3;
			}
        
        else if (score<=39 && score>29)
			{
				document.getElementById("gradeisp500").innerHTML = "E";
				document.getElementById("gpaisp500").innerHTML = 0.67;
				var sgpaisp500= 0.67*3;
			}
            
        else if (score<=29 && score>=0)
			{
				document.getElementById("gradeisp500").innerHTML = "F";
				document.getElementById("gpaisp500").innerHTML = 0;
				var sgpaisp500 = 0*3;
			}


	
///////////// ISP500 TAMAT DISINI //////////////

$(document).ready(function() {
  $("#testimonial-slider").owlCarousel({
    items: 3,
    itemsDesktop:[1000,3],
    itemsDesktopSmall:[979,2],
    itemsTablet:[768, 2],
    itemsMobile:[650, 1],
    pagination: true,
    autoPlay: true
  });