export const hideFeed = (updateList, removeFeed) => {
    let existingFeed = updateList.length> 0? updateList.find(item => item.objectID === removeFeed.objectID): false;
    if (existingFeed) {
        return updateList.map(item => (
            item.objectID === removeFeed.objectID? {...item, hide: true}: item
        ));
    } else {
        return updateList.push({...removeFeed, hide:true});
    }
}

export const addVote = (updateList, addVote) => {
    let existingFeed = updateList.length> 0? updateList.find(item => item.objectID === addVote.objectID): false;

    if (existingFeed) {
        console.log('exists')
        return updateList.map(item => (
            item.objectID === addVote.objectID? {...item, votes: item.votes+1}: item
        ));
    } else {
        updateList.push({...addVote, votes:1});
        return updateList;
    }
    
}

export const updatedNews = (newsList, updatedNews) => {
    let updatedlist = [];
    if(updatedNews.length > 0) {
        let length1 = newsList.length-1;
        for(let i in newsList) {
            for(let j in updatedNews) {
                let length2 = updatedNews.length-1;
                if(newsList[i].objectID ===updatedNews[j].objectID) {
                    updatedlist.push(updatedNews[j]);
                    break;
                } else if (length2 == j) {
                    updatedlist.push(newsList[i]);
                }
            }
            if (length1 == i) {
               return updatedlist;
            }
        }
        
    } else {
        return newsList;
    }
    
} 
export const pageNumber = (news) => {
    if(typeof(news.pageNum)=='number') {
        return (news.pageNum >= news.nbPages? 0 : news.pageNum)
    }
    return 0;
}