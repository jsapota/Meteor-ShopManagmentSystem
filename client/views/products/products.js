Template.products.onCreated(function () {
  template = Template.instance();
  this.clothSex = new ReactiveVar("men");
  this.clothCategory = new ReactiveVar("hoodie");
  this.clothSize = new ReactiveVar("SM");
  this.clothColor = new ReactiveVar(true);
  this.colorsEmpty = new ReactiveVar(true);
  this.noItems = new ReactiveVar(false);
});

Template.products.onRendered(function() {});

Template.products.helpers({
  'setSex': (sex) => {
    Template.instance().clothSex.set(sex || "men");
  },
  'setCategory': (category) => {
    Template.instance().clothCategory.set(category || "hoodie");
  },
  'categories': () => {
    let tempTypes = Clothes.find({}, {type: 1}).map(function (c) {
      return {type: c.type}
    });
    let types = {};
    return tempTypes.filter(function (entry) {
      if (types[entry.type]) {
        return false;
      }
      types[entry.type] = true;
      return true;
    });
  },
  'areThereItems': () => {
    return Template.instance().noItems.get();
  },
  'recheckClothes': () => {
    let clothesChosen;
    if(Template.instance().colorsEmpty.get()){
      clothesChosen = Clothes.find({
        sex: Template.instance().clothSex.get(),
        type: Template.instance().clothCategory.get()
      });
    } else {
      clothesChosen = Clothes.find({
        sex: Template.instance().clothSex.get(),
        type: Template.instance().clothCategory.get(),
        colors: {$all: Template.instance().clothColor.get()}
      });
    }
    if(clothesChosen.count() === 0){
      Template.instance().noItems.set(true);
    } else {
      Template.instance().noItems.set(false);
    }
  },
  'clothesList': () => {
    let clothesChosen;
    if(Template.instance().colorsEmpty.get()){
      clothesChosen = Clothes.find({
        sex: Template.instance().clothSex.get(),
        type: Template.instance().clothCategory.get()
      });
    } else {
      clothesChosen = Clothes.find({
      sex: Template.instance().clothSex.get(),
      type: Template.instance().clothCategory.get(),
      colors: {$all: Template.instance().clothColor.get()}
      });
    }
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
    if(clothesChosen.count() === 0){
      Template.instance().noItems.set(true);
    } else {
      Template.instance().noItems.set(false);
    }
    return clothesChosen;
  },
  'clothesColor': () => {
    let tempArray = [];
    let colors = [];
    let tempColors = Clothes.find({}, {colors: 1}).map(function (c) {
      return {colors: c.colors}
    });
    tempColors.forEach((value) => {
      tempArray = tempArray.concat(value.colors)
    });
    let collectColors = (value) => {
      if (colors.indexOf(value) === -1) {colors.push(value)}
    };
    tempArray.forEach((value) => {collectColors(value)});
    return colors.map(function(c) { return {"color": c}});
  }
});

Template.products.events({
  'click .categoryButton': (event) => {
    Template.instance().clothCategory.set(event.target.value);
    FlowRouter.go('/products/' + FlowRouter.getParam("sex") + "/" + event.target.value);
  },
  'click .sizeButton': (event) => {
    Template.instance().clothSize.set(event.target.value);
    alert(event.target.value);
  },
  'click .colorButton': () => {
    let colors = [];
    let el = document.getElementsByName("colorCheckbox");
    Object.keys(el).forEach(function(key) {
      if(el[key].checked)
        colors.push(""+el[key].id);
    });
    if(colors.length === 0)
      Template.instance().colorsEmpty.set(true);
    else
      Template.instance().colorsEmpty.set(false);
    Template.instance().clothColor.set(colors);
  }
});

