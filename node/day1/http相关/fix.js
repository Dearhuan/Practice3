const fs = require('fs');

function readF(){
  return new Promise((resolve,reject)=>{
    fs.readFile('./jikefeng.txt',(err,data)=>{
      if(err) throw err;
      let info = data.toString();

      let str = info.split('\r\n');
      // console.log(str);
 
      str.forEach((ele,index)=>{
        // console.log(ele.length);
        if(ele.length<8){
          // console.log(ele);
          // console.log(index,ele)
          str.splice(index,1)
        }
      })

      console.log(str);
    })
  })
}

readF();