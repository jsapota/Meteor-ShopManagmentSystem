Template.adminMain.onCreated( function(){
});

Template.adminMain.helpers({
    'shortDate': (date) => {
        let temp = "" + date;
        return temp.substring(0, 16);
    },

    'deliveryList': () => {
        return [{name: "Zara Poland", size: "1000", details: "some details"}, {name: "BitterSweet", size: "200", details: "some details"}, {name: "Glamour", size: "350", details: "some details"}]
    },

    'shortDate': (date) => {
        rand = _.random(0,3);
        let temp = new Date(2018, rand, rand*2-4);
        return temp.toDateString().substring(4, 16);
    }
});