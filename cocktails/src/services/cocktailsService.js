
export const getAll = async()=>{
    let res = await  fetch('http://localhost:3030/data/cocktails');
      
    let jsonResult = await res.json();
    let cocktails = Object.values(jsonResult)
    if(res.ok){
        return cocktails;
    }else{
        throw jsonResult
    }
}


export const  getOne = async(_id)=>{
    let res = await  fetch(`http://localhost:3030/data/cocktails/${_id}`,{
    });
      
    let jsonResult = await res.json();
    console.log(jsonResult)
    if(res.ok){
        return jsonResult
    }else{
        throw jsonResult
    }
}

export const create = async(cocktail,token)=>{
    let res = await  fetch('http://localhost:3030/data/cocktails',{
       method: 'Post',
       headers: { 
           'content-type': 'application/json',
           'X-Authorization': token
           },
       body: JSON.stringify({...cocktail, likes:[]}) 
    });
      
    let jsonResult = await res.json();
    
    if(res.ok){
        return jsonResult
    }else{
        throw jsonResult
    }
}


export const edit = async(id,cocktail,token)=>{
    let res = await  fetch(`http://localhost:3030/data/cocktails/${id}`,{
        method: 'Put',
        headers: { 
            'content-type': 'application/json',
            'X-Authorization': token
            },
        body: JSON.stringify({...cocktail}) 
    });
      
    let jsonResult = await res.json();
    
    if(res.ok){
        return jsonResult
    }else{
        throw jsonResult
    }
}


export const remove = async(cocktailId,token)=>{
    let res = await  fetch(`http://localhost:3030/data/cocktails/${cocktailId}`,{
    method:'Delete',
    headers:{
        'X-Authorization': token
    }})
     
    let jsonResult = await res.json(); 

     return jsonResult;

}



