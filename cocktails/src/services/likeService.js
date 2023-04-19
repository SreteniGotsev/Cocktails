export const like= async(user,cocktailId)=>{

    let userId = user._id
    let like = await fetch(`http://localhost:3030/data/likes`,{
        method: 'Post',
        headers: { 
            'content-type': 'application/json',
            'X-Authorization': user.accessToken
            },
        body: JSON.stringify({userId,cocktailId}) 
    });
      
    let jsonResult = await like.json();
    
    if(like.ok){
        return jsonResult
    }else{
        throw jsonResult
    }

}

export const getCount=async (cocktailId)=>{

    const query = encodeURIComponent(`cocktailId="${cocktailId}"`)

    let likes = await fetch(`http://localhost:3030/data/likes?select=_id&where=${query}`);

    let jsonResult = await likes.json();

    if(likes.ok){
        return jsonResult.map(x=>x._id)
    }else{
        throw jsonResult
    }
}