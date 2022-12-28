function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

function details() 
{
  var stuid = document.getElementById("studentid").value;
  var stuname = document.getElementById("studentname").value;
  document.getElementById("stu_id").innerHTML = stuid;
  document.getElementById("stu_name").innerHTML = stuname;
  window.location.href = "#questionnaire";
}


function tot_tm() 
{
  var totalCal = 0;
  var a = document.getElementById("tm_01");
  var b = document.getElementById("tm_02");
  var c = document.getElementById("tm_03");
  var d = document.getElementById("tm_04");
  var e = document.getElementById("tm_05");
  var tm_01 = a.options[a.selectedIndex].value;
  var tm_02 = b.options[b.selectedIndex].value;
  var tm_03 = c.options[c.selectedIndex].value;
  var tm_04 = d.options[d.selectedIndex].value;
  var tm_05 = e.options[e.selectedIndex].value;
  
  var totalCal = +tm_01 + +tm_02 + +tm_03 + +tm_04  + +tm_05;
  document.getElementById("tm").value = totalCal;
  return totalCal;
}

function tot_le() 
{
  var totalCal = 0;
  var a = document.getElementById("le_01");
  var b = document.getElementById("le_02");
  var c = document.getElementById("le_03");
  var d = document.getElementById("le_04");
  var e = document.getElementById("le_05");
  var le_01 = a.options[a.selectedIndex].value;
  var le_02 = b.options[b.selectedIndex].value;
  var le_03 = c.options[c.selectedIndex].value;
  var le_04 = d.options[d.selectedIndex].value;
  var le_05 = e.options[e.selectedIndex].value;
  
  var totalCal = +le_01 + +le_02 + +le_03 + +le_04  + +le_05;
  document.getElementById("le").value = totalCal;
  return totalCal;
}

function tot_ss() 
{
  var totalCal = 0;
  var a = document.getElementById("ss_01");
  var b = document.getElementById("ss_02");
  var c = document.getElementById("ss_03");
  var d = document.getElementById("ss_04");
  var e = document.getElementById("ss_05");
  var ss_01 = a.options[a.selectedIndex].value;
  var ss_02 = b.options[b.selectedIndex].value;
  var ss_03 = c.options[c.selectedIndex].value;
  var ss_04 = d.options[d.selectedIndex].value;
  var ss_05 = e.options[e.selectedIndex].value;
  
  var totalCal = +ss_01 + +ss_02 + +ss_03 + +ss_04  + +ss_05;
  document.getElementById("ss").value = totalCal;
  return totalCal;
}

function tot_spm() 
{
  var totalCal = 0;
  var a = document.getElementById("spm_01");
  var b = document.getElementById("spm_02");
  var c = document.getElementById("spm_03");
  var d = document.getElementById("spm_04");
  var e = document.getElementById("spm_05");
  var spm_01 = a.options[a.selectedIndex].value;
  var spm_02 = b.options[b.selectedIndex].value;
  var spm_03 = c.options[c.selectedIndex].value;
  var spm_04 = d.options[d.selectedIndex].value;
  var spm_05 = e.options[e.selectedIndex].value;
  
  var totalCal = +spm_01 + +spm_02 + +spm_03 + +spm_04  + +spm_05;
  document.getElementById("spm").value = totalCal;
  return totalCal;
}

function tot_att() 
{
  var totalCal = 0;
  var a = document.getElementById("att_01");
  var att_01 = a.options[a.selectedIndex].value;
  
  var totalCal = +att_01;
  document.getElementById("att").value = totalCal;
  return totalCal;
}

function tot_cgpa() 
{
  var totalCal = 0;
  var a = document.getElementById("cgpa_01");
  var cgpa_01 = a.options[a.selectedIndex].value;
  
  var totalCal = +cgpa_01;
  document.getElementById("cgpa").value = totalCal;
  return totalCal;
}

function tot_muet() 
{
  var totalCal = 0;
  var a = document.getElementById("muet_01");
  var muet_01 = a.options[a.selectedIndex].value;
  
  var totalCal = +muet_01;
  document.getElementById("muet").value = totalCal;
  return totalCal;
}

function tot_int() 
{
  var totalCal = 0;
  var a = document.getElementById("int_01");
  var int_01 = a.options[a.selectedIndex].value;
  
  var totalCal = +int_01;
  document.getElementById("int").value = totalCal;
  return totalCal;
}

function tot_xcr() 
{
  var totalCal = 0;
  var a = document.getElementById("xcr_01");
  var xcr_01 = a.options[a.selectedIndex].value;
  
  var totalCal = +xcr_01;
  document.getElementById("xcr").value = totalCal;
  return totalCal;
}

function tot_p1()
{
    var primaryTotal = tot_tm() + tot_le() + tot_ss() + tot_spm()
	+ tot_att() + tot_cgpa() + tot_muet() + tot_int() + tot_xcr();
    
    //display total primary score
    var disp = document.getElementById('totalPrimary');
    disp.style.display='block';
    disp.innerHTML = "Total Primary Score: "+primaryTotal;
    
    return primaryTotal;

}

function tot_lg() 
{
  var totalCal = 0;
  var a = document.getElementById("lg_01");
  var b = document.getElementById("lg_02");
  var c = document.getElementById("lg_03");
  var d = document.getElementById("lg_04");
  var e = document.getElementById("lg_05");
  var lg_01 = a.options[a.selectedIndex].value;
  var lg_02 = b.options[b.selectedIndex].value;
  var lg_03 = c.options[c.selectedIndex].value;
  var lg_04 = d.options[d.selectedIndex].value;
  var lg_05 = e.options[e.selectedIndex].value;
  
  var totalCal = +lg_01 + +lg_02 + +lg_03 + +lg_04  + +lg_05;
  document.getElementById("lg").value = totalCal;
  return totalCal;
}

function tot_pc() 
{
  var totalCal = 0;
  var a = document.getElementById("pc_01");
  var b = document.getElementById("pc_02");
  var c = document.getElementById("pc_03");
  var d = document.getElementById("pc_04");
  var e = document.getElementById("pc_05");
  var pc_01 = a.options[a.selectedIndex].value;
  var pc_02 = b.options[b.selectedIndex].value;
  var pc_03 = c.options[c.selectedIndex].value;
  var pc_04 = d.options[d.selectedIndex].value;
  var pc_05 = e.options[e.selectedIndex].value;
  
  var totalCal = +pc_01 + +pc_02 + +pc_03 + +pc_04  + +pc_05;
  document.getElementById("pc").value = totalCal;
  return totalCal;
}

function tot_ps() 
{
  var totalCal = 0;
  var a = document.getElementById("ps_01");
  var b = document.getElementById("ps_02");
  var c = document.getElementById("ps_03");
  var d = document.getElementById("ps_04");
  var e = document.getElementById("ps_05");
  var ps_01 = a.options[a.selectedIndex].value;
  var ps_02 = b.options[b.selectedIndex].value;
  var ps_03 = c.options[c.selectedIndex].value;
  var ps_04 = d.options[d.selectedIndex].value;
  var ps_05 = e.options[e.selectedIndex].value;
  
  var totalCal = +ps_01 + +ps_02 + +ps_03 + +ps_04  + +ps_05;
  document.getElementById("ps").value = totalCal;
  return totalCal;
}

function tot_ci() 
{
  var totalCal = 0;
  var a = document.getElementById("ci_01");
  var b = document.getElementById("ci_02");
  var c = document.getElementById("ci_03");
  var d = document.getElementById("ci_04");
  var e = document.getElementById("ci_05");
  var ci_01 = a.options[a.selectedIndex].value;
  var ci_02 = b.options[b.selectedIndex].value;
  var ci_03 = c.options[c.selectedIndex].value;
  var ci_04 = d.options[d.selectedIndex].value;
  var ci_05 = e.options[e.selectedIndex].value;
  
  var totalCal = +ci_01 + +ci_02 + +ci_03 + +ci_04  + +ci_05;
  document.getElementById("ci").value = totalCal;
  return totalCal;
}

function tot_cl() 
{
  var totalCal = 0;
  var a = document.getElementById("cl_01");
  var b = document.getElementById("cl_02");
  var c = document.getElementById("cl_03");
  var d = document.getElementById("cl_04");
  var e = document.getElementById("cl_05");
  var cl_01 = a.options[a.selectedIndex].value;
  var cl_02 = b.options[b.selectedIndex].value;
  var cl_03 = c.options[c.selectedIndex].value;
  var cl_04 = d.options[d.selectedIndex].value;
  var cl_05 = e.options[e.selectedIndex].value;
  
  var totalCal = +cl_01 + +cl_02 + +cl_03 + +cl_04  + +cl_05;
  document.getElementById("cl").value = totalCal;
  return totalCal;
}

function tot_cs() 
{
  var totalCal = 0;
  var a = document.getElementById("cs_01");
  var b = document.getElementById("cs_02");
  var c = document.getElementById("cs_03");
  var d = document.getElementById("cs_04");
  var e = document.getElementById("cs_05");
  var cs_01 = a.options[a.selectedIndex].value;
  var cs_02 = b.options[b.selectedIndex].value;
  var cs_03 = c.options[c.selectedIndex].value;
  var cs_04 = d.options[d.selectedIndex].value;
  var cs_05 = e.options[e.selectedIndex].value;
  
  var totalCal = +cs_01 + +cs_02 + +cs_03 + +cs_04  + +cs_05;
  document.getElementById("cs").value = totalCal;
  return totalCal;
}


function tot_dd() 
{
  var totalCal = 0;
  var a = document.getElementById("dd_01");
  var b = document.getElementById("dd_02");
  var c = document.getElementById("dd_03");
  var d = document.getElementById("dd_04");
  var e = document.getElementById("dd_05");
  var dd_01 = a.options[a.selectedIndex].value;
  var dd_02 = b.options[b.selectedIndex].value;
  var dd_03 = c.options[c.selectedIndex].value;
  var dd_04 = d.options[d.selectedIndex].value;
  var dd_05 = e.options[e.selectedIndex].value;
  
  var totalCal = +dd_01 + +dd_02 + +dd_03 + +dd_04  + +dd_05;
  document.getElementById("dd").value = totalCal;
  return totalCal;
}

///////////////////// STRENGTH & WEAKNESS ///////////////////////////////////////////
function Strength() {
  var totalPoint = 0;
  
  //  Evaluate Time management //
  totalPoint = tot_tm();

  if (totalPoint > 12){
    document.getElementById("strength_tm").innerHTML = "You managed your time efficiently." 
  }
  else{
    document.getElementById("strength_tm").innerHTML = "-"
  }
  //  Evaluate Learning Environment //
  totalPoint = tot_le();

  if (totalPoint > 12){
    document.getElementById("strength_le").innerHTML = "Your have a good learning environment." 
  }
  else{
    document.getElementById("strength_le").innerHTML = "-"
  }
  //  Evaluate Study Style //
  totalPoint = tot_ss();

  if (totalPoint > 12){
    document.getElementById("strength_ss").innerHTML = "Your study style suits you in achieving good grades." 
  }
  else{
    document.getElementById("strength_ss").innerHTML = "-"
  }
  //  Evaluate Attendance //
  totalPoint = tot_att();

  if (totalPoint > 4){
    document.getElementById("strength_att").innerHTML = "You rarely missed classes and your attendance score is excellent." 
  }
  else{
    document.getElementById("strength_att").innerHTML = "-"
  }

  //  Evaluate CGPA //
  totalPoint = tot_cgpa();

  if (totalPoint > 3){
    document.getElementById("strength_cgpa").innerHTML = "You get good grades for your past exams." 
  }
  else{
    document.getElementById("strength_cgpa").innerHTML = "-"
  }
  //  Evaluate Interest in course-enrolled //
  totalPoint = tot_int();

  if (totalPoint > 3){
    document.getElementById("strength_int").innerHTML = "It seems like you enjoy the course you enrolled." 
  }
  else{
    document.getElementById("strength_int").innerHTML = "-"
  }
  //  Evaluate Extra-curricular //
  totalPoint = tot_xcr();

  if (totalPoint > 3){
    document.getElementById("strength_xcr").innerHTML = "Your participation in extra-curricular meet a healthy balance between studying and your social life." 
  }
  else{
    document.getElementById("strength_xcr").innerHTML = "-"
  }

  //  Evaluate Linguistic //
  totalPoint = tot_lg();

  if (totalPoint > 12){
    document.getElementById("strength_lg").innerHTML = "You are doing fine at linguistic subjects." 
  }
  else{
    document.getElementById("strength_lg").innerHTML = "-"
  }

  //  Evaluate Programming/Calculation //
  totalPoint = tot_pc();

  if (totalPoint > 12){
    document.getElementById("strength_pc").innerHTML = "You are doing fine at programming & calculation subjects." 
  }
  else{
    document.getElementById("strength_pc").innerHTML = "-"
  }

  //  Evaluate Problem Solving //
  totalPoint = tot_ps();

  if (totalPoint > 12){
    document.getElementById("strength_ps").innerHTML = "You are doing fine in problem solving subjects." 
  }
  else{
    document.getElementById("strength_ps").innerHTML = "-"
  }

  //  Evaluate Creative/Innovative //
  totalPoint = tot_ci();

  if (totalPoint > 12){
    document.getElementById("strength_ci").innerHTML = "Creativity and innovation is your thing." 
  }
  else{
    document.getElementById("strength_ci").innerHTML = "-"
  }

  //  Evaluate  Logical & Critical Thinking//
  totalPoint = tot_cl();

  if (totalPoint > 12){
    document.getElementById("strength_cl").innerHTML = "Your logical & critical thinking skill is fantastic." 
  }
  else{
    document.getElementById("strength_cl").innerHTML = "-"
  }

  //  Evaluate Communication Skill //
  totalPoint = tot_cs();

  if (totalPoint > 12){
    document.getElementById("strength_cs").innerHTML = "Your communication skill is fantastic." 
  }
  else{
    document.getElementById("strength_cs").innerHTML = "-"
  }

  //  Evaluate Design & Database //
  totalPoint = tot_dd();

  if (totalPoint > 12){
    document.getElementById("strength_dd").innerHTML = "You are doing fine in designing dan database subjects" 
  }
  else{
    document.getElementById("strength_dd").innerHTML = "-"
  }
}

function Weakness() {
  var totalPoint = 0;

  //  Evaluate Time management //
  totalPoint = tot_tm();

  if (totalPoint <= 12){
    document.getElementById("weakness_tm").innerHTML = "You managed your time poorly." 
  }
  else{
    document.getElementById("weakness_tm").innerHTML = "-"
  }
  //  Evaluate Learning Environment //
  totalPoint = tot_le();

  if (totalPoint <= 12){
    document.getElementById("weakness_le").innerHTML = "Your have an unfavourable learning environment." 
  }
  else{
    document.getElementById("weakness_le").innerHTML = "-"
  }
  //  Evaluate Study Style //
  totalPoint = tot_ss();

  if (totalPoint <= 12){
    document.getElementById("weakness_ss").innerHTML = "Your study style do not suits you in achieving good grades." 
  }
  else{
    document.getElementById("weakness_ss").innerHTML = "-"
  }
  //  Evaluate Attendance //
  totalPoint = tot_att();

  if (totalPoint <= 4){
    document.getElementById("weakness_att").innerHTML = "You occasionally missed classes and your attendance score is poor." 
  }
  else{
    document.getElementById("weakness_att").innerHTML = "-"
  }

  //  Evaluate CGPA //
  totalPoint = tot_cgpa();

  if (totalPoint <= 3){
    document.getElementById("weakness_cgpa").innerHTML = "You get poor grades for your past exams." 
  }
  else{
    document.getElementById("weakness_cgpa").innerHTML = "-"
  }
  //  Evaluate Interest in course-enrolled //
  totalPoint = tot_int();

  if (totalPoint <= 3){
    document.getElementById("weakness_int").innerHTML = "It seems like you don't enjoy the course you enrolled." 
  }
  else{
    document.getElementById("weakness_int").innerHTML = "-"
  }
  //  Evaluate Extra-curricular //
  totalPoint = tot_xcr();

  if (totalPoint <= 3){
    document.getElementById("weakness_xcr").innerHTML = "Your participation in extra-curricular do not meet a healthy balance between studying and your social life." 
  }
  else{
    document.getElementById("weakness_xcr").innerHTML = "-"
  }

  //  Evaluate Linguistic //
  totalPoint = tot_lg();

  if (totalPoint < 12){
    document.getElementById("weakness_lg").innerHTML = "You are doing poorly at linguistic subjects." 
  }
  else{
    document.getElementById("weakness_lg").innerHTML = "-"
  }

  //  Evaluate Programming/Calculation //
  totalPoint = tot_pc();

  if (totalPoint < 12){
    document.getElementById("weakness_pc").innerHTML = "You are doing poorly in programming & calculation subjects." 
  }
  else{
    document.getElementById("weakness_pc").innerHTML = "-"
  }

  //  Evaluate Problem Solving //
  totalPoint = tot_ps();

  if (totalPoint < 12){
    document.getElementById("weakness_ps").innerHTML = "You are doing poorly in problem solving subjects." 
  }
  else{
    document.getElementById("weakness_ps").innerHTML = "-"
  }

  //  Evaluate Creative/Innovative //
  totalPoint = tot_ci();

  if (totalPoint < 12){
    document.getElementById("weakness_ci").innerHTML = "Creativity and innovation is not really your thing." 
  }
  else{
    document.getElementById("weakness_ci").innerHTML = "-"
  }

  //  Evaluate  Logical & Critical Thinking//
  totalPoint = tot_cl();

  if (totalPoint < 12){
    document.getElementById("weakness_cl").innerHTML = "Your logical & critical thinking skill is below average." 
  }
  else{
    document.getElementById("weakness_cl").innerHTML = "-"
  }

  //  Evaluate Communication Skill //
  totalPoint = tot_cs();

  if (totalPoint < 12){
    document.getElementById("weakness_cs").innerHTML = "Your communication skill is below average." 
  }
  else{
    document.getElementById("weakness_cs").innerHTML = "-"
  }

  //  Evaluate Design & Database //
  totalPoint = tot_dd();

  if (totalPoint < 12){
    document.getElementById("weakness_dd").innerHTML = "You are doing poorly in designing and database subject." 
  }
  else{
    document.getElementById("weakness_dd").innerHTML = "-"
  }
}
	
///////////// BERMULANYA ISP500 DISINI //////////////

function predict()
{
    let x=18;
    
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
	
//ISP 542 STARTS 


    
    var score_isp542= tot_ci() + tot_cl() +tot_lg() + tot_ps() + tot_pc() ;
    var scoreb=[(score_isp542 + tot_p1())/250]*100;
    
     if(scoreb <=100 && scoreb >89)
			{
				document.getElementById("gradeisp542").innerHTML = "A+";
				document.getElementById("gpaisp542").innerHTML = 4;
				var sgpaisp542= 4*3;
			}
		
    else if (scoreb <=89 && scoreb>79)
			{
				document.getElementById("gradeisp542").innerHTML = "A";
				document.getElementById("gpaisp542").innerHTML = 4;
				var sgpaisp542= 4*3;
			}
			
    else if (scoreb <=79 && scoreb>74)
			{
				document.getElementById("gradeisp542").innerHTML = "A-";
				document.getElementById("gpaisp542").innerHTML = 3.67;
				var sgpaisp542= 3.67*3;
			}
				
    else  if (scoreb <=74 && scoreb>69)
			{
				document.getElementById("gradeisp542").innerHTML = "B+";
				document.getElementById("gpaisp542").innerHTML = 3.33;
				var sgpaisp542= 3.33*3;
			}
            
    else if (scoreb<=69 && scoreb>64)
			{
				document.getElementById("gradeisp542").innerHTML = "B";
				document.getElementById("gpaisp542").innerHTML = 3;
				var sgpaisp542= 3*3;
			}
           
    else if (scoreb <=64 && scoreb>59)
			{
				document.getElementById("gradeisp542").innerHTML = "B-";
				document.getElementById("gpaisp542").innerHTML = 2.67;
				var sgpaisp542= 2.67*3;
			}
            
    else  if (scoreb<=59 && scoreb>54)
			{ 
				document.getElementById("gradeisp542").innerHTML = "C+";
				document.getElementById("gpaisp542").innerHTML = 2.33;
				var sgpaisp542= 2.33*3;
			}
            
    else if (scoreb<=54 && scoreb>49)
			{
				document.getElementById("gradeisp542").innerHTML = "C";
				document.getElementById("gpaisp542").innerHTML = 2;
				var sgpaisp542= 2*3;
			}
            
    else if (scoreb<=49 && scoreb>46)
			{
				document.getElementById("gradeisp542").innerHTML = "C-";
				document.getElementById("gpaisp542").innerHTML = 1.67;
				var sgpaisp542= 1.67*3;
			}
            
    else if (scoreb<=46 && scoreb>43)
			{
				document.getElementById("gradeisp542").innerHTML = "D+";
				document.getElementById("gpaisp542").innerHTML = 1.33;
				var sgpaisp542= 1.33*3;
			}
            
    else if (scoreb<=43 && scoreb>39)
			{
				document.getElementById("gradeisp542").innerHTML = "D";
				document.getElementById("gpaisp542").innerHTML = 1;
				var sgpaisp542= 1*3;
			}
        
    else if (scoreb<=39 && scoreb>29)
			{
				document.getElementById("gradeisp542").innerHTML = "E";
				document.getElementById("gpaisp542").innerHTML = 0.67;
				var sgpaisp542= 0.67*3;
			}
            
    else if (scoreb<=29 && scoreb>=0)
			{
				document.getElementById("gradeisp542").innerHTML = "F";
				document.getElementById("gpaisp542").innerHTML = 0;
				var sgpaisp542= 0*3;
			}
    
  
//ISP542 ENDS
    
//////ISP543 STARTS

    var score_isp543= tot_ci() + tot_cl() +tot_lg() + tot_ps() + tot_pc() + tot_cs() + tot_dd();
    var scorec=[(score_isp543 + tot_p1())/300]*100;
    
     if(scorec <=100 && scorec >89)
			{
				document.getElementById("gradeisp543").innerHTML = "A+";
				document.getElementById("gpaisp543").innerHTML = 4;
				var sgpaisp543= 4*3;
			}
		
        if (scorec <=89 && scorec>79)
			{
				document.getElementById("gradeisp543").innerHTML = "A";
				document.getElementById("gpaisp543").innerHTML = 4;
				var sgpaisp543= 4*3;
			}
			
		if (scorec <=79 && scorec>74)
			{
				document.getElementById("gradeisp543").innerHTML = "A-";
				document.getElementById("gpaisp543").innerHTML = 3.67;
				var sgpaisp543= 3.67*3;
			}
				
        if (scorec <=74 && scorec>69)
			{
				document.getElementById("gradeisp543").innerHTML = "B+";
				document.getElementById("gpaisp543").innerHTML = 3.33;
				var sgpaisp543= 3.33*3;
			}
            
            if (scorec<=69 && scorec>64)
			{
				document.getElementById("gradeisp543").innerHTML = "B";
				document.getElementById("gpaisp543").innerHTML = 3;
				var sgpaisp543= 3*3;
			}
           
            if (scorec <=64 && scorec>59)
			{
				document.getElementById("gradeisp543").innerHTML = "B-";
				document.getElementById("gpaisp543").innerHTML = 2.67;
				var sgpaisp543= 2.67*3;
			}
            
            if (scorec<=59 && scorec>54)
			{ 
				document.getElementById("gradeisp543").innerHTML = "C+";
				document.getElementById("gpaisp543").innerHTML = 2.33;
				var sgpaisp543= 2.33*3;
			}
            
            if (scorec<=54 && scorec>49)
			{
				document.getElementById("gradeisp543").innerHTML = "C";
				document.getElementById("gpaisp543").innerHTML = 2;
				var sgpaisp543= 2*3;
			}
            
            if (scorec<=49 && scorec>46)
			{
				document.getElementById("gradeisp543").innerHTML = "C-";
				document.getElementById("gpaisp543").innerHTML = 1.67;
				var sgpaisp543= 1.67*3;
			}
            
            if (scorec<=46 && scorec>43)
			{
				document.getElementById("gradeisp543").innerHTML = "D+";
				document.getElementById("gpaisp543").innerHTML = 1.33;
				var sgpaisp543= 1.33*3;
			}
            
            if (scorec<=43 && scorec>39)
			{
				document.getElementById("gradeisp543").innerHTML = "D";
				document.getElementById("gpaisp543").innerHTML = 1;
				var sgpaisp543= 1*3;
			}
        
            if (scorec<=39 && scorec>29)
			{
				document.getElementById("gradeisp543").innerHTML = "E";
				document.getElementById("gpaisp543").innerHTML = 0.67;
				var sgpaisp543= 0.67*3;
			}
            
            if (scorec<=29 && scorec>=0)
			{
				document.getElementById("gradeisp543").innerHTML = "F";
				document.getElementById("gpaisp543").innerHTML = 0;
				var sgpaisp543 = 0*3;
			}
    


//ISP43 ENDS

// ICT501 STARTS
    

    var score_ict501= tot_pc() + tot_cl() + tot_ps() + tot_dd() ;
    var scored=[(score_ict501 + tot_p1())/225]*100;

    if(scored <=100 && scored >89)
			{
				document.getElementById("gradeict501").innerHTML = "A+";
				document.getElementById("gpaict501").innerHTML = 4;
				var sgpaict501= 4*3;
			}
		
        if (scored <=89 && scored>79)
			{
				document.getElementById("gradeict501").innerHTML = "A";
				document.getElementById("gpaict501").innerHTML = 4;
				var sgpaict501= 4*3;
			}
			
		if (scored <=79 && scored>74)
			{
				document.getElementById("gradeict501").innerHTML = "A-";
				document.getElementById("gpaict501").innerHTML = 3.67;
				var sgpaict501= 3.67*3;
			}
				
        if (scored <=74 && scored>69)
			{
				document.getElementById("gradeict501").innerHTML = "B+";
				document.getElementById("gpaict501").innerHTML = 3.33;
				var sgpaict501= 3.33*3;
			}
            
            if (scored<=69 && scored>64)
			{
				document.getElementById("gradeict501").innerHTML = "B";
				document.getElementById("gpaict501").innerHTML = 3;
				var sgpaict501= 3*3;
			}
           
            if (scored <=64 && scored>59)
			{
				document.getElementById("gradeict501").innerHTML = "B-";
				document.getElementById("gpaict501").innerHTML = 2.67;
				var sgpaict501= 2.67*3;
			}
            
            if (scored<=59 && scored>54)
			{ 
				document.getElementById("gradeict501").innerHTML = "C+";
				document.getElementById("gpaict501").innerHTML = 2.33;
				var sgpaict501= 2.33*3;
			}
            
            if (scored<=54 && scored>49)
			{
				document.getElementById("gradeict501").innerHTML = "C";
				document.getElementById("gpaict501").innerHTML = 2;
				var sgpaict501= 2*3;
			}
            
            if (scored<=49 && scored>46)
			{
				document.getElementById("gradeict501").innerHTML = "C-";
				document.getElementById("gpaict501").innerHTML = 1.67;
				var sgpaict501= 1.67*3;
			}
            
            if (scored<=46 && scored>43)
			{
				document.getElementById("gradeict501").innerHTML = "D+";
				document.getElementById("gpaict501").innerHTML = 1.33;
				var sgpaict501= 1.33*3;
			}
            
            if (scored<=43 && scored>39)
			{
				document.getElementById("gradeict501").innerHTML = "D";
				document.getElementById("gpaict501").innerHTML = 1;
				var sgpaict501= 1*3;
			}
        
            if (scored<=39 && scored>29)
			{
				document.getElementById("gradeict501").innerHTML = "E";
				document.getElementById("gpaict501").innerHTML = 0.67;
				var sgpaict501= 0.67*3;
			}
            
            if (scored<=29 && scored>=0)
			{
				document.getElementById("gradeict501").innerHTML = "F";
				document.getElementById("gpaict501").innerHTML = 0;
				var sgpaict501 = 0*3;
			}
    
 
//ICT501 ENDS HERE
    
//CTU552 STARTS HERE
    

    
    var score_ctu552= tot_cl() +tot_lg()  ;
    var scoree=[(score_ctu552 + tot_p1())/175]*100;

    
    if(scoree <=100 && scoree >89)
			{
				document.getElementById("gradectu552").innerHTML = "A+";
				document.getElementById("gpactu552").innerHTML = 4;
				var sgpactu552= 4*2;
			}
		
        if (scoree <=89 && scoree>79)
			{
				document.getElementById("gradectu552").innerHTML = "A";
				document.getElementById("gpactu552").innerHTML = 4;
				var sgpactu552= 4*2;
			}
			
		if (scoree <=79 && scoree>74)
			{
				document.getElementById("gradectu552").innerHTML = "A-";
				document.getElementById("gpactu552").innerHTML = 3.67;
				var sgpactu552= 3.67*2;
			}
				
        if (scoree <=74 && scoree>69)
			{
				document.getElementById("gradectu552").innerHTML = "B+";
				document.getElementById("gpactu552").innerHTML = 3.33;
				var sgpactu552= 3.33*2;
			}
            
            if (scoree<=69 && scoree>64)
			{
				document.getElementById("gradectu552").innerHTML = "B";
				document.getElementById("gpactu552").innerHTML = 3;
				var sgpactu552= 3*2;
			}
           
            if (scoree <=64 && scoree>59)
			{
				document.getElementById("gradectu552").innerHTML = "B-";
				document.getElementById("gpactu552").innerHTML = 2.67;
				var sgpactu552= 2.67*2;
			}
            
            if (scoree<=59 && scoree>54)
			{ 
				document.getElementById("gradectu552").innerHTML = "C+";
				document.getElementById("gpactu552").innerHTML = 2.33;
				var sgpactu552= 2.33*2;
			}
            
            if (scoree<=54 && scoree>49)
			{
				document.getElementById("gradectu552").innerHTML = "C";
				document.getElementById("gpactu552").innerHTML = 2;
				var sgpactu552= 2*2;
			}
            
            if (scoree<=49 && scoree>46)
			{
				document.getElementById("gradectu552").innerHTML = "C-";
				document.getElementById("gpactu552").innerHTML = 1.67;
				var sgpactu552= 1.67*2;
			}
            
            if (scoree<=46 && scoree>43)
			{
				document.getElementById("gradectu552").innerHTML = "D+";
				document.getElementById("gpactu552").innerHTML = 1.33;
				var sgpactu552= 1.33*2;
			}
            
            if (scoree<=43 && scoree>39)
			{
				document.getElementById("gradectu552").innerHTML = "D";
				document.getElementById("gpactu552").innerHTML = 1;
				var sgpactu552= 1*2;
			}
        
            if (scoree<=39 && scoree>29)
			{
				document.getElementById("gradectu552").innerHTML = "E";
				document.getElementById("gpactu552").innerHTML = 0.67;
				var sgpactu552= 0.67*2;
			}
            
            if (scoree<=29 && scoree>=0)
			{
				document.getElementById("gradectu552").innerHTML = "F";
				document.getElementById("gpactu552").innerHTML = 0;
				var sgpactu552 = 0*2;
			}
    
  
// CTU552 ENDS HERE
    
// ELC501 STARTS HERE


    var score_elc501= tot_cl() + tot_cs() +tot_lg() ;
    var scoref=[(score_elc501 + tot_p1())/200]*100;
    
    if(scoref <=100 && scoref >89)
			{
				document.getElementById("gradeelc501").innerHTML = "A+";
				document.getElementById("gpaelc501").innerHTML = 4;
				var sgpaelc501= 4*2;
			}
		
        if (scoref <=89 && scoref>79)
			{
				document.getElementById("gradeelc501").innerHTML = "A";
				document.getElementById("gpaelc501").innerHTML = 4;
				var sgpaelc501= 4*2;
			}
			
		if (scoref <=79 && scoref>74)
			{
				document.getElementById("gradeelc501").innerHTML = "A-";
				document.getElementById("gpaelc501").innerHTML = 3.67;
				var sgpaelc501= 3.67*2;
			}
				
        if (scoref <=74 && scoref>69)
			{
				document.getElementById("gradeelc501").innerHTML = "B+";
				document.getElementById("gpaelc501").innerHTML = 3.33;
				var sgpaelc501= 3.33*2;
			}
            
            if (scoref<=69 && scoref>64)
			{
				document.getElementById("gradeelc501").innerHTML = "B";
				document.getElementById("gpaelc501").innerHTML = 3;
				var sgpaelc501= 3*2;
			}
           
            if (scoref <=64 && scoref>59)
			{
				document.getElementById("gradeelc501").innerHTML = "B-";
				document.getElementById("gpaelc501").innerHTML = 2.67;
				var sgpaelc501= 2.67*2;
			}
            
            if (scoref<=59 && scoref>54)
			{ 
				document.getElementById("gradeelc501").innerHTML = "C+";
				document.getElementById("gpaelc501").innerHTML = 2.33;
				var sgpaelc501= 2.33*2;
			}
            
            if (scoref<=54 && scoref>49)
			{
				document.getElementById("gradeelc501").innerHTML = "C";
				document.getElementById("gpaelc501").innerHTML = 2;
				var sgpaelc501= 2*2;
			}
            
            if (scoref<=49 && scoref>46)
			{
				document.getElementById("gradeelc501").innerHTML = "C-";
				document.getElementById("gpaelc501").innerHTML = 1.67;
				var sgpaelc501= 1.67*2;
			}
            
            if (scoref<=46 && scoref>43)
			{
				document.getElementById("gradeelc501").innerHTML = "D+";
				document.getElementById("gpaelc501").innerHTML = 1.33;
				var sgpaelc501= 1.33*2;
			}
            
            if (scoref<=43 && scoref>39)
			{
				document.getElementById("gradeelc501").innerHTML = "D";
				document.getElementById("gpaelc501").innerHTML = 1;
				var sgpaelc501= 1*2;
			}
        
            if (scoref<=39 && scoref>29)
			{
				document.getElementById("gradeelc501").innerHTML = "E";
				document.getElementById("gpaelc501").innerHTML = 0.67;
				var sgpaelc501= 0.67*2;
			}
            
            if (scoref<=29 && scoref>=0)
			{
				document.getElementById("gradeelc501").innerHTML = "F";
				document.getElementById("gpaelc501").innerHTML = 0;
				var sgpaelc501 = 0*2;
			}
    
    
//ELC501 ENDS HERE
    
//3RDL STARTS HERE


    var score_3rdl= tot_cs() + tot_lg() ;
    var fscore3rd=[(score_3rdl + tot_p1())/175]*100;
    
    
	if(fscore3rd <=100 && fscore3rd >89)
			{
				document.getElementById("grade3rdl").innerHTML = "A+";
				document.getElementById("gpa3rdl").innerHTML = 4;
				var sgpa3rdl= 4*2;
			}
		
        if (fscore3rd <=89 && fscore3rd>79)
			{
				document.getElementById("grade3rdl").innerHTML = "A";
				document.getElementById("gpa3rdl").innerHTML = 4;
				var sgpa3rdl= 4*2;
			}
			
		if (fscore3rd <=79 && fscore3rd>74)
			{
				document.getElementById("grade3rdl").innerHTML = "A-";
				document.getElementById("gpa3rdl").innerHTML = 3.67;
				var sgpa3rdl= 3.67*2;
			}
				
        if (fscore3rd <=74 && fscore3rd>69)
			{
				document.getElementById("grade3rdl").innerHTML = "B+";
				document.getElementById("gpa3rdl").innerHTML = 3.33;
				var sgpa3rdl= 3.33*2;
			}
            
            if (fscore3rd<=69 && fscore3rd>64)
			{
				document.getElementById("grade3rdl").innerHTML = "B";
				document.getElementById("gpa3rdl").innerHTML = 3;
				var sgpa3rdl= 3*2;
			}
           
            if (fscore3rd <=64 && fscore3rd>59)
			{
				document.getElementById("grade3rdl").innerHTML = "B-";
				document.getElementById("gpa3rdl").innerHTML = 2.67;
				var sgpa3rdl= 2.67*2;
			}
            
            if (fscore3rd<=59 && fscore3rd>54)
			{ 
				document.getElementById("grade3rdl").innerHTML = "C+";
				document.getElementById("gpa3rdl").innerHTML = 2.33;
				var sgpa3rdl= 2.33*2;
			}
            
            if (fscore3rd<=54 && fscore3rd>49)
			{
				document.getElementById("grade3rdl").innerHTML = "C";
				document.getElementById("gpa3rdl").innerHTML = 2;
				var sgpa3rdl= 2*2;
			}
            
            if (fscore3rd<=49 && fscore3rd>46)
			{
				document.getElementById("grade3rdl").innerHTML = "C-";
				document.getElementById("gpa3rdl").innerHTML = 1.67;
				var sgpa3rdl= 1.67*2;
			}
            
            if (fscore3rd<=46 && fscore3rd>43)
			{
				document.getElementById("grade3rdl").innerHTML = "D+";
				document.getElementById("gpa3rdl").innerHTML = 1.33;
				var sgpa3rdl= 1.33*2;
			}
            
            if (fscore3rd<=43 && fscore3rd>39)
			{
				document.getElementById("grade3rdl").innerHTML = "D";
				document.getElementById("gpa3rdl").innerHTML = 1;
				var sgpa3rdl= 1*2;
			}
        
            if (fscore3rd<=39 && fscore3rd>29)
			{
				document.getElementById("grade3rdl").innerHTML = "E";
				document.getElementById("gpa3rdl").innerHTML = 0.67;
				var sgpa3rdl= 0.67*2;
			}
            
            if (fscore3rd<=29 && fscore3rd>=0)
			{
				document.getElementById("grade3rdl").innerHTML = "F";
				document.getElementById("gpa3rdl").innerHTML = 0;
				var sgpa3rdl = 0*2;
			}
    
 
            
	//3RDL ENDS HERE */
	
///////////// START CALCULATION CGPA //////////////


    var ffgpa=(sgpaisp500+sgpaisp542+sgpaisp543+sgpaict501+sgpaelc501+sgpactu552+sgpa3rdl)/x;
	
    var disp=document.getElementById("totalfgpa");
    disp.style.display='block';
    var propgpa=ffgpa.toFixed(2);
    disp.innerHTML = "PREDICTED GRADE POINT AVERAGE (GPA): "+ propgpa;
    
    return propgpa;
	
///////////// END CALCULATION CGPA //////////////

}



///////////////////// START EXPERT GOOGLE + ADVISOR ADVICEEEEEE///////////////////////////////////////////

function Advice() 
{
    var tm = tot_tm();
    var le = tot_le();
    var ss = tot_ss();
    var att = tot_att();
    var intt = tot_int();
	var xcr = tot_xcr();
	var lg = tot_lg();
    var pc = tot_pc();
    var ps = tot_ps();
    var ci = tot_ci();
    var cs = tot_cs();
    var cl = tot_cl();
    var dd = tot_dd();
	var cgpa= predict();

    
    if (tm == 5 || tm == 6 || tm == 7 || tm == 8 || tm == 9 || tm == 10 || tm == 11 || tm == 12){
        document.getElementById("tot_tm").innerHTML = "Your time management is somewhat are not good enough, you should stop procrastinate and follow the lesson plan closely and communicate with lecturers/friends frequently. Seek out someone who has already achieved the outcome so it can trigger you to complete your task. Write down when all the assignment are due so you can plan when will you work on each. Study early or little bit each night also can help you remember information better. Start the assignment early or at least make some framework about the assignment so you will know what you will do with that task." 
    }else{
        document.getElementById("tot_tm").innerHTML = "-" 
    }
	
    if (le == 5 || le == 6 || le == 7){
        document.getElementById("tot_leAd").innerHTML = "Improve some part of your learning environment for example try mix with friends/colleague often so if you feel quite lost, they will help you." 
    }else{
        document.getElementById("tot_leAd").innerHTML = "-" 
    }

    if (ss == 5 || ss == 6 || ss == 7){
        document.getElementById("tot_ssAd").innerHTML = "You have to determine and improve which study style that you suit to do with. Knowing your learning style can also increase your confidence and self-respect, which can help you achieve your personal and professional objectives without doubting yourself or your abilities." 
    }else{
        document.getElementById("tot_ssAd").innerHTML = "-" 
    }

    if (att < 5){
        document.getElementById("tot_attAd").innerHTML = "Improve your attendance because if you do not go to class, you will spend many hours copying notes and asking friends about the lessons that you’ve missed. It takes a lot of discipline and determination to attend every class, but if you skip classes regularly, you will need to read and learn the lesson from scratch, making it harder for you to get better grades. You also might be expelled from the university if you keep not attending the class." 
    }
    else{
        document.getElementById("tot_attAd").innerHTML = "-" 
    }

    if (intt == 1 || intt == 2|| intt == 3){
        document.getElementById("tot_intAd").innerHTML = "If you’re not interested in course that you are in now, you should give a time but if you already tried and the method isn’t getting any better, you can change your courses, your university will be able to help you with the next steps. Remember, changing your mind after realizing something isn’t right for you isn't a bad thing. If anything, it will likely help you out in the long run." 
    }
	else{
        document.getElementById("tot_intAd").innerHTML = "-" 
    }

	if (xcr == 1 || xcr == 2|| xcr == 3){
		document.getElementById("tot_xcrAd").innerHTML = "Extra-curricular participation quite important too because getting involved in sports clubs, societies, volunteering and part-time work is a great way to meet new people, enjoy your time at university and ensure you strike a healthy balance between studying and your social life.";
	}
	else{
		document.getElementById("tot_xcrAd").innerHTML = "-";
	}
	
	if (lg >= 5 && lg <= 12){
       document.getElementById("tot_lgAd").innerHTML = "Develop a timeline to resolve your problem and separate the problem into stages, following the steps and working in stages helps give you a sense of accomplishment when you complete each one.";
    }else{
		document.getElementById("tot_lgAd").innerHTML = "-";
	}
	
    if (pc >= 5 && pc <= 12){
       document.getElementById("tot_pcAd").innerHTML = "Develop a timeline to resolve your problem and separate the problem into stages, following the steps and working in stages helps give you a sense of accomplishment when you complete each one.";
    }else{
		document.getElementById("tot_pcAd").innerHTML = "-";
	}
	
    if (ci >= 5 && ci <= 12){
       document.getElementById("tot_ciAd").innerHTML = "Try to remake a work that has inspired and impressed. in remaking it, you will transform it into something new and focus on efforts to reaching your goals.";
    }else{
		document.getElementById("tot_ciAd").innerHTML = "-";
	}
	
    if (cs >= 5 && cs <= 12){
       document.getElementById("tot_csAd").innerHTML = "Always communicate with lecturers and friends frequently and always ask for clarification to avoid misunderstandings.";
    }else{
		document.getElementById("tot_csAd").innerHTML = "-";
	}
	
    if (cl >= 5 && cl <= 12){
       document.getElementById("tot_clAd").innerHTML = "Try to think about what the outcome may be when you come up with a solution to any problem you are facing and evaluate your own work to determine ways to improve the quality.";
    }else{
		document.getElementById("tot_clAd").innerHTML = "-";
	}
	
    if (dd >= 5 && dd <= 12){
       document.getElementById("tot_ddAd").innerHTML = "Try to design a database to capture how it works and get familiar with the query language in the database.";
    }else{
		document.getElementById("tot_ddAd").innerHTML = "-";
	}
	
	if (cgpa >= 3.5 && cgpa <= 4.00){
       document.getElementById("cgpaAd").innerHTML = "Maintain to get good grades by reward yourself and spend more time to talk with lecturers and friends, be proactive in the class and not just listening";
    }
    else if (cgpa <3.5 && cgpa >= 3.00){
        document.getElementById("cgpaAd").innerHTML = "Improve your grades by follow the lesson plan closely and communicate with lecturers and friends frequently, and always refer to pass year exam questions to do exercises.";
    }
    else if (cgpa <2.99  && cgpa >=0.00){
        document.getElementById("cgpaAd").innerHTML ="Do not work alone and form groups and appoint mentor among the excellent students, perform task or exercises weekly and make sure do not put in delay to understand the content.";
    }
}

///////////////////// END EXPERT GOOGLE + ADVISOR ADVICEEEEEE///////////////////////////////////////////

///////////////////// PRINT CERTAIN AREA///////////////////////////////////////////
/*function printPageArea(areaID){
    var printContent = document.getElementById(areaID);
    var WinPrint = window.open('', '', 'width=900,height=650');
    WinPrint.document.write(printContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
}*/

function printDiv(divName) {
     var printContents = document.getElementById(divName).innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;
}

// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });



    var typed = new Typed(".typing-2", {
        strings: ["Tasukete!!!",],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


	
});

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
});