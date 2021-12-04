function findKeyValue(obj, path) {
    var props = path.split(".");
    for(var i=0;i<props.length;i++){
        var p = props[i];
        if(obj && obj.hasOwnProperty(p)){
            obj = obj[p];
        }
        else{
            console.log('Wrong Path')
            return undefined;
        }
    }
    console.log(obj)
    return obj;
    
}



let data = {
    name: 'Megaport',
    address: {
    office: {
    unit: 'Level 3',
    street: '825 Ann Street',
    suburb: 'Fortitude Valley',
    city: 'Brisbane',
    state: 'Queensland',
    postcode: 4006,
    },
    },
    industry: {
    type: 'Internet and telecommunications',
    asxListed: true,
    },
 }

 findKeyValue(data,'address.office.street')
    


module.exports = {
    findKeyValue
}