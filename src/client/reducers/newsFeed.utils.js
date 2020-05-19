export const hideFeed = (newsList, removeFeed) => {
    let existingFeed = newsList.find(item => item.objectID === removeFeed.objectID);

    if (!existingFeed.hide) {
        return newsList.map(item => 
            item.objectID === removeFeed.objectID? {...item, hide: true}: item
        );
    }
    return newsList;
    
}