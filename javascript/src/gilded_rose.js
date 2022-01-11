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
          this.updateAgedBrie(this.items[i]);
          break;
        case 'Backstage passes to a TAFKAL80ETC concert':
          this.updateBackstage(this.items[i]);
          break;
        case 'Sulfuras, Hand of Ragnaros':
          break;
        default:
          this.updateUnknown(this.items[i]);
          break;
      }
    }

    return this.items;
  }

  updateUnknown(item) {
    this.decrementSellIn(item);
    if (item.quality > 0) {
      this.decrementQuality(item);
    }
    if (item.sellIn < 0 && item.quality > 0) {
      this.decrementQuality(item);
    }
  }

  updateBackstage(item) {
    if (item.quality < 50) {
      this.incrementQuality(item)
      if (item.sellIn < 11 && item.quality < 50) {
        this.incrementQuality(item)
      }
      if (item.sellIn < 6 && item.quality < 50) {
        this.incrementQuality(item)
      }
    }
    this.decrementSellIn(item);
    if (item.sellIn < 0) {
      this.resetQuality(item);
    }
  }

  updateAgedBrie(item) {
    this.decrementSellIn(item);
    if (item.quality < 50) {
      this.incrementQuality(item);
      if (item.sellIn < 0) {
        this.incrementQuality(item);
      }
    }
  }

  decrementQuality(item) {
    item.quality--;
  }

  incrementQuality(item) {
    item.quality++;
  }

  resetQuality(item) {
    item.quality = 0;
  }

  decrementSellIn(item) {
    item.sellIn--;
  }
}
module.exports = {
  Item,
  Shop
}
