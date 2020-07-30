const utils = {};
utils.getDataFromHandledDoc = (doc, data) => {
    const newData = data;
    newData.id = doc.id
    return newData;
}
utils.getDataFromDocWithinId = (doc) => {
    const data = doc.data();
    data.id = doc.id;
    return data
}
utils.getDataFromDocsWithinId = (docs) => {
    return docs.map(utils.getDataFromDocWithinId)
}
utils.getDataFromDoc = doc => {
    return doc.data()
}
utils.getDataFromDocs = docs => {
    return docs.map(utils.getDataFromDoc)
}

utils.converseNumberToWord = (number, unit) => {
    // unit to respone an exactly word // unit should be 'a' or 'an'
    if (number === 0) {
        return 'none';
    } else if (number === 1) {
        if(!unit) {
            return 'a'
        } else {
            if(unit === 'a') {
                return 'a'
            } else {return 'an'}
        }
    } else if (number === 2) {
        return 'a couple of'
    } else if (number <= 4) {
        return 'few'
    } else {
        return 'a lot of'
    }
}
utils.checkSingularOrPlurar = (number, unit) => {
    // unit is like the boolean, just 's' or 'es'.
    // this fuckin function will return ('s' or 'es') if number greater than 1 else it will be fucked up and nothing happens

    // RECOMMENT
    // these shitty comments is the prove for how stupid Im when the first time I use it as A FUCKIN DOCUMENT
    // but look! when after i finished two motherfuckin lines above, i was recognizing, some frickin how the code is more simple than my comments
    // =)))

    if (number <= 1) {
        return '';
    } else {
        return unit;
    }
}


utils.getArrayFromPostionToPosion = (array, positionStart, posiotionEnd, positionDistance) => {
    if(positionDistance === null) {positionDistance = 1}
    var newArray = [];
    for(i=positionStart;i<posiotionEnd;i++) {
        newArray.push(array[i]);
    }
    return newArray
}
utils.arrayCollapseToString = (array) => {
    newString = '';
    for(i=0;i<array.length;i++) {
        newString += array[i].toString()
    }
    return newString;
}

utils.convertDayToEnglish = (day) => {
    if(day === 0) return 'Sunday'
    else if (day === 1) return 'Monday'
    else if (day === 2) return 'Tuesday'
    else if (day === 3) return 'Wednesday'
    else if (day === 4) return 'Thursday'
    else if (day === 5) return ' Friday'
    else if (day === 6) return 'Saturday'
    else return ''
}
utils.getISOStringDate = () => {
    let newDate = new Date();
    return newDate.toISOString();
}
utils.getYearsTwoLastNumber = (year) => {
    year = year.toString().split('');
    if(year.length === 4) {
        return Number(year[2] + year [3])
    } else {
        console.log('utils.getYearsTwoLastNumber takes a wrong input')
    }
}
utils.fullfillDateMonth = (date) => {
    date = date.toString();
    if(date.length === 1) {
        return 0 + date
    } else if (date.length === 2) {
        return date
    } else {
        console.log('utils.fullfillDateMonth takes a wrong input')
    }
}
utils.convertTimeFromISOString = (ISOstring) => {
    newDateFromString = new Date(ISOstring);
    let getMins = utils.fullfillDateMonth(newDateFromString.getMinutes());
    let getHours = utils.fullfillDateMonth(newDateFromString.getHours());
    let getDate = utils.fullfillDateMonth(newDateFromString.getDate());
    let getMonth = utils.fullfillDateMonth(newDateFromString.getMonth());
    let getYear = utils.getYearsTwoLastNumber(newDateFromString.getFullYear());
    return `${getHours}:${getMins}, ${getDate}.${getMonth}.${getYear}`
}
utils.getDateMonthYear = () => {
    const newDate = new Date();
    let getDate = utils.fullfillDateMonth(newDate.getDate());
    let getMonth = utils.fullfillDateMonth(newDate.getMonth());
    let getYear = utils.getYearsTwoLastNumber(newDate.getFullYear());
    return `${getDate}.${getMonth}.${getYear}`
}
utils.getWeekDay = () => {
    const newDate = new Date();
    return utils.convertDayToEnglish(newDate.getDay());
}

utils.countFromTpointToNowReturnHandledString = (timepoint) => {
    //timepoint is ISO string //return a string follow this form `${number} timeUnit` like an example `4 seconds ago` or `1 day ago`
    const secondsLong = utils.countFromTpointToNowReturnSeconds(timepoint);
    if (secondsLong === undefined || secondsLong === '') {
        return ''
    } else {
        if(secondsLong < 60) {
            return `${secondsLong} second${utils.checkSingularOrPlurar(secondsLong, 's')} ago`
        } else if (secondsLong < 3600) {
            return `${Math.floor(secondsLong/60)} minute${utils.checkSingularOrPlurar(Math.floor(secondsLong/60), 's')} ago`
        } else if(secondsLong < 86400) {
            return `${Math.floor(secondsLong/3600)} hour${utils.checkSingularOrPlurar(Math.floor(secondsLong/3600), 's')} ago`
        } else if(secondsLong < 2592000) {
            return `${Math.floor(secondsLong/86400)} day${utils.checkSingularOrPlurar(Math.floor(secondsLong/86400), 's')} ago`
        } else {
            return utils.convertTimeFromISOString(timepoint);
        }
    }
}
utils.countFromTpointToNowReturnSeconds = (timepoint) => {
    if(timepoint === undefined || timepoint === null) {
        return ''
    } else {
        const thatTime = new Date(timepoint);
        const now = new Date();
        return Math.floor((now - thatTime)/1000);
    }
}




utils.styleForImageBackgroundDiv = (div) => {
    div.style.backgroundSize = 'cover';
    div.style.backgroundRepeat = 'no-repeat';
    div.style.backgroundPosition = 'center';
}
utils.getUrlFromBackground = (backgroundUrl) => {
    let newArray = Array.from(backgroundUrl);
    let arrayOfUrl = utils.getArrayFromPostionToPosion(newArray, newArray.indexOf('"')+1, newArray.lastIndexOf('"'));
    return utils.arrayCollapseToString(arrayOfUrl);
}





utils.capitalizeFirstCharacterInString = (string) => {
    if (typeof string !== 'string') return ''
    return string.charAt(0).toUpperCase() + string.slice(1)
}




utils.plusOneTo = (number) => {
    if(isNaN(number)) return ''
    return number++;
}




utils.getLogXOfY = (x, y) => {
    return Math.log(y)/Math.log(x)
}