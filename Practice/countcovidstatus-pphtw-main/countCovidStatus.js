const { template } = require('@babel/core')
//64130500066 ภูตะวัน ปาลกะวงค์
//put your student id, name, and surname here
function countCovidStatus(covidStatusArray) {
  //code here
  // let count_negative_low = 0
  // let count_negative_high = 0
  // let count_positive = 0

  if (covidStatusArray === null || covidStatusArray === undefined) {
    return undefined
  }
  else if (covidStatusArray.length === 0) {
    return {}
  }

  // for (let i = 0; i <= covidStatusArray.length-1 ; i ++) {
  //   if (covidStatusArray[i] == 'negative and low risk') {
  //     count_negative_low++;
  //   }
  //   else if (covidStatusArray[i] == 'negative and high risk') {
  //     count_negative_high++;
  //   }
  //   else if (covidStatusArray[i] == 'positive') {
  //     count_positive++;
  //   }
  // }

  // if (count_negative_high == 0 && count_negative_low == 0 && count_positive == 0){
  //   return {}
  // }

  // else if (count_negative_high == 0) {
  //   return {'negative and low risk': count_negative_low,'positive': count_positive}
  // }

  // else if (count_positive == 0) {
  //   return {'negative and low risk': count_negative_low,'negative and high risk': count_negative_high}
  // }

  // else if (count_negative_low == 0) {
  //   return {'negative and high risk': count_negative_high,'positive': count_positive}
  // }
  
  // else {
  // return {'negative and low risk': count_negative_low,'negative and high risk': count_negative_high,'positive': count_positive}
  // }

  // Teacher
  let negLow=0, negHigh=0, pos=0    
  for(const status of covidStatusArray){
    switch(status){
        case 'negative and low risk': 
            negLow++                
            break            
        case 'negative and high risk':
            negHigh++                
            break               
        case 'positive':
            pos++                
            break        
          }
}
  const covidStatus={}
  if(pos>0)
  covidStatus.positive=pos    // ไม่ควรผสม syntax แต่อันนี้โชว์ให้ดูว่าได้ 2 syntax
  if(negHigh>0)
  covidStatus['negative and high risk']=negHigh    
  if(negLow>0)
  covidStatus['negative and low risk']=negLow    
  return covidStatus
}
module.exports = countCovidStatus