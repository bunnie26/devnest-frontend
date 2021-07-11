const arr = [];
for (let i = 0; i < 64; i++) {
  arr.push(i);
}
function gg(i){

    if((i+Math.floor(i/8))%2==0){
      return <div className = "white cell"></div>
    } 
    else{
      return <div className = "black cell"></div>
    }
  
}
function Cells() {
  return arr.map(gg);
}

export default Cells;