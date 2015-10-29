	//验证密码 //    
    function CharMode(iN){  
      if (iN>=48 && iN <=57) //数字  
      return 1;  
      if (iN>=65 && iN <=90) //大写  
      return 2;  
      if (iN>=97 && iN <=122) //小写  
      return 4;  
      else  
      return 8;   
    }  
    //bitTotal函数  
    //计算密码模式  
    function bitTotal(num){  
      modes=0;  
      for (i=0;i<4;i++){  
        if (num & 1) modes++;  
        num>>>=1;  
      }  
      return modes;  
    }  
    //返回强度级别  
    function checkStrong(sPW){  
      if (sPW.length<=4)  
      return 0; //密码太短  
      Modes=0;  
      for (i=0;i<sPW.length;i++){  
      //密码模式  
        Modes|=CharMode(sPW.charCodeAt(i));  
      }  
      return bitTotal(Modes);  
    }    
     //显示颜色  
    function pwStrength(pwd){            
          if (pwd==null||pwd==''){  
               $("#passwd_strength").html('<div class="progress"><div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div><div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"tyle="width: 0%;"></div></div>')
          }  
          else{  
              S_level=checkStrong(pwd);              
              switch(S_level) {  
              case 0:                
              case 1: 
                $("#passwd_strength").html('<div class="progress"><div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 30%;background-color: red;"></div><div class="progress-bar progress-bar-info" role="progressbar"aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div><div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div>')                
              break;  
              case 2: 
                
                $("#passwd_strength").html('<div class="progress"><div class="progress-bar progress-bar-info" role="progressbar"aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 70%;"></div><div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 30%;"></div></div>')                
              break;  
              case 3:
                $("#passwd_strength").html('<div class="progress"><div class="progress-bar safe progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 100%;height:20px"></div></div>') 
              break;
              default: 
                $("#passwd_strength").html('<div class="progress"><div class="progress-bar  progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div><div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div>')
              }  
          } 
      return;  
    }  