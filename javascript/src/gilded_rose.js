class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
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
    for (var i = 0; i < this.items.length; i++) {
      switch (this.items[i].name) {
        case 'Aged Brie':
          this.updateAgedBrie(i);
          break;
        case 'Backstage passes to a TAFKAL80ETC concert':
          this.updateBackstage(i);
          break;
        case 'Sulfuras, Hand of Ragnaros':
          break;
        default:
          this.updateUnknown(i);
          break;
      }
    }

    return this.items;
  }

  updateUnknown(i) {
    this.decrementSellIn(i);
    if (this.items[i].quality > 0) {
      this.decrementQuality(i);
    }
    if (this.items[i].sellIn < 0 && this.items[i].quality > 0) {
      this.decrementQuality(i);
    }
  }

  updateBackstage(i) {
    if (this.items[i].quality < 50) {
      this.incrementQuality(i)
      if (this.items[i].sellIn < 11 && this.items[i].quality < 50) {
        this.incrementQuality(i)
      }
      if (this.items[i].sellIn < 6 && this.items[i].quality < 50) {
        this.incrementQuality(i)
      }
    }
    this.decrementSellIn(i);
    if (this.items[i].sellIn < 0) {
      this.resetQuality(i);
    }
  }

  updateAgedBrie(i) {
    this.decrementSellIn(i);
    if (this.items[i].quality < 50) {
      this.incrementQuality(i);
      if (this.items[i].sellIn < 0) {
        this.incrementQuality(i);
      }
    }
  }

  decrementQuality(i) {
    this.items[i].quality--;
  }

  incrementQuality(i) {
    this.items[i].quality++;
  }

  resetQuality(i) {
    this.items[i].quality = 0;
  }

  decrementSellIn(i) {
    this.items[i].sellIn = this.items[i].sellIn - 1;
  }
}
module.exports = {
  Item,
  Shop
}
