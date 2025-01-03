function comment({
content,rating,by
}){

function starHandler(val){
      let str=[];
      for(let i=0;i<5;i++){
        if(val-->0)
        str.push(<img src="../onstar.png"/>);
        else
        str.push(<img src="../offstar.png"/>);
      }
      return str;
    }
    
return(
<div className="comment">
<div><p>{by}</p>
<div>{starHandler(Number(rating))}</div></div>
  <p>{content}</p> 
 </div>
)
}

export default comment;
