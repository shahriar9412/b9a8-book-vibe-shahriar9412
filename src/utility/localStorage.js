const getStoredReadBooks = () => {
    const storedReadBooks = localStorage.getItem('read-books');
    if (storedReadBooks) {
        return JSON.parse(storedReadBooks);
    }
    return [];
}


const saveReadBooks = id => {
    const storedReadBooks = getStoredReadBooks();
    const exists = storedReadBooks.find(bookId => bookId === id);
    if (!exists) {
        storedReadBooks.push(id);
        localStorage.setItem('read-books', JSON.stringify(storedReadBooks))
    }
}

const getStoredWishlist = () => {
    const storedWishlist = localStorage.getItem('wish-lists');
    if (storedWishlist) {
        return JSON.parse(storedWishlist);
    }
    return [];
}


const saveWishlist = id => {
    const storedWishlist = getStoredWishlist();
    const exists = storedWishlist.find(bookId => bookId === id);
    if (!exists) {
        storedWishlist.push(id);
        localStorage.setItem('wish-lists', JSON.stringify(storedWishlist))
    }
}

export { getStoredReadBooks, saveReadBooks, getStoredWishlist, saveWishlist }