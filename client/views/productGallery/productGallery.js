Template.productGallery.onCreated(function () {
    template = Template.instance();
    this.clothSex = new ReactiveVar("men");
    this.clothCategory = new ReactiveVar("hoodie");
    this.clothSize = new ReactiveVar("SM");
    this.clothColor = new ReactiveVar("white");
});


Template.productGallery.helpers({

    'categories': function () {
        let tempTypes = Clothes.find({},{ type: 1}).map(function(c) { return { type: c.type}});
        let types = {};
        let newTypes = tempTypes.filter(function(entry) {
            if (types[entry.type]) {
                return false;
            }
            types[entry.type] = true;
            return true;
        });
        return newTypes;
    },
    'clothesList': function () {
        let clothesChosen =  Clothes.find(
            {
                sex: Template.instance().clothSex.get(),
                type: Template.instance().clothCategory.get()
            }
        );
        // let sizes =  {};
        // for(i = 0; i < clothesChosen.length; i++){
        //     if(Template.instance().clothSize.get() === "XS")
        //         if(clothesChosen[i].XS.value > 0)
        //             sizes.push(clothesChosen[i]);
        //     if(Template.instance().clothSize.get() === "SM")
        //         if(clothesChosen[i].SM > 0)
        //             console.log(clothesChosen[i].SM);
        //             sizes.push(clothesChosen[i]);
        //             console.log(clothesChosen[i]);
        //     if(Template.instance().clothSize.get() === "MD")
        //         if(clothesChosen[i].MD.value > 0)
        //             sizes.push(clothesChosen[i]);
        //     if(Template.instance().clothSize.get() === "LG")
        //         if(clothesChosen[i].XL.value > 0)
        //             sizes.push(clothesChosen[i]);
        //     if(Template.instance().clothSize.get() === "XL")
        //         if(clothesChosen[i].XL.value > 0)
        //             sizes.push(clothesChosen[i]);
        //
        // }
       // console.log(sizes);
       // return sizes;
    },

    'clothesColor': function () {
        let tempColors = Clothes.find({},{ colors: 1}).map(function(c) { return { colors: c.colors}});
        console.log(tempColors);
        var colorsObj = {};
        var newColors = tempColors.filter(function(entry) {
            if (entry) {
                return false;
            }
            colorsObj[entry.colors] = true;
            return true;
        });
        // console.log(newColors);
        // return newColors;
    }
});

Template.productGallery.events({
    'click .categoryButton': function (event) {
        Template.instance().clothCategory.set(event.target.value);
    },

    'click .sizeButton': function (event) {
        Template.instance().clothSize.set(event.target.value);
        alert(event.target.value);
    },

    'click .colorButton': function (event) {
        Template.instance().clothSize.set(event.target.value);
        alert(event.target.value);
    }
});

