let hotel = [
    {
        'room' : 21,
        'type': 4,
        'state': false,
        'clients': [
                    {
                        'identity' : 123456,
                        'name' : 'name0',
                        'nationality' : 'DZ',
                        'age' : 36
                    },
                    {
                        'identity' : 123456,
                        'name' : 'name1',
                        'nationality' : 'FR',
                        'age' : 20
                    },
                    {
                        'identity' : 123457,
                        'name' : 'name2',
                        'nationality' : 'EN',
                        'age' : 11
                    },
                    {
                        'identity' : 123458,
                        'name' : 'name3',
                        'nationality' : 'DZ',
                        'age' : 5
                    }
                    ]
    },
    {
        'room' : 20,
        'type': 3,
        'state': false,
        'clients': [
                    {
                        'identity' : 123456,
                        'name' : 'name10',
                        'nationality' : 'DZ',
                        'age' : 16
                    },
                    {
                        'identity' : 123456,
                        'name' : 'name11',
                        'nationality' : 'EN',
                        'age' : 36
                    },
                    {
                        'identity' : 123456,
                        'name' : 'name12',
                        'nationality' : 'FR',
                        'age' : 36
                    }
                    ]
    },
    {
        'room' : 19,
        'type': 4,
        'state': true,
        'clients': []
    },
    {
        'room' : 18,
        'type': 2,
        'state': false,
        'clients': [
                    {
                        'identity' : 123456,
                        'name' : 'name10',
                        'nationality' : 'AL',
                        'age' : 36
                    },
                    {
                        'identity' : 123456,
                        'name' : 'name11',
                        'nationality' : 'AL',
                        'age' : 36
                    }
                    ]
    },
    {
        'room' : 17,
        'type': 1,
        'state': false,
        'clients': [
                    {
                        'identity' : 123456,
                        'name' : 'name10',
                        'nationality' : 'US',
                        'age' : 36
                    }
                    ]
    },
    {
        'room' : 16,
        'type': 1,
        'state': true,
        'clients': []
    }

]

function countFree(hotel){
let count = 0;

for (let i = 0; i < hotel.length; i++) {
    let room = hotel[i];
    if (room.state === true) {
        count++
    }
}
return count;
}



function countNat(search){
let count = 0;
for (let i = 0; i < hotel.length; i++) {
    let client = hotel[i].clients;
    for (let j = 0; j < client.length; j++) {
        let nationality = client[j].nationality;
        if (nationality === search) {
            count++;
        }
    }
}
return count;
}

function countMinNat(nat,aged){
    let count = 0;
    for (let i = 0; i < hotel.length; i++) {
        let client = hotel[i].clients;
        for (let j = 0; j < client.length; j++) {
            let nationality = client[j].nationality;
            let age = client[j].age;
            if (nationality === nat && age <= aged) {
                count++;
            }
        }
    }
return count;
    }
    


function highestNat(hotel){
    let nat = {};
    for (let i = 0; i < hotel.length; i++) {
    let client = hotel[i].clients;
        for (let j = 0; j < client.length; j++) {
            let nationality = client[j].nationality;
            if(!nat[nationality]){
            nat[nationality] = countNat(nationality);
            }
        }
}
    let res = Object.keys(nat).reduce(function(a, b){ return nat[a] > nat[b] ? a : b });
    return res;
}

console.log('Free Rooms : ', countFree(hotel));
console.log('Number of Persons with DZ Nationalities: ', countNat('DZ'));
console.log('Number of DZ Nationalities Under Age : ', countMinNat('DZ', 12));
console.log('Most Represented Nationality : ', highestNat(hotel));