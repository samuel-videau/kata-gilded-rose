class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  update() {
    this.decrementSellIn();
    if (this.quality > 0) this.decrementQuality();
    if (this.sellIn < 0 && this.quality > 0) this.decrementQuality();
  }

  decrementQuality() {
    this.quality--;
  }

  incrementQuality() {
    this.quality++;
  }

  resetQuality() {
    this.quality = 0;
  }

  decrementSellIn() {
    this.sellIn--;
  }
}

class Brie extends Item {

  constructor(name, sellIn, quality){
    super(name, sellIn, quality);
  }

  update() {
    this.decrementSellIn();
    if (this.quality < 50) {
      this.incrementQuality();
      if (this.sellIn < 0) {
        this.incrementQuality();
      }
    }
  }
}

class Backstage extends Item{

  constructor(name, sellIn, quality){
    super(name, sellIn, quality);
  }

  update() {
    if (this.quality < 50) this.incrementQuality();
    if (this.sellIn < 11 && this.quality < 50) this.incrementQuality();
    if (this.sellIn < 6 && this.quality < 50) this.incrementQuality();
    this.decrementSellIn();
    if (this.sellIn < 0) this.resetQuality();
  }
}

class Sulfuras extends Item{

  constructor(name, sellIn, quality){
    super(name, sellIn, quality);
  }

  update() {
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  /*
  /!\ Do not change code above this line /!\
  */


  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      let item;
      switch (this.items[i].name) {
        case 'Aged Brie':
          item = new Brie(this.items[i].name, this.items[i].sellIn, this.items[i].quality)
          break;
        case 'Backstage passes to a TAFKAL80ETC concert':
          item = new Backstage(this.items[i].name, this.items[i].sellIn, this.items[i].quality)
          break;
        case 'Sulfuras, Hand of Ragnaros':
          item = new Sulfuras(this.items[i].name, this.items[i].sellIn, this.items[i].quality)
          break;
        default:
          item = new Item(this.items[i].name, this.items[i].sellIn, this.items[i].quality)
          break;
      }
      item.update();
      this.items[i] = {
        name: item.name,
        sellIn: item.sellIn,
        quality: item.quality
      }
    }

    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}
